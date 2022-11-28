

import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://api.deutschebahn.com/reisezentren/v1",
	"http://api.deutschebahn.com/reisezentren/v1",
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
        
    
    
    
    def get_reisezentren(self, request: operations.GetReisezentrenRequest) -> operations.GetReisezentrenResponse:
        r"""Get all station infos
        Get all station infos
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/reisezentren"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetReisezentrenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TravelCenter]])
                res.travel_center_list = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 416:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_reisezentren_id_(self, request: operations.GetReisezentrenIDRequest) -> operations.GetReisezentrenIDResponse:
        r"""Get information about a specific station
        Get information about a specific station
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/reisezentren/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetReisezentrenIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def get_reisezentren_loc_lat_lon_(self, request: operations.GetReisezentrenLocLatLonRequest) -> operations.GetReisezentrenLocLatLonResponse:
        r"""Get information about a station near a location
        Get information about a station near a location
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/reisezentren/loc/{lat}/{lon}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetReisezentrenLocLatLonResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TravelCenter])
                res.travel_center = out

        return res

    
    def get_reisezentren_loc_lat_lon_dist_(self, request: operations.GetReisezentrenLocLatLonDistRequest) -> operations.GetReisezentrenLocLatLonDistResponse:
        r"""Get stations in a given radius
        Get stations in a given radius
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/reisezentren/loc/{lat}/{lon}/{dist}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetReisezentrenLocLatLonDistResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TravelCenter])
                res.travel_center = out

        return res

    