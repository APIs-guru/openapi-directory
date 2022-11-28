

import requests
from sdk.models import operations
from . import utils




SERVERS = [
	"https://api.departureboard.io/api/v2.0",
]


class SDK:
    

    _client: requests.Session
    _security_client: requests.Session
    
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
        
    
    
    
    def get_arrivals_and_departures_by_crs(self, request: operations.GetArrivalsAndDeparturesByCrsRequest) -> operations.GetArrivalsAndDeparturesByCrsResponse:
        r"""getArrivalsAndDeparturesByCRS is used to get a list of services arriving to and departing from a UK train station by the CRS (Computer Reservation System) code. This will typically return a list of train services, but will also return any replacement bus or ferry services that are in place.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/getArrivalsAndDeparturesByCRS/{CRS}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetArrivalsAndDeparturesByCrsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 429:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_arrivals_by_crs(self, request: operations.GetArrivalsByCrsRequest) -> operations.GetArrivalsByCrsResponse:
        r"""getArrivalsByCRS is used to get a list of services arriving to a UK train station by the CRS (Computer Reservation System) code. This will typically return a list of train services, but will also return any replacement bus or ferry services that are in place.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/getArrivalsByCRS/{CRS}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetArrivalsByCrsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 429:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_departures_by_crs(self, request: operations.GetDeparturesByCrsRequest) -> operations.GetDeparturesByCrsResponse:
        r"""getDeparturesByCRS is used to get a list of services departing from a UK train station by the CRS (Computer Reservation System) code. This will typically return a list of train services, but will also return any replacement bus or ferry services that are in place.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/getDeparturesByCRS/{CRS}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeparturesByCrsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 429:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_fastest_departures_by_crs(self, request: operations.GetFastestDeparturesByCrsRequest) -> operations.GetFastestDeparturesByCrsResponse:
        r"""getFastestDeparturesByCRS is used to get the fastest next service running between two stations. Multiple destinations can be specified. This will typically return a single train service, but will also return a replacement bus or ferry service if in place.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/getFastestDeparturesByCRS/{CRS}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFastestDeparturesByCrsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 429:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_next_departures_by_crs(self, request: operations.GetNextDeparturesByCrsRequest) -> operations.GetNextDeparturesByCrsResponse:
        r"""getNextDeparturesByCRS is used to get the next service running between two stations. Multiple destinations can be specified. This will typically return a single train service, but will also return a replacement bus or ferry service if in place. This will return the next departures for each of the filterList stations specified. It may not return the fastest next service. To get the fastest next service use the getFastestDeparturesByCRS endpoint.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/getNextDeparturesByCRS/{CRS}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNextDeparturesByCrsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 429:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_service_details_by_id(self, request: operations.GetServiceDetailsByIDRequest) -> operations.GetServiceDetailsByIDResponse:
        r"""getServiceDetailsByID is used to get information on a service, by the Service ID. This will typically return a train service, but will also return a bus and ferry services. The Service ID must be provided in the serviceIDUrlSafe format that is provided in the response for Arrival and Departure Boards. A service ID is specific to a station, and can only be looked up for a short time after a train/bus/ferry arrives at, or departs from a station. This is a National Rail limitation.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/getServiceDetailsByID/{serviceID}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetServiceDetailsByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 429:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    