import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Authorization:
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

    
    def get_authorization_code_id(self, request: operations.GetAuthorizationCodeIDRequest) -> operations.GetAuthorizationCodeIDResponse:
        r"""Get Authorization Code
        Call to this API starts authorization flow using OAuth 2.0 protocol. This isn't an API call—it's a DigiLocker web page that lets the user sign in to DigiLocker and authorize your application to access user’s data. After the user decides whether or not to authorize your app, they will be redirected to the redirect link provided by your application.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/oauth2/1/authorize"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAuthorizationCodeIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.sample = out
        elif r.status_code == 400:
            pass

        return res

    
    def getaccesstoken_id(self, request: operations.GetaccesstokenIDRequest) -> operations.GetaccesstokenIDResponse:
        r"""Get Access Token
        This endpoint only applies to apps using the authorization code flow. An app calls this endpoint to acquire a bearer token once the user has authorized the app. Calls to /oauth2/1/token need to be authenticated using the app's key and secret. These can either be passed as application/x-www-form-urlencoded POST parameters (see parameters below) or via HTTP basic authentication. If basic authentication is used, the app key should be provided as the username, and the app secret should be provided as the password.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/oauth2/1/token"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetaccesstokenIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AccessResponse])
                res.access_response = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass

        return res

    