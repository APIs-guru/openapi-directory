import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Permissions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deletePermissionsId - Delete Permission
     *
     * Delete Permission
    **/
    deletePermissionsId(req: operations.DeletePermissionsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeletePermissionsIdResponse>;
    /**
     * getPermissions - List Permissions
     *
     * List Permissions
    **/
    getPermissions(req: operations.GetPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.GetPermissionsResponse>;
    /**
     * postPermissions - Create Permission
     *
     * Create Permission
    **/
    postPermissions(req: operations.PostPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.PostPermissionsResponse>;
}
