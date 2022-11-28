import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Groups {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteGroupsGroupIdMembershipsUserId - Delete Group User
     *
     * Delete Group User
    **/
    deleteGroupsGroupIdMembershipsUserId(req: operations.DeleteGroupsGroupIdMembershipsUserIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteGroupsGroupIdMembershipsUserIdResponse>;
    /**
     * deleteGroupsId - Delete Group
     *
     * Delete Group
    **/
    deleteGroupsId(req: operations.DeleteGroupsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteGroupsIdResponse>;
    /**
     * getGroups - List Groups
     *
     * List Groups
    **/
    getGroups(req: operations.GetGroupsRequest, config?: AxiosRequestConfig): Promise<operations.GetGroupsResponse>;
    /**
     * getGroupsGroupIdPermissions - List Permissions
     *
     * List Permissions
    **/
    getGroupsGroupIdPermissions(req: operations.GetGroupsGroupIdPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.GetGroupsGroupIdPermissionsResponse>;
    /**
     * getGroupsGroupIdUsers - List Group Users
     *
     * List Group Users
    **/
    getGroupsGroupIdUsers(req: operations.GetGroupsGroupIdUsersRequest, config?: AxiosRequestConfig): Promise<operations.GetGroupsGroupIdUsersResponse>;
    /**
     * getGroupsId - Show Group
     *
     * Show Group
    **/
    getGroupsId(req: operations.GetGroupsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetGroupsIdResponse>;
    /**
     * patchGroupsGroupIdMembershipsUserId - Update Group User
     *
     * Update Group User
    **/
    patchGroupsGroupIdMembershipsUserId(req: operations.PatchGroupsGroupIdMembershipsUserIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchGroupsGroupIdMembershipsUserIdResponse>;
    /**
     * patchGroupsId - Update Group
     *
     * Update Group
    **/
    patchGroupsId(req: operations.PatchGroupsIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchGroupsIdResponse>;
    /**
     * postGroups - Create Group
     *
     * Create Group
    **/
    postGroups(req: operations.PostGroupsRequest, config?: AxiosRequestConfig): Promise<operations.PostGroupsResponse>;
    /**
     * postGroupsGroupIdUsers - Create User
     *
     * Create User
    **/
    postGroupsGroupIdUsers(req: operations.PostGroupsGroupIdUsersRequest, config?: AxiosRequestConfig): Promise<operations.PostGroupsGroupIdUsersResponse>;
}
