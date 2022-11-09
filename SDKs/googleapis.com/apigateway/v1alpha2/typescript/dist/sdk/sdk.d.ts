import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    ApigatewayProjectsLocationsGatewaysGetIamPolicy(req: operations.ApigatewayProjectsLocationsGatewaysGetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.ApigatewayProjectsLocationsGatewaysGetIamPolicyResponse>;
    ApigatewayProjectsLocationsGatewaysSetIamPolicy(req: operations.ApigatewayProjectsLocationsGatewaysSetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.ApigatewayProjectsLocationsGatewaysSetIamPolicyResponse>;
    ApigatewayProjectsLocationsGatewaysTestIamPermissions(req: operations.ApigatewayProjectsLocationsGatewaysTestIamPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.ApigatewayProjectsLocationsGatewaysTestIamPermissionsResponse>;
    ApigatewayProjectsLocationsList(req: operations.ApigatewayProjectsLocationsListRequest, config?: AxiosRequestConfig): Promise<operations.ApigatewayProjectsLocationsListResponse>;
    ApigatewayProjectsLocationsOperationsCancel(req: operations.ApigatewayProjectsLocationsOperationsCancelRequest, config?: AxiosRequestConfig): Promise<operations.ApigatewayProjectsLocationsOperationsCancelResponse>;
    ApigatewayProjectsLocationsOperationsDelete(req: operations.ApigatewayProjectsLocationsOperationsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ApigatewayProjectsLocationsOperationsDeleteResponse>;
    ApigatewayProjectsLocationsOperationsGet(req: operations.ApigatewayProjectsLocationsOperationsGetRequest, config?: AxiosRequestConfig): Promise<operations.ApigatewayProjectsLocationsOperationsGetResponse>;
    ApigatewayProjectsLocationsOperationsList(req: operations.ApigatewayProjectsLocationsOperationsListRequest, config?: AxiosRequestConfig): Promise<operations.ApigatewayProjectsLocationsOperationsListResponse>;
}
export {};
