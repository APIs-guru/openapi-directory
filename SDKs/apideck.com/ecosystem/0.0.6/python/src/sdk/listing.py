import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Listing:
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

    
    def listings_all(self, request: operations.ListingsAllRequest) -> operations.ListingsAllResponse:
        r"""List listings
        List listings
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ecosystems/{ecosystem_id}/listings", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListingsAllResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetListingsResponse])
                res.get_listings_response = out

        return res

    
    def listings_one(self, request: operations.ListingsOneRequest) -> operations.ListingsOneResponse:
        r"""Get listing
        Get listing
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ecosystems/{ecosystem_id}/listings/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ListingsOneResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetListingResponse])
                res.get_listing_response = out

        return res

    