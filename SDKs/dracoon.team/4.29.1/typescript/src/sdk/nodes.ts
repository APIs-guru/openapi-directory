import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Nodes {
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
   * addFavorite - Mark a node (room, folder or file) as favorite
   *
   * ### Description:  
   * Marks a node (room, folder or file) as favorite.
   * 
   * ### Precondition:
   * Authenticated user is allowed to <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128065; see</span> the node (i.e. `isBrowsable = true`).
   * 
   * ### Postcondition:
   * A node gets marked as favorite.
   * 
   * ### Further Information:
   * None.
  **/
  addFavorite(
    req: operations.AddFavoriteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AddFavoriteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AddFavoriteRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v4/nodes/{node_id}/favorite", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.AddFavoriteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.node = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * cancelFileUpload - Cancel file upload
   *
   * ### Description:
   * Cancel a (S3) file upload and destroy the upload channel.
   * 
   * ### Precondition:
   * An upload channel has been created and user has to be the creator of the upload channel.
   * 
   * ### Postcondition:
   * The upload channel is removed and all temporary uploaded data is purged.
   * 
   * ### Further Information:
   * It is recommended to notify the API about cancelled uploads if possible.
  **/
  cancelFileUpload(
    req: operations.CancelFileUploadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CancelFileUploadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CancelFileUploadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v4/nodes/files/uploads/{upload_id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "delete",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CancelFileUploadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 504:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * changePendingAssignments - Handle user-room assignments per group
   *
   * ### Description:  
   * Handles a list of user-room assignments by groups that have **NOT** been approved yet  
   * **WAITING** or **DENIED** assignments can be **ACCEPTED**.
   * 
   * ### Precondition:
   * None.
   * 
   * ### Postcondition:
   * User-room assignment is approved and the user gets access to the group.
   * 
   * ### Further Information:
   * Room administrators should **SHOULD** handle pending assignments to provide access to rooms for other users.
  **/
  changePendingAssignments(
    req: operations.ChangePendingAssignmentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ChangePendingAssignmentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ChangePendingAssignmentsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v4/nodes/rooms/pending";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
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
        const res: operations.ChangePendingAssignmentsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * completeFileUpload - Complete file upload
   *
   * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128679; Deprecated since v4.9.0</h3>
   * 
   * ### Use `uploads` API
   * 
   * ### Description:
   * Finishes an upload and closes the corresponding upload channel.
   * 
   * ### Precondition:
   * An upload channel has been created and data has been transmitted.
   * 
   * ### Postcondition:
   * The upload is finished and the temporary file is moved to the productive environment.
   * 
   * ### Further Information:
   * The provided file name might be changed in accordance with the resolution strategy:  
   * * **autorename**: changes the file name and adds a number to avoid conflicts.
   * * **overwrite**: deletes any old file with the same file name.
   * * **fail**: returns an error; in this case, another `PUT` request with a different file name may be sent.
   * 
   * Please ensure that all chunks have been transferred correctly before finishing the upload.  
   * Download share id (if exists) gets changed if:
   * - node with the same name exists in the target container
   * - `resolutionStrategy` is `overwrite`
   * - `keepShareLinks` is `true`
   * 
   * ### Node naming convention:
   * * Node (room, folder, file) names are limited to **150** characters.
   * * Illegal names:  
   * `'CON', 'PRN', 'AUX', 'NUL', 'COM1', 'COM2', 'COM3', 'COM4', 'COM5', 'COM6', 'COM7', 'COM8', 'COM9', 'LPT1', 'LPT2', 'LPT3', 'LPT4', 'LPT5', 'LPT6', 'LPT7', 'LPT8', 'LPT9', (and any of those with an extension)`
   * * Illegal characters in names:  
   * `'\\', '<','>', ':', '\"', '|', '?', '*', '/', leading '-', trailing '.' `
  **/
  completeFileUpload(
    req: operations.CompleteFileUploadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CompleteFileUploadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CompleteFileUploadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v4/nodes/files/uploads/{upload_id}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
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
        const res: operations.CompleteFileUploadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.node = httpRes?.data;
            }
            break;
          case httpRes?.status == 202:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.node = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 409:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 507:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * completeS3FileUpload - Complete S3 file upload
   *
   * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.15.0</h3>
   * 
   * ### Description:
   * Finishes a S3 file upload and closes the corresponding upload channel.
   * 
   * ### Precondition:
   * An upload channel has been created, data has been transmitted and user has to be the creator of the upload channel
   * 
   * ### Postcondition:
   * Upload channel is closed. S3 multipart upload request is completed.
   * 
   * ### Further Information:
   * Download share id (if exists) gets changed if:
   * - node with the same name exists in the target container
   * - `resolutionStrategy` is `overwrite`
   * - `keepShareLinks` is `true`
  **/
  completeS3FileUpload(
    req: operations.CompleteS3FileUploadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CompleteS3FileUploadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CompleteS3FileUploadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v4/nodes/files/uploads/{upload_id}/s3", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
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
        const res: operations.CompleteS3FileUploadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 202:
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 409:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 504:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * configureRoom - Configure room
   *
   * ### Description:
   * Configure a room.
   * 
   * ### Precondition:
   * User needs to be a <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Room Administrator</span>.
   * 
   * ### Postcondition:
   * Room's configuration is changed.
   * 
   * ### Further Information:
   * Provided (or default) classification is taken from room when file gets uploaded without any classification.  
   * 
   * To set `adminIds` or `adminGroupIds` the `inheritPermissions` value has to be `false`. Otherwise use:
   * * `PUT /nodes/rooms/{room_id}/groups`
   * * `PUT /nodes/rooms/{room_id}/users `  
   * 
   * APIs.
  **/
  configureRoom(
    req: operations.ConfigureRoomRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ConfigureRoomResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ConfigureRoomRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v4/nodes/rooms/{room_id}/config", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
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
        const res: operations.ConfigureRoomResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.node = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 409:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * copyNodes - Copy node(s)
   *
   * ### Description:
   * Copies nodes (folder, file) to another parent.
   * 
   * ### Precondition:
   * Authenticated user with <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span> permissions in the source parent and <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; create</span> permissions in the target parent node.
   * 
   * ### Postcondition:
   * Nodes are copied to target parent.
   * 
   * ### Further Information:
   * Nodes **MUST** be in same source parent.  
   * **Rooms **CANNOT** be copied.**
   * 
   * Download share id (if exists) gets changed if:
   * - node with the same name exists in the target container
   * - `resolutionStrategy` is `overwrite`
   * - `keepShareLinks` is `true`
   * 
   * ### Node naming convention:
   * * Node (room, folder, file) names are limited to **150** characters.
   * * Illegal names:  
   * `'CON', 'PRN', 'AUX', 'NUL', 'COM1', 'COM2', 'COM3', 'COM4', 'COM5', 'COM6', 'COM7', 'COM8', 'COM9', 'LPT1', 'LPT2', 'LPT3', 'LPT4', 'LPT5', 'LPT6', 'LPT7', 'LPT8', 'LPT9', (and any of those with an extension)`
   * * Illegal characters in names:  
   * `'\\', '<','>', ':', '\"', '|', '?', '*', '/', leading '-', trailing '.' `
   * 
  **/
  copyNodes(
    req: operations.CopyNodesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CopyNodesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CopyNodesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v4/nodes/{node_id}/copy_to", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
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
        const res: operations.CopyNodesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.node = httpRes?.data;
            }
            break;
          case httpRes?.status == 204:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.copyNodes204ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 409:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 507:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createAndPreserveRoomRescueKeyPair - Create key pair and preserve copy of old private key
   *
   * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.24.0</h3>
   * 
   * ### Description:  
   * Create room rescue key pair and preserve copy of old private key.
   * 
   * ### Precondition:
   * User needs to be a <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Room Administrator</span>.
   * 
   * ### Postcondition:
   * Room rescue key pair is created.  
   * Copy of old private key is preserved.
   * 
   * ### Further Information:
   * You can submit your old private key, encrypted with your current password.  
   * This allows migrating file keys encrypted with your old key pair to the new one.
  **/
  createAndPreserveRoomRescueKeyPair(
    req: operations.CreateAndPreserveRoomRescueKeyPairRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateAndPreserveRoomRescueKeyPairResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateAndPreserveRoomRescueKeyPairRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v4/nodes/rooms/{room_id}/keypairs", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
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
        const res: operations.CreateAndPreserveRoomRescueKeyPairResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createFileUploadChannel - Create new file upload channel
   *
   * ### Description:
   * This endpoint creates a new upload channel which is the first step in any file upload workflow.
   * 
   * ### Precondition:
   * User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; create</span> permissions in the parent container (room or folder).
   * 
   * ### Postcondition:
   * A new upload channel for a file is created.  
   * Its ID and an upload token are returned.
   * 
   * ### Further Information:
   * The upload ID is used for uploads with `X-Sds-Auth-Token` header, the upload token can be used for uploads without authentication header.
   * 
   * Please provide the size of the intended upload so that the quota can be checked in advanced and no data is transferred unnecessarily.
   * 
   * Notes are limited to **255** characters.
   * 
   * ### Node naming convention:
   * * Node (room, folder, file) names are limited to **150** characters.
   * * Illegal names:  
   * `'CON', 'PRN', 'AUX', 'NUL', 'COM1', 'COM2', 'COM3', 'COM4', 'COM5', 'COM6', 'COM7', 'COM8', 'COM9', 'LPT1', 'LPT2', 'LPT3', 'LPT4', 'LPT5', 'LPT6', 'LPT7', 'LPT8', 'LPT9', (and any of those with an extension)`
   * * Illegal characters in names:  
   * `'\\', '<','>', ':', '\"', '|', '?', '*', '/', leading '-', trailing '.' `
   * 
  **/
  createFileUploadChannel(
    req: operations.CreateFileUploadChannelRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateFileUploadChannelResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateFileUploadChannelRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v4/nodes/files/uploads";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
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
        const res: operations.CreateFileUploadChannelResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.createFileUploadResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 504:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 507:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createFolder - Create new folder
   *
   * ### Description:
   * Create a new folder.
   * 
   * ### Precondition:
   * User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; create</span> permissions in current room.
   * 
   * ### Postcondition:
   * New folder is created.
   * 
   * ### Further Information:
   * Folders **CANNOT** be created on top level (without parent element).  
   * Notes are limited to **255** characters.
   * 
   * ### Node naming convention:
   * * Node (room, folder, file) names are limited to **150** characters.
   * * Illegal names:  
   * `'CON', 'PRN', 'AUX', 'NUL', 'COM1', 'COM2', 'COM3', 'COM4', 'COM5', 'COM6', 'COM7', 'COM8', 'COM9', 'LPT1', 'LPT2', 'LPT3', 'LPT4', 'LPT5', 'LPT6', 'LPT7', 'LPT8', 'LPT9', (and any of those with an extension)`
   * * Illegal characters in names:  
   * `'\\', '<','>', ':', '\"', '|', '?', '*', '/', leading '-', trailing '.' `
   * 
  **/
  createFolder(
    req: operations.CreateFolderRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateFolderResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateFolderRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v4/nodes/folders";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
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
        const res: operations.CreateFolderResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.node = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 409:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createNodeComment - Create node comment
   *
   * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.10.0</h3>
   * 
   * ### Description:
   * Create a comment for a specific node.
   * 
   * ### Precondition:
   * User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span> permissions on the node.
   * 
   * ### Postcondition:
   * Comment is created.
   * 
   * ### Further Information:
   * Maximum allowed text length: **65535** characters.
  **/
  createNodeComment(
    req: operations.CreateNodeCommentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateNodeCommentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateNodeCommentRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v4/nodes/{node_id}/comments", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
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
        const res: operations.CreateNodeCommentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.comment = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createRoom - Create new room
   *
   * ### Description:
   * Creates a new room at the provided parent node.  
   * Creation of top level rooms provided.
   * 
   * ### Precondition:
   * User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage</span> permissions in the parent room.
   * 
   * ### Postcondition:
   * A new room is created.
   * 
   * ### Further Information:  
   * Rooms may only have other rooms as parent.  
   * Rooms on top level do **NOT** have any parent.  
   * Rooms may have rooms as children on n hierarchy levels.  
   * If permission inheritance is disabled, there **MUST** be at least one admin user / group (with neither the group nor the user having an expiration date).
   * 
   * Notes are limited to **255** characters.
   * 
   * Provided (or default) classification is taken from room when file gets uploaded without any classification.
   * 
   * ### Node naming convention:
   * * Node (room, folder, file) names are limited to **150** characters.
   * * Illegal names:  
   * `'CON', 'PRN', 'AUX', 'NUL', 'COM1', 'COM2', 'COM3', 'COM4', 'COM5', 'COM6', 'COM7', 'COM8', 'COM9', 'LPT1', 'LPT2', 'LPT3', 'LPT4', 'LPT5', 'LPT6', 'LPT7', 'LPT8', 'LPT9', (and any of those with an extension)`
   * * Illegal characters in names:  
   * `'\\', '<','>', ':', '\"', '|', '?', '*', '/', leading '-', trailing '.' `
  **/
  createRoom(
    req: operations.CreateRoomRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateRoomResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateRoomRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v4/nodes/rooms";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
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
        const res: operations.CreateRoomResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.node = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 409:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * downloadFile - Download file
   *
   * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128679; Deprecated since v4.3.0</h3>
   * 
   * ### Use `downloads` API
   * 
   * ### Description:
   * Download a file.
   * 
   * ### Precondition:
   * User with <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span> permissions in parent room.
   * 
   * ### Postcondition:
   * Stream is returned.
   * 
   * ### Further Information:
   * Range requests are supported for details.
   *
   * https://tools.ietf.org/html/rfc7233 - Range Requests
  **/
  downloadFile(
    req: operations.DownloadFileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DownloadFileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DownloadFileRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v4/nodes/files/{file_id}/downloads", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DownloadFileResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 206:
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/octet-stream`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/octet-stream`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/octet-stream`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/octet-stream`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/octet-stream`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/octet-stream`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 416:
            if (utils.MatchContentType(contentType, `application/octet-stream`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * downloadFile1 - Download file
   *
   * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128679; Deprecated since v4.3.0</h3>
   * 
   * ### Use `downloads` API
   * 
   * ### Description:
   * Download a file.
   * 
   * ### Precondition:
   * User with <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span> permissions in parent room.
   * 
   * ### Postcondition:
   * Stream is returned.
   * 
   * ### Further Information:
   * Range requests are supported for details.
   *
   * https://tools.ietf.org/html/rfc7233 - Range Requests
  **/
  downloadFile1(
    req: operations.DownloadFile1Request,
    config?: AxiosRequestConfig
  ): Promise<operations.DownloadFile1Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DownloadFile1Request(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v4/nodes/files/{file_id}/downloads", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "head",
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DownloadFile1Response = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 206:
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/octet-stream`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/octet-stream`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/octet-stream`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/octet-stream`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/octet-stream`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/octet-stream`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 416:
            if (utils.MatchContentType(contentType, `application/octet-stream`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * downloadZipArchive - Download files / folders as ZIP archive
   *
   * ### Description:  
   * Download multiple files in a ZIP archive.
   * 
   * ### Precondition:
   * User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span> permissions in auth parent room.
   * 
   * ### Postcondition:
   * Stream is returned.
   * 
   * ### Further Information:
   * None.
  **/
  downloadZipArchive(
    req: operations.DownloadZipArchiveRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DownloadZipArchiveResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DownloadZipArchiveRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v4/nodes/zip/download";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
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
        const res: operations.DownloadZipArchiveResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/octet-stream`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/octet-stream`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/octet-stream`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/octet-stream`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/octet-stream`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/octet-stream`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * emptyDeletedNodes - Empty recycle bin
   *
   * ### Description:  
   * Empty a recycle bin.
   * 
   * ### Precondition:
   * User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; delete recycle bin</span> permissions in parent room.
   * 
   * ### Postcondition:
   * All files in the recycle bin are permanently removed.
   * 
   * ### Further Information:
   * Actually removes the previously deleted files from the system.  
   * **This action is irreversible.**
  **/
  emptyDeletedNodes(
    req: operations.EmptyDeletedNodesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EmptyDeletedNodesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EmptyDeletedNodesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v4/nodes/{node_id}/deleted_nodes", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "delete",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.EmptyDeletedNodesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * encryptRoom - Encrypt room
   *
   * ### Description:  
   * Activates the client-side encryption for a room.
   * 
   * ### Precondition:
   * User needs to be a <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Room Administrator</span>.
   * 
   * ### Postcondition:
   * Encryption of room is activated.
   * 
   * ### Further Information:
   * Only empty rooms at the top level may be encrypted.  
   * This endpoint may also be used to disable encryption of an empty room.
  **/
  encryptRoom(
    req: operations.EncryptRoomRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EncryptRoomResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EncryptRoomRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v4/nodes/rooms/{room_id}/encrypt", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
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
        const res: operations.EncryptRoomResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.node = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * generateDownloadUrl - Generate download URL
   *
   * ### Description:
   * Create a download URL to retrieve a file without `X-Sds-Auth-Token` Header.
   * 
   * ### Precondition:
   * User with <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span> permissions in parent room.
   * 
   * ### Postcondition:
   * Download token is generated and returned.
   * 
   * ### Further Information:
   * The token is necessary to access `downloads` ressources.
  **/
  generateDownloadUrl(
    req: operations.GenerateDownloadUrlRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GenerateDownloadUrlResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GenerateDownloadUrlRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v4/nodes/files/{file_id}/downloads", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GenerateDownloadUrlResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.downloadTokenGenerateResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * generateDownloadUrlForZipArchive - Generate download URL for ZIP download
   *
   * ### Description:  
   * Create a download URL to retrieve several files in one ZIP archive.
   * 
   * ### Precondition:
   * User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span> permissions in parent room.
   * 
   * ### Postcondition:
   * Download URL is generated and returned.
   * 
   * ### Further Information:
   * The token is necessary to access `downloads` resources.  
   * ZIP download is only available for files and folders.
  **/
  generateDownloadUrlForZipArchive(
    req: operations.GenerateDownloadUrlForZipArchiveRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GenerateDownloadUrlForZipArchiveResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GenerateDownloadUrlForZipArchiveRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v4/nodes/zip";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
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
        const res: operations.GenerateDownloadUrlForZipArchiveResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.downloadTokenGenerateResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * generatePresignedUrlsFiles - Generate presigned URLs for S3 file upload
   *
   * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.15.0</h3>
   * 
   * ### Description:
   * Generate presigned URLs for S3 file upload.
   * 
   * ### Precondition:
   * An upload channel has been created and user has to be the creator of the upload channel.
   * 
   * ### Postcondition:
   * List of presigned URLs is returned.
   * 
   * ### Further Information:
   * The size for each part must be >= 5 MB, except for the last part.  
   * The part number of the first part in S3 is 1 (not 0).  
   * Use HTTP method `PUT` for uploading bytes via presigned URL.
  **/
  generatePresignedUrlsFiles(
    req: operations.GeneratePresignedUrlsFilesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GeneratePresignedUrlsFilesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GeneratePresignedUrlsFilesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v4/nodes/files/uploads/{upload_id}/s3_urls", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
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
        const res: operations.GeneratePresignedUrlsFilesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.presignedUrlList = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 504:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 507:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * handleRoomWebhookAssignments - Assign or unassign webhooks to room
   *
   * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.19.0</h3>
   * 
   * ### Description:  
   * Handle room webhook assignments.
   * 
   * ### Precondition:
   * User needs to be a <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Room Administrator</span>.
   * 
   * ### Postcondition:
   * List of webhooks is returned.
   * 
   * ### Further Information:
   * None.
   * 
   * ### Available event types:
   * 
   * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
   * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
   * 
   * | Name | Description | Scope |
   * | :--- | :--- | :--- |
   * | **`downloadshare.created`** | Triggered when a new download share is created in affected room | Node Webhook |
   * | **`downloadshare.deleted`** | Triggered when a download share is deleted in affected room | Node Webhook |
   * | **`downloadshare.used`** | Triggered when a download share is utilized in affected room | Node Webhook |
   * | **`uploadshare.created`** | Triggered when a new upload share is created in affected room | Node Webhook |
   * | **`uploadshare.deleted`** | Triggered when a upload share is deleted in affected room | Node Webhook |
   * | **`uploadshare.used`** | Triggered when a new file is uploaded via the upload share in affected room | Node Webhook |
   * | **`file.created`** | Triggered when a new file is uploaded in affected room | Node Webhook |
   * | **`folder.created`** | Triggered when a new folder is created in affected room | Node Webhook |
   * | **`room.created`** | Triggered when a new room is created (in affected room) | Node Webhook |
   * | **`file.deleted`** | Triggered when a file is deleted in affected room | Node Webhook |
   * | **`folder.deleted`** | Triggered when a folder is deleted in affected room | Node Webhook |
   * | **`room.deleted`** | Triggered when a room is deleted in affected room | Node Webhook |
   * 
   * </details>
  **/
  handleRoomWebhookAssignments(
    req: operations.HandleRoomWebhookAssignmentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.HandleRoomWebhookAssignmentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.HandleRoomWebhookAssignmentsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v4/nodes/rooms/{room_id}/webhooks", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
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
        const res: operations.HandleRoomWebhookAssignmentsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.roomWebhookList = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * moveNodes - Move node(s)
   *
   * ### Description:  
   * Moves nodes (folder, file) to another parent.
   * 
   * ### Precondition:
   * Authenticated user with <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span> and <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; delete</span> permissions in the source parent and <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; create</span> permissions in the target parent node.
   * 
   * ### Postcondition:
   * Nodes are moved to target parent.
   * 
   * ### Further Information:
   * Nodes **MUST** be in same source parent.  
   * **Rooms **CANNOT** be moved.**
   * 
   * Download share id (if exists) gets changed if:
   * - node with the same name exists in the target container
   * - `resolutionStrategy` is `overwrite`
   * - `keepShareLinks` is `true`
   * 
   * ### Node naming convention:
   * * Node (room, folder, file) names are limited to **150** characters.
   * * Illegal names:  
   * `'CON', 'PRN', 'AUX', 'NUL', 'COM1', 'COM2', 'COM3', 'COM4', 'COM5', 'COM6', 'COM7', 'COM8', 'COM9', 'LPT1', 'LPT2', 'LPT3', 'LPT4', 'LPT5', 'LPT6', 'LPT7', 'LPT8', 'LPT9', (and any of those with an extension)`
   * * Illegal characters in names:  
   * `'\\', '<','>', ':', '\"', '|', '?', '*', '/', leading '-', trailing '.' `
   * 
  **/
  moveNodes(
    req: operations.MoveNodesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.MoveNodesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.MoveNodesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v4/nodes/{node_id}/move_to", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
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
        const res: operations.MoveNodesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.node = httpRes?.data;
            }
            break;
          case httpRes?.status == 204:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.moveNodes204ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 409:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 507:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * removeDeletedNodes - Remove nodes from recycle bin
   *
   * ### Description:
   * Permanently remove a list of nodes from the recycle bin.
   * 
   * ### Precondition:
   * User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; delete recycle bin</span> permissions in parent room.
   * 
   * ### Postcondition:
   * All provided nodes are removed.
   * 
   * ### Further Information:
   * The removal of deleted nodes from the recycle bin is irreversible.
  **/
  removeDeletedNodes(
    req: operations.RemoveDeletedNodesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RemoveDeletedNodesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RemoveDeletedNodesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v4/nodes/deleted_nodes";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "delete",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RemoveDeletedNodesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * removeFavorite - Unmark a node (room, folder or file) as favorite
   *
   * ### Description:
   * Unmarks a node (room, folder or file) as favorite.
   * 
   * ### Precondition:
   * Authenticated user is allowed to <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128065; see</span> the node (i.e. `isBrowsable = true`).
   * 
   * ### Postcondition:
   * A node gets unmarked as favorite.
   * 
   * ### Further Information:
   * None.
  **/
  removeFavorite(
    req: operations.RemoveFavoriteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RemoveFavoriteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RemoveFavoriteRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v4/nodes/{node_id}/favorite", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "delete",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RemoveFavoriteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * removeNode - Remove node
   *
   * ### Description:
   * Delete node (room, folder or file).
   * 
   * ### Precondition:
   * Authenticated user with <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; delete</span> permissions on supplied nodes (for folders or files) or on superordinated node (for rooms).
   * 
   * ### Postcondition:
   * Node gets deleted.
   * 
   * ### Further Information:
   * None.
  **/
  removeNode(
    req: operations.RemoveNodeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RemoveNodeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RemoveNodeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v4/nodes/{node_id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "delete",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RemoveNodeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * removeNodeComment - Remove node comment
   *
   * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.10.0</h3>
   * 
   * ### Description:
   * Delete an existing comment for a specific node.
   * 
   * ### Precondition:
   * User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span> permissions on the node and is the creator of the comment **OR** <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Room Administrator</span> in auth parent room.
   * 
   * ### Postcondition:
   * Comment is deleted.
   * 
   * ### Further Information:
   * None.
  **/
  removeNodeComment(
    req: operations.RemoveNodeCommentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RemoveNodeCommentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RemoveNodeCommentRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v4/nodes/comments/{comment_id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "delete",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RemoveNodeCommentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * removeNodes - Remove nodes
   *
   * ### Description:
   * Delete nodes (room, folder or file).
   * 
   * ### Precondition:
   * Authenticated user with <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; delete</span> permissions on supplied nodes (for folders or files) or on superordinated node (for rooms).
   * 
   * ### Postcondition:
   * Nodes are deleted.
   * 
   * ### Further Information:
   * Nodes **MUST** be in same parent.
  **/
  removeNodes(
    req: operations.RemoveNodesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RemoveNodesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RemoveNodesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v4/nodes";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "delete",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RemoveNodesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * removeRoomRescueKeyPair - Remove rooms's rescue key pair
   *
   * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.24.0</h3>
   * 
   * ### Description:  
   * Delete room rescue key pair.
   * 
   * ### Precondition:
   * Authenticated user.
   * 
   * ### Postcondition:
   * Key pair is removed (cf. further information below).
   * 
   * ### Further Information:
   * Please set a new room rescue key pair first and re-encrypt file keys with it.  
   * If no version is set, deleted key pair with lowest preference value.  
   * Although, `version` **SHOULD** be set.
   * 
  **/
  removeRoomRescueKeyPair(
    req: operations.RemoveRoomRescueKeyPairRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RemoveRoomRescueKeyPairResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RemoveRoomRescueKeyPairRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v4/nodes/rooms/{room_id}/keypair", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "delete",
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RemoveRoomRescueKeyPairResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * requestDeletedNode - Request deleted node
   *
   * ### Description:  
   * Get metadata of a deleted node.
   * 
   * ### Precondition:
   * User can access parent room and has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read recycle bin</span> permissions.
   * 
   * ### Postcondition:
   * Requested deleted node is returned.
   * 
   * ### Further Information:
   * None.
  **/
  requestDeletedNode(
    req: operations.RequestDeletedNodeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RequestDeletedNodeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RequestDeletedNodeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v4/nodes/deleted_nodes/{deleted_node_id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RequestDeletedNodeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.deletedNode = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * requestDeletedNodeVersions - Request deleted versions of nodes
   *
   * ### Description:  
   * Retrieve all deleted versions of a node.
   * 
   * ### Precondition:
   * User can access parent room and has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read recycle bin</span> permissions.
   * 
   * ### Postcondition:
   * List of deleted versions of a node is returned.
   * 
   * ### Further Information:
   * The node is identified by three parameters:
   * * parent ID
   * * name
   * * type (file, folder).
   * 
   * Sort string syntax: `FIELD_NAME:ORDER`  
   * `ORDER` can be `asc` or `desc`.  
   * Multiple sort criteria are possible.  
   * Fields are connected via logical conjunction **AND**.
   * 
   * <details style="padding-left: 10px">
   * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
   * 
   * `expireAt:desc|size:asc`  
   * Sort by `expireAt` descending **AND** `size` ascending.
   * 
   * </details>
   * 
   * ### Sorting options:
   * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
   * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
   * 
   * | `FIELD_NAME` | Description |
   * | :--- | :--- |
   * | `expireAt` | Expiration date |
   * | `accessedAt` | Last access date |
   * | `size` | Node size |
   * | `classification` | Classification ID:<ul><li>1 - public</li><li>2 - internal</li><li>3 - confidential</li><li>4 - strictly confidential</li></ul> |
   * | `createdAt` | Creation date |
   * | `createdBy` | Creator first name, last name |
   * | `updatedAt` | Last modification date |
   * | `updatedBy` | Last modifier first name, last name |
   * | `deletedAt` | Deleted date |
   * | `deletedBy` | Deleter first name, last name |
   * 
   * </details>
  **/
  requestDeletedNodeVersions(
    req: operations.RequestDeletedNodeVersionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RequestDeletedNodeVersionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RequestDeletedNodeVersionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v4/nodes/{node_id}/deleted_nodes/versions", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RequestDeletedNodeVersionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.deletedNodeVersionsList = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * requestDeletedNodesSummary - Request list of deleted nodes
   *
   * ### Description:  
   * Retrieve a list of deleted nodes in a recycle bin.
   * 
   * ### Precondition:
   * User can access parent room and has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read recycle bin</span> permissions.
   * 
   * ### Postcondition:
   * List of deleted nodes is returned.
   * 
   * ### Further Information:
   * Only room IDs are accepted as parent ID since only rooms may have a recycle bin.
   * 
   * ### Filtering:
   * All filter fields are connected via logical conjunction (**AND**)  
   * Filter string syntax: `FIELD_NAME:OPERATOR:VALUE[:VALUE...]`  
   * 
   * <details style="padding-left: 10px">
   * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
   * 
   * `type:eq:file:folder|name:cn:searchString_1|parentPath:cn:searchString_2`  
   * Get deleted nodes where type equals (`file` **OR** `folder`) **AND** deleted node name containing `searchString_1` **AND** deleted node parent path containing `searchString 2`.
   * 
   * </details>
   * 
   * ### Filtering options:
   * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
   * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
   * 
   * | `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
   * | :--- | :--- | :--- | :--- | :--- |
   * | `type` | Node type filter | `eq` | Node type equals value(s).<br>Multiple values are allowed and will be connected via logical disjunction (**OR**).<br>e.g. `type:eq:folder:file` | <ul><li>`folder`</li><li>`file`</li></ul> |
   * | `name` | Node name filter | `cn` | Node name contains value. | `search String` |
   * | `parentPath` | Parent path filter | `cn` | Parent path contains value. | `search String` |
   * | `timestampCreation` | Creation timestamp filter | `ge, le` | Creation timestamp is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `timestampCreation:ge:2016-12-31`&#124;<br>`timestampCreation:le:2018-01-01` | `Date (yyyy-MM-dd)` |
   * | `timestampModification` | Modification timestamp filter | `ge, le` | Modification timestamp is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `timestampModification:ge:2016-12-31T23:00:00.123`&#124;<br>`timestampModification:le:2018-01-01T11:00:00.540` | `Date (yyyy-MM-dd)` |
   * 
   * </details>
   * 
   * ---
   * 
   * ### Sorting:
   * Sort string syntax: `FIELD_NAME:ORDER`  
   * `ORDER` can be `asc` or `desc`.  
   * Multiple sort criteria are possible.  
   * Fields are connected via logical conjunction **AND**.  
   * Nodes are sorted by type first, then by sent sort string.  
   * 
   * <details style="padding-left: 10px">
   * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
   * 
   * `name:desc|timestampCreation:asc`  
   * Sort by `name` descending **AND** `timestampCreation` ascending.
   * 
   * </details>
   * 
   * ### Sorting options:
   * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
   * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
   * 
   * | `FIELD_NAME` | Description |
   * | :--- | :--- |
   * | `name` | Node name |
   * | `cntVersions` | Number of deleted versions of this file |
   * | `firstDeletedAt` | First deleted version |
   * | `lastDeletedAt` | Last deleted version |
   * | `parentPath` | Parent path of deleted node |
   * | `timestampCreation` | Creation timestamp |
   * | `timestampModification` | Modification timestamp |
   * 
   * </details>
  **/
  requestDeletedNodesSummary(
    req: operations.RequestDeletedNodesSummaryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RequestDeletedNodesSummaryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RequestDeletedNodesSummaryRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v4/nodes/{node_id}/deleted_nodes", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RequestDeletedNodesSummaryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.deletedNodeSummaryList = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * requestListOfWebhooksForRoom - Request list of webhooks that are assigned or can be assigned to this room
   *
   * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.19.0</h3>
   * 
   * ### Description:  
   * Get a list of webhooks for the room scope with their assignment status.
   * 
   * ### Precondition:
   * User needs to be a <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Room Administrator</span>.
   * 
   * ### Postcondition:
   * List of webhooks is returned.
   * 
   * ### Further Information:
   * 
   * ### Filtering:
   * All filter fields are connected via logical conjunction (**AND**)  
   * Filter string syntax: `FIELD_NAME:OPERATOR:VALUE[:VALUE...]`  
   * 
   * <details style="padding-left: 10px">
   * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
   * 
   * `isAssigned:eq:true`  
   * Get a list of assigned webhooks to the room.
   * 
   * </details>
   * 
   * ### Filtering options:
   * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
   * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
   * 
   * | `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
   * | :--- | :--- | :--- | :--- | :--- |
   * | **`isAssigned`** | Assigned/unassigned webhooks filter | `eq` |  | `true or false` |
   * 
   * </details>
  **/
  requestListOfWebhooksForRoom(
    req: operations.RequestListOfWebhooksForRoomRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RequestListOfWebhooksForRoomResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RequestListOfWebhooksForRoomRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v4/nodes/rooms/{room_id}/webhooks", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RequestListOfWebhooksForRoomResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.roomWebhookList = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * requestMissingFileKeys - Request files without user's file key
   *
   * ### Description:  
   * Requests a list of missing file keys that may be generated by the current user.  
   * 
   * ### Precondition:
   * User has a key pair.  
   * Only returns users that owns one of the following permissions: <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage</span>, <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span>, <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage download share</span>
   * 
   * ### Postcondition:
   * None.
   * 
   * ### Further Information:
   * Clients **SHOULD** regularly request missing file keys to provide access to files for other users.  
   * The returned list is ordered by priority (emergency passwords / rescue keys are returned first).
   * There is an enforced limit of **100** items per request.
   * A total value greater than limit signals that there are more entries but does not necessarily reflect the precise
   * number of total items.
   * 
  **/
  requestMissingFileKeys(
    req: operations.RequestMissingFileKeysRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RequestMissingFileKeysResponseOutput> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RequestMissingFileKeysRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v4/nodes/missingFileKeys";
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RequestMissingFileKeysResponseOutput = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.missingKeysResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * requestNode - Request node
   *
   * ### Description:  
   * Get node (room, folder or file).
   * 
   * ### Precondition:
   * User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span> permissions in auth parent room.
   * 
   * ### Postcondition:
   * Requested node is returned.
   * 
   * ### Further Information:
   * None.
  **/
  requestNode(
    req: operations.RequestNodeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RequestNodeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RequestNodeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v4/nodes/{node_id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RequestNodeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.node = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * requestNodeComments - Request list of node comments
   *
   * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.10.0</h3>
   * 
   * ### Description:
   * Get comments for a specific node.
   * 
   * ### Precondition:
   * User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span> permissions on the node.
   * 
   * ### Postcondition:
   * List with comments (sorted by `createdAt` timestamp) is returned.
   * 
   * ### Further Information:
   * An empty list is returned if no comments were found.  
   * Output is limited to **500** entries.  
   * For more results please use filter criteria and paging (`offset` + `limit`). 
   * 
  **/
  requestNodeComments(
    req: operations.RequestNodeCommentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RequestNodeCommentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RequestNodeCommentsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v4/nodes/{node_id}/comments", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RequestNodeCommentsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.commentList = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * requestNodeParents - Request list of parent nodes
   *
   * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.10.0</h3>
   * 
   * ### Description:  
   * Requests a list of node ancestors, sorted from root node to the node's direct parent node.
   * 
   * ### Precondition:
   * User is allowed to browse through the node tree until the requested node.
   * 
   * ### Postcondition:
   * List of parent nodes is returned.
   * 
   * ### Further Information:
   * None.
  **/
  requestNodeParents(
    req: operations.RequestNodeParentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RequestNodeParentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RequestNodeParentsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v4/nodes/{node_id}/parents", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RequestNodeParentsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.nodeParentList = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * requestNodes - Request list of nodes
   *
   * ### Description:  
   * Provides a hierarchical list of file system nodes (rooms, folders or files) of a given parent that are accessible by the current user.
   * 
   * ### Precondition:
   * Authenticated user.
   * 
   * ### Postcondition:
   * List of nodes is returned.
   * 
   * ### Further Information:
   * `EncryptionInfo` is **NOT** provided.
   * 
   * ### Filtering:
   * All filter fields are connected via logical conjunction (**AND**)  
   * Filter string syntax: `FIELD_NAME:OPERATOR:VALUE[:VALUE...]`  
   * 
   * <details style="padding-left: 10px">
   * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
   * 
   * `type:eq:room:folder|perm:eq:read`  
   * Get nodes where type equals (`room` **OR** `folder`) **AND** user has `read` permissions.
   * 
   * </details>
   * 
   * ### Filtering options:
   * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
   * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
   * 
   * | `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
   * | :--- | :--- | :--- | :--- | :--- |
   * | `type` | Node type filter | `eq` | Node type equals value.<br>Multiple values are allowed and will be connected via logical disjunction (**OR**).<br>e.g. `type:eq:room:folder` | <ul><li>`room`</li><li>`folder`</li><li>`file`</li></ul> |
   * | `perm` | Permission filter | `eq` | Permission equals value.<br>Multiple values are allowed and will be connected via logical disjunction (**OR**).<br>e.g. `perm:eq:read:create:delete` | <ul><li>`manage`</li><li>`read`</li><li>`change`</li><li>`create`</li><li>`delete`</li><li>`manageDownloadShare`</li><li>`manageUploadShare`</li><li>`canReadRecycleBin`</li><li>`canRestoreRecycleBin`</li><li>`canDeleteRecycleBin`</li></ul> |
   * | `childPerm` | Same as `perm`, but less restrictive (applies to child nodes only).<br>Child nodes of the parent node which do not meet the filter condition<br>are **NOT** returned. | `eq` | cf. `perm` | cf. `perm` |
   * | `name` | Node name filter | `cn, eq` | Node name contains / equals value. | `search String` |
   * | `encrypted` | Node encryption status filter | `eq` |  | `true or false` |
   * | `branchVersion` | Node branch version filter | `ge, le` | Branch version is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `branchVersion:ge:1423280937404`&#124;`branchVersion:le:1523280937404` | `version number` |
   * | `timestampCreation` | Creation timestamp filter | `ge, le` | Creation timestamp is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `timestampCreation:ge:2016-12-31T23:00:00.123`&#124;<br>`timestampCreation:le:2018-01-01T11:00:00.540` | `Date (yyyy-MM-dd)` |
   * | `timestampModification` | Modification timestamp filter | `ge, le` | Modification timestamp is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `timestampModification:ge:2016-12-31T23:00:00.123`&#124;<br>`timestampModification:le:2018-01-01T11:00:00.540` | `Date (yyyy-MM-dd)` |
   * 
   * </details>
   * 
   * ---
   * 
   * ### Sorting:
   * Sort string syntax: `FIELD_NAME:ORDER`  
   * `ORDER` can be `asc` or `desc`.  
   * Multiple sort criteria are possible.  
   * Fields are connected via logical conjunction **AND**.  
   * Nodes are sorted by type first, then by sent sort string.  
   * 
   * <details style="padding-left: 10px">
   * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
   * 
   * `name:desc|fileType:asc`  
   * Sort by `name` descending **AND** `fileType` ascending.
   * 
   * </details>
   * 
   * ### Sorting options:
   * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
   * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
   * 
   * | `FIELD_NAME` | Description |
   * | :--- | :--- |
   * | `name` | Node name |
   * | `createdAt` | Creation date |
   * | `createdBy` | Creator first name, last name |
   * | `updatedAt` | Last modification date |
   * | `updatedBy` | Last modifier first name, last name |
   * | `fileType` | File type (extension) |
   * | `classification` | Classification ID:<ul><li>1 - public</li><li>2 - internal</li><li>3 - confidential</li><li>4 - strictly confidential</li></ul> |
   * | `size` | Node size |
   * | `cntDeletedVersions` | Number of deleted versions of this file / folder (**NOT** recursive; for files and folders only) |
   * | `timestampCreation` | Creation timestamp |
   * | `timestampModification` | Modification timestamp |
   * 
   * </details>
   * 
   * ### Deprecated sorting options:
   * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
   * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
   * 
   * | `FIELD_NAME` | Description |
   * | :--- | :--- |
   * | <del>`cntAdmins`</del> | Number of admins (for rooms only) |
   * | <del>`cntUsers`</del> | Number of users (for rooms only) |
   * | <del>`cntChildren`</del> | Number of direct children (**NOT** recursive; for rooms and folders only) |
   * 
   * </details>
  **/
  requestNodes(
    req: operations.RequestNodesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RequestNodesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RequestNodesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v4/nodes";
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RequestNodesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.nodeList = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * requestPendingAssignments - Request user-room assignments per group
   *
   * ### Description:  
   * Requests a list of user-room assignments by groups that have **NOT** been approved yet  
   * These can have the state:
   * * **WAITING**  
   * * **DENIED**  
   * * **ACCEPTED**  
   * 
   * **ACCEPTED** assignments are already removed from the list.
   * 
   * ### Precondition:
   * None.
   * 
   * ### Postcondition:
   * List of user-room assignments is returned.
   * 
   * ### Further Information:
   * Room administrators **SHOULD** regularly request pending assingments to provide access to rooms for other users.
   * 
   * ### Filtering:
   * All filter fields are connected via logical conjunction (**AND**)  
   * Filter string syntax: `FIELD_NAME:OPERATOR:VALUE`  
   * 
   * <details style="padding-left: 10px">
   * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
   * 
   * `state:eq:WAITING`  
   * Filter assignments by state `WAITING`.
   * 
   * </details>
   * 
   * ### Filtering options:
   * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
   * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
   * 
   * | `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
   * | :--- | :--- | :--- | :--- | :--- |
   * | `userId` | User ID filter | `eq` | User ID equals value. | `positive Integer` |
   * | `groupId` | Group ID filter | `eq` | Group ID equals value. | `positive Integer` |
   * | `roomId` | Room ID filter | `eq` | Room ID equals value. | `positive Integer` |
   * | `state` | Assignment state | `eq` | Assignment state equals value. | `WAITING or DENIED` |
   * 
   * </details>
   * 
   * ---
   * 
   * ### Sorting:
   * Sort string syntax: `FIELD_NAME:ORDER`  
   * `ORDER` can be `asc` or `desc`.  
   * Multiple sort criteria are possible.  
   * Fields are connected via logical conjunction **AND**.
   * 
   * <details style="padding-left: 10px">
   * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
   * 
   * `userId:desc|state:asc`  
   * Sort by `userId` descending **AND** `state` ascending.
   * 
   * </details>
   * 
   * ### Sorting options:
   * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
   * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
   * 
   * | `FIELD_NAME` | Description |
   * | :--- | :--- |
   * | `userId` | User ID |
   * | `groupId` | Group ID |
   * | `roomId` | Room ID |
   * | `state` | State |
   * 
   * </details>
  **/
  requestPendingAssignments(
    req: operations.RequestPendingAssignmentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RequestPendingAssignmentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RequestPendingAssignmentsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v4/nodes/rooms/pending";
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RequestPendingAssignmentsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.pendingAssignmentList = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * requestRoomActivitiesLogAsJson - Request events of a room
   *
   * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.3.0</h3>
   * 
   * ### Description:
   * Retrieve syslog (audit log) events related to a room.
   * 
   * ### Precondition:
   * Requires <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span> permissions on that room.
   * 
   * ### Postcondition:
   * List of events is returned.
   * 
   * ### Further Information:
   * Output may be limited to a certain number of entries.  
   * Please use filter criteria and paging.
   * 
   * Sort string syntax: `FIELD_NAME:ORDER`  
   * `ORDER` can be `asc` or `desc`.  
   * Multiple sort fields are supported.  
   * 
   * <details style="padding-left: 10px">
   * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
   * 
   * `time:desc`  
   * Sort by `time` descending (default sort option).
   * 
   * </details>
   * 
   * ### Sorting options:
   * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
   * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
   * 
   * | `FIELD_NAME` | Description |
   * | :--- | :--- |
   * | `time` | Event timestamp |
   * 
   * </details>
  **/
  requestRoomActivitiesLogAsJson(
    req: operations.RequestRoomActivitiesLogAsJsonRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RequestRoomActivitiesLogAsJsonResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RequestRoomActivitiesLogAsJsonRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v4/nodes/rooms/{room_id}/events", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RequestRoomActivitiesLogAsJsonResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.logEventList = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * requestRoomActivitiesLogAsJsonOld - Request events of a room
   *
   * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128679; Deprecated since v4.3.0</h3>
   * 
   * ### Description:
   * Retrieve syslog (audit log) events related to a room.
   * 
   * ### Precondition:
   * Requires <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span> permissions on that room.
   * 
   * ### Postcondition:
   * List of events is returned.
   * 
   * ### Further Information:
   * Output may be limited to a certain number of entries.  
   * Please use filter criteria and paging.
   * 
   * Sort string syntax: `FIELD_NAME:ORDER`  
   * `ORDER` can be `asc` or `desc`.  
   * Multiple sort fields are supported.  
   * 
   * <details style="padding-left: 10px">
   * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
   * 
   * `time:desc`  
   * Sort by `time` descending (default sort option).
   * 
   * </details>
   * 
   * ### Sorting options:
   * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
   * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
   * 
   * | `FIELD_NAME` | Description |
   * | :--- | :--- |
   * | `time` | Event timestamp |
   * 
   * </details>
  **/
  requestRoomActivitiesLogAsJsonOld(
    req: operations.RequestRoomActivitiesLogAsJsonOldRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RequestRoomActivitiesLogAsJsonOldResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RequestRoomActivitiesLogAsJsonOldRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v4/nodes/rooms/{room_id}/activities_log", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RequestRoomActivitiesLogAsJsonOldResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.syslogEventList = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * requestRoomGroups - Request room granted group(s) or / and group(s) that can be granted
   *
   * ### Description:  
   * Retrieve a list of groups that are and / or can be granted to the room.
   * 
   * ### Precondition:
   * Any permissions on target room.
   * 
   * ### Postcondition:
   * List of groups is returned.
   * 
   * ### Further Information:
   * 
   * ### Filtering:
   * All filter fields are connected via logical conjunction (**AND**)  
   * Filter string syntax: `FIELD_NAME:OPERATOR:VALUE`  
   * 
   * <details style="padding-left: 10px">
   * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
   * 
   * `isGranted:eq:false|name:cn:searchString`  
   * Get all groups that are **NOT** granted to this room **AND** whose name is like `searchString`.
   * 
   * </details>
   * 
   * ### Filtering options:
   * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
   * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
   * 
   * | `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
   * | :--- | :--- | :--- | :--- | :--- |
   * | `name` | Group name filter | `cn` | Group name contains value. | `search String` |
   * | `groupId` | Group ID filter | `eq` | Group ID equals value. | `positive Integer` |
   * | `isGranted` | Filter the groups that have (no) access to this room.<br>**This filter is only available for room administrators.**<br>**Other users can only look for groups in their rooms, so this filter is `true` and **CANNOT** be overridden.** | `eq` |  | <ul><li>`true`</li><li>`false`</li><li>`any`</li></ul>default: `true` |
   * | `permissionsManage` | Filter the groups that do (not) have `manage` permissions in this room. | `eq` |  | `true or false` |
   * | `effectivePerm` | Filter groups with DIRECT or DIRECT **AND** EFFECTIVE permissions<ul><li>`false`: DIRECT permissions</li><li>`true`: DIRECT **AND** EFFECTIVE permissions</li></ul>DIRECT means: e.g. room administrator grants `read` permissions to group of users **directly** on desired room.<br>EFFECTIVE means: e.g. group of users gets `read` permissions on desired room through **inheritance**. | `eq` |  | `true or false`<br>default: `false` |
   * 
   * </details>
   * 
   * ---
   * 
   * ### Sorting:
   * Sort string syntax: `FIELD_NAME:ORDER`  
   * `ORDER` can be `asc` or `desc`.  
   * Multiple sort criteria are possible.  
   * Fields are connected via logical conjunction **AND**.
   * 
   * <details style="padding-left: 10px">
   * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
   * 
   * `name:desc`  
   * Sort by `name` descending.
   * 
   * </details>
   * 
   * ### Sorting options:
   * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
   * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
   * 
   * | `FIELD_NAME` | Description |
   * | :--- | :--- |
   * | `name` | Group name |
   * 
   * </details>
  **/
  requestRoomGroups(
    req: operations.RequestRoomGroupsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RequestRoomGroupsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RequestRoomGroupsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v4/nodes/rooms/{room_id}/groups", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RequestRoomGroupsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.roomGroupList = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * requestRoomRescueKey - Request room rescue key
   *
   * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128679; Deprecated since v4.24.0</h3>
   * 
   * ### Description:  
   * Returns the file key for the room emergency password / rescue key of a certain file (if available).
   * 
   * ### Precondition:
   * User with <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span> permissions in parent room.
   * 
   * ### Postcondition:
   * File key is returned.
   * 
   * ### Further Information:
   * None.
  **/
  requestRoomRescueKey(
    req: operations.RequestRoomRescueKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RequestRoomRescueKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RequestRoomRescueKeyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v4/nodes/files/{file_id}/data_room_file_key", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RequestRoomRescueKeyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.fileKey = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * requestRoomRescueKeyPair - Request room rescue key
   *
   * ### Description:  
   * Retrieve the room rescue key pair.
   * 
   * ### Precondition:
   * User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span> permissions in that room.
   * 
   * ### Postcondition:
   * Key pair is returned.
   * 
   * ### Further Information:
   * None.
  **/
  requestRoomRescueKeyPair(
    req: operations.RequestRoomRescueKeyPairRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RequestRoomRescueKeyPairResponseOutput> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RequestRoomRescueKeyPairRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v4/nodes/rooms/{room_id}/keypair", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RequestRoomRescueKeyPairResponseOutput = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.userKeyPairContainer = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * requestRoomRescueKeyPairs - Request all room rescue key pairs
   *
   * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.24.0</h3>
   * 
   * ### Description:  
   * Retrieve all room rescue key pairs to allow migrating room-rescue-key-encrypted file keys.
   * 
   * ### Precondition:
   * User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span> permissions in that room.
   * 
   * ### Postcondition:
   * List of key pairs is returned.
   * 
   * ### Further Information:
   * In the case of an algorithm migration to a room rescue key pair, one should create the new key pair before deleting the old one. This allows re-encrypting file keys with the new key pair, using the old one.
   * 
   * This API allows to retrieve both key pairs, in contrast to `GET /nodes/rooms/{room_id}/keypair`, which only delivers the preferred one.
   * 
  **/
  requestRoomRescueKeyPairs(
    req: operations.RequestRoomRescueKeyPairsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RequestRoomRescueKeyPairsResponseOutput> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RequestRoomRescueKeyPairsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v4/nodes/rooms/{room_id}/keypairs", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RequestRoomRescueKeyPairsResponseOutput = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.userKeyPairContainers = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * requestRoomS3Tags - Request list of all assigned S3 tags to the room
   *
   * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.9.0</h3>
   * 
   * ### Description:  
   * Retrieve a list of S3 tags assigned to a room.
   * 
   * ### Precondition:
   * User needs to be a <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Room Administrator</span>.
   * 
   * ### Postcondition:
   * List of assigned S3 tags is returned.
   * 
   * ### Further Information:
   * None.
  **/
  requestRoomS3Tags(
    req: operations.RequestRoomS3TagsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RequestRoomS3TagsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RequestRoomS3TagsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v4/nodes/rooms/{room_id}/s3_tags", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RequestRoomS3TagsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.s3TagList = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * requestRoomUsers - Request room granted user(s) or / and user(s) that can be granted
   *
   * ### Description:  
   * Retrieve a list of users that are and / or can be granted to the room.
   * 
   * ### Precondition:
   * Any permissions on target room.
   * 
   * ### Postcondition:
   * None.
   * 
   * ### Further Information:
   * List of users is returned.
   * 
   * ### Filtering:
   * All filter fields are connected via logical conjunction (**AND**)  
   * Filter string syntax: `FIELD_NAME:OPERATOR:VALUE`  
   * 
   * <details style="padding-left: 10px">
   * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
   * 
   * > `permissionsManage:eq:true|user:cn:searchString`  
   * Get all users that have `manage` permissions to this room **AND** whose (`firstName` **OR** `lastName` **OR** `email` **OR** `username`) is like `searchString`.
   * 
   * </details>
   * 
   * ### Filtering options:
   * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
   * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
   * 
   * | `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
   * | :--- | :--- | :--- | :--- | :--- |
   * | `user` | User filter | `cn` | User contains value (`firstName` **OR** `lastName` **OR** `email` **OR** `username`). | `search String` |
   * | `userId` | User ID filter | `eq` | User ID equals value. | `positive Integer` |
   * | `isGranted` | Filter the users that have (no) access to this room.<br>**This filter is only available for room administrators.**<br>**Other users can only look for users in their rooms, so this filter is `true` and **CANNOT** be overridden.** | `eq` |  | <ul><li>`true`</li><li>`false`</li><li>`any`</li></ul>default: `true` |
   * | `permissionsManage` | Filter the users that do (not) have `manage` permissions in this room. | `eq` |  | `true or false` |
   * | `effectivePerm` | Filter users with DIRECT or DIRECT **AND** EFFECTIVE permissions<ul><li>`false`: DIRECT permissions</li><li>`true`: DIRECT **AND** EFFECTIVE permissions</li><li>`any`: DIRECT **AND** EFFECTIVE **AND** OVER GROUP permissions</li></ul>DIRECT means: e.g. room administrator grants `read` permissions to group of users **directly** on desired room.<br>EFFECTIVE means: e.g. group of users gets `read` permissions on desired room through **inheritance**.<br>OVER GROUP means: e.g. user gets `read` permissions on desired room through **group membership**. | `eq` |  | <ul><li>`true`</li><li>`false`</li><li>`any`</li></ul>default: `false` |
   * 
   * </details>
   * 
   * ### Deprecated filtering options:
   * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
   * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
   * 
   * | `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
   * | :--- | :--- | :--- | :--- | :--- |
   * | <del>`displayName`</del> | User display name filter (use `user` filter) | `cn` | User display name contains value (`firstName` **OR** `lastName` **OR** `email`). | `search String` |
   * 
   * </details>
   * 
   * ---
   * 
   * ### Sorting:
   * Sort string syntax: `FIELD_NAME:ORDER`  
   * `ORDER` can be `asc` or `desc`.  
   * Multiple sort criteria are possible.  
   * Fields are connected via logical conjunction **AND**.
   * 
   * <details style="padding-left: 10px">
   * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
   * 
   * `user:desc`  
   * Sort by `user` descending.
   * 
   * </details>
   * 
   * ### Sorting options:
   * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
   * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
   * 
   * | `FIELD_NAME` | Description |
   * | :--- | :--- |
   * | **`user`** | User - sort by `firstName`, `lastName`, `username`, `email` (in this order) |
   * 
   * </details>
  **/
  requestRoomUsers(
    req: operations.RequestRoomUsersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RequestRoomUsersResponseOutput> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RequestRoomUsersRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v4/nodes/rooms/{room_id}/users", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RequestRoomUsersResponseOutput = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.roomUserList = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * requestSystemRescueKey - Request system rescue key
   *
   * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128679; Deprecated since v4.24.0</h3>
   * 
   * ### Description:  
   * Returns the file key for the system emergency password / rescue key of a certain file (if available).
   * 
   * ### Precondition:
   * User with <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span> permissions in parent room.
   * 
   * ### Postcondition:
   * File key is returned.
   * 
   * ### Further Information:
   * None.
  **/
  requestSystemRescueKey(
    req: operations.RequestSystemRescueKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RequestSystemRescueKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RequestSystemRescueKeyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v4/nodes/files/{file_id}/data_space_file_key", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RequestSystemRescueKeyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.fileKey = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * requestUploadStatusFiles - Request status of S3 file upload
   *
   * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.15.0</h3>
   * 
   * ### Description:
   * Request status of a S3 file upload.
   * 
   * ### Precondition:
   * An upload channel has been created and user has to be the creator of the upload channel.
   * 
   * ### Postcondition:
   * Status of S3 multipart upload request is returned.
   * 
   * ### Further Information:
   * None.
   * 
   * ### Possible errors:
   * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
   * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
   * 
   * | Http Status | Error Code | Description |
   * | :--- | :--- | :--- |
   * | `400 Bad Request` | `-80000` | Mandatory fields cannot be empty |
   * | `400 Bad Request` | `-80001` | Invalid positive number |
   * | `400 Bad Request` | `-80002` | Invalid number |
   * | `400 Bad Request` | `-40001` | (Target) room is not encrypted |
   * | `400 Bad Request` | `-40755` | Bad file name |
   * | `400 Bad Request` | `-40763` | File key must be set for an upload into encrypted room |
   * | `400 Bad Request` | `-50506` | Exceeds the number of files for this Upload Share |
   * | `403 Forbidden` |  | Access denied |
   * | `404 Not Found` | `-20501` | Upload not found |
   * | `404 Not Found` | `-40000` | Container not found |
   * | `404 Not Found` | `-41000` | Node not found |
   * | `404 Not Found` | `-70501` | User not found |
   * | `409 Conflict` | `-40010` | Container cannot be overwritten |
   * | `409 Conflict` |  | File cannot be overwritten |
   * | `500 Internal Server Error` |  | System Error |
   * | `502 Bad Gateway` |  | S3 Error |
   * | `502 Insufficient Storage` | `-50504` | Exceeds the quota for this Upload Share |
   * | `502 Insufficient Storage` | `-40200` | Exceeds the free node quota in room |
   * | `502 Insufficient Storage` | `-90200` | Exceeds the free customer quota |
   * | `502 Insufficient Storage` | `-90201` | Exceeds the free customer physical disk space |
   * 
   * </details>
  **/
  requestUploadStatusFiles(
    req: operations.RequestUploadStatusFilesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RequestUploadStatusFilesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RequestUploadStatusFilesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v4/nodes/files/uploads/{upload_id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RequestUploadStatusFilesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.s3FileUploadStatus = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * requestUserFileKey - Request user's file key
   *
   * ### Description:  
   * Returns the file key for the current user (if available).
   * 
   * ### Precondition:
   * User with one of the following permissions in parent room: <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage</span>, <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span>, <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage download share</span>
   * 
   * ### Postcondition:
   * File key is returned.
   * 
   * ### Further Information:
   * The symmetric file key is encrypted with the user's public key.  
   * File keys are generated with the workflow _"Generate file keys"_ that starts at `GET /nodes/missingFileKeys`.
  **/
  requestUserFileKey(
    req: operations.RequestUserFileKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RequestUserFileKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RequestUserFileKeyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v4/nodes/files/{file_id}/user_file_key", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RequestUserFileKeyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.fileKey = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * restoreNodes - Restore deleted nodes
   *
   * ### Description:  
   * Restore a list of deleted nodes.
   * 
   * ### Precondition:
   * User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; create</span> permissions in parent room and <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; restore recycle bin</span> permissions.
   * 
   * ### Postcondition:
   * The selected files are moved from the recycle bin to the chosen productive container.
   * 
   * ### Further Information:
   * If no parent ID is provided, the node is restored to its previous location.  
   * The default resolution strategy is `autorename` that adds numbers to the file name until the conflict is solved.  
   * If an existing file is overwritten, it is moved to the recycle bin instead of the restored one.
   * 
   * Download share id (if exists) gets changed if:
   * - node with the same name exists in the target container
   * - `resolutionStrategy` is `overwrite`
   * - `keepShareLinks` is `true`
  **/
  restoreNodes(
    req: operations.RestoreNodesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RestoreNodesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RestoreNodesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v4/nodes/deleted_nodes/actions/restore";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
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
        const res: operations.RestoreNodesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 409:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 507:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * revokeRoomGroups - Revoke granted group(s) from room
   *
   * ### Description:  
   * Revoke granted groups from room.
   * 
   * ### Precondition:
   * User needs to be a <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Room Administrator</span>.
   * 
   * ### Postcondition:
   * Group's permissions are revoked.
   * 
   * ### Further Information:
   * Batch function.  
  **/
  revokeRoomGroups(
    req: operations.RevokeRoomGroupsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RevokeRoomGroupsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RevokeRoomGroupsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v4/nodes/rooms/{room_id}/groups", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "delete",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RevokeRoomGroupsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * revokeRoomUsers - Revoke granted user(s) from room
   *
   * ### Description:  
   * Revoke granted users from room.
   * 
   * ### Precondition:
   * User needs to be a <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Room Administrator</span>.
   * 
   * ### Postcondition:
   * User's permissions are revoked.
   * 
   * ### Further Information:
   * Batch function.  
  **/
  revokeRoomUsers(
    req: operations.RevokeRoomUsersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RevokeRoomUsersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RevokeRoomUsersRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v4/nodes/rooms/{room_id}/users", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "delete",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RevokeRoomUsersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * searchNodes - Search nodes
   *
   * ### Description:  
   * Provides a flat list of file system nodes (rooms, folders or files) of a given parent that are accessible by the current user.
   * 
   * ### Precondition:
   * Authenticated user is allowed to <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128065; see</span> nodes (i.e. `isBrowsable = true`).
   * 
   * ### Postcondition:
   * List of nodes is returned.
   * 
   * ### Further Information:  
   * Output is limited to **500** entries.  
   * For more results please use filter criteria and paging (`offset` + `limit`).  
   * `EncryptionInfo` is **NOT** provided.  
   * Wildcard character is the asterisk character: `*`
   * 
   * ### Filtering:
   * All filter fields are connected via logical conjunction (**AND**)  
   * Filter string syntax: `FIELD_NAME:OPERATOR:VALUE[:VALUE...]`  
   * 
   * <details style="padding-left: 10px">
   * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
   * 
   * `type:eq:file|createdAt:ge:2015-01-01`  
   * Get nodes where type equals `file` **AND** file creation date is **>=** `2015-01-01`.
   * 
   * </details>
   * 
   * ### Filtering options:
   * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
   * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
   * 
   * | `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
   * | :--- | :--- | :--- | :--- | :--- |
   * | `type` | Node type filter | `eq` | Node type equals value.<br>Multiple values are allowed and will be connected via logical disjunction (**OR**).<br>e.g. `type:eq:room:folder` | <ul><li>`room`</li><li>`folder`</li><li>`file`</li></ul> |
   * | `fileType` | File type filter (file extension) | `cn, eq` | File type contains / equals value. | `search String` |
   * | `classification` | Classification filter | `eq` | Classification equals value. | <ul><li>`1` - public</li><li>`2` - internal</li><li>`3` - confidential</li><li>`4` - strictly confidential</li></ul> |
   * | `createdBy` | Creator login filter | `cn, eq` | Creator login contains / equals value (`firstName` **OR** `lastName` **OR** `email` **OR** `username`). | `search String` |
   * | `createdById` | Creator ID filter | `eq` | Creator ID equals value. | `positive Integer  or -1 for external user` |
   * | `createdAt` | Creation date filter | `ge, le` | Creation date is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `createdAt:ge:2016-12-31`&#124;`createdAt:le:2018-01-01` | `Date (yyyy-MM-dd)` |
   * | `updatedBy` | Last modifier login filter | `cn, eq` | Last modifier login contains / equals value (`firstName` **OR** `lastName` **OR** `email` **OR** `username`). | `search String` |
   * | `updatedById` | Last modifier ID filter | `eq` | Modifier ID equals value. | `positive Integer or -1 for external user` |
   * | `updatedAt` | Last modification date filter | `ge, le` | Last modification date is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `updatedAt:ge:2016-12-31`&#124;`updatedAt:le:2018-01-01` | `Date (yyyy-MM-dd)` |
   * | `expireAt` | Expiration date filter | `ge, le` | Expiration date is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `expireAt:ge:2016-12-31`&#124;`expireAt:le:2018-01-01` | `Date (yyyy-MM-dd)` |
   * | `size` | Node size filter | `ge, le` | Node size is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `size:ge:5`&#124;`size:le:10` | `size in bytes` |
   * | `isFavorite` | Favorite filter | `eq` |  | `true or false` |
   * | `branchVersion` | Node branch version filter | `ge, le` | Branch version is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `branchVersion:ge:1423280937404`&#124;`branchVersion:le:1523280937404` | `version number` |
   * | `parentPath` | Parent path | `cn, eq` | Parent path contains / equals  value. | `search String` |
   * | `timestampCreation` | Creation timestamp filter | `ge, le` | Creation timestamp is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `timestampCreation:ge:2016-12-31T23:00:00.123`&#124;<br>`timestampCreation:le:2018-01-01T11:00:00.540` | `Date (yyyy-MM-dd)` |
   * | `timestampModification` | Modification timestamp filter | `ge, le` | Modification timestamp is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `timestampModification:ge:2016-12-31T23:00:00.123`&#124;<br>`timestampModification:le:2018-01-01T11:00:00.540` | `Date (yyyy-MM-dd)` |
   * 
   * </details>
   * 
   * ---
   * 
   * ### Sorting:
   * Sort string syntax: `FIELD_NAME:ORDER`  
   * `ORDER` can be `asc` or `desc`.  
   * Multiple sort criteria are possible.  
   * Fields are connected via logical conjunction **AND**.
   * 
   * <details style="padding-left: 10px">
   * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
   * 
   * `name:desc|size:asc`  
   * Sort by `name` descending **AND** `size` ascending.
   * 
   * </details>
   * 
   * ### Sorting options:
   * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
   * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
   * 
   * | `FIELD_NAME` | Description |
   * | :--- | :--- |
   * | `name` | Node name |
   * | `createdAt` | Creation date |
   * | `createdBy` | Creator first name, last name |
   * | `updatedAt` | Last modification date |
   * | `updatedBy` | Last modifier first name, last name |
   * | `fileType` | File type (extension) |
   * | `classification` | Classification ID:<ul><li>1 - public</li><li>2 - internal</li><li>3 - confidential</li><li>4 - strictly confidential</li></ul> |
   * | `size` | Node size |
   * | `cntDeletedVersions` | Number of deleted versions of this file / folder (**NOT** recursive; for files and folders only) |
   * | `type` | Node type (room, folder, file) |
   * | `parentPath` | Parent path |
   * | `timestampCreation` | Creation timestamp |
   * | `timestampModification` | Modification timestamp |
   * 
   * </details>
   * 
   * ### Deprecated sorting options:
   * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
   * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
   * 
   * | `FIELD_NAME` | Description |
   * | :--- | :--- |
   * | <del>`cntAdmins`</del> | Number of admins (for rooms only) |
   * | <del>`cntUsers`</del> | Number of users (for rooms only) |
   * | <del>`cntChildren`</del> | Number of direct children (**NOT** recursive; for rooms and folders only) |
   * 
   * </details>
  **/
  searchNodes(
    req: operations.SearchNodesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchNodesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchNodesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v4/nodes/search";
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SearchNodesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.nodeList = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * setRoomRescueKeyPair - Set room's rescue key pair
   *
   * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.24.0</h3>
   * 
   * ### Description:  
   * Set room rescue key pair.
   * 
   * ### Precondition:
   * User needs to be a <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Room Administrator</span>.
   * 
   * ### Postcondition:
   * Key pair is set.
   * 
   * ### Further Information:
   * Room rescue key pair can be used to upgrade algorithm.
  **/
  setRoomRescueKeyPair(
    req: operations.SetRoomRescueKeyPairRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SetRoomRescueKeyPairResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SetRoomRescueKeyPairRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v4/nodes/rooms/{room_id}/keypair", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
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
        const res: operations.SetRoomRescueKeyPairResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * setRoomS3Tags - Set S3 tags for a room
   *
   * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.9.0</h3>
   * 
   * ### Description:  
   * Set S3 tags to a room.
   * 
   * ### Precondition:
   * User needs to be a <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Room Administrator</span>.
   * 
   * ### Postcondition:
   * Provided S3 tags are assigned to a room.
   * 
   * ### Further Information:
   * Every request overrides current S3 tags.  
   * Mandatory S3 tag IDs **MUST** be sent.
  **/
  setRoomS3Tags(
    req: operations.SetRoomS3TagsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SetRoomS3TagsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SetRoomS3TagsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v4/nodes/rooms/{room_id}/s3_tags", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
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
        const res: operations.SetRoomS3TagsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.s3TagList = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * setUserFileKeys - Set file keys for a list of users and files
   *
   * ### Description:  
   * Sets symmetric file keys for several users and files.
   * 
   * ### Precondition:
   * User has file keys for the files.  
   * Only settable by users that own one of the following permissions: <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage</span>, <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span>, <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage download share</span>, <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change config</span>
   * 
   * ### Postcondition:
   * Stores new file keys for other users.
   * 
   * ### Further Information:
   * Only users with copies of the file key (encrypted with their public keys) can access a certain file.  
   * This endpoint is used for the distribution of file keys amongst an authorized user base.  
   * User can set file key for himself.  
   * The users who already have a file key are ignored and keep the distributed file key
   * 
  **/
  setUserFileKeys(
    req: operations.SetUserFileKeysRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SetUserFileKeysResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SetUserFileKeysRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v4/nodes/files/keys";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
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
        const res: operations.SetUserFileKeysResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateFavorites - Mark or unmark a list of nodes (room, folder or file) as favorite
   *
   * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.25.0</h3>
   * 
   * ### Description:  
   * Marks or unmarks a list of nodes (room, folder or file) as favorite.
   * 
   * ### Precondition:
   * Authenticated user is allowed to <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128065; see</span> the node (i.e. `isBrowsable = true`).
   * 
   * ### Postcondition:
   * Nodes gets marked as favorite.
   * 
   * ### Further Information:
   * Maximum number of nodes is 200.
  **/
  updateFavorites(
    req: operations.UpdateFavoritesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateFavoritesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateFavoritesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v4/nodes/favorites";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
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
        const res: operations.UpdateFavoritesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateFile - Updates a file’s metadata
   *
   * ### Description:
   * Updates a list of file’s metadata.
   * 
   * ### Precondition:
   * User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change</span> permissions in parent room.
   * 
   * ### Postcondition:
   * File's metadata is changed.
   * 
   * 
   * 
  **/
  updateFile(
    req: operations.UpdateFileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateFileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateFileRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v4/nodes/files/{file_id}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
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
        const res: operations.UpdateFileResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.node = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 409:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateFiles - Updates a list of  file’s metadata
   *
   * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.25.0</h3>
   * 
   * ### Description:  
   * Updates a list of file’s metadata.
   * 
   * ### Precondition:
   * User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change</span> permissions in parent room.
   * 
   * ### Postcondition:
   * File's metadata is changed.
   * 
   * ### Further Information:
   * Maximum number of shares is 200
   * 
  **/
  updateFiles(
    req: operations.UpdateFilesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateFilesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateFilesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v4/nodes/files";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
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
        const res: operations.UpdateFilesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 409:
            if (utils.MatchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateFolder - Updates folder’s metadata
   *
   * ### Description:  
   * Updates folder’s metadata.
   * 
   * ### Precondition:
   * User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change</span> permissions in parent room.
   * 
   * ### Postcondition:
   * Folder's metadata is changed.
   * 
   * ### Further Information:
   * Notes are limited to **255** characters.
   * 
   * ### Node naming convention:
   * * Node (room, folder, file) names are limited to **150** characters.
   * * Illegal names:  
   * `'CON', 'PRN', 'AUX', 'NUL', 'COM1', 'COM2', 'COM3', 'COM4', 'COM5', 'COM6', 'COM7', 'COM8', 'COM9', 'LPT1', 'LPT2', 'LPT3', 'LPT4', 'LPT5', 'LPT6', 'LPT7', 'LPT8', 'LPT9', (and any of those with an extension)`
   * * Illegal characters in names:  
   * `'\\', '<','>', ':', '\"', '|', '?', '*', '/', leading '-', trailing '.' `
   * 
  **/
  updateFolder(
    req: operations.UpdateFolderRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateFolderResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateFolderRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v4/nodes/folders/{folder_id}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
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
        const res: operations.UpdateFolderResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.node = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 409:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateNodeComment - Edit node comment
   *
   * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.10.0</h3>
   * 
   * ### Description:
   * Edit the text of an existing comment for a specific node.
   * 
   * ### Precondition:
   * User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span> permissions on the node and is the creator of the comment.
   * 
   * ### Postcondition:
   * Comments text gets changed.
   * 
   * ### Further Information:
   * Maximum allowed text length: **65535** characters.
  **/
  updateNodeComment(
    req: operations.UpdateNodeCommentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateNodeCommentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateNodeCommentRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v4/nodes/comments/{comment_id}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
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
        const res: operations.UpdateNodeCommentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.comment = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateRoom - Updates room’s metadata
   *
   * ### Description:  
   * Updates room’s metadata.
   * 
   * ### Precondition:
   * User is a <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Room Administrator</span> at superordinated level.
   * 
   * ### Postcondition:
   * Room's metadata is changed.
   * 
   * ### Further Information:
   * Notes are limited to **255** characters.
   * 
   * ### Node naming convention:
   * * Node (room, folder, file) names are limited to **150** characters.
   * * Illegal names:  
   * `'CON', 'PRN', 'AUX', 'NUL', 'COM1', 'COM2', 'COM3', 'COM4', 'COM5', 'COM6', 'COM7', 'COM8', 'COM9', 'LPT1', 'LPT2', 'LPT3', 'LPT4', 'LPT5', 'LPT6', 'LPT7', 'LPT8', 'LPT9', (and any of those with an extension)`
   * * Illegal characters in names:  
   * `'\\', '<','>', ':', '\"', '|', '?', '*', '/', leading '-', trailing '.' `
  **/
  updateRoom(
    req: operations.UpdateRoomRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateRoomResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateRoomRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v4/nodes/rooms/{room_id}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
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
        const res: operations.UpdateRoomResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.node = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 409:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateRoomGroups - Add or change room granted group(s)
   *
   * ### Description:
   * All existing group permissions will be overwritten.
   * 
   * ### Precondition:
   * User needs to be a <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Room Administrator</span>. To add new members, the user needs the right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; non-members add</span>, which is included in any role.
   * 
   * ### Postcondition:
   * Group's permissions are changed.
   * 
   * ### Further Information:
   * Batch function.  
   * 
  **/
  updateRoomGroups(
    req: operations.UpdateRoomGroupsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateRoomGroupsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateRoomGroupsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v4/nodes/rooms/{room_id}/groups", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
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
        const res: operations.UpdateRoomGroupsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateRoomUsers - Add or change room granted user(s)
   *
   * ### Description:
   * All existing user permissions will be overwritten.
   * 
   * ### Precondition:
   * User needs to be a <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Room Administrator</span>. To add new members, the user needs the right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; non-members add</span>, which is included in any role.
   * 
   * ### Postcondition:
   * User's permissions are changed.
   * 
   * ### Further Information:
   * Batch function.
  **/
  updateRoomUsers(
    req: operations.UpdateRoomUsersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateRoomUsersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateRoomUsersRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v4/nodes/rooms/{room_id}/users", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
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
        const res: operations.UpdateRoomUsersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * uploadFileAsMultipart - Upload file
   *
   * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128679; Deprecated since v4.9.0</h3>
   * 
   * ### Use `uploads` API
   * 
   * ### Description:  
   * Uploads a file or parts of it in an active upload channel.
   * 
   * ### Precondition:
   * An upload channel has been created.
   * 
   * ### Postcondition:
   * A file or parts of it are uploaded to a temporary location.
   * 
   * ### Further Information:
   * This endpoints supports chunked upload.  
   * 
   * Following `Content-Types` are supported by this API:
   * * `multipart/form-data`
   * * provided `Content-Type`   
   * 
   * For both file upload types set the correct `Content-Type` header and body.  
   * 
   * ### Examples:  
   * 
   * * `multipart/form-data`
   * ```
   * POST /api/v4/nodes/files/uploads/{upload_id} HTTP/1.1
   * 
   * Header:
   * ...
   * Content-Type: multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW
   * ...
   * 
   * Body:
   * ------WebKitFormBoundary7MA4YWxkTrZu0gW
   * Content-Disposition: form-data; name="file"; filename="file.txt"
   * Content-Type: text/plain
   * 
   * Content of file.txt
   * ------WebKitFormBoundary7MA4YWxkTrZu0gW--
   * ```
   * 
   * * any other `Content-Type`  
   * ```
   * POST /api/v4/nodes/files/uploads/{upload_id}  HTTP/1.1
   * 
   * Header:
   * ...
   * Content-Type: { ... }
   * ...
   * 
   * Body:
   * raw content
   * ```
   *
   * https://tools.ietf.org/html/rfc7233 - Range Requests
  **/
  uploadFileAsMultipart(
    req: operations.UploadFileAsMultipartRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UploadFileAsMultipartResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UploadFileAsMultipartRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v4/nodes/files/uploads/{upload_id}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
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
        const res: operations.UploadFileAsMultipartResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.chunkUploadResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 507:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
