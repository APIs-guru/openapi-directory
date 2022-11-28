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
     * apigatewayProjectsLocationsGatewaysGetIamPolicy - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
    **/
    apigatewayProjectsLocationsGatewaysGetIamPolicy(req: operations.ApigatewayProjectsLocationsGatewaysGetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.ApigatewayProjectsLocationsGatewaysGetIamPolicyResponse>;
    /**
     * apigatewayProjectsLocationsGatewaysSetIamPolicy - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
    **/
    apigatewayProjectsLocationsGatewaysSetIamPolicy(req: operations.ApigatewayProjectsLocationsGatewaysSetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.ApigatewayProjectsLocationsGatewaysSetIamPolicyResponse>;
    /**
     * apigatewayProjectsLocationsGatewaysTestIamPermissions - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
    **/
    apigatewayProjectsLocationsGatewaysTestIamPermissions(req: operations.ApigatewayProjectsLocationsGatewaysTestIamPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.ApigatewayProjectsLocationsGatewaysTestIamPermissionsResponse>;
    /**
     * apigatewayProjectsLocationsList - Lists information about the supported locations for this service.
    **/
    apigatewayProjectsLocationsList(req: operations.ApigatewayProjectsLocationsListRequest, config?: AxiosRequestConfig): Promise<operations.ApigatewayProjectsLocationsListResponse>;
    /**
     * apigatewayProjectsLocationsOperationsCancel - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
    **/
    apigatewayProjectsLocationsOperationsCancel(req: operations.ApigatewayProjectsLocationsOperationsCancelRequest, config?: AxiosRequestConfig): Promise<operations.ApigatewayProjectsLocationsOperationsCancelResponse>;
    /**
     * apigatewayProjectsLocationsOperationsDelete - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
    **/
    apigatewayProjectsLocationsOperationsDelete(req: operations.ApigatewayProjectsLocationsOperationsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ApigatewayProjectsLocationsOperationsDeleteResponse>;
    /**
     * apigatewayProjectsLocationsOperationsGet - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
    **/
    apigatewayProjectsLocationsOperationsGet(req: operations.ApigatewayProjectsLocationsOperationsGetRequest, config?: AxiosRequestConfig): Promise<operations.ApigatewayProjectsLocationsOperationsGetResponse>;
    /**
     * apigatewayProjectsLocationsOperationsList - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/* /operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
    **/
    apigatewayProjectsLocationsOperationsList(req: operations.ApigatewayProjectsLocationsOperationsListRequest, config?: AxiosRequestConfig): Promise<operations.ApigatewayProjectsLocationsOperationsListResponse>;
}
