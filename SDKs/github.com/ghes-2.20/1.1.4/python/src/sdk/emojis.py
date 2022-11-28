import requests
from typing import Optional
from sdk.models import operations
from . import utils

class Emojis:
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

    
    def emojis_get(self) -> operations.EmojisGetResponse:
        r"""Get emojis
        Lists all the emojis available to use on GitHub Enterprise Server.
        https://docs.github.com/enterprise-server@2.20/rest/reference/emojis#get-emojis - API method documentation
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/emojis"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.EmojisGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, str]])
                res.emojis_get_200_application_json_object = out
        elif r.status_code == 304:
            pass

        return res

    