import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Workspaces {
  _defaultClient: AxiosInstance;
  _securityClient: AxiosInstance;
  _serverURL: string;
  _language: string;
  _sdkVersion: string;
  _genVersion: string;

  constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string) {
    this._defaultClient = defaultClient;
    this._securityClient = securityClient;
    this._serverURL = serverURL;
    this._language = language;
    this._sdkVersion = sdkVersion;
    this._genVersion = genVersion;
  }
  
  /**
   * allWorkspaces - All workspaces
   *
   * The `/workspaces` endpoint returns a list of all [workspaces](https://www.getpostman.com/docs/v6/postman/workspaces/intro_to_workspaces) that is accessible by you. The list includes your own workspaces and the workspaces that you have access to.
   * 
   * The response contains an array of collection information containing the `name`, `id`, and `type` of each workspace.
   * 
   * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
  **/
  allWorkspaces(
    config?: AxiosRequestConfig
  ): Promise<operations.AllWorkspacesResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/workspaces";
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.AllWorkspacesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.allWorkspaces200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createWorkspace - Create Workspace
   *
   * This endpoint allows you to create a workspace and populate it with entities like `collections`, `environments`, `mocks` and `monitors` using their `uid`.
   * 
   * On successful creation of the workspace, the response returns the workspcae `name` and `id`.
   * 
   * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
  **/
  createWorkspace(
    req: operations.CreateWorkspaceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateWorkspaceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateWorkspaceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/workspaces";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CreateWorkspaceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.createWorkspace200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.createWorkspace400ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteWorkspace - Delete Workspace
   *
   * This endpoint allows you to delete an existing workspace.
   * 
   * On successful deletion of the workspace, the response returns the `id`.
   * 
   * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
  **/
  deleteWorkspace(
    req: operations.DeleteWorkspaceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteWorkspaceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteWorkspaceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/workspaces/{workspace_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteWorkspaceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.deleteWorkspace200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * singleWorkspace - Single workspace
   *
   * Access the contents of a workspace that is accessible to you using its id (`id`). Includes the collections, environments, mocks and monitors of that workspace.
   * 
   * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
  **/
  singleWorkspace(
    req: operations.SingleWorkspaceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SingleWorkspaceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SingleWorkspaceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/workspaces/{workspace_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SingleWorkspaceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.singleWorkspace200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.singleWorkspace404ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
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
  updateWorkspace(
    req: operations.UpdateWorkspaceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateWorkspaceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateWorkspaceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/workspaces/{workspace_id}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdateWorkspaceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateWorkspace200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateWorkspace403ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateWorkspace404ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
