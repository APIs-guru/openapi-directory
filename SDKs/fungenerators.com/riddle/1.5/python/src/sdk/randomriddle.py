import requests
from sdk.models import operations
from . import utils

class RandomRiddle:
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

    
    def get_riddle_random(self, request: operations.GetRiddleRandomRequest) -> operations.GetRiddleRandomResponse:
        r"""Get a random riddle for a given category(optional)
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/riddle/random"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRiddleRandomResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def get_riddle_search(self, request: operations.GetRiddleSearchRequest) -> operations.GetRiddleSearchResponse:
        r"""Search for random riddle which has the text in the query, for a given category(optional).
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/riddle/search"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRiddleSearchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    