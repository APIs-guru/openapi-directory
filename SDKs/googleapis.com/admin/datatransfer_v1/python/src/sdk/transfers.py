import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Transfers:
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

    
    def datatransfer_transfers_get(self, request: operations.DatatransferTransfersGetRequest) -> operations.DatatransferTransfersGetResponse:
        r"""Retrieves a data transfer request by its resource ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/admin/datatransfer/v1/transfers/{dataTransferId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DatatransferTransfersGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DataTransfer])
                res.data_transfer = out

        return res

    
    def datatransfer_transfers_insert(self, request: operations.DatatransferTransfersInsertRequest) -> operations.DatatransferTransfersInsertResponse:
        r"""Inserts a data transfer request. See the [Transfer parameters](/admin-sdk/data-transfer/v1/parameters) reference for specific application requirements.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/admin/datatransfer/v1/transfers"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DatatransferTransfersInsertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DataTransfer])
                res.data_transfer = out

        return res

    
    def datatransfer_transfers_list(self, request: operations.DatatransferTransfersListRequest) -> operations.DatatransferTransfersListResponse:
        r"""Lists the transfers for a customer by source user, destination user, or status.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/admin/datatransfer/v1/transfers"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DatatransferTransfersListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DataTransfersListResponse])
                res.data_transfers_list_response = out

        return res

    