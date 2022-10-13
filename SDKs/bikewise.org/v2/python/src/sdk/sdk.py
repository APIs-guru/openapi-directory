import warnings
import requests
from sdk.models import operations
from . import utils


SERVERS = [
	"https://bikewise.org/api",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
    
    
    def get_version_incidents_format_(self, request: operations.GetVersionIncidentsFormatRequest) -> operations.GetVersionIncidentsFormatResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v2/incidents"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVersionIncidentsFormatResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def get_version_incidents_id_format_(self, request: operations.GetVersionIncidentsIDFormatRequest) -> operations.GetVersionIncidentsIDFormatResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/incidents/{id}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVersionIncidentsIDFormatResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def get_version_locations_format_(self, request: operations.GetVersionLocationsFormatRequest) -> operations.GetVersionLocationsFormatResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v2/locations"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVersionLocationsFormatResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def get_version_locations_markers_format_(self, request: operations.GetVersionLocationsMarkersFormatRequest) -> operations.GetVersionLocationsMarkersFormatResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v2/locations/markers"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVersionLocationsMarkersFormatResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    