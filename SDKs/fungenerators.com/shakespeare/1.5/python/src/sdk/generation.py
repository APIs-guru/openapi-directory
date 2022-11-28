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

    
    def get_shakespeare_generate_insult(self, request: operations.GetShakespeareGenerateInsultRequest) -> operations.GetShakespeareGenerateInsultResponse:
        r"""Generate random Shakespeare style insults.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/shakespeare/generate/insult"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetShakespeareGenerateInsultResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def get_shakespeare_generate_lorem_ipsum(self, request: operations.GetShakespeareGenerateLoremIpsumRequest) -> operations.GetShakespeareGenerateLoremIpsumResponse:
        r"""Generate Shakespeare lorem ipsum.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/shakespeare/generate/lorem-ipsum"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetShakespeareGenerateLoremIpsumResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def get_shakespeare_generate_name(self, request: operations.GetShakespeareGenerateNameRequest) -> operations.GetShakespeareGenerateNameResponse:
        r"""Generate random Shakespearen names.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/shakespeare/generate/name"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetShakespeareGenerateNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    