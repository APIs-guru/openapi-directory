import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Organizations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * assuredworkloadsOrganizationsLocationsOperationsList - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/* /operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
    **/
    assuredworkloadsOrganizationsLocationsOperationsList(req: operations.AssuredworkloadsOrganizationsLocationsOperationsListRequest, config?: AxiosRequestConfig): Promise<operations.AssuredworkloadsOrganizationsLocationsOperationsListResponse>;
    /**
     * assuredworkloadsOrganizationsLocationsWorkloadsCreate - Creates Assured Workload.
    **/
    assuredworkloadsOrganizationsLocationsWorkloadsCreate(req: operations.AssuredworkloadsOrganizationsLocationsWorkloadsCreateRequest, config?: AxiosRequestConfig): Promise<operations.AssuredworkloadsOrganizationsLocationsWorkloadsCreateResponse>;
    /**
     * assuredworkloadsOrganizationsLocationsWorkloadsDelete - Deletes the workload. Make sure that workload's direct children are already in a deleted state, otherwise the request will fail with a FAILED_PRECONDITION error.
    **/
    assuredworkloadsOrganizationsLocationsWorkloadsDelete(req: operations.AssuredworkloadsOrganizationsLocationsWorkloadsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.AssuredworkloadsOrganizationsLocationsWorkloadsDeleteResponse>;
    /**
     * assuredworkloadsOrganizationsLocationsWorkloadsList - Lists Assured Workloads under a CRM Node.
    **/
    assuredworkloadsOrganizationsLocationsWorkloadsList(req: operations.AssuredworkloadsOrganizationsLocationsWorkloadsListRequest, config?: AxiosRequestConfig): Promise<operations.AssuredworkloadsOrganizationsLocationsWorkloadsListResponse>;
    /**
     * assuredworkloadsOrganizationsLocationsWorkloadsPatch - Updates an existing workload. Currently allows updating of workload display_name and labels. For force updates don't set etag field in the Workload. Only one update operation per workload can be in progress.
    **/
    assuredworkloadsOrganizationsLocationsWorkloadsPatch(req: operations.AssuredworkloadsOrganizationsLocationsWorkloadsPatchRequest, config?: AxiosRequestConfig): Promise<operations.AssuredworkloadsOrganizationsLocationsWorkloadsPatchResponse>;
    /**
     * assuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResources - Restrict the list of resources allowed in the Workload environment. The current list of allowed products can be found at https://cloud.google.com/assured-workloads/docs/supported-products In addition to assuredworkloads.workload.update permission, the user should also have orgpolicy.policy.set permission on the folder resource to use this functionality.
    **/
    assuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResources(req: operations.AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResourcesRequest, config?: AxiosRequestConfig): Promise<operations.AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResourcesResponse>;
    /**
     * assuredworkloadsOrganizationsLocationsWorkloadsViolationsAcknowledge - Acknowledges an existing violation. By acknowledging a violation, users acknowledge the existence of a compliance violation in their workload and decide to ignore it due to a valid business justification. Acknowledgement is a permanent operation and it cannot be reverted.
    **/
    assuredworkloadsOrganizationsLocationsWorkloadsViolationsAcknowledge(req: operations.AssuredworkloadsOrganizationsLocationsWorkloadsViolationsAcknowledgeRequest, config?: AxiosRequestConfig): Promise<operations.AssuredworkloadsOrganizationsLocationsWorkloadsViolationsAcknowledgeResponse>;
    /**
     * assuredworkloadsOrganizationsLocationsWorkloadsViolationsGet - Retrieves Assured Workload Violation based on ID.
    **/
    assuredworkloadsOrganizationsLocationsWorkloadsViolationsGet(req: operations.AssuredworkloadsOrganizationsLocationsWorkloadsViolationsGetRequest, config?: AxiosRequestConfig): Promise<operations.AssuredworkloadsOrganizationsLocationsWorkloadsViolationsGetResponse>;
    /**
     * assuredworkloadsOrganizationsLocationsWorkloadsViolationsList - Lists the Violations in the AssuredWorkload Environment. Callers may also choose to read across multiple Workloads as per [AIP-159](https://google.aip.dev/159) by using '-' (the hyphen or dash character) as a wildcard character instead of workload-id in the parent. Format `organizations/{org_id}/locations/{location}/workloads/-`
    **/
    assuredworkloadsOrganizationsLocationsWorkloadsViolationsList(req: operations.AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListRequest, config?: AxiosRequestConfig): Promise<operations.AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListResponse>;
}
