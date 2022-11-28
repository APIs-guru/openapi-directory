import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class GroupUsers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteGroupUsersId - Delete Group User
     *
     * Delete Group User
    **/
    deleteGroupUsersId(req: operations.DeleteGroupUsersIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteGroupUsersIdResponse>;
    /**
     * getGroupUsers - List Group Users
     *
     * List Group Users
    **/
    getGroupUsers(req: operations.GetGroupUsersRequest, config?: AxiosRequestConfig): Promise<operations.GetGroupUsersResponse>;
    /**
     * patchGroupUsersId - Update Group User
     *
     * Update Group User
    **/
    patchGroupUsersId(req: operations.PatchGroupUsersIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchGroupUsersIdResponse>;
    /**
     * postGroupUsers - Create Group User
     *
     * Create Group User
    **/
    postGroupUsers(req: operations.PostGroupUsersRequest, config?: AxiosRequestConfig): Promise<operations.PostGroupUsersResponse>;
}
