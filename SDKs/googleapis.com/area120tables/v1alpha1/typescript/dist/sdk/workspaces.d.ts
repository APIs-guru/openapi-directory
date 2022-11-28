import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Workspaces {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * area120tablesWorkspacesGet - Gets a workspace. Returns NOT_FOUND if the workspace does not exist.
    **/
    area120tablesWorkspacesGet(req: operations.Area120tablesWorkspacesGetRequest, config?: AxiosRequestConfig): Promise<operations.Area120tablesWorkspacesGetResponse>;
    /**
     * area120tablesWorkspacesList - Lists workspaces for the user.
    **/
    area120tablesWorkspacesList(req: operations.Area120tablesWorkspacesListRequest, config?: AxiosRequestConfig): Promise<operations.Area120tablesWorkspacesListResponse>;
}
