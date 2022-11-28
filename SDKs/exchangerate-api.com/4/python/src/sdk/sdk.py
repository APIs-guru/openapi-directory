
__doc__ = """ SDK Documentation: https://www.exchangerate-api.com/docs/documentation - API Documentation"""
import requests
from typing import Optional
from sdk.models import operations
from . import utils




SERVERS = [
	"https://api.exchangerate-api.com/v4",
]


class SDK:
    r"""SDK Documentation: https://www.exchangerate-api.com/docs/documentation - API Documentation"""

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
        
    
    
    
    def get_latest_base_currency_(self, request: operations.GetLatestBaseCurrencyRequest) -> operations.GetLatestBaseCurrencyResponse:
        r"""Returns latest exchange rates in parameter-supplied base currency.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/latest/{base_currency}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLatestBaseCurrencyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetLatestBaseCurrency200ApplicationJSON])
                res.get_latest_base_currency_200_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetLatestBaseCurrency404ApplicationJSON])
                res.get_latest_base_currency_404_application_json_object = out

        return res

    