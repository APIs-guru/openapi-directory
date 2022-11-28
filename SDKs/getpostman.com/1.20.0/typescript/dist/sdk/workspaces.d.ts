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
     * allWorkspaces - All workspaces
     *
     * The `/workspaces` endpoint returns a list of all [workspaces](https://www.getpostman.com/docs/v6/postman/workspaces/intro_to_workspaces) that is accessible by you. The list includes your own workspaces and the workspaces that you have access to.
     *
     * The response contains an array of collection information containing the `name`, `id`, and `type` of each workspace.
     *
     * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
    **/
    allWorkspaces(config?: AxiosRequestConfig): Promise<operations.AllWorkspacesResponse>;
    /**
     * createWorkspace - Create Workspace
     *
     * This endpoint allows you to create a workspace and populate it with entities like `collections`, `environments`, `mocks` and `monitors` using their `uid`.
     *
     * On successful creation of the workspace, the response returns the workspcae `name` and `id`.
     *
     * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
    **/
    createWorkspace(req: operations.CreateWorkspaceRequest, config?: AxiosRequestConfig): Promise<operations.CreateWorkspaceResponse>;
    /**
     * deleteWorkspace - Delete Workspace
     *
     * This endpoint allows you to delete an existing workspace.
     *
     * On successful deletion of the workspace, the response returns the `id`.
     *
     * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
    **/
    deleteWorkspace(req: operations.DeleteWorkspaceRequest, config?: AxiosRequestConfig): Promise<operations.DeleteWorkspaceResponse>;
    /**
     * singleWorkspace - Single workspace
     *
     * Access the contents of a workspace that is accessible to you using its id (`id`). Includes the collections, environments, mocks and monitors of that workspace.
     *
     * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
    **/
    singleWorkspace(req: operations.SingleWorkspaceRequest, config?: AxiosRequestConfig): Promise<operations.SingleWorkspaceResponse>;
    /**
     * updateWorkspace - Update Workspace
     *
     * This endpoint allows you to update a workspace and update it's association to entities like `collections`, `environments`, `mocks` and `monitors` using their `uid`.
     *
     * On successful updation of the workspace, the response returns the workspcae `name` and `id`.
     *
     * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
     *
     * **Note** : The endpoint expects you to send the desired state of the workspace in terms of the associated entities so be careful when trying to update these entities.
     *
     * For eg. if your workspace has collections A and B, and in the update call, you send C's uid in the collections array, then A and B would be removed from the workspace and C would be added.
    **/
    updateWorkspace(req: operations.UpdateWorkspaceRequest, config?: AxiosRequestConfig): Promise<operations.UpdateWorkspaceResponse>;
}
