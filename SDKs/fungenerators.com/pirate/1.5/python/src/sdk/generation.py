import requests
from sdk.models import operations
from . import utils

class Generation:
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

    
    def get_pirate_generate_insult(self, request: operations.GetPirateGenerateInsultRequest) -> operations.GetPirateGenerateInsultResponse:
        r"""Generate random pirate insults.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/pirate/generate/insult"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPirateGenerateInsultResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def get_pirate_generate_lorem_ipsum(self, request: operations.GetPirateGenerateLoremIpsumRequest) -> operations.GetPirateGenerateLoremIpsumResponse:
        r"""Generate pirate lorem ipsum.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/pirate/generate/lorem-ipsum"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPirateGenerateLoremIpsumResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def get_pirate_generate_name(self, request: operations.GetPirateGenerateNameRequest) -> operations.GetPirateGenerateNameResponse:
        r"""Generate random pirate names.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/pirate/generate/name"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPirateGenerateNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    