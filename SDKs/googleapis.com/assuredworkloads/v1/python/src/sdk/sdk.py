import warnings
import requests
from typing import Any,List,Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://assuredworkloads.googleapis.com/",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
            
    

    
    def assuredworkloads_organizations_locations_operations_list(self, request: operations.AssuredworkloadsOrganizationsLocationsOperationsListRequest) -> operations.AssuredworkloadsOrganizationsLocationsOperationsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{name}/operations", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AssuredworkloadsOrganizationsLocationsOperationsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningListOperationsResponse])
                res.google_longrunning_list_operations_response = out

        return res

    
    def assuredworkloads_organizations_locations_workloads_create(self, request: operations.AssuredworkloadsOrganizationsLocationsWorkloadsCreateRequest) -> operations.AssuredworkloadsOrganizationsLocationsWorkloadsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/workloads", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AssuredworkloadsOrganizationsLocationsWorkloadsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def assuredworkloads_organizations_locations_workloads_delete(self, request: operations.AssuredworkloadsOrganizationsLocationsWorkloadsDeleteRequest) -> operations.AssuredworkloadsOrganizationsLocationsWorkloadsDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AssuredworkloadsOrganizationsLocationsWorkloadsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_protobuf_empty = out

        return res

    
    def assuredworkloads_organizations_locations_workloads_list(self, request: operations.AssuredworkloadsOrganizationsLocationsWorkloadsListRequest) -> operations.AssuredworkloadsOrganizationsLocationsWorkloadsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/workloads", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AssuredworkloadsOrganizationsLocationsWorkloadsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudAssuredworkloadsV1ListWorkloadsResponse])
                res.google_cloud_assuredworkloads_v1_list_workloads_response = out

        return res

    
    def assuredworkloads_organizations_locations_workloads_patch(self, request: operations.AssuredworkloadsOrganizationsLocationsWorkloadsPatchRequest) -> operations.AssuredworkloadsOrganizationsLocationsWorkloadsPatchResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AssuredworkloadsOrganizationsLocationsWorkloadsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudAssuredworkloadsV1Workload])
                res.google_cloud_assuredworkloads_v1_workload = out

        return res

    
    def assuredworkloads_organizations_locations_workloads_restrict_allowed_resources(self, request: operations.AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResourcesRequest) -> operations.AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResourcesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{name}:restrictAllowedResources", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResourcesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_cloud_assuredworkloads_v1_restrict_allowed_resources_response = out

        return res

    
    def assuredworkloads_organizations_locations_workloads_violations_acknowledge(self, request: operations.AssuredworkloadsOrganizationsLocationsWorkloadsViolationsAcknowledgeRequest) -> operations.AssuredworkloadsOrganizationsLocationsWorkloadsViolationsAcknowledgeResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{name}:acknowledge", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AssuredworkloadsOrganizationsLocationsWorkloadsViolationsAcknowledgeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_cloud_assuredworkloads_v1_acknowledge_violation_response = out

        return res

    
    def assuredworkloads_organizations_locations_workloads_violations_get(self, request: operations.AssuredworkloadsOrganizationsLocationsWorkloadsViolationsGetRequest) -> operations.AssuredworkloadsOrganizationsLocationsWorkloadsViolationsGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AssuredworkloadsOrganizationsLocationsWorkloadsViolationsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudAssuredworkloadsV1Violation])
                res.google_cloud_assuredworkloads_v1_violation = out

        return res

    
    def assuredworkloads_organizations_locations_workloads_violations_list(self, request: operations.AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListRequest) -> operations.AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/violations", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudAssuredworkloadsV1ListViolationsResponse])
                res.google_cloud_assuredworkloads_v1_list_violations_response = out

        return res

    