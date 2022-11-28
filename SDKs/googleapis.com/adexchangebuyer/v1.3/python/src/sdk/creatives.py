import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Creatives:
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

    
    def adexchangebuyer_creatives_get(self, request: operations.AdexchangebuyerCreativesGetRequest) -> operations.AdexchangebuyerCreativesGetResponse:
        r"""Gets the status for a single creative. A creative will be available 30-40 minutes after submission.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/creatives/{accountId}/{buyerCreativeId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AdexchangebuyerCreativesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Creative])
                res.creative = out

        return res

    
    def adexchangebuyer_creatives_insert(self, request: operations.AdexchangebuyerCreativesInsertRequest) -> operations.AdexchangebuyerCreativesInsertResponse:
        r"""Submit a new creative.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/creatives"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AdexchangebuyerCreativesInsertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Creative])
                res.creative = out

        return res

    
    def adexchangebuyer_creatives_list(self, request: operations.AdexchangebuyerCreativesListRequest) -> operations.AdexchangebuyerCreativesListResponse:
        r"""Retrieves a list of the authenticated user's active creatives. A creative will be available 30-40 minutes after submission.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/creatives"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AdexchangebuyerCreativesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CreativesList])
                res.creatives_list = out

        return res

    