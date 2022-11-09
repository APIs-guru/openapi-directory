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
    BigqueryconnectionProjectsLocationsConnectionsCreate(req: operations.BigqueryconnectionProjectsLocationsConnectionsCreateRequest, config?: AxiosRequestConfig): Promise<operations.BigqueryconnectionProjectsLocationsConnectionsCreateResponse>;
    BigqueryconnectionProjectsLocationsConnectionsDelete(req: operations.BigqueryconnectionProjectsLocationsConnectionsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.BigqueryconnectionProjectsLocationsConnectionsDeleteResponse>;
    BigqueryconnectionProjectsLocationsConnectionsGet(req: operations.BigqueryconnectionProjectsLocationsConnectionsGetRequest, config?: AxiosRequestConfig): Promise<operations.BigqueryconnectionProjectsLocationsConnectionsGetResponse>;
    BigqueryconnectionProjectsLocationsConnectionsGetIamPolicy(req: operations.BigqueryconnectionProjectsLocationsConnectionsGetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.BigqueryconnectionProjectsLocationsConnectionsGetIamPolicyResponse>;
    BigqueryconnectionProjectsLocationsConnectionsList(req: operations.BigqueryconnectionProjectsLocationsConnectionsListRequest, config?: AxiosRequestConfig): Promise<operations.BigqueryconnectionProjectsLocationsConnectionsListResponse>;
    BigqueryconnectionProjectsLocationsConnectionsSetIamPolicy(req: operations.BigqueryconnectionProjectsLocationsConnectionsSetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.BigqueryconnectionProjectsLocationsConnectionsSetIamPolicyResponse>;
    BigqueryconnectionProjectsLocationsConnectionsTestIamPermissions(req: operations.BigqueryconnectionProjectsLocationsConnectionsTestIamPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.BigqueryconnectionProjectsLocationsConnectionsTestIamPermissionsResponse>;
    BigqueryconnectionProjectsLocationsConnectionsUpdateCredential(req: operations.BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialRequest, config?: AxiosRequestConfig): Promise<operations.BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialResponse>;
}
export {};
