import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Proposals:
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

    
    def adexchangebuyer_proposals_get(self, request: operations.AdexchangebuyerProposalsGetRequest) -> operations.AdexchangebuyerProposalsGetResponse:
        r"""Get a proposal given its id
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/proposals/{proposalId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AdexchangebuyerProposalsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Proposal])
                res.proposal = out

        return res

    
    def adexchangebuyer_proposals_insert(self, request: operations.AdexchangebuyerProposalsInsertRequest) -> operations.AdexchangebuyerProposalsInsertResponse:
        r"""Create the given list of proposals
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/proposals/insert"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AdexchangebuyerProposalsInsertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CreateOrdersResponse])
                res.create_orders_response = out

        return res

    
    def adexchangebuyer_proposals_patch(self, request: operations.AdexchangebuyerProposalsPatchRequest) -> operations.AdexchangebuyerProposalsPatchResponse:
        r"""Update the given proposal. This method supports patch semantics.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/proposals/{proposalId}/{revisionNumber}/{updateAction}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AdexchangebuyerProposalsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Proposal])
                res.proposal = out

        return res

    
    def adexchangebuyer_proposals_search(self, request: operations.AdexchangebuyerProposalsSearchRequest) -> operations.AdexchangebuyerProposalsSearchResponse:
        r"""Search for proposals using pql query
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/proposals/search"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AdexchangebuyerProposalsSearchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetOrdersResponse])
                res.get_orders_response = out

        return res

    
    def adexchangebuyer_proposals_setupcomplete(self, request: operations.AdexchangebuyerProposalsSetupcompleteRequest) -> operations.AdexchangebuyerProposalsSetupcompleteResponse:
        r"""Update the given proposal to indicate that setup has been completed.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/proposals/{proposalId}/setupcomplete", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AdexchangebuyerProposalsSetupcompleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def adexchangebuyer_proposals_update(self, request: operations.AdexchangebuyerProposalsUpdateRequest) -> operations.AdexchangebuyerProposalsUpdateResponse:
        r"""Update the given proposal
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/proposals/{proposalId}/{revisionNumber}/{updateAction}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AdexchangebuyerProposalsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Proposal])
                res.proposal = out

        return res

    