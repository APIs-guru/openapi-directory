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
     * beyondcorpProjectsLocationsAppConnectionsCreate - Creates a new AppConnection in a given project and location.
    **/
    beyondcorpProjectsLocationsAppConnectionsCreate(req: operations.BeyondcorpProjectsLocationsAppConnectionsCreateRequest, config?: AxiosRequestConfig): Promise<operations.BeyondcorpProjectsLocationsAppConnectionsCreateResponse>;
    /**
     * beyondcorpProjectsLocationsAppConnectionsList - Lists AppConnections in a given project and location.
    **/
    beyondcorpProjectsLocationsAppConnectionsList(req: operations.BeyondcorpProjectsLocationsAppConnectionsListRequest, config?: AxiosRequestConfig): Promise<operations.BeyondcorpProjectsLocationsAppConnectionsListResponse>;
    /**
     * beyondcorpProjectsLocationsAppConnectionsResolve - Resolves AppConnections details for a given AppConnector. An internal method called by a connector to find AppConnections to connect to.
    **/
    beyondcorpProjectsLocationsAppConnectionsResolve(req: operations.BeyondcorpProjectsLocationsAppConnectionsResolveRequest, config?: AxiosRequestConfig): Promise<operations.BeyondcorpProjectsLocationsAppConnectionsResolveResponse>;
    /**
     * beyondcorpProjectsLocationsAppConnectorsCreate - Creates a new AppConnector in a given project and location.
    **/
    beyondcorpProjectsLocationsAppConnectorsCreate(req: operations.BeyondcorpProjectsLocationsAppConnectorsCreateRequest, config?: AxiosRequestConfig): Promise<operations.BeyondcorpProjectsLocationsAppConnectorsCreateResponse>;
    /**
     * beyondcorpProjectsLocationsAppConnectorsList - Lists AppConnectors in a given project and location.
    **/
    beyondcorpProjectsLocationsAppConnectorsList(req: operations.BeyondcorpProjectsLocationsAppConnectorsListRequest, config?: AxiosRequestConfig): Promise<operations.BeyondcorpProjectsLocationsAppConnectorsListResponse>;
    /**
     * beyondcorpProjectsLocationsAppConnectorsReportStatus - Report status for a given connector.
    **/
    beyondcorpProjectsLocationsAppConnectorsReportStatus(req: operations.BeyondcorpProjectsLocationsAppConnectorsReportStatusRequest, config?: AxiosRequestConfig): Promise<operations.BeyondcorpProjectsLocationsAppConnectorsReportStatusResponse>;
    /**
     * beyondcorpProjectsLocationsAppConnectorsResolveInstanceConfig - Gets instance configuration for a given AppConnector. An internal method called by a AppConnector to get its container config.
    **/
    beyondcorpProjectsLocationsAppConnectorsResolveInstanceConfig(req: operations.BeyondcorpProjectsLocationsAppConnectorsResolveInstanceConfigRequest, config?: AxiosRequestConfig): Promise<operations.BeyondcorpProjectsLocationsAppConnectorsResolveInstanceConfigResponse>;
    /**
     * beyondcorpProjectsLocationsAppGatewaysCreate - Creates a new AppGateway in a given project and location.
    **/
    beyondcorpProjectsLocationsAppGatewaysCreate(req: operations.BeyondcorpProjectsLocationsAppGatewaysCreateRequest, config?: AxiosRequestConfig): Promise<operations.BeyondcorpProjectsLocationsAppGatewaysCreateResponse>;
    /**
     * beyondcorpProjectsLocationsAppGatewaysList - Lists AppGateways in a given project and location.
    **/
    beyondcorpProjectsLocationsAppGatewaysList(req: operations.BeyondcorpProjectsLocationsAppGatewaysListRequest, config?: AxiosRequestConfig): Promise<operations.BeyondcorpProjectsLocationsAppGatewaysListResponse>;
    /**
     * beyondcorpProjectsLocationsClientConnectorServicesCreate - Creates a new ClientConnectorService in a given project and location.
    **/
    beyondcorpProjectsLocationsClientConnectorServicesCreate(req: operations.BeyondcorpProjectsLocationsClientConnectorServicesCreateRequest, config?: AxiosRequestConfig): Promise<operations.BeyondcorpProjectsLocationsClientConnectorServicesCreateResponse>;
    /**
     * beyondcorpProjectsLocationsClientConnectorServicesList - Lists ClientConnectorServices in a given project and location.
    **/
    beyondcorpProjectsLocationsClientConnectorServicesList(req: operations.BeyondcorpProjectsLocationsClientConnectorServicesListRequest, config?: AxiosRequestConfig): Promise<operations.BeyondcorpProjectsLocationsClientConnectorServicesListResponse>;
    /**
     * beyondcorpProjectsLocationsClientConnectorServicesPatch - Updates the parameters of a single ClientConnectorService.
    **/
    beyondcorpProjectsLocationsClientConnectorServicesPatch(req: operations.BeyondcorpProjectsLocationsClientConnectorServicesPatchRequest, config?: AxiosRequestConfig): Promise<operations.BeyondcorpProjectsLocationsClientConnectorServicesPatchResponse>;
    /**
     * beyondcorpProjectsLocationsClientGatewaysCreate - Creates a new ClientGateway in a given project and location.
    **/
    beyondcorpProjectsLocationsClientGatewaysCreate(req: operations.BeyondcorpProjectsLocationsClientGatewaysCreateRequest, config?: AxiosRequestConfig): Promise<operations.BeyondcorpProjectsLocationsClientGatewaysCreateResponse>;
    /**
     * beyondcorpProjectsLocationsClientGatewaysGetIamPolicy - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
    **/
    beyondcorpProjectsLocationsClientGatewaysGetIamPolicy(req: operations.BeyondcorpProjectsLocationsClientGatewaysGetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.BeyondcorpProjectsLocationsClientGatewaysGetIamPolicyResponse>;
    /**
     * beyondcorpProjectsLocationsClientGatewaysList - Lists ClientGateways in a given project and location.
    **/
    beyondcorpProjectsLocationsClientGatewaysList(req: operations.BeyondcorpProjectsLocationsClientGatewaysListRequest, config?: AxiosRequestConfig): Promise<operations.BeyondcorpProjectsLocationsClientGatewaysListResponse>;
    /**
     * beyondcorpProjectsLocationsClientGatewaysSetIamPolicy - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
    **/
    beyondcorpProjectsLocationsClientGatewaysSetIamPolicy(req: operations.BeyondcorpProjectsLocationsClientGatewaysSetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.BeyondcorpProjectsLocationsClientGatewaysSetIamPolicyResponse>;
    /**
     * beyondcorpProjectsLocationsClientGatewaysTestIamPermissions - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
    **/
    beyondcorpProjectsLocationsClientGatewaysTestIamPermissions(req: operations.BeyondcorpProjectsLocationsClientGatewaysTestIamPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.BeyondcorpProjectsLocationsClientGatewaysTestIamPermissionsResponse>;
    /**
     * beyondcorpProjectsLocationsList - Lists information about the supported locations for this service.
    **/
    beyondcorpProjectsLocationsList(req: operations.BeyondcorpProjectsLocationsListRequest, config?: AxiosRequestConfig): Promise<operations.BeyondcorpProjectsLocationsListResponse>;
    /**
     * beyondcorpProjectsLocationsOperationsCancel - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
    **/
    beyondcorpProjectsLocationsOperationsCancel(req: operations.BeyondcorpProjectsLocationsOperationsCancelRequest, config?: AxiosRequestConfig): Promise<operations.BeyondcorpProjectsLocationsOperationsCancelResponse>;
    /**
     * beyondcorpProjectsLocationsOperationsDelete - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
    **/
    beyondcorpProjectsLocationsOperationsDelete(req: operations.BeyondcorpProjectsLocationsOperationsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.BeyondcorpProjectsLocationsOperationsDeleteResponse>;
    /**
     * beyondcorpProjectsLocationsOperationsGet - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
    **/
    beyondcorpProjectsLocationsOperationsGet(req: operations.BeyondcorpProjectsLocationsOperationsGetRequest, config?: AxiosRequestConfig): Promise<operations.BeyondcorpProjectsLocationsOperationsGetResponse>;
    /**
     * beyondcorpProjectsLocationsOperationsList - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/* /operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
    **/
    beyondcorpProjectsLocationsOperationsList(req: operations.BeyondcorpProjectsLocationsOperationsListRequest, config?: AxiosRequestConfig): Promise<operations.BeyondcorpProjectsLocationsOperationsListResponse>;
}
