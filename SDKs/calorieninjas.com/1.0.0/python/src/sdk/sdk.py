
__doc__ = """ SDK Documentation: www.calorieninjas.com/api - See www.calorieninjas.com/api."""
import requests
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://api.calorieninjas.com",
]


class SDK:
    r"""SDK Documentation: www.calorieninjas.com/api - See www.calorieninjas.com/api."""

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
        
    
    
    
    def get_v1_nutrition(self, request: operations.GetV1NutritionRequest) -> operations.GetV1NutritionResponse:
        r"""Get nutrition text for an input string containing food and beverage words.
        Returns a list of food item nutrition facts extracted from an input string containing food and beverage words. 
        www.calorieninjas.com/api
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/nutrition"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetV1NutritionResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    