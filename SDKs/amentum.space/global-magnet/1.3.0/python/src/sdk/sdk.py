import warnings
import requests
from typing import Optional
from sdk.models import operations
from . import utils


SERVERS = [
	"https://amentum.space/wmm",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
    
    
    def app_api_wmm_endpoints_wmm_magnetic_field(self, request: operations.AppAPIWmmEndpointsWmmMagneticFieldRequest) -> operations.AppAPIWmmEndpointsWmmMagneticFieldResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/magnetic_field"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AppAPIWmmEndpointsWmmMagneticFieldResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.AppAPIWmmEndpointsWmmMagneticField200ApplicationJSON])
                res.app_api_wmm_endpoints_wmm_magnetic_field_200_application_json_object = out

        return res

    