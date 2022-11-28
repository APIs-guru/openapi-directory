import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Roles {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * directoryRolesDelete - Deletes a role.
    **/
    directoryRolesDelete(req: operations.DirectoryRolesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DirectoryRolesDeleteResponse>;
    /**
     * directoryRolesGet - Retrieves a role.
    **/
    directoryRolesGet(req: operations.DirectoryRolesGetRequest, config?: AxiosRequestConfig): Promise<operations.DirectoryRolesGetResponse>;
    /**
     * directoryRolesInsert - Creates a role.
    **/
    directoryRolesInsert(req: operations.DirectoryRolesInsertRequest, config?: AxiosRequestConfig): Promise<operations.DirectoryRolesInsertResponse>;
    /**
     * directoryRolesList - Retrieves a paginated list of all the roles in a domain.
    **/
    directoryRolesList(req: operations.DirectoryRolesListRequest, config?: AxiosRequestConfig): Promise<operations.DirectoryRolesListResponse>;
    /**
     * directoryRolesPatch - Patches a role.
    **/
    directoryRolesPatch(req: operations.DirectoryRolesPatchRequest, config?: AxiosRequestConfig): Promise<operations.DirectoryRolesPatchResponse>;
    /**
     * directoryRolesUpdate - Updates a role.
    **/
    directoryRolesUpdate(req: operations.DirectoryRolesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DirectoryRolesUpdateResponse>;
}
