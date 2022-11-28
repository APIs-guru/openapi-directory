import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class DirectDeals:
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

    
    def adexchangebuyer_direct_deals_get(self, request: operations.AdexchangebuyerDirectDealsGetRequest) -> operations.AdexchangebuyerDirectDealsGetResponse:
        r"""Gets one direct deal by ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/directdeals/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AdexchangebuyerDirectDealsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DirectDeal])
                res.direct_deal = out

        return res

    
    def adexchangebuyer_direct_deals_list(self, request: operations.AdexchangebuyerDirectDealsListRequest) -> operations.AdexchangebuyerDirectDealsListResponse:
        r"""Retrieves the authenticated user's list of direct deals.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/directdeals"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AdexchangebuyerDirectDealsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DirectDealsList])
                res.direct_deals_list = out

        return res

    