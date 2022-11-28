

import requests
from typing import Optional
from sdk.models import operations
from . import utils




SERVERS = [
	"https://amentum.space/wmm",
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
        
    
    
    
    def app_api_wmm_endpoints_wmm_magnetic_field(self, request: operations.AppAPIWmmEndpointsWmmMagneticFieldRequest) -> operations.AppAPIWmmEndpointsWmmMagneticFieldResponse:
        r"""Calculate magnetic declination, inclination, total field intensity, and grid variation
        
        at specified conditions.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/magnetic_field"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AppAPIWmmEndpointsWmmMagneticFieldResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.AppAPIWmmEndpointsWmmMagneticField200ApplicationJSON])
                res.app_api_wmm_endpoints_wmm_magnetic_field_200_application_json_object = out

        return res

    