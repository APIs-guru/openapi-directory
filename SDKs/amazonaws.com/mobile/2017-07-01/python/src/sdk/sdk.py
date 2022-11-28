
__doc__ = """ SDK Documentation: https://docs.aws.amazon.com/mobile/ - Amazon Web Services documentation"""
import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"http://mobile.{region}.amazonaws.com",
	"https://mobile.{region}.amazonaws.com",
	"http://mobile.{region}.amazonaws.com.cn",
	"https://mobile.{region}.amazonaws.com.cn",
]


class SDK:
    r"""SDK Documentation: https://docs.aws.amazon.com/mobile/ - Amazon Web Services documentation"""

    _client: requests.Session
    _security_client: requests.Session
    _security: shared.Security
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
        
        if self._security is not None:
            self._security_client = utils.configure_security_client(self._client, self._security)
        
    

    def config_security(self, security: shared.Security):
        self._security = security
        self._security_client = utils.configure_security_client(self._client, security)
        
    
    
    
    def create_project(self, request: operations.CreateProjectRequest) -> operations.CreateProjectResponse:
        r""" Creates an AWS Mobile Hub project. 
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/projects"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateProjectResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CreateProjectResult])
                res.create_project_result = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InternalFailureException])
                res.internal_failure_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceUnavailableException])
                res.service_unavailable_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UnauthorizedException])
                res.unauthorized_exception = out
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TooManyRequestsException])
                res.too_many_requests_exception = out
        elif r.status_code == 484:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BadRequestException])
                res.bad_request_exception = out
        elif r.status_code == 485:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotFoundException])
                res.not_found_exception = out
        elif r.status_code == 486:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LimitExceededException])
                res.limit_exceeded_exception = out

        return res

    
    def delete_project(self, request: operations.DeleteProjectRequest) -> operations.DeleteProjectResponse:
        r""" Delets a project in AWS Mobile Hub. 
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/projects/{projectId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._security_client
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteProjectResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeleteProjectResult])
                res.delete_project_result = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InternalFailureException])
                res.internal_failure_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceUnavailableException])
                res.service_unavailable_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UnauthorizedException])
                res.unauthorized_exception = out
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TooManyRequestsException])
                res.too_many_requests_exception = out
        elif r.status_code == 484:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotFoundException])
                res.not_found_exception = out

        return res

    
    def describe_bundle(self, request: operations.DescribeBundleRequest) -> operations.DescribeBundleResponse:
        r""" Get the bundle details for the requested bundle id. 
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/bundles/{bundleId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._security_client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DescribeBundleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DescribeBundleResult])
                res.describe_bundle_result = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InternalFailureException])
                res.internal_failure_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceUnavailableException])
                res.service_unavailable_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UnauthorizedException])
                res.unauthorized_exception = out
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TooManyRequestsException])
                res.too_many_requests_exception = out
        elif r.status_code == 484:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BadRequestException])
                res.bad_request_exception = out
        elif r.status_code == 485:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotFoundException])
                res.not_found_exception = out

        return res

    
    def describe_project(self, request: operations.DescribeProjectRequest) -> operations.DescribeProjectResponse:
        r""" Gets details about a project in AWS Mobile Hub. 
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/project#projectId"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DescribeProjectResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DescribeProjectResult])
                res.describe_project_result = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InternalFailureException])
                res.internal_failure_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceUnavailableException])
                res.service_unavailable_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UnauthorizedException])
                res.unauthorized_exception = out
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TooManyRequestsException])
                res.too_many_requests_exception = out
        elif r.status_code == 484:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BadRequestException])
                res.bad_request_exception = out
        elif r.status_code == 485:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotFoundException])
                res.not_found_exception = out

        return res

    
    def export_bundle(self, request: operations.ExportBundleRequest) -> operations.ExportBundleResponse:
        r""" Generates customized software development kit (SDK) and or tool packages used to integrate mobile web or mobile app clients with backend AWS resources. 
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/bundles/{bundleId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ExportBundleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ExportBundleResult])
                res.export_bundle_result = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InternalFailureException])
                res.internal_failure_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceUnavailableException])
                res.service_unavailable_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UnauthorizedException])
                res.unauthorized_exception = out
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TooManyRequestsException])
                res.too_many_requests_exception = out
        elif r.status_code == 484:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BadRequestException])
                res.bad_request_exception = out
        elif r.status_code == 485:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotFoundException])
                res.not_found_exception = out

        return res

    
    def export_project(self, request: operations.ExportProjectRequest) -> operations.ExportProjectResponse:
        r""" Exports project configuration to a snapshot which can be downloaded and shared. Note that mobile app push credentials are encrypted in exported projects, so they can only be shared successfully within the same AWS account. 
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/exports/{projectId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._security_client
        
        r = client.request("POST", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ExportProjectResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ExportProjectResult])
                res.export_project_result = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InternalFailureException])
                res.internal_failure_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceUnavailableException])
                res.service_unavailable_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UnauthorizedException])
                res.unauthorized_exception = out
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TooManyRequestsException])
                res.too_many_requests_exception = out
        elif r.status_code == 484:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BadRequestException])
                res.bad_request_exception = out
        elif r.status_code == 485:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotFoundException])
                res.not_found_exception = out

        return res

    
    def list_bundles(self, request: operations.ListBundlesRequest) -> operations.ListBundlesResponse:
        r""" List all available bundles. 
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/bundles"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ListBundlesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListBundlesResult])
                res.list_bundles_result = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InternalFailureException])
                res.internal_failure_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceUnavailableException])
                res.service_unavailable_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UnauthorizedException])
                res.unauthorized_exception = out
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TooManyRequestsException])
                res.too_many_requests_exception = out
        elif r.status_code == 484:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BadRequestException])
                res.bad_request_exception = out

        return res

    
    def list_projects(self, request: operations.ListProjectsRequest) -> operations.ListProjectsResponse:
        r""" Lists projects in AWS Mobile Hub. 
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/projects"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ListProjectsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListProjectsResult])
                res.list_projects_result = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InternalFailureException])
                res.internal_failure_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceUnavailableException])
                res.service_unavailable_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UnauthorizedException])
                res.unauthorized_exception = out
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TooManyRequestsException])
                res.too_many_requests_exception = out
        elif r.status_code == 484:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BadRequestException])
                res.bad_request_exception = out

        return res

    
    def update_project(self, request: operations.UpdateProjectRequest) -> operations.UpdateProjectResponse:
        r""" Update an existing project. 
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/update#projectId"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateProjectResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UpdateProjectResult])
                res.update_project_result = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InternalFailureException])
                res.internal_failure_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceUnavailableException])
                res.service_unavailable_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UnauthorizedException])
                res.unauthorized_exception = out
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TooManyRequestsException])
                res.too_many_requests_exception = out
        elif r.status_code == 484:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BadRequestException])
                res.bad_request_exception = out
        elif r.status_code == 485:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotFoundException])
                res.not_found_exception = out
        elif r.status_code == 486:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AccountActionRequiredException])
                res.account_action_required_exception = out
        elif r.status_code == 487:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LimitExceededException])
                res.limit_exceeded_exception = out

        return res

    