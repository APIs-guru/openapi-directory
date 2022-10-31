import warnings
import requests
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://api.calorieninjas.com",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
            
    
    def config_security(self, security: shared.Security):
        self.client = utils.configure_security_client(security)

    
    def get_v1_nutrition(self, request: operations.GetV1NutritionRequest) -> operations.GetV1NutritionResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v1/nutrition"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetV1NutritionResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    