import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class WorkspaceMemberships {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getWorkspaceMembership - Get a workspace membership
     *
     * Returns the complete workspace record for a single workspace membership.
    **/
    getWorkspaceMembership(req: operations.GetWorkspaceMembershipRequest, config?: AxiosRequestConfig): Promise<operations.GetWorkspaceMembershipResponse>;
    /**
     * getWorkspaceMembershipsForUser - Get workspace memberships for a user
     *
     * Returns the compact workspace membership records for the user.
    **/
    getWorkspaceMembershipsForUser(req: operations.GetWorkspaceMembershipsForUserRequest, config?: AxiosRequestConfig): Promise<operations.GetWorkspaceMembershipsForUserResponse>;
    /**
     * getWorkspaceMembershipsForWorkspace - Get the workspace memberships for a workspace
     *
     * Returns the compact workspace membership records for the workspace.
    **/
    getWorkspaceMembershipsForWorkspace(req: operations.GetWorkspaceMembershipsForWorkspaceRequest, config?: AxiosRequestConfig): Promise<operations.GetWorkspaceMembershipsForWorkspaceResponse>;
}
