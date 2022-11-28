import requests
from typing import Optional
from sdk.models import operations
from . import utils

class Users:
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

    
    def get_users_me(self, request: operations.GetUsersMeRequest) -> operations.GetUsersMeResponse:
        r"""About Me
        Returns the user profile of the access token's owner. This could be useful if managing multiple accounts or confirming validity of a token.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/users/me"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUsersMeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetUsersMeUserContactV2])
                res.user_contact_v2 = out

        return res

    