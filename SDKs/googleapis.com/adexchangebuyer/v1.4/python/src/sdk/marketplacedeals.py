import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Marketplacedeals:
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

    
    def adexchangebuyer_marketplacedeals_delete(self, request: operations.AdexchangebuyerMarketplacedealsDeleteRequest) -> operations.AdexchangebuyerMarketplacedealsDeleteResponse:
        r"""Delete the specified deals from the proposal
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/proposals/{proposalId}/deals/delete", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AdexchangebuyerMarketplacedealsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeleteOrderDealsResponse])
                res.delete_order_deals_response = out

        return res

    
    def adexchangebuyer_marketplacedeals_insert(self, request: operations.AdexchangebuyerMarketplacedealsInsertRequest) -> operations.AdexchangebuyerMarketplacedealsInsertResponse:
        r"""Add new deals for the specified proposal
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/proposals/{proposalId}/deals/insert", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AdexchangebuyerMarketplacedealsInsertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AddOrderDealsResponse])
                res.add_order_deals_response = out

        return res

    
    def adexchangebuyer_marketplacedeals_list(self, request: operations.AdexchangebuyerMarketplacedealsListRequest) -> operations.AdexchangebuyerMarketplacedealsListResponse:
        r"""List all the deals for a given proposal
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/proposals/{proposalId}/deals", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AdexchangebuyerMarketplacedealsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetOrderDealsResponse])
                res.get_order_deals_response = out

        return res

    
    def adexchangebuyer_marketplacedeals_update(self, request: operations.AdexchangebuyerMarketplacedealsUpdateRequest) -> operations.AdexchangebuyerMarketplacedealsUpdateResponse:
        r"""Replaces all the deals in the proposal with the passed in deals
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/proposals/{proposalId}/deals/update", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AdexchangebuyerMarketplacedealsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EditAllOrderDealsResponse])
                res.edit_all_order_deals_response = out

        return res

    