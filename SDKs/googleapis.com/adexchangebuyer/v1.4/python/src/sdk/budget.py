import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Budget:
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

    
    def adexchangebuyer_budget_get(self, request: operations.AdexchangebuyerBudgetGetRequest) -> operations.AdexchangebuyerBudgetGetResponse:
        r"""Returns the budget information for the adgroup specified by the accountId and billingId.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/billinginfo/{accountId}/{billingId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AdexchangebuyerBudgetGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Budget])
                res.budget = out

        return res

    
    def adexchangebuyer_budget_patch(self, request: operations.AdexchangebuyerBudgetPatchRequest) -> operations.AdexchangebuyerBudgetPatchResponse:
        r"""Updates the budget amount for the budget of the adgroup specified by the accountId and billingId, with the budget amount in the request. This method supports patch semantics.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/billinginfo/{accountId}/{billingId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AdexchangebuyerBudgetPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Budget])
                res.budget = out

        return res

    
    def adexchangebuyer_budget_update(self, request: operations.AdexchangebuyerBudgetUpdateRequest) -> operations.AdexchangebuyerBudgetUpdateResponse:
        r"""Updates the budget amount for the budget of the adgroup specified by the accountId and billingId, with the budget amount in the request.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/billinginfo/{accountId}/{billingId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AdexchangebuyerBudgetUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Budget])
                res.budget = out

        return res

    