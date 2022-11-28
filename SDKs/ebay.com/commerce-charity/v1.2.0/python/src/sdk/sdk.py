

import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://api.ebay.com{basePath}",
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
        
    
    
    
    def get_charity_org(self, request: operations.GetCharityOrgRequest) -> operations.GetCharityOrgResponse:
        r"""This call is used to retrieve detailed information about supported charitable organizations. It allows users to retrieve the details for a specific charitable organization using its charity organization ID. The call returns the full details for the charitable organization that matches the specified ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/charity_org/{charity_org_id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCharityOrgResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CharityOrg])
                res.charity_org = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_charity_org_by_legacy_id(self, request: operations.GetCharityOrgByLegacyIDRequest) -> operations.GetCharityOrgByLegacyIDResponse:
        r"""This call allows users to retrieve the details for a specific charitable organization using its legacy charity ID, which has also been referred to as the charity number, external ID, and PayPal Giving Fund ID. The legacy charity ID&nbsp;is separate from eBay&rsquo;s generic charity ID.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/charity_org/get_charity_org_by_legacy_id"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCharityOrgByLegacyIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CharityOrg])
                res.charity_org = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_charity_orgs(self, request: operations.GetCharityOrgsRequest) -> operations.GetCharityOrgsResponse:
        r"""This call is used to search for supported charitable organizations. It allows users to search for a specific charitable organization, or for multiple charitable organizations, from a particular charitable domain and/or geographical region, or by using search criteria. The call returns paginated search results containing the charitable organizations that match the specified criteria.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/charity_org"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCharityOrgsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CharitySearchResponse])
                res.charity_search_response = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 500:
            pass

        return res

    