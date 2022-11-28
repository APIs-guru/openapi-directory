import requests
from sdk.models import operations
from . import utils

class OnThisDay:
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

    
    def get_fact_onthisday_born(self, request: operations.GetFactOnthisdayBornRequest) -> operations.GetFactOnthisdayBornResponse:
        r"""Returns a random ( famous/ relatively famous ) person born on a given day and month
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/fact/onthisday/born"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFactOnthisdayBornResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def get_fact_onthisday_died(self, request: operations.GetFactOnthisdayDiedRequest) -> operations.GetFactOnthisdayDiedResponse:
        r"""Returns a random ( famous/ relatively famous ) person died on a given day and month
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/fact/onthisday/died"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFactOnthisdayDiedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def get_fact_onthisday_event(self, request: operations.GetFactOnthisdayEventRequest) -> operations.GetFactOnthisdayEventResponse:
        r"""Returns a random ( famous/ relatively famous ) historic event on a given day and month
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/fact/onthisday/event"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFactOnthisdayEventResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    