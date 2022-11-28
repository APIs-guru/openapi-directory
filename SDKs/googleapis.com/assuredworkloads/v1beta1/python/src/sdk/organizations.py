import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Organizations:
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

    
    def assuredworkloads_organizations_locations_operations_list(self, request: operations.AssuredworkloadsOrganizationsLocationsOperationsListRequest) -> operations.AssuredworkloadsOrganizationsLocationsOperationsListResponse:
        r"""Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `\"/v1/{name=users/*}/operations\"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{name}/operations", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AssuredworkloadsOrganizationsLocationsOperationsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningListOperationsResponse])
                res.google_longrunning_list_operations_response = out

        return res

    
    def assuredworkloads_organizations_locations_workloads_create(self, request: operations.AssuredworkloadsOrganizationsLocationsWorkloadsCreateRequest) -> operations.AssuredworkloadsOrganizationsLocationsWorkloadsCreateResponse:
        r"""Creates Assured Workload.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{parent}/workloads", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AssuredworkloadsOrganizationsLocationsWorkloadsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def assuredworkloads_organizations_locations_workloads_delete(self, request: operations.AssuredworkloadsOrganizationsLocationsWorkloadsDeleteRequest) -> operations.AssuredworkloadsOrganizationsLocationsWorkloadsDeleteResponse:
        r"""Deletes the workload. Make sure that workload's direct children are already in a deleted state, otherwise the request will fail with a FAILED_PRECONDITION error. In addition to assuredworkloads.workload.delete permission, the user should also have orgpolicy.policy.set permission on the deleted folder to remove Assured Workloads OrgPolicies.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AssuredworkloadsOrganizationsLocationsWorkloadsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_protobuf_empty = out

        return res

    
    def assuredworkloads_organizations_locations_workloads_list(self, request: operations.AssuredworkloadsOrganizationsLocationsWorkloadsListRequest) -> operations.AssuredworkloadsOrganizationsLocationsWorkloadsListResponse:
        r"""Lists Assured Workloads under a CRM Node.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{parent}/workloads", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AssuredworkloadsOrganizationsLocationsWorkloadsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudAssuredworkloadsV1beta1ListWorkloadsResponse])
                res.google_cloud_assuredworkloads_v1beta1_list_workloads_response = out

        return res

    
    def assuredworkloads_organizations_locations_workloads_organizations_locations_workloads_analyze_workload_move(self, request: operations.AssuredworkloadsOrganizationsLocationsWorkloadsOrganizationsLocationsWorkloadsAnalyzeWorkloadMoveRequest) -> operations.AssuredworkloadsOrganizationsLocationsWorkloadsOrganizationsLocationsWorkloadsAnalyzeWorkloadMoveResponse:
        r"""Analyzes a hypothetical move of a source project or project-based workload to a target (destination) folder-based workload.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{source}/{target}:analyzeWorkloadMove", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AssuredworkloadsOrganizationsLocationsWorkloadsOrganizationsLocationsWorkloadsAnalyzeWorkloadMoveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudAssuredworkloadsV1beta1AnalyzeWorkloadMoveResponse])
                res.google_cloud_assuredworkloads_v1beta1_analyze_workload_move_response = out

        return res

    
    def assuredworkloads_organizations_locations_workloads_patch(self, request: operations.AssuredworkloadsOrganizationsLocationsWorkloadsPatchRequest) -> operations.AssuredworkloadsOrganizationsLocationsWorkloadsPatchResponse:
        r"""Updates an existing workload. Currently allows updating of workload display_name and labels. For force updates don't set etag field in the Workload. Only one update operation per workload can be in progress.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{name}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AssuredworkloadsOrganizationsLocationsWorkloadsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudAssuredworkloadsV1beta1Workload])
                res.google_cloud_assuredworkloads_v1beta1_workload = out

        return res

    
    def assuredworkloads_organizations_locations_workloads_restrict_allowed_resources(self, request: operations.AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResourcesRequest) -> operations.AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResourcesResponse:
        r"""Restrict the list of resources allowed in the Workload environment. The current list of allowed products can be found at https://cloud.google.com/assured-workloads/docs/supported-products In addition to assuredworkloads.workload.update permission, the user should also have orgpolicy.policy.set permission on the folder resource to use this functionality.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{name}:restrictAllowedResources", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResourcesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_cloud_assuredworkloads_v1beta1_restrict_allowed_resources_response = out

        return res

    
    def assuredworkloads_organizations_locations_workloads_violations_acknowledge(self, request: operations.AssuredworkloadsOrganizationsLocationsWorkloadsViolationsAcknowledgeRequest) -> operations.AssuredworkloadsOrganizationsLocationsWorkloadsViolationsAcknowledgeResponse:
        r"""Acknowledges an existing violation. By acknowledging a violation, users acknowledge the existence of a compliance violation in their workload and decide to ignore it due to a valid business justification. Acknowledgement is a permanent operation and it cannot be reverted.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{name}:acknowledge", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AssuredworkloadsOrganizationsLocationsWorkloadsViolationsAcknowledgeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_cloud_assuredworkloads_v1beta1_acknowledge_violation_response = out

        return res

    
    def assuredworkloads_organizations_locations_workloads_violations_get(self, request: operations.AssuredworkloadsOrganizationsLocationsWorkloadsViolationsGetRequest) -> operations.AssuredworkloadsOrganizationsLocationsWorkloadsViolationsGetResponse:
        r"""Retrieves Assured Workload Violation based on ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AssuredworkloadsOrganizationsLocationsWorkloadsViolationsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudAssuredworkloadsV1beta1Violation])
                res.google_cloud_assuredworkloads_v1beta1_violation = out

        return res

    
    def assuredworkloads_organizations_locations_workloads_violations_list(self, request: operations.AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListRequest) -> operations.AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListResponse:
        r"""Lists the Violations in the AssuredWorkload Environment. Callers may also choose to read across multiple Workloads as per [AIP-159](https://google.aip.dev/159) by using '-' (the hyphen or dash character) as a wildcard character instead of workload-id in the parent. Format `organizations/{org_id}/locations/{location}/workloads/-`
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{parent}/violations", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudAssuredworkloadsV1beta1ListViolationsResponse])
                res.google_cloud_assuredworkloads_v1beta1_list_violations_response = out

        return res

    