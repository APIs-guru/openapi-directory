import requests
from typing import Any,List,Optional
from sdk.models import operations
from . import utils

class V1System:
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

    
    def health_check(self, request: operations.HealthCheckRequest) -> operations.HealthCheckResponse:
        r"""Returns the health information for the official business registers based on usage.
        Returns the health information for the official business registers based on usage.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v1/system/health"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.HealthCheckResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.health_check_200_application_json_anies = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.health_check_default_application_json_any = out

        return res

    
    def system_countries(self, request: operations.SystemCountriesRequest) -> operations.SystemCountriesResponse:
        r"""Returns a list of countries
        Retrieve the list of all currently enabled countries
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v1/system/countries"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SystemCountriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.system_countries_200_application_json_anies = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.system_countries_default_application_json_any = out

        return res

    
    def system_pricelist(self, request: operations.SystemPricelistRequest) -> operations.SystemPricelistResponse:
        r"""Returns a list of products with prices
        Retrieve pricing rules for your subscription plan
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v1/system/pricelist"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SystemPricelistResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.system_pricelist_200_application_json_anies = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.system_pricelist_default_application_json_any = out

        return res

    