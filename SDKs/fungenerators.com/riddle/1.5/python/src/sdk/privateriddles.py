import requests
from sdk.models import operations
from . import utils

class PrivateRiddles:
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

    
    def delete_riddle(self, request: operations.DeleteRiddleRequest) -> operations.DeleteRiddleResponse:
        r"""Create a random Riddle entry.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/riddle"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteRiddleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def get_riddle(self, request: operations.GetRiddleRequest) -> operations.GetRiddleResponse:
        r"""Get a Riddle entry for a given id. Retrieves a riddle question and answer based on the id.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/riddle"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRiddleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def post_riddle(self, request: operations.PostRiddleRequest) -> operations.PostRiddleResponse:
        r"""Create a random Riddle entry. Same as 'PUT' but can be used when some of the client libraries don't support 'PUT'.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/riddle"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRiddleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def put_riddle(self, request: operations.PutRiddleRequest) -> operations.PutRiddleResponse:
        r"""Create a random Riddle entry.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/riddle"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PutRiddleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    