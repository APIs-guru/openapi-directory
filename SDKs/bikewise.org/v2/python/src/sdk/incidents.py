import requests
from sdk.models import operations
from . import utils

class Incidents:
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

    
    def get_version_incidents_format_(self, request: operations.GetVersionIncidentsFormatRequest) -> operations.GetVersionIncidentsFormatResponse:
        r"""Paginated incidents matching parameters
        
        <p>If you’d like more detailed information about bike incidents, use this endpoint. For mapping, <code>locations</code> is probably a better bet.</p>
        
        <p><strong>Notes on location searching</strong>: <br />
        - <code>proximity</code> accepts an ip address, an address, zipcode, city, or latitude,longitude - i.e. <code>70.210.133.87</code>, <code>210 NW 11th Ave, Portland, OR</code>, <code>60647</code>, <code>Chicago, IL</code>, and <code>45.521728,-122.67326</code> are all acceptable<br />
        - <code>proximity_square</code> sets the length of the sides of the square to find matches inside of. The square is centered on the location specified by <code>proximity</code>. It defaults to 100.</p>
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/incidents"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVersionIncidentsFormatResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_version_incidents_id_format_(self, request: operations.GetVersionIncidentsIDFormatRequest) -> operations.GetVersionIncidentsIDFormatResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/incidents/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVersionIncidentsIDFormatResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    