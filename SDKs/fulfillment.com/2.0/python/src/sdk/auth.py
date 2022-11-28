import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Auth:
    _client: requests.Session
    _security_client: requests.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests.Session, security_client: requests.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version

    
    def post_oauth_access_token(self, request: operations.PostOauthAccessTokenRequest) -> operations.PostOauthAccessTokenResponse:
        r"""Generate an Access Token
        By default tokens are valid for 7 days while refresh tokens are valid for 30 days. If your `grant_type` is \"password\" include the `username` and `password`, if however your `grant_type` is \"refresh_token\" the username/password are not required, instead set the `refresh_token`
        #section/Getting-Started/Perpetuating-Access - More Information on Refresh Tokens
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/oauth/access_token"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostOauthAccessTokenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostOauthAccessTokenAccessTokenResponseV2])
                res.access_token_response_v2 = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OneordersGetResponses404ContentApplication1jsonSchema])
                res.oneorders_get_responses_404_content_application_1json_schema = out

        return res

    