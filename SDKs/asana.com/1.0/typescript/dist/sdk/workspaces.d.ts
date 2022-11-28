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
     * addUserForWorkspace - Add a user to a workspace or organization
     *
     * Add a user to a workspace or organization.
     * The user can be referenced by their globally unique user ID or their email address. Returns the full user record for the invited user.
    **/
    addUserForWorkspace(req: operations.AddUserForWorkspaceRequest, config?: AxiosRequestConfig): Promise<operations.AddUserForWorkspaceResponse>;
    /**
     * getWorkspace - Get a workspace
     *
     * Returns the full workspace record for a single workspace.
    **/
    getWorkspace(req: operations.GetWorkspaceRequest, config?: AxiosRequestConfig): Promise<operations.GetWorkspaceResponse>;
    /**
     * getWorkspaces - Get multiple workspaces
     *
     * Returns the compact records for all workspaces visible to the authorized user.
    **/
    getWorkspaces(req: operations.GetWorkspacesRequest, config?: AxiosRequestConfig): Promise<operations.GetWorkspacesResponse>;
    /**
     * removeUserForWorkspace - Remove a user from a workspace or organization
     *
     * Remove a user from a workspace or organization.
     * The user making this call must be an admin in the workspace. The user can be referenced by their globally unique user ID or their email address.
     * Returns an empty data record.
    **/
    removeUserForWorkspace(req: operations.RemoveUserForWorkspaceRequest, config?: AxiosRequestConfig): Promise<operations.RemoveUserForWorkspaceResponse>;
    /**
     * updateWorkspace - Update a workspace
     *
     * A specific, existing workspace can be updated by making a PUT request on the URL for that workspace. Only the fields provided in the data block will be updated; any unspecified fields will remain unchanged.
     * Currently the only field that can be modified for a workspace is its name.
     * Returns the complete, updated workspace record.
    **/
    updateWorkspace(req: operations.UpdateWorkspaceRequest, config?: AxiosRequestConfig): Promise<operations.UpdateWorkspaceResponse>;
}
