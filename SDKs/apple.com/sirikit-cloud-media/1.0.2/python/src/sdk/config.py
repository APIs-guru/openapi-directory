import requests
from sdk.models import operations
from . import utils

class Config:
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

    
    def extension_configuration(self, request: operations.ExtensionConfigurationRequest) -> operations.ExtensionConfigurationResponse:
        r"""Configuration Resource
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/configuration"
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtensionConfigurationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose"):
                res.body = r.content
        elif r.status_code == 304:
            res.headers = r.headers
            

        return res

    