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
    Area120tablesTablesList(req: operations.Area120tablesTablesListRequest, config?: AxiosRequestConfig): Promise<operations.Area120tablesTablesListResponse>;
    Area120tablesTablesRowsBatchCreate(req: operations.Area120tablesTablesRowsBatchCreateRequest, config?: AxiosRequestConfig): Promise<operations.Area120tablesTablesRowsBatchCreateResponse>;
    Area120tablesTablesRowsBatchDelete(req: operations.Area120tablesTablesRowsBatchDeleteRequest, config?: AxiosRequestConfig): Promise<operations.Area120tablesTablesRowsBatchDeleteResponse>;
    Area120tablesTablesRowsBatchUpdate(req: operations.Area120tablesTablesRowsBatchUpdateRequest, config?: AxiosRequestConfig): Promise<operations.Area120tablesTablesRowsBatchUpdateResponse>;
    Area120tablesTablesRowsCreate(req: operations.Area120tablesTablesRowsCreateRequest, config?: AxiosRequestConfig): Promise<operations.Area120tablesTablesRowsCreateResponse>;
    Area120tablesTablesRowsDelete(req: operations.Area120tablesTablesRowsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.Area120tablesTablesRowsDeleteResponse>;
    Area120tablesTablesRowsList(req: operations.Area120tablesTablesRowsListRequest, config?: AxiosRequestConfig): Promise<operations.Area120tablesTablesRowsListResponse>;
    Area120tablesTablesRowsPatch(req: operations.Area120tablesTablesRowsPatchRequest, config?: AxiosRequestConfig): Promise<operations.Area120tablesTablesRowsPatchResponse>;
    Area120tablesWorkspacesGet(req: operations.Area120tablesWorkspacesGetRequest, config?: AxiosRequestConfig): Promise<operations.Area120tablesWorkspacesGetResponse>;
    Area120tablesWorkspacesList(req: operations.Area120tablesWorkspacesListRequest, config?: AxiosRequestConfig): Promise<operations.Area120tablesWorkspacesListResponse>;
}
export {};
