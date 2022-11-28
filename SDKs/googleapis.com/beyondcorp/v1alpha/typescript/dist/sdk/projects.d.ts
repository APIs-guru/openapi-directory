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
     * beyondcorpProjectsLocationsClientGatewaysCreate - Creates a new ClientGateway in a given project and location.
    **/
    beyondcorpProjectsLocationsClientGatewaysCreate(req: operations.BeyondcorpProjectsLocationsClientGatewaysCreateRequest, config?: AxiosRequestConfig): Promise<operations.BeyondcorpProjectsLocationsClientGatewaysCreateResponse>;
    /**
     * beyondcorpProjectsLocationsClientGatewaysList - Lists ClientGateways in a given project and location.
    **/
    beyondcorpProjectsLocationsClientGatewaysList(req: operations.BeyondcorpProjectsLocationsClientGatewaysListRequest, config?: AxiosRequestConfig): Promise<operations.BeyondcorpProjectsLocationsClientGatewaysListResponse>;
    /**
     * beyondcorpProjectsLocationsConnectionsCreate - Creates a new Connection in a given project and location.
    **/
    beyondcorpProjectsLocationsConnectionsCreate(req: operations.BeyondcorpProjectsLocationsConnectionsCreateRequest, config?: AxiosRequestConfig): Promise<operations.BeyondcorpProjectsLocationsConnectionsCreateResponse>;
    /**
     * beyondcorpProjectsLocationsConnectionsList - Lists Connections in a given project and location.
    **/
    beyondcorpProjectsLocationsConnectionsList(req: operations.BeyondcorpProjectsLocationsConnectionsListRequest, config?: AxiosRequestConfig): Promise<operations.BeyondcorpProjectsLocationsConnectionsListResponse>;
    /**
     * beyondcorpProjectsLocationsConnectionsResolve - Resolves connections details for a given connector. An internal method called by a connector to find connections to connect to.
    **/
    beyondcorpProjectsLocationsConnectionsResolve(req: operations.BeyondcorpProjectsLocationsConnectionsResolveRequest, config?: AxiosRequestConfig): Promise<operations.BeyondcorpProjectsLocationsConnectionsResolveResponse>;
    /**
     * beyondcorpProjectsLocationsConnectorsCreate - Creates a new Connector in a given project and location.
    **/
    beyondcorpProjectsLocationsConnectorsCreate(req: operations.BeyondcorpProjectsLocationsConnectorsCreateRequest, config?: AxiosRequestConfig): Promise<operations.BeyondcorpProjectsLocationsConnectorsCreateResponse>;
    /**
     * beyondcorpProjectsLocationsConnectorsList - Lists Connectors in a given project and location.
    **/
    beyondcorpProjectsLocationsConnectorsList(req: operations.BeyondcorpProjectsLocationsConnectorsListRequest, config?: AxiosRequestConfig): Promise<operations.BeyondcorpProjectsLocationsConnectorsListResponse>;
    /**
     * beyondcorpProjectsLocationsConnectorsPatch - Updates the parameters of a single Connector.
    **/
    beyondcorpProjectsLocationsConnectorsPatch(req: operations.BeyondcorpProjectsLocationsConnectorsPatchRequest, config?: AxiosRequestConfig): Promise<operations.BeyondcorpProjectsLocationsConnectorsPatchResponse>;
    /**
     * beyondcorpProjectsLocationsConnectorsReportStatus - Report status for a given connector.
    **/
    beyondcorpProjectsLocationsConnectorsReportStatus(req: operations.BeyondcorpProjectsLocationsConnectorsReportStatusRequest, config?: AxiosRequestConfig): Promise<operations.BeyondcorpProjectsLocationsConnectorsReportStatusResponse>;
    /**
     * beyondcorpProjectsLocationsConnectorsResolveInstanceConfig - Gets instance configuration for a given connector. An internal method called by a connector to get its container config.
    **/
    beyondcorpProjectsLocationsConnectorsResolveInstanceConfig(req: operations.BeyondcorpProjectsLocationsConnectorsResolveInstanceConfigRequest, config?: AxiosRequestConfig): Promise<operations.BeyondcorpProjectsLocationsConnectorsResolveInstanceConfigResponse>;
    /**
     * beyondcorpProjectsLocationsInsightsConfiguredInsight - Gets the value for a selected particular insight based on the provided filters. Use the organization level path for fetching at org level and project level path for fetching the insight value specific to a particular project.
    **/
    beyondcorpProjectsLocationsInsightsConfiguredInsight(req: operations.BeyondcorpProjectsLocationsInsightsConfiguredInsightRequest, config?: AxiosRequestConfig): Promise<operations.BeyondcorpProjectsLocationsInsightsConfiguredInsightResponse>;
    /**
     * beyondcorpProjectsLocationsInsightsList - Lists for all the available insights that could be fetched from the system. Allows to filter using category. Setting the `view` to `BASIC` will let you iterate over the list of insight metadatas.
    **/
    beyondcorpProjectsLocationsInsightsList(req: operations.BeyondcorpProjectsLocationsInsightsListRequest, config?: AxiosRequestConfig): Promise<operations.BeyondcorpProjectsLocationsInsightsListResponse>;
    /**
     * beyondcorpProjectsLocationsList - Lists information about the supported locations for this service.
    **/
    beyondcorpProjectsLocationsList(req: operations.BeyondcorpProjectsLocationsListRequest, config?: AxiosRequestConfig): Promise<operations.BeyondcorpProjectsLocationsListResponse>;
    /**
     * beyondcorpProjectsLocationsNetConnectionsGetIamPolicy - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
    **/
    beyondcorpProjectsLocationsNetConnectionsGetIamPolicy(req: operations.BeyondcorpProjectsLocationsNetConnectionsGetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.BeyondcorpProjectsLocationsNetConnectionsGetIamPolicyResponse>;
    /**
     * beyondcorpProjectsLocationsNetConnectionsSetIamPolicy - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
    **/
    beyondcorpProjectsLocationsNetConnectionsSetIamPolicy(req: operations.BeyondcorpProjectsLocationsNetConnectionsSetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.BeyondcorpProjectsLocationsNetConnectionsSetIamPolicyResponse>;
    /**
     * beyondcorpProjectsLocationsNetConnectionsTestIamPermissions - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
    **/
    beyondcorpProjectsLocationsNetConnectionsTestIamPermissions(req: operations.BeyondcorpProjectsLocationsNetConnectionsTestIamPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.BeyondcorpProjectsLocationsNetConnectionsTestIamPermissionsResponse>;
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
