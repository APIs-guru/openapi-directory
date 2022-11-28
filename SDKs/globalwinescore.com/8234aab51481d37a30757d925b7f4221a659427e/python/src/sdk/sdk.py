

import requests
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://api.globalwinescore.com",
]


class SDK:
    

    _client: requests.Session
    _security_client: requests.Session
    _security: shared.Security
    _server_url: str = SERVERS[0]
    _language: str = "python"
    _sdk_version: str = "0.0.1"
    _gen_version: str = "internal"

    def __init__(self) -> None:
        self._client = requests.Session()
        self._security_client = requests.Session()
        


    def config_server_url(self, server_url: str, params: dict[str, str]):
        if params is not None:
            self._server_url = utils.replace_parameters(server_url, params)
        else:
            self._server_url = server_url

        
    

    def config_client(self, client: requests.Session):
        self._client = client
        
        if self._security is not None:
            self._security_client = utils.configure_security_client(self._client, self._security)
        
    

    def config_security(self, security: shared.Security):
        self._security = security
        self._security_client = utils.configure_security_client(self._client, security)
        
    
    
    
    def get_globalwinescores_latest_(self, request: operations.GetGlobalwinescoresLatestRequest) -> operations.GetGlobalwinescoresLatestResponse:
        r"""List all latest GWS
        Returns the latest GWS available per wine/vintage.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/globalwinescores/latest/"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGlobalwinescoresLatestResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def list_historical_gws(self, request: operations.ListHistoricalGwsRequest) -> operations.ListHistoricalGwsResponse:
        r"""List all historical GWS
        Returns all available GWS
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/globalwinescores/"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ListHistoricalGwsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    