import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { MatchContentType } from "../internal/utils/contenttype";
import * as operations from "./models/operations";
import { ParamsSerializerOptions } from "axios";
import { GetQueryParamSerializer } from "../internal/utils/queryparams";
import { SerializeRequestBody } from "../internal/utils/requestbody";
import FormData from 'form-data';
import { CreateSecurityClient } from "../internal/utils/security";
import * as utils from "../internal/utils/utils";

type OptsFunc = (sdk: SDK) => void;

const Servers = [
  "https://files.com//app.files.com/api/rest/v1",
] as const;

export function WithServerURL(
  serverURL: string,
  params?: Map<string, string>
): OptsFunc {
  return (sdk: SDK) => {
    if (params != null) {
      serverURL = utils.ReplaceParameters(serverURL, params);
    }
    sdk.serverURL = serverURL;
  };
}

export function WithClient(client: AxiosInstance): OptsFunc {
  return (sdk: SDK) => {
    sdk.defaultClient = client;
  };
}


export class SDK {
  defaultClient?: AxiosInstance;
  securityClient?: AxiosInstance;
  security?: any;
  serverURL: string;

  constructor(...opts: OptsFunc[]) {
    opts.forEach((o) => o(this));
    if (this.serverURL == "") {
      this.serverURL = Servers[0];
    }

    if (!this.defaultClient) {
      this.defaultClient = axios.create({ baseURL: this.serverURL });
    }

    if (!this.securityClient) {
      if (this.security) {
        this.securityClient = CreateSecurityClient(
          this.defaultClient,
          this.security
        );
      } else {
        this.securityClient = this.defaultClient;
      }
    }
  }
  
  // ApiKeyDeleteCurrent - Delete current API key.  (Requires current API connection to be using an API key.)
  /** 
   * Delete current API key.  (Requires current API connection to be using an API key.)
  **/
  ApiKeyDeleteCurrent(
    
    config?: AxiosRequestConfig
  ): Promise<operations.ApiKeyDeleteCurrentResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api_key";
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ApiKeyDeleteCurrentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ApiKeyFindCurrent - Show information about current API key.  (Requires current API connection to be using an API key.)
  /** 
   * Show information about current API key.  (Requires current API connection to be using an API key.)
  **/
  ApiKeyFindCurrent(
    
    config?: AxiosRequestConfig
  ): Promise<operations.ApiKeyFindCurrentResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api_key";
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ApiKeyFindCurrentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiKeyEntity = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ApiKeyUpdateCurrent - Update current API key.  (Requires current API connection to be using an API key.)
  /** 
   * Update current API key.  (Requires current API connection to be using an API key.)
  **/
  ApiKeyUpdateCurrent(
    req: operations.ApiKeyUpdateCurrentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ApiKeyUpdateCurrentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ApiKeyUpdateCurrentRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api_key";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .patch(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ApiKeyUpdateCurrentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiKeyEntity = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // BehaviorListForPath - List Behaviors by path
  /** 
   * List Behaviors by path
  **/
  BehaviorListForPath(
    req: operations.BehaviorListForPathRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.BehaviorListForPathResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.BehaviorListForPathRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/behaviors/folders/{path}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.BehaviorListForPathResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.behaviorEntities = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteApiKeysId - Delete Api Key
  /** 
   * Delete Api Key
  **/
  DeleteApiKeysId(
    req: operations.DeleteApiKeysIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteApiKeysIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteApiKeysIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api_keys/{id}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteApiKeysIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteAs2KeysId - Delete As2 Key
  /** 
   * Delete As2 Key
  **/
  DeleteAs2KeysId(
    req: operations.DeleteAs2KeysIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteAs2KeysIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteAs2KeysIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/as2_keys/{id}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteAs2KeysIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteAutomationsId - Delete Automation
  /** 
   * Delete Automation
  **/
  DeleteAutomationsId(
    req: operations.DeleteAutomationsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteAutomationsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteAutomationsIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/automations/{id}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteAutomationsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteBehaviorsId - Delete Behavior
  /** 
   * Delete Behavior
  **/
  DeleteBehaviorsId(
    req: operations.DeleteBehaviorsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteBehaviorsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteBehaviorsIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/behaviors/{id}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteBehaviorsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteBundlesId - Delete Bundle
  /** 
   * Delete Bundle
  **/
  DeleteBundlesId(
    req: operations.DeleteBundlesIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteBundlesIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteBundlesIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/bundles/{id}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteBundlesIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteClickwrapsId - Delete Clickwrap
  /** 
   * Delete Clickwrap
  **/
  DeleteClickwrapsId(
    req: operations.DeleteClickwrapsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteClickwrapsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteClickwrapsIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/clickwraps/{id}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteClickwrapsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteFileCommentReactionsId - Delete File Comment Reaction
  /** 
   * Delete File Comment Reaction
  **/
  DeleteFileCommentReactionsId(
    req: operations.DeleteFileCommentReactionsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteFileCommentReactionsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteFileCommentReactionsIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/file_comment_reactions/{id}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteFileCommentReactionsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteFileCommentsId - Delete File Comment
  /** 
   * Delete File Comment
  **/
  DeleteFileCommentsId(
    req: operations.DeleteFileCommentsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteFileCommentsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteFileCommentsIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/file_comments/{id}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteFileCommentsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteFilesPath - Delete file/folder
  /** 
   * Delete file/folder
  **/
  DeleteFilesPath(
    req: operations.DeleteFilesPathRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteFilesPathResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteFilesPathRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/files/{path}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .delete(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteFilesPathResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteFormFieldSetsId - Delete Form Field Set
  /** 
   * Delete Form Field Set
  **/
  DeleteFormFieldSetsId(
    req: operations.DeleteFormFieldSetsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteFormFieldSetsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteFormFieldSetsIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/form_field_sets/{id}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteFormFieldSetsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteGroupUsersId - Delete Group User
  /** 
   * Delete Group User
  **/
  DeleteGroupUsersId(
    req: operations.DeleteGroupUsersIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteGroupUsersIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteGroupUsersIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/group_users/{id}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .delete(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteGroupUsersIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteGroupsGroupIdMembershipsUserId - Delete Group User
  /** 
   * Delete Group User
  **/
  DeleteGroupsGroupIdMembershipsUserId(
    req: operations.DeleteGroupsGroupIdMembershipsUserIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteGroupsGroupIdMembershipsUserIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteGroupsGroupIdMembershipsUserIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/groups/{group_id}/memberships/{user_id}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteGroupsGroupIdMembershipsUserIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteGroupsId - Delete Group
  /** 
   * Delete Group
  **/
  DeleteGroupsId(
    req: operations.DeleteGroupsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteGroupsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteGroupsIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/groups/{id}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteGroupsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteLocksPath - Delete Lock
  /** 
   * Delete Lock
  **/
  DeleteLocksPath(
    req: operations.DeleteLocksPathRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteLocksPathResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteLocksPathRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/locks/{path}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .delete(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteLocksPathResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteMessageCommentReactionsId - Delete Message Comment Reaction
  /** 
   * Delete Message Comment Reaction
  **/
  DeleteMessageCommentReactionsId(
    req: operations.DeleteMessageCommentReactionsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteMessageCommentReactionsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteMessageCommentReactionsIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/message_comment_reactions/{id}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteMessageCommentReactionsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteMessageCommentsId - Delete Message Comment
  /** 
   * Delete Message Comment
  **/
  DeleteMessageCommentsId(
    req: operations.DeleteMessageCommentsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteMessageCommentsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteMessageCommentsIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/message_comments/{id}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteMessageCommentsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteMessageReactionsId - Delete Message Reaction
  /** 
   * Delete Message Reaction
  **/
  DeleteMessageReactionsId(
    req: operations.DeleteMessageReactionsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteMessageReactionsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteMessageReactionsIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/message_reactions/{id}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteMessageReactionsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteMessagesId - Delete Message
  /** 
   * Delete Message
  **/
  DeleteMessagesId(
    req: operations.DeleteMessagesIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteMessagesIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteMessagesIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/messages/{id}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteMessagesIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteNotificationsId - Delete Notification
  /** 
   * Delete Notification
  **/
  DeleteNotificationsId(
    req: operations.DeleteNotificationsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteNotificationsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteNotificationsIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/notifications/{id}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteNotificationsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeletePermissionsId - Delete Permission
  /** 
   * Delete Permission
  **/
  DeletePermissionsId(
    req: operations.DeletePermissionsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeletePermissionsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeletePermissionsIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/permissions/{id}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeletePermissionsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteProjectsId - Delete Project
  /** 
   * Delete Project
  **/
  DeleteProjectsId(
    req: operations.DeleteProjectsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteProjectsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteProjectsIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/projects/{id}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteProjectsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeletePublicKeysId - Delete Public Key
  /** 
   * Delete Public Key
  **/
  DeletePublicKeysId(
    req: operations.DeletePublicKeysIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeletePublicKeysIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeletePublicKeysIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/public_keys/{id}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeletePublicKeysIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteRemoteServersId - Delete Remote Server
  /** 
   * Delete Remote Server
  **/
  DeleteRemoteServersId(
    req: operations.DeleteRemoteServersIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRemoteServersIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRemoteServersIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/remote_servers/{id}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteRemoteServersIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteRequestsId - Delete Request
  /** 
   * Delete Request
  **/
  DeleteRequestsId(
    req: operations.DeleteRequestsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRequestsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRequestsIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/requests/{id}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteRequestsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteSessions - Delete user session (log out)
  /** 
   * Delete user session (log out)
  **/
  DeleteSessions(
    
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSessionsResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/sessions";
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteSessionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteStylesPath - Delete Style
  /** 
   * Delete Style
  **/
  DeleteStylesPath(
    req: operations.DeleteStylesPathRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteStylesPathResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteStylesPathRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/styles/{path}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteStylesPathResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteUserRequestsId - Delete User Request
  /** 
   * Delete User Request
  **/
  DeleteUserRequestsId(
    req: operations.DeleteUserRequestsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteUserRequestsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteUserRequestsIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/user_requests/{id}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteUserRequestsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteUsersId - Delete User
  /** 
   * Delete User
  **/
  DeleteUsersId(
    req: operations.DeleteUsersIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteUsersIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteUsersIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/users/{id}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteUsersIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FileActionBeginUpload - Begin file upload
  /** 
   * Begin file upload
  **/
  FileActionBeginUpload(
    req: operations.FileActionBeginUploadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FileActionBeginUploadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FileActionBeginUploadRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/file_actions/begin_upload/{path}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FileActionBeginUploadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.fileUploadPartEntities = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FileActionCopy - Copy file/folder
  /** 
   * Copy file/folder
  **/
  FileActionCopy(
    req: operations.FileActionCopyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FileActionCopyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FileActionCopyRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/file_actions/copy/{path}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FileActionCopyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.fileActionEntity = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FileActionMetadata - Return metadata for file/folder
  /** 
   * Return metadata for file/folder
  **/
  FileActionMetadata(
    req: operations.FileActionMetadataRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FileActionMetadataResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FileActionMetadataRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/file_actions/metadata/{path}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FileActionMetadataResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.fileEntity = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FileActionMove - Move file/folder
  /** 
   * Move file/folder
  **/
  FileActionMove(
    req: operations.FileActionMoveRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FileActionMoveResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FileActionMoveRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/file_actions/move/{path}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FileActionMoveResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.fileActionEntity = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FileCommentListForPath - List File Comments by path
  /** 
   * List File Comments by path
  **/
  FileCommentListForPath(
    req: operations.FileCommentListForPathRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FileCommentListForPathResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FileCommentListForPathRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/file_comments/files/{path}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FileCommentListForPathResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.fileCommentEntities = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FileDownload - Download file
  /** 
   * Download file
  **/
  FileDownload(
    req: operations.FileDownloadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FileDownloadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FileDownloadRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/files/{path}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FileDownloadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.fileEntity = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FolderListForPath - List Folders by path
  /** 
   * List Folders by path
  **/
  FolderListForPath(
    req: operations.FolderListForPathRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FolderListForPathResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FolderListForPathRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/folders/{path}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FolderListForPathResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.fileEntities = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetActionNotificationExportResults - List Action Notification Export Results
  /** 
   * List Action Notification Export Results
  **/
  GetActionNotificationExportResults(
    req: operations.GetActionNotificationExportResultsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetActionNotificationExportResultsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetActionNotificationExportResultsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/action_notification_export_results";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetActionNotificationExportResultsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.actionNotificationExportResultEntities = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetActionNotificationExportsId - Show Action Notification Export
  /** 
   * Show Action Notification Export
  **/
  GetActionNotificationExportsId(
    req: operations.GetActionNotificationExportsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetActionNotificationExportsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetActionNotificationExportsIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/action_notification_exports/{id}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetActionNotificationExportsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.actionNotificationExportEntity = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetApiKeys - List Api Keys
  /** 
   * List Api Keys
  **/
  GetApiKeys(
    req: operations.GetApiKeysRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiKeysResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiKeysRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api_keys";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetApiKeysResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiKeyEntities = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetApiKeysId - Show Api Key
  /** 
   * Show Api Key
  **/
  GetApiKeysId(
    req: operations.GetApiKeysIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiKeysIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiKeysIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api_keys/{id}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetApiKeysIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiKeyEntity = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetApps - List Apps
  /** 
   * List Apps
  **/
  GetApps(
    req: operations.GetAppsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAppsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAppsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/apps";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetAppsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.appEntities = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetAs2Keys - List As2 Keys
  /** 
   * List As2 Keys
  **/
  GetAs2Keys(
    req: operations.GetAs2KeysRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAs2KeysResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAs2KeysRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/as2_keys";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetAs2KeysResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.as2KeyEntities = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetAs2KeysId - Show As2 Key
  /** 
   * Show As2 Key
  **/
  GetAs2KeysId(
    req: operations.GetAs2KeysIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAs2KeysIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAs2KeysIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/as2_keys/{id}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetAs2KeysIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.as2KeyEntity = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetAutomations - List Automations
  /** 
   * List Automations
  **/
  GetAutomations(
    req: operations.GetAutomationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAutomationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAutomationsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/automations";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetAutomationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.automationEntities = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetAutomationsId - Show Automation
  /** 
   * Show Automation
  **/
  GetAutomationsId(
    req: operations.GetAutomationsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAutomationsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAutomationsIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/automations/{id}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetAutomationsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.automationEntity = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetBandwidthSnapshots - List Bandwidth Snapshots
  /** 
   * List Bandwidth Snapshots
  **/
  GetBandwidthSnapshots(
    req: operations.GetBandwidthSnapshotsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetBandwidthSnapshotsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetBandwidthSnapshotsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/bandwidth_snapshots";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetBandwidthSnapshotsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.bandwidthSnapshotEntities = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetBehaviors - List Behaviors
  /** 
   * List Behaviors
  **/
  GetBehaviors(
    req: operations.GetBehaviorsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetBehaviorsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetBehaviorsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/behaviors";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetBehaviorsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.behaviorEntities = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetBehaviorsId - Show Behavior
  /** 
   * Show Behavior
  **/
  GetBehaviorsId(
    req: operations.GetBehaviorsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetBehaviorsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetBehaviorsIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/behaviors/{id}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetBehaviorsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.behaviorEntity = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetBundleDownloads - List Bundle Downloads
  /** 
   * List Bundle Downloads
  **/
  GetBundleDownloads(
    req: operations.GetBundleDownloadsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetBundleDownloadsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetBundleDownloadsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/bundle_downloads";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetBundleDownloadsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.bundleDownloadEntities = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetBundleRecipients - List Bundle Recipients
  /** 
   * List Bundle Recipients
  **/
  GetBundleRecipients(
    req: operations.GetBundleRecipientsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetBundleRecipientsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetBundleRecipientsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/bundle_recipients";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetBundleRecipientsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.bundleRecipientEntities = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetBundleRegistrations - List Bundle Registrations
  /** 
   * List Bundle Registrations
  **/
  GetBundleRegistrations(
    req: operations.GetBundleRegistrationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetBundleRegistrationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetBundleRegistrationsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/bundle_registrations";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetBundleRegistrationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.bundleRegistrationEntities = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetBundles - List Bundles
  /** 
   * List Bundles
  **/
  GetBundles(
    req: operations.GetBundlesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetBundlesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetBundlesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/bundles";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetBundlesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.bundleEntities = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetBundlesId - Show Bundle
  /** 
   * Show Bundle
  **/
  GetBundlesId(
    req: operations.GetBundlesIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetBundlesIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetBundlesIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/bundles/{id}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetBundlesIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.bundleEntity = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetClickwraps - List Clickwraps
  /** 
   * List Clickwraps
  **/
  GetClickwraps(
    req: operations.GetClickwrapsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetClickwrapsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetClickwrapsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/clickwraps";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetClickwrapsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.clickwrapEntities = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetClickwrapsId - Show Clickwrap
  /** 
   * Show Clickwrap
  **/
  GetClickwrapsId(
    req: operations.GetClickwrapsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetClickwrapsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetClickwrapsIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/clickwraps/{id}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetClickwrapsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.clickwrapEntity = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetDnsRecords - Show site DNS configuration.
  /** 
   * Show site DNS configuration.
  **/
  GetDnsRecords(
    req: operations.GetDnsRecordsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDnsRecordsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDnsRecordsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/dns_records";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetDnsRecordsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.dnsRecordEntities = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetExternalEvents - List External Events
  /** 
   * List External Events
  **/
  GetExternalEvents(
    req: operations.GetExternalEventsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetExternalEventsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetExternalEventsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/external_events";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetExternalEventsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.externalEventEntities = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetExternalEventsId - Show External Event
  /** 
   * Show External Event
  **/
  GetExternalEventsId(
    req: operations.GetExternalEventsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetExternalEventsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetExternalEventsIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/external_events/{id}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetExternalEventsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.externalEventEntity = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetFileMigrationsId - Show File Migration
  /** 
   * Show File Migration
  **/
  GetFileMigrationsId(
    req: operations.GetFileMigrationsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetFileMigrationsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetFileMigrationsIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/file_migrations/{id}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetFileMigrationsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.fileMigrationEntity = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetFormFieldSets - List Form Field Sets
  /** 
   * List Form Field Sets
  **/
  GetFormFieldSets(
    req: operations.GetFormFieldSetsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetFormFieldSetsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetFormFieldSetsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/form_field_sets";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetFormFieldSetsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.formFieldSetEntities = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetFormFieldSetsId - Show Form Field Set
  /** 
   * Show Form Field Set
  **/
  GetFormFieldSetsId(
    req: operations.GetFormFieldSetsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetFormFieldSetsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetFormFieldSetsIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/form_field_sets/{id}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetFormFieldSetsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.formFieldSetEntity = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetGroupUsers - List Group Users
  /** 
   * List Group Users
  **/
  GetGroupUsers(
    req: operations.GetGroupUsersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetGroupUsersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetGroupUsersRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/group_users";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetGroupUsersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.groupUserEntities = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetGroups - List Groups
  /** 
   * List Groups
  **/
  GetGroups(
    req: operations.GetGroupsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetGroupsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetGroupsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/groups";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetGroupsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.groupEntities = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetGroupsGroupIdPermissions - List Permissions
  /** 
   * List Permissions
  **/
  GetGroupsGroupIdPermissions(
    req: operations.GetGroupsGroupIdPermissionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetGroupsGroupIdPermissionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetGroupsGroupIdPermissionsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/groups/{group_id}/permissions", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetGroupsGroupIdPermissionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.permissionEntities = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetGroupsGroupIdUsers - List Group Users
  /** 
   * List Group Users
  **/
  GetGroupsGroupIdUsers(
    req: operations.GetGroupsGroupIdUsersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetGroupsGroupIdUsersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetGroupsGroupIdUsersRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/groups/{group_id}/users", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetGroupsGroupIdUsersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.groupUserEntities = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetGroupsId - Show Group
  /** 
   * Show Group
  **/
  GetGroupsId(
    req: operations.GetGroupsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetGroupsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetGroupsIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/groups/{id}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetGroupsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.groupEntity = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetHistoryExportResults - List History Export Results
  /** 
   * List History Export Results
  **/
  GetHistoryExportResults(
    req: operations.GetHistoryExportResultsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetHistoryExportResultsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetHistoryExportResultsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/history_export_results";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetHistoryExportResultsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.historyExportResultEntities = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetHistoryExportsId - Show History Export
  /** 
   * Show History Export
  **/
  GetHistoryExportsId(
    req: operations.GetHistoryExportsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetHistoryExportsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetHistoryExportsIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/history_exports/{id}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetHistoryExportsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.historyExportEntity = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetInboxRecipients - List Inbox Recipients
  /** 
   * List Inbox Recipients
  **/
  GetInboxRecipients(
    req: operations.GetInboxRecipientsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetInboxRecipientsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetInboxRecipientsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/inbox_recipients";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetInboxRecipientsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.inboxRecipientEntities = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetInboxRegistrations - List Inbox Registrations
  /** 
   * List Inbox Registrations
  **/
  GetInboxRegistrations(
    req: operations.GetInboxRegistrationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetInboxRegistrationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetInboxRegistrationsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/inbox_registrations";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetInboxRegistrationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.inboxRegistrationEntities = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetInboxUploads - List Inbox Uploads
  /** 
   * List Inbox Uploads
  **/
  GetInboxUploads(
    req: operations.GetInboxUploadsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetInboxUploadsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetInboxUploadsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/inbox_uploads";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetInboxUploadsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.inboxUploadEntities = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetInvoices - List Invoices
  /** 
   * List Invoices
  **/
  GetInvoices(
    req: operations.GetInvoicesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetInvoicesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetInvoicesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/invoices";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetInvoicesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.accountLineItemEntities = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetInvoicesId - Show Invoice
  /** 
   * Show Invoice
  **/
  GetInvoicesId(
    req: operations.GetInvoicesIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetInvoicesIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetInvoicesIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/invoices/{id}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetInvoicesIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.accountLineItemEntity = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetIpAddresses - List IP Addresses associated with the current site
  /** 
   * List IP Addresses associated with the current site
  **/
  GetIpAddresses(
    req: operations.GetIpAddressesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetIpAddressesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetIpAddressesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/ip_addresses";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetIpAddressesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.ipAddressEntities = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetIpAddressesReserved - List all possible public IP addresses
  /** 
   * List all possible public IP addresses
  **/
  GetIpAddressesReserved(
    req: operations.GetIpAddressesReservedRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetIpAddressesReservedResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetIpAddressesReservedRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/ip_addresses/reserved";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetIpAddressesReservedResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.publicIpAddressEntities = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetMessageCommentReactions - List Message Comment Reactions
  /** 
   * List Message Comment Reactions
  **/
  GetMessageCommentReactions(
    req: operations.GetMessageCommentReactionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMessageCommentReactionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMessageCommentReactionsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/message_comment_reactions";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetMessageCommentReactionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.messageCommentReactionEntities = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetMessageCommentReactionsId - Show Message Comment Reaction
  /** 
   * Show Message Comment Reaction
  **/
  GetMessageCommentReactionsId(
    req: operations.GetMessageCommentReactionsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMessageCommentReactionsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMessageCommentReactionsIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/message_comment_reactions/{id}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetMessageCommentReactionsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.messageCommentReactionEntity = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetMessageComments - List Message Comments
  /** 
   * List Message Comments
  **/
  GetMessageComments(
    req: operations.GetMessageCommentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMessageCommentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMessageCommentsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/message_comments";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetMessageCommentsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.messageCommentEntities = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetMessageCommentsId - Show Message Comment
  /** 
   * Show Message Comment
  **/
  GetMessageCommentsId(
    req: operations.GetMessageCommentsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMessageCommentsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMessageCommentsIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/message_comments/{id}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetMessageCommentsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.messageCommentEntity = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetMessageReactions - List Message Reactions
  /** 
   * List Message Reactions
  **/
  GetMessageReactions(
    req: operations.GetMessageReactionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMessageReactionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMessageReactionsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/message_reactions";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetMessageReactionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.messageReactionEntities = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetMessageReactionsId - Show Message Reaction
  /** 
   * Show Message Reaction
  **/
  GetMessageReactionsId(
    req: operations.GetMessageReactionsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMessageReactionsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMessageReactionsIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/message_reactions/{id}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetMessageReactionsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.messageReactionEntity = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetMessages - List Messages
  /** 
   * List Messages
  **/
  GetMessages(
    req: operations.GetMessagesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMessagesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMessagesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/messages";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetMessagesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.messageEntities = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetMessagesId - Show Message
  /** 
   * Show Message
  **/
  GetMessagesId(
    req: operations.GetMessagesIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMessagesIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMessagesIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/messages/{id}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetMessagesIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.messageEntity = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetNotifications - List Notifications
  /** 
   * List Notifications
  **/
  GetNotifications(
    req: operations.GetNotificationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNotificationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNotificationsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/notifications";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetNotificationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.notificationEntities = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetNotificationsId - Show Notification
  /** 
   * Show Notification
  **/
  GetNotificationsId(
    req: operations.GetNotificationsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNotificationsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNotificationsIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/notifications/{id}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetNotificationsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.notificationEntity = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetPayments - List Payments
  /** 
   * List Payments
  **/
  GetPayments(
    req: operations.GetPaymentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPaymentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPaymentsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/payments";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetPaymentsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.accountLineItemEntities = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetPaymentsId - Show Payment
  /** 
   * Show Payment
  **/
  GetPaymentsId(
    req: operations.GetPaymentsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPaymentsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPaymentsIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/payments/{id}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetPaymentsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.accountLineItemEntity = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetPermissions - List Permissions
  /** 
   * List Permissions
  **/
  GetPermissions(
    req: operations.GetPermissionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPermissionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPermissionsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/permissions";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetPermissionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.permissionEntities = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetProjects - List Projects
  /** 
   * List Projects
  **/
  GetProjects(
    req: operations.GetProjectsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetProjectsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetProjectsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/projects";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetProjectsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.projectEntities = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetProjectsId - Show Project
  /** 
   * Show Project
  **/
  GetProjectsId(
    req: operations.GetProjectsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetProjectsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetProjectsIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/projects/{id}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetProjectsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.projectEntity = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetPublicKeys - List Public Keys
  /** 
   * List Public Keys
  **/
  GetPublicKeys(
    req: operations.GetPublicKeysRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPublicKeysResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPublicKeysRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/public_keys";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetPublicKeysResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.publicKeyEntities = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetPublicKeysId - Show Public Key
  /** 
   * Show Public Key
  **/
  GetPublicKeysId(
    req: operations.GetPublicKeysIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPublicKeysIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPublicKeysIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/public_keys/{id}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetPublicKeysIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.publicKeyEntity = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRemoteServers - List Remote Servers
  /** 
   * List Remote Servers
  **/
  GetRemoteServers(
    req: operations.GetRemoteServersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRemoteServersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRemoteServersRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/remote_servers";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRemoteServersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.remoteServerEntities = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRemoteServersId - Show Remote Server
  /** 
   * Show Remote Server
  **/
  GetRemoteServersId(
    req: operations.GetRemoteServersIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRemoteServersIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRemoteServersIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/remote_servers/{id}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRemoteServersIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.remoteServerEntity = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRequests - List Requests
  /** 
   * List Requests
  **/
  GetRequests(
    req: operations.GetRequestsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRequestsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRequestsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/requests";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRequestsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.requestEntities = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRequestsFoldersPath - List Requests
  /** 
   * List Requests
  **/
  GetRequestsFoldersPath(
    req: operations.GetRequestsFoldersPathRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRequestsFoldersPathResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRequestsFoldersPathRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/requests/folders/{path}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRequestsFoldersPathResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.requestEntities = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSettingsChanges - List Settings Changes
  /** 
   * List Settings Changes
  **/
  GetSettingsChanges(
    req: operations.GetSettingsChangesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSettingsChangesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSettingsChangesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/settings_changes";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetSettingsChangesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.settingsChangeEntities = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSite - Show site settings
  /** 
   * Show site settings
  **/
  GetSite(
    
    config?: AxiosRequestConfig
  ): Promise<operations.GetSiteResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/site";
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetSiteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.siteEntity = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSiteApiKeys - List Api Keys
  /** 
   * List Api Keys
  **/
  GetSiteApiKeys(
    req: operations.GetSiteApiKeysRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSiteApiKeysResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSiteApiKeysRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/site/api_keys";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetSiteApiKeysResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiKeyEntities = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSiteDnsRecords - Show site DNS configuration.
  /** 
   * Show site DNS configuration.
  **/
  GetSiteDnsRecords(
    req: operations.GetSiteDnsRecordsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSiteDnsRecordsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSiteDnsRecordsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/site/dns_records";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetSiteDnsRecordsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.dnsRecordEntities = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSiteIpAddresses - List IP Addresses associated with the current site
  /** 
   * List IP Addresses associated with the current site
  **/
  GetSiteIpAddresses(
    req: operations.GetSiteIpAddressesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSiteIpAddressesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSiteIpAddressesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/site/ip_addresses";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetSiteIpAddressesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.ipAddressEntities = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSiteUsage - Get the most recent usage snapshot (usage data for billing purposes) for a Site.
  /** 
   * Get the most recent usage snapshot (usage data for billing purposes) for a Site.
  **/
  GetSiteUsage(
    
    config?: AxiosRequestConfig
  ): Promise<operations.GetSiteUsageResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/site/usage";
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetSiteUsageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.usageSnapshotEntity = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSsoStrategies - List Sso Strategies
  /** 
   * List Sso Strategies
  **/
  GetSsoStrategies(
    req: operations.GetSsoStrategiesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSsoStrategiesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSsoStrategiesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/sso_strategies";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetSsoStrategiesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.ssoStrategyEntities = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSsoStrategiesId - Show Sso Strategy
  /** 
   * Show Sso Strategy
  **/
  GetSsoStrategiesId(
    req: operations.GetSsoStrategiesIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSsoStrategiesIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSsoStrategiesIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/sso_strategies/{id}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetSsoStrategiesIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.ssoStrategyEntity = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetStylesPath - Show Style
  /** 
   * Show Style
  **/
  GetStylesPath(
    req: operations.GetStylesPathRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetStylesPathResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetStylesPathRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/styles/{path}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetStylesPathResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.styleEntity = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSyncJobs - List Sync Jobs
  /** 
   * List Sync Jobs
  **/
  GetSyncJobs(
    req: operations.GetSyncJobsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSyncJobsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSyncJobsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/sync_jobs";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetSyncJobsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.syncJobEntities = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetUsageDailySnapshots - List Usage Daily Snapshots
  /** 
   * List Usage Daily Snapshots
  **/
  GetUsageDailySnapshots(
    req: operations.GetUsageDailySnapshotsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUsageDailySnapshotsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUsageDailySnapshotsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/usage_daily_snapshots";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetUsageDailySnapshotsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.usageDailySnapshotEntities = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetUsageSnapshots - List Usage Snapshots
  /** 
   * List Usage Snapshots
  **/
  GetUsageSnapshots(
    req: operations.GetUsageSnapshotsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUsageSnapshotsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUsageSnapshotsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/usage_snapshots";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetUsageSnapshotsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.usageSnapshotEntities = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetUserApiKeys - List Api Keys
  /** 
   * List Api Keys
  **/
  GetUserApiKeys(
    req: operations.GetUserApiKeysRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUserApiKeysResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUserApiKeysRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/user/api_keys";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetUserApiKeysResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiKeyEntities = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetUserAs2Keys - List As2 Keys
  /** 
   * List As2 Keys
  **/
  GetUserAs2Keys(
    req: operations.GetUserAs2KeysRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUserAs2KeysResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUserAs2KeysRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/user/as2_keys";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetUserAs2KeysResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.as2KeyEntities = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetUserCipherUses - List User Cipher Uses
  /** 
   * List User Cipher Uses
  **/
  GetUserCipherUses(
    req: operations.GetUserCipherUsesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUserCipherUsesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUserCipherUsesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/user_cipher_uses";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetUserCipherUsesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.userCipherUseEntities = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetUserGroups - List Group Users
  /** 
   * List Group Users
  **/
  GetUserGroups(
    req: operations.GetUserGroupsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUserGroupsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUserGroupsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/user/groups";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetUserGroupsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.groupUserEntities = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetUserPublicKeys - List Public Keys
  /** 
   * List Public Keys
  **/
  GetUserPublicKeys(
    req: operations.GetUserPublicKeysRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUserPublicKeysResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUserPublicKeysRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/user/public_keys";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetUserPublicKeysResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.publicKeyEntities = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetUserRequests - List User Requests
  /** 
   * List User Requests
  **/
  GetUserRequests(
    req: operations.GetUserRequestsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUserRequestsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUserRequestsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/user_requests";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetUserRequestsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.userRequestEntities = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetUserRequestsId - Show User Request
  /** 
   * Show User Request
  **/
  GetUserRequestsId(
    req: operations.GetUserRequestsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUserRequestsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUserRequestsIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/user_requests/{id}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetUserRequestsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.userRequestEntity = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetUsers - List Users
  /** 
   * List Users
  **/
  GetUsers(
    req: operations.GetUsersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUsersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUsersRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/users";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetUsersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.userEntities = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetUsersId - Show User
  /** 
   * Show User
  **/
  GetUsersId(
    req: operations.GetUsersIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUsersIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUsersIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/users/{id}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetUsersIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.userEntity = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetUsersUserIdApiKeys - List Api Keys
  /** 
   * List Api Keys
  **/
  GetUsersUserIdApiKeys(
    req: operations.GetUsersUserIdApiKeysRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUsersUserIdApiKeysResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUsersUserIdApiKeysRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/users/{user_id}/api_keys", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetUsersUserIdApiKeysResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiKeyEntities = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetUsersUserIdAs2Keys - List As2 Keys
  /** 
   * List As2 Keys
  **/
  GetUsersUserIdAs2Keys(
    req: operations.GetUsersUserIdAs2KeysRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUsersUserIdAs2KeysResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUsersUserIdAs2KeysRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/users/{user_id}/as2_keys", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetUsersUserIdAs2KeysResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.as2KeyEntities = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetUsersUserIdCipherUses - List User Cipher Uses
  /** 
   * List User Cipher Uses
  **/
  GetUsersUserIdCipherUses(
    req: operations.GetUsersUserIdCipherUsesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUsersUserIdCipherUsesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUsersUserIdCipherUsesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/users/{user_id}/cipher_uses", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetUsersUserIdCipherUsesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.userCipherUseEntities = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetUsersUserIdGroups - List Group Users
  /** 
   * List Group Users
  **/
  GetUsersUserIdGroups(
    req: operations.GetUsersUserIdGroupsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUsersUserIdGroupsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUsersUserIdGroupsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/users/{user_id}/groups", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetUsersUserIdGroupsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.groupUserEntities = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetUsersUserIdPermissions - List Permissions
  /** 
   * List Permissions
  **/
  GetUsersUserIdPermissions(
    req: operations.GetUsersUserIdPermissionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUsersUserIdPermissionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUsersUserIdPermissionsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/users/{user_id}/permissions", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetUsersUserIdPermissionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.permissionEntities = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetUsersUserIdPublicKeys - List Public Keys
  /** 
   * List Public Keys
  **/
  GetUsersUserIdPublicKeys(
    req: operations.GetUsersUserIdPublicKeysRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUsersUserIdPublicKeysResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUsersUserIdPublicKeysRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/users/{user_id}/public_keys", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetUsersUserIdPublicKeysResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.publicKeyEntities = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // HistoryList - List site full action history.
  /** 
   * List site full action history.
  **/
  HistoryList(
    req: operations.HistoryListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.HistoryListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.HistoryListRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/history";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.HistoryListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.actionEntities = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // HistoryListForFile - List history for specific file.
  /** 
   * List history for specific file.
  **/
  HistoryListForFile(
    req: operations.HistoryListForFileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.HistoryListForFileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.HistoryListForFileRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/history/files/{path}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.HistoryListForFileResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.actionEntities = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // HistoryListForFolder - List history for specific folder.
  /** 
   * List history for specific folder.
  **/
  HistoryListForFolder(
    req: operations.HistoryListForFolderRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.HistoryListForFolderResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.HistoryListForFolderRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/history/folders/{path}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.HistoryListForFolderResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.actionEntities = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // HistoryListForUser - List history for specific user.
  /** 
   * List history for specific user.
  **/
  HistoryListForUser(
    req: operations.HistoryListForUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.HistoryListForUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.HistoryListForUserRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/history/users/{user_id}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.HistoryListForUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.actionEntities = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // HistoryListLogins - List site login history.
  /** 
   * List site login history.
  **/
  HistoryListLogins(
    req: operations.HistoryListLoginsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.HistoryListLoginsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.HistoryListLoginsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/history/login";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.HistoryListLoginsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.actionEntities = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // LockListForPath - List Locks by path
  /** 
   * List Locks by path
  **/
  LockListForPath(
    req: operations.LockListForPathRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.LockListForPathResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.LockListForPathRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/locks/{path}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.LockListForPathResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.lockEntities = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PatchApiKeysId - Update Api Key
  /** 
   * Update Api Key
  **/
  PatchApiKeysId(
    req: operations.PatchApiKeysIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PatchApiKeysIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PatchApiKeysIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api_keys/{id}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .patch(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PatchApiKeysIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiKeyEntity = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PatchAs2KeysId - Update As2 Key
  /** 
   * Update As2 Key
  **/
  PatchAs2KeysId(
    req: operations.PatchAs2KeysIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PatchAs2KeysIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PatchAs2KeysIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/as2_keys/{id}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .patch(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PatchAs2KeysIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.as2KeyEntity = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PatchAutomationsId - Update Automation
  /** 
   * Update Automation
  **/
  PatchAutomationsId(
    req: operations.PatchAutomationsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PatchAutomationsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PatchAutomationsIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/automations/{id}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .patch(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PatchAutomationsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.automationEntity = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PatchBehaviorsId - Update Behavior
  /** 
   * Update Behavior
  **/
  PatchBehaviorsId(
    req: operations.PatchBehaviorsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PatchBehaviorsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PatchBehaviorsIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/behaviors/{id}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .patch(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PatchBehaviorsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.behaviorEntity = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PatchBundlesId - Update Bundle
  /** 
   * Update Bundle
  **/
  PatchBundlesId(
    req: operations.PatchBundlesIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PatchBundlesIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PatchBundlesIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/bundles/{id}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .patch(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PatchBundlesIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.bundleEntity = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PatchClickwrapsId - Update Clickwrap
  /** 
   * Update Clickwrap
  **/
  PatchClickwrapsId(
    req: operations.PatchClickwrapsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PatchClickwrapsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PatchClickwrapsIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/clickwraps/{id}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .patch(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PatchClickwrapsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.clickwrapEntity = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PatchFileCommentsId - Update File Comment
  /** 
   * Update File Comment
  **/
  PatchFileCommentsId(
    req: operations.PatchFileCommentsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PatchFileCommentsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PatchFileCommentsIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/file_comments/{id}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .patch(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PatchFileCommentsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.fileCommentEntity = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PatchFilesPath - Update file/folder metadata
  /** 
   * Update file/folder metadata
  **/
  PatchFilesPath(
    req: operations.PatchFilesPathRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PatchFilesPathResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PatchFilesPathRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/files/{path}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .patch(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PatchFilesPathResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.fileEntity = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PatchGroupUsersId - Update Group User
  /** 
   * Update Group User
  **/
  PatchGroupUsersId(
    req: operations.PatchGroupUsersIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PatchGroupUsersIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PatchGroupUsersIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/group_users/{id}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .patch(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PatchGroupUsersIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.groupUserEntity = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PatchGroupsGroupIdMembershipsUserId - Update Group User
  /** 
   * Update Group User
  **/
  PatchGroupsGroupIdMembershipsUserId(
    req: operations.PatchGroupsGroupIdMembershipsUserIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PatchGroupsGroupIdMembershipsUserIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PatchGroupsGroupIdMembershipsUserIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/groups/{group_id}/memberships/{user_id}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .patch(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PatchGroupsGroupIdMembershipsUserIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.groupUserEntity = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PatchGroupsId - Update Group
  /** 
   * Update Group
  **/
  PatchGroupsId(
    req: operations.PatchGroupsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PatchGroupsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PatchGroupsIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/groups/{id}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .patch(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PatchGroupsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.groupEntity = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PatchMessageCommentsId - Update Message Comment
  /** 
   * Update Message Comment
  **/
  PatchMessageCommentsId(
    req: operations.PatchMessageCommentsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PatchMessageCommentsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PatchMessageCommentsIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/message_comments/{id}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .patch(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PatchMessageCommentsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.messageCommentEntity = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PatchMessagesId - Update Message
  /** 
   * Update Message
  **/
  PatchMessagesId(
    req: operations.PatchMessagesIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PatchMessagesIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PatchMessagesIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/messages/{id}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .patch(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PatchMessagesIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.messageEntity = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PatchNotificationsId - Update Notification
  /** 
   * Update Notification
  **/
  PatchNotificationsId(
    req: operations.PatchNotificationsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PatchNotificationsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PatchNotificationsIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/notifications/{id}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .patch(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PatchNotificationsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.notificationEntity = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PatchProjectsId - Update Project
  /** 
   * Update Project
  **/
  PatchProjectsId(
    req: operations.PatchProjectsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PatchProjectsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PatchProjectsIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/projects/{id}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .patch(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PatchProjectsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.projectEntity = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PatchPublicKeysId - Update Public Key
  /** 
   * Update Public Key
  **/
  PatchPublicKeysId(
    req: operations.PatchPublicKeysIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PatchPublicKeysIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PatchPublicKeysIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/public_keys/{id}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .patch(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PatchPublicKeysIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.publicKeyEntity = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PatchRemoteServersId - Update Remote Server
  /** 
   * Update Remote Server
  **/
  PatchRemoteServersId(
    req: operations.PatchRemoteServersIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PatchRemoteServersIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PatchRemoteServersIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/remote_servers/{id}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .patch(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PatchRemoteServersIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.remoteServerEntity = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PatchSite - Update site settings.
  /** 
   * Update site settings.
  **/
  PatchSite(
    req: operations.PatchSiteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PatchSiteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PatchSiteRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/site";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .patch(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PatchSiteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.siteEntity = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PatchStylesPath - Update Style
  /** 
   * Update Style
  **/
  PatchStylesPath(
    req: operations.PatchStylesPathRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PatchStylesPathResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PatchStylesPathRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/styles/{path}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .patch(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PatchStylesPathResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.styleEntity = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PatchUser - Update User
  /** 
   * Update User
  **/
  PatchUser(
    req: operations.PatchUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PatchUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PatchUserRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/user";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .patch(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PatchUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.userEntity = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PatchUsersId - Update User
  /** 
   * Update User
  **/
  PatchUsersId(
    req: operations.PatchUsersIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PatchUsersIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PatchUsersIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/users/{id}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .patch(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PatchUsersIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.userEntity = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostActionNotificationExports - Create Action Notification Export
  /** 
   * Create Action Notification Export
  **/
  PostActionNotificationExports(
    req: operations.PostActionNotificationExportsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostActionNotificationExportsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostActionNotificationExportsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/action_notification_exports";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostActionNotificationExportsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.actionNotificationExportEntity = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostActionWebhookFailuresIdRetry - retry Action Webhook Failure
  /** 
   * retry Action Webhook Failure
  **/
  PostActionWebhookFailuresIdRetry(
    req: operations.PostActionWebhookFailuresIdRetryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostActionWebhookFailuresIdRetryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostActionWebhookFailuresIdRetryRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/action_webhook_failures/{id}/retry", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostActionWebhookFailuresIdRetryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostApiKeys - Create Api Key
  /** 
   * Create Api Key
  **/
  PostApiKeys(
    req: operations.PostApiKeysRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostApiKeysResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostApiKeysRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api_keys";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostApiKeysResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiKeyEntity = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostAs2Keys - Create As2 Key
  /** 
   * Create As2 Key
  **/
  PostAs2Keys(
    req: operations.PostAs2KeysRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostAs2KeysResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostAs2KeysRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/as2_keys";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostAs2KeysResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.as2KeyEntity = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostAutomations - Create Automation
  /** 
   * Create Automation
  **/
  PostAutomations(
    req: operations.PostAutomationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostAutomationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostAutomationsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/automations";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostAutomationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.automationEntity = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostBehaviors - Create Behavior
  /** 
   * Create Behavior
  **/
  PostBehaviors(
    req: operations.PostBehaviorsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostBehaviorsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostBehaviorsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/behaviors";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostBehaviorsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.behaviorEntity = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostBehaviorsWebhookTest - Test webhook.
  /** 
   * Test webhook.
  **/
  PostBehaviorsWebhookTest(
    req: operations.PostBehaviorsWebhookTestRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostBehaviorsWebhookTestResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostBehaviorsWebhookTestRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/behaviors/webhook/test";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostBehaviorsWebhookTestResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.statusEntity = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostBundleRecipients - Create Bundle Recipient
  /** 
   * Create Bundle Recipient
  **/
  PostBundleRecipients(
    req: operations.PostBundleRecipientsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostBundleRecipientsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostBundleRecipientsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/bundle_recipients";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostBundleRecipientsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.bundleRecipientEntity = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostBundles - Create Bundle
  /** 
   * Create Bundle
  **/
  PostBundles(
    req: operations.PostBundlesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostBundlesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostBundlesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/bundles";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostBundlesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.bundleEntity = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostBundlesIdShare - Send email(s) with a link to bundle
  /** 
   * Send email(s) with a link to bundle
  **/
  PostBundlesIdShare(
    req: operations.PostBundlesIdShareRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostBundlesIdShareResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostBundlesIdShareRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/bundles/{id}/share", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostBundlesIdShareResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostClickwraps - Create Clickwrap
  /** 
   * Create Clickwrap
  **/
  PostClickwraps(
    req: operations.PostClickwrapsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostClickwrapsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostClickwrapsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/clickwraps";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostClickwrapsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.clickwrapEntity = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostExternalEvents - Create External Event
  /** 
   * Create External Event
  **/
  PostExternalEvents(
    req: operations.PostExternalEventsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostExternalEventsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostExternalEventsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/external_events";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostExternalEventsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.externalEventEntity = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostFileCommentReactions - Create File Comment Reaction
  /** 
   * Create File Comment Reaction
  **/
  PostFileCommentReactions(
    req: operations.PostFileCommentReactionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostFileCommentReactionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostFileCommentReactionsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/file_comment_reactions";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostFileCommentReactionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.fileCommentReactionEntity = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostFileComments - Create File Comment
  /** 
   * Create File Comment
  **/
  PostFileComments(
    req: operations.PostFileCommentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostFileCommentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostFileCommentsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/file_comments";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostFileCommentsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.fileCommentEntity = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostFilesPath - Upload file
  /** 
   * Upload file
  **/
  PostFilesPath(
    req: operations.PostFilesPathRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostFilesPathResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostFilesPathRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/files/{path}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostFilesPathResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.fileEntity = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostFoldersPath - Create folder
  /** 
   * Create folder
  **/
  PostFoldersPath(
    req: operations.PostFoldersPathRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostFoldersPathResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostFoldersPathRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/folders/{path}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostFoldersPathResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.fileEntity = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostGroupUsers - Create Group User
  /** 
   * Create Group User
  **/
  PostGroupUsers(
    req: operations.PostGroupUsersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostGroupUsersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostGroupUsersRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/group_users";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostGroupUsersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.groupUserEntity = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostGroups - Create Group
  /** 
   * Create Group
  **/
  PostGroups(
    req: operations.PostGroupsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostGroupsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostGroupsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/groups";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostGroupsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.groupEntity = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostGroupsGroupIdUsers - Create User
  /** 
   * Create User
  **/
  PostGroupsGroupIdUsers(
    req: operations.PostGroupsGroupIdUsersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostGroupsGroupIdUsersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostGroupsGroupIdUsersRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/groups/{group_id}/users", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostGroupsGroupIdUsersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.userEntity = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostHistoryExports - Create History Export
  /** 
   * Create History Export
  **/
  PostHistoryExports(
    req: operations.PostHistoryExportsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostHistoryExportsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostHistoryExportsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/history_exports";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostHistoryExportsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.historyExportEntity = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostInboxRecipients - Create Inbox Recipient
  /** 
   * Create Inbox Recipient
  **/
  PostInboxRecipients(
    req: operations.PostInboxRecipientsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostInboxRecipientsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostInboxRecipientsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/inbox_recipients";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostInboxRecipientsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.inboxRecipientEntity = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostLocksPath - Create Lock
  /** 
   * Create Lock
  **/
  PostLocksPath(
    req: operations.PostLocksPathRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostLocksPathResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostLocksPathRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/locks/{path}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostLocksPathResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.lockEntity = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostMessageCommentReactions - Create Message Comment Reaction
  /** 
   * Create Message Comment Reaction
  **/
  PostMessageCommentReactions(
    req: operations.PostMessageCommentReactionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostMessageCommentReactionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostMessageCommentReactionsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/message_comment_reactions";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostMessageCommentReactionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.messageCommentReactionEntity = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostMessageComments - Create Message Comment
  /** 
   * Create Message Comment
  **/
  PostMessageComments(
    req: operations.PostMessageCommentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostMessageCommentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostMessageCommentsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/message_comments";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostMessageCommentsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.messageCommentEntity = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostMessageReactions - Create Message Reaction
  /** 
   * Create Message Reaction
  **/
  PostMessageReactions(
    req: operations.PostMessageReactionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostMessageReactionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostMessageReactionsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/message_reactions";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostMessageReactionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.messageReactionEntity = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostMessages - Create Message
  /** 
   * Create Message
  **/
  PostMessages(
    req: operations.PostMessagesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostMessagesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostMessagesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/messages";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostMessagesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.messageEntity = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostNotifications - Create Notification
  /** 
   * Create Notification
  **/
  PostNotifications(
    req: operations.PostNotificationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostNotificationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostNotificationsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/notifications";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostNotificationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.notificationEntity = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostPermissions - Create Permission
  /** 
   * Create Permission
  **/
  PostPermissions(
    req: operations.PostPermissionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostPermissionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostPermissionsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/permissions";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostPermissionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.permissionEntity = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostProjects - Create Project
  /** 
   * Create Project
  **/
  PostProjects(
    req: operations.PostProjectsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostProjectsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostProjectsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/projects";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostProjectsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.projectEntity = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostPublicKeys - Create Public Key
  /** 
   * Create Public Key
  **/
  PostPublicKeys(
    req: operations.PostPublicKeysRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostPublicKeysResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostPublicKeysRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/public_keys";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostPublicKeysResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.publicKeyEntity = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostRemoteServers - Create Remote Server
  /** 
   * Create Remote Server
  **/
  PostRemoteServers(
    req: operations.PostRemoteServersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRemoteServersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRemoteServersRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/remote_servers";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostRemoteServersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.remoteServerEntity = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostRequests - Create Request
  /** 
   * Create Request
  **/
  PostRequests(
    req: operations.PostRequestsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRequestsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRequestsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/requests";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostRequestsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.requestEntity = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostSessions - Create user session (log in)
  /** 
   * Create user session (log in)
  **/
  PostSessions(
    req: operations.PostSessionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostSessionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostSessionsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/sessions";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostSessionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.sessionEntity = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostSiteApiKeys - Create Api Key
  /** 
   * Create Api Key
  **/
  PostSiteApiKeys(
    req: operations.PostSiteApiKeysRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostSiteApiKeysResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostSiteApiKeysRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/site/api_keys";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostSiteApiKeysResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiKeyEntity = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostSiteTestWebhook - Test webhook.
  /** 
   * Test webhook.
  **/
  PostSiteTestWebhook(
    req: operations.PostSiteTestWebhookRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostSiteTestWebhookResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostSiteTestWebhookRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/site/test-webhook";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostSiteTestWebhookResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.statusEntity = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostUserApiKeys - Create Api Key
  /** 
   * Create Api Key
  **/
  PostUserApiKeys(
    req: operations.PostUserApiKeysRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostUserApiKeysResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostUserApiKeysRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/user/api_keys";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostUserApiKeysResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiKeyEntity = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostUserAs2Keys - Create As2 Key
  /** 
   * Create As2 Key
  **/
  PostUserAs2Keys(
    req: operations.PostUserAs2KeysRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostUserAs2KeysResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostUserAs2KeysRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/user/as2_keys";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostUserAs2KeysResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.as2KeyEntity = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostUserPublicKeys - Create Public Key
  /** 
   * Create Public Key
  **/
  PostUserPublicKeys(
    req: operations.PostUserPublicKeysRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostUserPublicKeysResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostUserPublicKeysRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/user/public_keys";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostUserPublicKeysResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.publicKeyEntity = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostUserRequests - Create User Request
  /** 
   * Create User Request
  **/
  PostUserRequests(
    req: operations.PostUserRequestsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostUserRequestsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostUserRequestsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/user_requests";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostUserRequestsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.userRequestEntity = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostUsers - Create User
  /** 
   * Create User
  **/
  PostUsers(
    req: operations.PostUsersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostUsersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostUsersRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/users";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostUsersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.userEntity = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostUsersId2faReset - Trigger 2FA Reset process for user who has lost access to their existing 2FA methods.
  /** 
   * Trigger 2FA Reset process for user who has lost access to their existing 2FA methods.
  **/
  PostUsersId2faReset(
    req: operations.PostUsersId2faResetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostUsersId2faResetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostUsersId2faResetRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/users/{id}/2fa/reset", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostUsersId2faResetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostUsersIdResendWelcomeEmail - Resend user welcome email
  /** 
   * Resend user welcome email
  **/
  PostUsersIdResendWelcomeEmail(
    req: operations.PostUsersIdResendWelcomeEmailRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostUsersIdResendWelcomeEmailResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostUsersIdResendWelcomeEmailRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/users/{id}/resend_welcome_email", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostUsersIdResendWelcomeEmailResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostUsersIdUnlock - Unlock user who has been locked out due to failed logins.
  /** 
   * Unlock user who has been locked out due to failed logins.
  **/
  PostUsersIdUnlock(
    req: operations.PostUsersIdUnlockRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostUsersIdUnlockResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostUsersIdUnlockRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/users/{id}/unlock", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostUsersIdUnlockResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostUsersUserIdApiKeys - Create Api Key
  /** 
   * Create Api Key
  **/
  PostUsersUserIdApiKeys(
    req: operations.PostUsersUserIdApiKeysRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostUsersUserIdApiKeysResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostUsersUserIdApiKeysRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/users/{user_id}/api_keys", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostUsersUserIdApiKeysResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiKeyEntity = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostUsersUserIdAs2Keys - Create As2 Key
  /** 
   * Create As2 Key
  **/
  PostUsersUserIdAs2Keys(
    req: operations.PostUsersUserIdAs2KeysRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostUsersUserIdAs2KeysResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostUsersUserIdAs2KeysRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/users/{user_id}/as2_keys", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostUsersUserIdAs2KeysResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.as2KeyEntity = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostUsersUserIdPublicKeys - Create Public Key
  /** 
   * Create Public Key
  **/
  PostUsersUserIdPublicKeys(
    req: operations.PostUsersUserIdPublicKeysRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostUsersUserIdPublicKeysResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostUsersUserIdPublicKeysRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/users/{user_id}/public_keys", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostUsersUserIdPublicKeysResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.publicKeyEntity = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostWebhookTests - Create Webhook Test
  /** 
   * Create Webhook Test
  **/
  PostWebhookTests(
    req: operations.PostWebhookTestsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostWebhookTestsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostWebhookTestsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/webhook_tests";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostWebhookTestsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.webhookTestEntity = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 409:
            break;
          case 412:
            break;
          case 422:
            break;
          case 423:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
