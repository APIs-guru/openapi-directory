import warnings
import requests
from typing import List,Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://admin.googleapis.com/",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
            
    

    
    def datatransfer_applications_get(self, request: operations.DatatransferApplicationsGetRequest) -> operations.DatatransferApplicationsGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/admin/datatransfer/v1/applications/{applicationId}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DatatransferApplicationsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Application])
                res.application = out

        return res

    
    def datatransfer_applications_list(self, request: operations.DatatransferApplicationsListRequest) -> operations.DatatransferApplicationsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/admin/datatransfer/v1/applications"

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DatatransferApplicationsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ApplicationsListResponse])
                res.applications_list_response = out

        return res

    
    def datatransfer_transfers_get(self, request: operations.DatatransferTransfersGetRequest) -> operations.DatatransferTransfersGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/admin/datatransfer/v1/transfers/{dataTransferId}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DatatransferTransfersGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DataTransfer])
                res.data_transfer = out

        return res

    
    def datatransfer_transfers_insert(self, request: operations.DatatransferTransfersInsertRequest) -> operations.DatatransferTransfersInsertResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/admin/datatransfer/v1/transfers"

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DatatransferTransfersInsertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DataTransfer])
                res.data_transfer = out

        return res

    
    def datatransfer_transfers_list(self, request: operations.DatatransferTransfersListRequest) -> operations.DatatransferTransfersListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/admin/datatransfer/v1/transfers"

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DatatransferTransfersListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DataTransfersListResponse])
                res.data_transfers_list_response = out

        return res

    