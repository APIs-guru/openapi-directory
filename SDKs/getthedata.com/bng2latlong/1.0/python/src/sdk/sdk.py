
__doc__ = """ SDK Documentation: https://www.getthedata.com/bng2latlong - Full documentation"""
import requests
from typing import Optional
from sdk.models import operations
from . import utils




SERVERS = [
	"https://api.getthedata.com",
]


class SDK:
    r"""SDK Documentation: https://www.getthedata.com/bng2latlong - Full documentation"""

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
        
    
    
    
    def get_bng2latlong_easting_northing_(self, request: operations.GetBng2latlongEastingNorthingRequest) -> operations.GetBng2latlongEastingNorthingResponse:
        r"""Returns latitude and longitude for the given easting and northing.
        Takes an OSGB36 easting and northing (British National Grid) and returns the geographically equivalent WGS84 latitude and longitude.
        #### A successful request returns the following fields:
        * status - this will be `ok`
        * easting - the easting provided in the request
        * northing - the northing provided in the request
        * latitude - the latitude of the converted coordinates
        * longitude - the longitude of the converted coordinates
        #### An unsuccessful request returns the following fields:
        * status - this will be `error`
        * error - an error message
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/bng2latlong/{easting}/{northing}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBng2latlongEastingNorthingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetBng2latlongEastingNorthing200ApplicationJSON])
                res.get_bng2latlong_easting_northing_200_application_json_object = out

        return res

    