import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Projects {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * batchProjectsLocationsJobsCreate - Create a Job.
    **/
    batchProjectsLocationsJobsCreate(req: operations.BatchProjectsLocationsJobsCreateRequest, config?: AxiosRequestConfig): Promise<operations.BatchProjectsLocationsJobsCreateResponse>;
    /**
     * batchProjectsLocationsJobsList - List all Jobs for a project within a region.
    **/
    batchProjectsLocationsJobsList(req: operations.BatchProjectsLocationsJobsListRequest, config?: AxiosRequestConfig): Promise<operations.BatchProjectsLocationsJobsListResponse>;
    /**
     * batchProjectsLocationsJobsTaskGroupsTasksList - List Tasks associated with a job.
    **/
    batchProjectsLocationsJobsTaskGroupsTasksList(req: operations.BatchProjectsLocationsJobsTaskGroupsTasksListRequest, config?: AxiosRequestConfig): Promise<operations.BatchProjectsLocationsJobsTaskGroupsTasksListResponse>;
    /**
     * batchProjectsLocationsList - Lists information about the supported locations for this service.
    **/
    batchProjectsLocationsList(req: operations.BatchProjectsLocationsListRequest, config?: AxiosRequestConfig): Promise<operations.BatchProjectsLocationsListResponse>;
    /**
     * batchProjectsLocationsOperationsCancel - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
    **/
    batchProjectsLocationsOperationsCancel(req: operations.BatchProjectsLocationsOperationsCancelRequest, config?: AxiosRequestConfig): Promise<operations.BatchProjectsLocationsOperationsCancelResponse>;
    /**
     * batchProjectsLocationsOperationsDelete - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
    **/
    batchProjectsLocationsOperationsDelete(req: operations.BatchProjectsLocationsOperationsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.BatchProjectsLocationsOperationsDeleteResponse>;
    /**
     * batchProjectsLocationsOperationsGet - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
    **/
    batchProjectsLocationsOperationsGet(req: operations.BatchProjectsLocationsOperationsGetRequest, config?: AxiosRequestConfig): Promise<operations.BatchProjectsLocationsOperationsGetResponse>;
    /**
     * batchProjectsLocationsOperationsList - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/* /operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
    **/
    batchProjectsLocationsOperationsList(req: operations.BatchProjectsLocationsOperationsListRequest, config?: AxiosRequestConfig): Promise<operations.BatchProjectsLocationsOperationsListResponse>;
    /**
     * batchProjectsLocationsStateReport - Report agent's state, e.g. agent status and tasks information
    **/
    batchProjectsLocationsStateReport(req: operations.BatchProjectsLocationsStateReportRequest, config?: AxiosRequestConfig): Promise<operations.BatchProjectsLocationsStateReportResponse>;
    /**
     * batchProjectsLocationsTasksGetIamPolicy - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
    **/
    batchProjectsLocationsTasksGetIamPolicy(req: operations.BatchProjectsLocationsTasksGetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.BatchProjectsLocationsTasksGetIamPolicyResponse>;
    /**
     * batchProjectsLocationsTasksSetIamPolicy - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
    **/
    batchProjectsLocationsTasksSetIamPolicy(req: operations.BatchProjectsLocationsTasksSetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.BatchProjectsLocationsTasksSetIamPolicyResponse>;
    /**
     * batchProjectsLocationsTasksTestIamPermissions - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
    **/
    batchProjectsLocationsTasksTestIamPermissions(req: operations.BatchProjectsLocationsTasksTestIamPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.BatchProjectsLocationsTasksTestIamPermissionsResponse>;
}
