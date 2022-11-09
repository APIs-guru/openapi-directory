import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { MatchContentType } from "../internal/utils/contenttype";
import * as operations from "./models/operations";
import { ParamsSerializerOptions } from "axios";
import { GetQueryParamSerializer } from "../internal/utils/queryparams";
import { SerializeRequestBody } from "../internal/utils/requestbody";
import FormData from 'form-data';
import {GetHeadersFromRequest} from "../internal/utils/headers";
import { CreateSecurityClient } from "../internal/utils/security";
import * as utils from "../internal/utils/utils";
import { Security } from "./models/shared";

type OptsFunc = (sdk: SDK) => void;

const Servers = [
  "https://api.configcat.com",
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

export function WithSecurity(security: Security): OptsFunc {
  if (!(security instanceof utils.SpeakeasyBase)) {
    security = new Security(security);
  }
  return (sdk: SDK) => {
    sdk.security = security;
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
  
  // AddOrUpdateIntegrationLink - Add or update Integration link
  AddOrUpdateIntegrationLink(
    req: operations.AddOrUpdateIntegrationLinkRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AddOrUpdateIntegrationLinkResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AddOrUpdateIntegrationLinkRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/environments/{environmentId}/settings/{settingId}/integrationLinks/{integrationLinkType}/{key}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.AddOrUpdateIntegrationLinkResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/hal+json`)) {
                res.integrationLinkModel = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.integrationLinkModel = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 404:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateConfig - Create Config
  /** 
   * This endpoint creates a new Config in a specified Product 
   * identified by the `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.
  **/
  CreateConfig(
    req: operations.CreateConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateConfigRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/products/{productId}/configs", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.CreateConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/hal+json`)) {
                res.configModelHaljson = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.configModel = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 404:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateEnvironment - Create Environment
  /** 
   * This endpoint creates a new Environment in a specified Product 
   * identified by the `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.
  **/
  CreateEnvironment(
    req: operations.CreateEnvironmentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateEnvironmentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateEnvironmentRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/products/{productId}/environments", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.CreateEnvironmentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/hal+json`)) {
                res.environmentModelHaljson = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.environmentModel = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 404:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreatePermissionGroup - Create Permission Group
  /** 
   * This endpoint creates a new Permission Group in a specified Product 
   * identified by the `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.
  **/
  CreatePermissionGroup(
    req: operations.CreatePermissionGroupRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreatePermissionGroupResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreatePermissionGroupRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/products/{productId}/permissions", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.CreatePermissionGroupResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/hal+json`)) {
                res.permissionGroupModel = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.permissionGroupModel = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 404:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateProduct - Create Product
  /** 
   * This endpoint creates a new Product in a specified Organization 
   * identified by the `organizationId` parameter, which can be obtained from the [List Organizations](#operation/get-organizations) endpoint.
  **/
  CreateProduct(
    req: operations.CreateProductRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateProductResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateProductRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/organizations/{organizationId}/products", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.CreateProductResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/hal+json`)) {
                res.productModelHaljson = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.productModel = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 404:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateSetting - Create Flag
  /** 
   * This endpoint creates a new Feature Flag or Setting in a specified Config
   * identified by the `configId` parameter.
   * 
   * **Important:** The `key` attribute must be unique within the given Config.
  **/
  CreateSetting(
    req: operations.CreateSettingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateSettingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateSettingRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/configs/{configId}/settings", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.CreateSettingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/hal+json`)) {
                res.settingModelHaljson = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.settingModel = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 404:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateTag - Create Tag
  /** 
   * This endpoint creates a new Tag in a specified Product 
   * identified by the `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.
  **/
  CreateTag(
    req: operations.CreateTagRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateTagResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateTagRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/products/{productId}/tags", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.CreateTagResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/hal+json`)) {
                res.tagModelHaljson = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.tagModel = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 404:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteConfig - Delete Config
  /** 
   * This endpoint removes a Config identified by the `configId` parameter.
  **/
  DeleteConfig(
    req: operations.DeleteConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteConfigRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/configs/{configId}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 400:
            break;
          case 401:
            break;
          case 404:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteEnvironment - Delete Environment
  /** 
   * This endpoint removes an Environment identified by the `environmentId` parameter.
  **/
  DeleteEnvironment(
    req: operations.DeleteEnvironmentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteEnvironmentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteEnvironmentRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/environments/{environmentId}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteEnvironmentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 400:
            break;
          case 401:
            break;
          case 404:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteIntegrationLink - Delete Integration link
  DeleteIntegrationLink(
    req: operations.DeleteIntegrationLinkRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteIntegrationLinkResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteIntegrationLinkRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/environments/{environmentId}/settings/{settingId}/integrationLinks/{integrationLinkType}/{key}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteIntegrationLinkResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/hal+json`)) {
                res.deleteIntegrationLinkModel = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.deleteIntegrationLinkModel = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 404:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteOrganizationMember - Delete Member from Organization
  /** 
   * This endpoint removes a Member identified by the `userId` from the 
   * given Organization identified by the `organizationId` parameter.
  **/
  DeleteOrganizationMember(
    req: operations.DeleteOrganizationMemberRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteOrganizationMemberResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteOrganizationMemberRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/organizations/{organizationId}/members/{userId}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteOrganizationMemberResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 400:
            break;
          case 401:
            break;
          case 404:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeletePermissionGroup - Delete Permission Group
  /** 
   * This endpoint removes a Permission Group identified by the `permissionGroupId` parameter.
  **/
  DeletePermissionGroup(
    req: operations.DeletePermissionGroupRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeletePermissionGroupResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeletePermissionGroupRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/permissions/{permissionGroupId}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeletePermissionGroupResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 400:
            break;
          case 401:
            break;
          case 404:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteProduct - Delete Product
  /** 
   * This endpoint removes a Product identified by the `productId` parameter.
  **/
  DeleteProduct(
    req: operations.DeleteProductRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteProductResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteProductRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/products/{productId}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteProductResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 400:
            break;
          case 401:
            break;
          case 404:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteProductMember - Delete Member from Product
  /** 
   * This endpoint removes a Member identified by the `userId` from the 
   * given Product identified by the `productId` parameter.
  **/
  DeleteProductMember(
    req: operations.DeleteProductMemberRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteProductMemberResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteProductMemberRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/products/{productId}/members/{userId}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteProductMemberResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 400:
            break;
          case 401:
            break;
          case 404:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteSetting - Delete Flag
  /** 
   * This endpoint removes a Feature Flag or Setting from a specified Config, 
   * identified by the `configId` parameter.
  **/
  DeleteSetting(
    req: operations.DeleteSettingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSettingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteSettingRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/settings/{settingId}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteSettingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 400:
            break;
          case 401:
            break;
          case 404:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteTag - Delete Tag
  /** 
   * This endpoint deletes a Tag identified by the `tagId` parameter. To remove a Tag from a Feature Flag or Setting use the [Update Flag](#operation/update-setting) endpoint.
  **/
  DeleteTag(
    req: operations.DeleteTagRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteTagResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteTagRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/tags/{tagId}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteTagResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 400:
            break;
          case 401:
            break;
          case 404:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetAuditlogs - List Audit log items for Product
  /** 
   * This endpoint returns the list of Audit log items for a given Product 
   * and the result can be optionally filtered by Config and/or Environment.
  **/
  GetAuditlogs(
    req: operations.GetAuditlogsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAuditlogsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAuditlogsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/products/{productId}/auditlogs", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
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
        let res: operations.GetAuditlogsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/hal+json`)) {
                res.auditLogItemModels = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.auditLogItemModels = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 404:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetConfig - Get Config
  /** 
   * This endpoint returns the metadata of a Config
   * identified by the `configId`.
  **/
  GetConfig(
    req: operations.GetConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetConfigRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/configs/{configId}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/hal+json`)) {
                res.configModelHaljson = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.configModel = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 404:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetConfigs - List Configs
  /** 
   * This endpoint returns the list of the Configs that belongs to the given Product identified by the
   * `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.
  **/
  GetConfigs(
    req: operations.GetConfigsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetConfigsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetConfigsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/products/{productId}/configs", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetConfigsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/hal+json`)) {
                res.configModelHaljsons = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.configModels = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 404:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetDeletedSettings - List Deleted Settings
  /** 
   * This endpoint returns the list of Feature Flags and Settings that were deleted from the given Config.
  **/
  GetDeletedSettings(
    req: operations.GetDeletedSettingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDeletedSettingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDeletedSettingsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/configs/{configId}/deleted-settings", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetDeletedSettingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/hal+json`)) {
                res.settingModelHaljsons = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.settingModels = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 404:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetEnvironment - Get Environment
  /** 
   * This endpoint returns the metadata of an Environment 
   * identified by the `environmentId`.
  **/
  GetEnvironment(
    req: operations.GetEnvironmentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetEnvironmentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetEnvironmentRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/environments/{environmentId}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetEnvironmentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/hal+json`)) {
                res.environmentModelHaljson = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.environmentModel = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 404:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetEnvironments - List Environments
  /** 
   * This endpoint returns the list of the Environments that belongs to the given Product identified by the
   * `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.
  **/
  GetEnvironments(
    req: operations.GetEnvironmentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetEnvironmentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetEnvironmentsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/products/{productId}/environments", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetEnvironmentsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/hal+json`)) {
                res.environmentModelHaljsons = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.environmentModels = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 404:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetIntegrationLinkDetails - Get Integration link
  GetIntegrationLinkDetails(
    req: operations.GetIntegrationLinkDetailsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetIntegrationLinkDetailsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetIntegrationLinkDetailsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/integrationLink/{integrationLinkType}/{key}/details", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetIntegrationLinkDetailsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/hal+json`)) {
                res.integrationLinkDetailsModel = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.integrationLinkDetailsModel = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 404:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetMe - Get authenticated user details
  GetMe(
    
    config?: AxiosRequestConfig
  ): Promise<operations.GetMeResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/me";
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetMeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/hal+json`)) {
                res.meModel = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.meModel = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetOrganizationAuditlogs - List Audit log items for Organization
  /** 
   * This endpoint returns the list of Audit log items for a given Organization 
   * and the result can be optionally filtered by Product and/or Config and/or Environment.
  **/
  GetOrganizationAuditlogs(
    req: operations.GetOrganizationAuditlogsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOrganizationAuditlogsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOrganizationAuditlogsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/organizations/{organizationId}/auditlogs", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
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
        let res: operations.GetOrganizationAuditlogsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/hal+json`)) {
                res.auditLogItemModels = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.auditLogItemModels = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 404:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetOrganizationMembers - List Organization Members
  /** 
   * This endpoint returns the list of Members that belongs 
   * to the given Organization, identified by the `organizationId` parameter.
  **/
  GetOrganizationMembers(
    req: operations.GetOrganizationMembersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOrganizationMembersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOrganizationMembersRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/organizations/{organizationId}/members", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetOrganizationMembersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/hal+json`)) {
                res.userModels = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.userModels = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 404:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetOrganizations - List Organizations
  /** 
   * This endpoint returns the list of the Organizations that belongs to the user.
  **/
  GetOrganizations(
    
    config?: AxiosRequestConfig
  ): Promise<operations.GetOrganizationsResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/organizations";
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetOrganizationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/hal+json`)) {
                res.organizationModelHaljsons = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.organizationModels = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetPermissionGroup - Get Permission Group
  /** 
   * This endpoint returns the metadata of a Permission Group 
   * identified by the `permissionGroupId`.
  **/
  GetPermissionGroup(
    req: operations.GetPermissionGroupRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPermissionGroupResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPermissionGroupRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/permissions/{permissionGroupId}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetPermissionGroupResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/hal+json`)) {
                res.permissionGroupModel = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.permissionGroupModel = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 404:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetPermissionGroups - List Permission Groups
  /** 
   * This endpoint returns the list of the Permission Groups that belongs to the given Product identified by the
   * `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.
  **/
  GetPermissionGroups(
    req: operations.GetPermissionGroupsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPermissionGroupsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPermissionGroupsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/products/{productId}/permissions", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetPermissionGroupsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/hal+json`)) {
                res.permissionGroupModels = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.permissionGroupModels = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 404:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetProduct - Get Product
  /** 
   * This endpoint returns the metadata of a Product 
   * identified by the `productId`.
  **/
  GetProduct(
    req: operations.GetProductRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetProductResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetProductRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/products/{productId}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetProductResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/hal+json`)) {
                res.productModelHaljson = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.productModel = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 404:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetProductMembers - List Product Members
  /** 
   * This endpoint returns the list of Members that belongs 
   * to the given Product, identified by the `productId` parameter.
  **/
  GetProductMembers(
    req: operations.GetProductMembersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetProductMembersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetProductMembersRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/products/{productId}/members", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetProductMembersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/hal+json`)) {
                res.memberModels = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.memberModels = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 404:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetProducts - List Products
  /** 
   * This endpoint returns the list of the Products that belongs to the user.
  **/
  GetProducts(
    
    config?: AxiosRequestConfig
  ): Promise<operations.GetProductsResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/products";
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetProductsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/hal+json`)) {
                res.productModelHaljsons = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.productModels = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSdkKeys - Get SDK Key
  /** 
   * This endpoint returns the SDK Key for your Config in a specified Environment.
  **/
  GetSdkKeys(
    req: operations.GetSdkKeysRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSdkKeysResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSdkKeysRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/configs/{configId}/environments/{environmentId}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetSdkKeysResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/hal+json`)) {
                res.sdkKeysModel = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.sdkKeysModel = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 404:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSetting - Get Flag
  /** 
   * This endpoint returns the metadata attributes of a Feature Flag or Setting 
   * identified by the `settingId` parameter.
  **/
  GetSetting(
    req: operations.GetSettingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSettingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSettingRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/settings/{settingId}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetSettingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/hal+json`)) {
                res.settingModelHaljson = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.settingModel = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 404:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSettingValue - Get value
  /** 
   * This endpoint returns the value of a Feature Flag or Setting 
   * in a specified Environment identified by the `environmentId` parameter.
   * 
   * The most important attributes in the response are the `value`, `rolloutRules` and `percentageRules`.
   * The `value` represents what the clients will get when the evaluation requests of our SDKs 
   * are not matching to any of the defined Targeting or Percentage Rules, or when there are no additional rules to evaluate.
   * 
   * The `rolloutRules` and `percentageRules` attributes are representing the current 
   * Targeting and Percentage Rules configuration of the actual Feature Flag or Setting 
   * in an **ordered** collection, which means the order of the returned rules is matching to the
   * evaluation order. You can read more about these rules [here](https://configcat.com/docs/advanced/targeting/).
  **/
  GetSettingValue(
    req: operations.GetSettingValueRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSettingValueResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSettingValueRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/environments/{environmentId}/settings/{settingId}/value", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetSettingValueResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/hal+json`)) {
                res.settingValueModelHaljson = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.settingValueModel = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 404:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSettingValueBySdkkey - Get value
  /** 
   * This endpoint returns the value of a Feature Flag or Setting 
   * in a specified Environment identified by the <a target="_blank" rel="noopener noreferrer" href="https://app.configcat.com/sdkkey">SDK key</a> passed in the `X-CONFIGCAT-SDKKEY` header.
   * 
   * The most important attributes in the response are the `value`, `rolloutRules` and `percentageRules`.
   * The `value` represents what the clients will get when the evaluation requests of our SDKs 
   * are not matching to any of the defined Targeting or Percentage Rules, or when there are no additional rules to evaluate.
   * 
   * The `rolloutRules` and `percentageRules` attributes are representing the current 
   * Targeting and Percentage Rules configuration of the actual Feature Flag or Setting 
   * in an **ordered** collection, which means the order of the returned rules is matching to the
   * evaluation order. You can read more about these rules [here](https://configcat.com/docs/advanced/targeting/).
  **/
  GetSettingValueBySdkkey(
    req: operations.GetSettingValueBySdkkeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSettingValueBySdkkeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSettingValueBySdkkeyRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/settings/{settingKeyOrId}/value", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetSettingValueBySdkkeyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/hal+json`)) {
                res.settingValueModelHaljson = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.settingValueModel = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 404:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSettingValues - Get values
  /** 
   * This endpoint returns the value of a specified Config's Feature Flags or Settings identified by the `configId` parameter
   * in a specified Environment identified by the `environmentId` parameter.
   * 
   * The most important attributes in the response are the `value`, `rolloutRules` and `percentageRules`.
   * The `value` represents what the clients will get when the evaluation requests of our SDKs 
   * are not matching to any of the defined Targeting or Percentage Rules, or when there are no additional rules to evaluate.
   * 
   * The `rolloutRules` and `percentageRules` attributes are representing the current 
   * Targeting and Percentage Rules configuration of the actual Feature Flag or Setting 
   * in an **ordered** collection, which means the order of the returned rules is matching to the
   * evaluation order. You can read more about these rules [here](https://configcat.com/docs/advanced/targeting/).
  **/
  GetSettingValues(
    req: operations.GetSettingValuesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSettingValuesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSettingValuesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/configs/{configId}/environments/{environmentId}/values", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetSettingValuesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/hal+json`)) {
                res.configSettingValuesModel = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.configSettingValuesModel = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 404:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSettings - List Flags
  /** 
   * This endpoint returns the list of the Feature Flags and Settings defined in a 
   * specified Config, identified by the `configId` parameter.
  **/
  GetSettings(
    req: operations.GetSettingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSettingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSettingsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/configs/{configId}/settings", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetSettingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/hal+json`)) {
                res.settingModelHaljsons = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.settingModels = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 404:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSettingsByTag - List Settings by Tag
  /** 
   * This endpoint returns the list of the Settings that 
   * has the specified Tag, identified by the `tagId` parameter.
  **/
  GetSettingsByTag(
    req: operations.GetSettingsByTagRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSettingsByTagResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSettingsByTagRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/tags/{tagId}/settings", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetSettingsByTagResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/hal+json`)) {
                res.settingModelHaljsons = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.settingModels = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 404:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetTag - Get Tag
  /** 
   * This endpoint returns the metadata of a Tag 
   * identified by the `tagId`.
  **/
  GetTag(
    req: operations.GetTagRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTagResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTagRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/tags/{tagId}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetTagResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/hal+json`)) {
                res.tagModelHaljson = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.tagModel = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 404:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetTags - List Tags
  /** 
   * This endpoint returns the list of the Tags in a 
   * specified Product, identified by the `productId` parameter.
  **/
  GetTags(
    req: operations.GetTagsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTagsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTagsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/products/{productId}/tags", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetTagsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/hal+json`)) {
                res.tagModelHaljsons = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.tagModels = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // InviteMember - Invite Member
  /** 
   * This endpoint invites a Member into the given Product identified by the `productId` parameter.
  **/
  InviteMember(
    req: operations.InviteMemberRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.InviteMemberResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.InviteMemberRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/products/{productId}/members/invite", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.InviteMemberResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          case 400:
            break;
          case 401:
            break;
          case 404:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ReplaceSettingValue - Replace value
  /** 
   * This endpoint replaces the whole value of a Feature Flag or Setting in a specified Environment.
   * 
   * Only the `value`, `rolloutRules` and `percentageRules` attributes are modifiable by this endpoint.
   * 
   * **Important:** As this endpoint is doing a complete replace, it's important to set every other attribute that you don't 
   * want to change in its original state. Not listing one means that it will reset.
   * 
   * For example: We have the following resource.
   * ```
   * {
   * 	"rolloutPercentageItems": [
   * 		{
   * 			"percentage": 30,
   * 			"value": true
   * 		},
   * 		{
   * 			"percentage": 70,
   * 			"value": false
   * 		}
   * 	],
   * 	"rolloutRules": [],
   * 	"value": false
   * }
   * ```
   * If we send a replace request body as below:
   * ```
   * {
   * 	"value": true
   * }
   * ```
   * Then besides that the default value is set to `true`, all the Percentage Rules are deleted. 
   * So we get a response like this:
   * ```
   * {
   * 	"rolloutPercentageItems": [],
   * 	"rolloutRules": [],
   * 	"value": true
   * }
   * ```
  **/
  ReplaceSettingValue(
    req: operations.ReplaceSettingValueRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReplaceSettingValueResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReplaceSettingValueRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/environments/{environmentId}/settings/{settingId}/value", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .put(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ReplaceSettingValueResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/hal+json`)) {
                res.settingValueModelHaljson = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.settingValueModel = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 404:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ReplaceSettingValueBySdkkey - Replace value
  /** 
   * This endpoint replaces the value of a Feature Flag or Setting 
   * in a specified Environment identified by the <a target="_blank" rel="noopener noreferrer" href="https://app.configcat.com/sdkkey">SDK key</a> passed in the `X-CONFIGCAT-SDKKEY` header.
   * 
   * Only the `value`, `rolloutRules` and `percentageRules` attributes are modifiable by this endpoint.
   * 
   * **Important:** As this endpoint is doing a complete replace, it's important to set every other attribute that you don't 
   * want to change to its original state. Not listing one means that it will reset.
   * 
   * For example: We have the following resource.
   * ```
   * {
   * 	"rolloutPercentageItems": [
   * 		{
   * 			"percentage": 30,
   * 			"value": true
   * 		},
   * 		{
   * 			"percentage": 70,
   * 			"value": false
   * 		}
   * 	],
   * 	"rolloutRules": [],
   * 	"value": false
   * }
   * ```
   * If we send a replace request body as below:
   * ```
   * {
   * 	"value": true
   * }
   * ```
   * Then besides that the default served value is set to `true`, all the Percentage Rules are deleted. 
   * So we get a response like this:
   * ```
   * {
   * 	"rolloutPercentageItems": [],
   * 	"rolloutRules": [],
   * 	"value": true
   * }
   * ```
  **/
  ReplaceSettingValueBySdkkey(
    req: operations.ReplaceSettingValueBySdkkeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReplaceSettingValueBySdkkeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReplaceSettingValueBySdkkeyRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/settings/{settingKeyOrId}/value", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .put(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ReplaceSettingValueBySdkkeyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/hal+json`)) {
                res.settingValueModelHaljson = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.settingValueModel = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 404:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateConfig - Update Config
  /** 
   * This endpoint updates a Config identified by the `configId` parameter.
  **/
  UpdateConfig(
    req: operations.UpdateConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateConfigRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/configs/{configId}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdateConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/hal+json`)) {
                res.configModelHaljson = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.configModel = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 404:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateEnvironment - Update Environment
  /** 
   * This endpoint updates an Environment identified by the `environmentId` parameter.
  **/
  UpdateEnvironment(
    req: operations.UpdateEnvironmentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateEnvironmentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateEnvironmentRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/environments/{environmentId}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdateEnvironmentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/hal+json`)) {
                res.environmentModelHaljson = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.environmentModel = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 404:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdatePermissionGroup - Update Permission Group
  /** 
   * This endpoint updates a Permission Group identified by the `permissionGroupId` parameter.
  **/
  UpdatePermissionGroup(
    req: operations.UpdatePermissionGroupRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdatePermissionGroupResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdatePermissionGroupRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/permissions/{permissionGroupId}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdatePermissionGroupResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/hal+json`)) {
                res.permissionGroupModel = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.permissionGroupModel = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 404:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateProduct - Update Product
  /** 
   * This endpoint updates a Product identified by the `productId` parameter.
  **/
  UpdateProduct(
    req: operations.UpdateProductRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateProductResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateProductRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/products/{productId}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdateProductResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/hal+json`)) {
                res.productModelHaljson = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.productModel = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 404:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateSetting - Update Flag
  /** 
   * This endpoint updates the metadata of a Feature Flag or Setting 
   * with a collection of [JSON Patch](http://jsonpatch.com) operations in a specified Config.
   * 
   * Only the `name`, `hint` and `tags` attributes are modifiable by this endpoint.
   * The `tags` attribute is a simple collection of the [tag IDs](#operation/get-tags) attached to the given setting.
   * 
   * The advantage of using JSON Patch is that you can describe individual update operations on a resource
   * without touching attributes that you don't want to change.
   * 
   * For example: We have the following resource.
   * ```
   * {
   * 	"settingId": 5345,
   * 	"key": "myGrandFeature",
   * 	"name": "Tihs is a naem with soem typos.",
   * 	"hint": "This flag controls my grandioso feature.",
   * 	"settingType": "boolean",
   * 	"tags": [
   * 		{
   * 			"tagId": 0,
   * 			"name": "sample tag",
   * 			"color": "whale"
   * 		}
   * 	]
   * }
   * ```
   * If we send an update request body as below (it changes the name and adds the already existing tag with the id 2):
   * ```
   * [
   * 	{
   * 		"op": "replace",
   * 		"path": "/name",
   * 		"value": "This is the name without typos."
   * 	},
   * 	{
   * 		"op": "add",
   * 		"path": "/tags/-",
   * 		"value": 2
   * 	}
   * ]
   * ```
   * Only the `name` and `tags` are going to be updated and all the other attributes are remaining unchanged.
   * So we get a response like this:
   * ```
   * {
   * 	"settingId": 5345,
   * 	"key": "myGrandFeature",
   * 	"name": "This is the name without typos.",
   * 	"hint": "This flag controls my grandioso feature.",
   * 	"settingType": "boolean",
   * 	"tags": [
   * 		{
   * 			"tagId": 0,
   * 			"name": "sample tag",
   * 			"color": "whale"
   * 		},
   * 		{
   * 			"tagId": 2,
   * 			"name": "another tag",
   * 			"color": "koala"
   * 		}
   * 	]
   * }
   * ```
  **/
  UpdateSetting(
    req: operations.UpdateSettingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateSettingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateSettingRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/settings/{settingId}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.UpdateSettingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/hal+json`)) {
                res.settingModelHaljson = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.settingModel = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 404:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateSettingValue - Update value
  /** 
   * This endpoint updates the value of a Feature Flag or Setting 
   * with a collection of [JSON Patch](http://jsonpatch.com) operations in a specified Environment.
   * 
   * Only the `value`, `rolloutRules` and `percentageRules` attributes are modifiable by this endpoint.
   * 
   * The advantage of using JSON Patch is that you can describe individual update operations on a resource
   * without touching attributes that you don't want to change. It supports collection reordering, so it also 
   * can be used for reordering the targeting rules of a Feature Flag or Setting.
   * 
   * For example: We have the following resource.
   * ```
   * {
   * 	"rolloutPercentageItems": [
   * 		{
   * 			"percentage": 30,
   * 			"value": true
   * 		},
   * 		{
   * 			"percentage": 70,
   * 			"value": false
   * 		}
   * 	],
   * 	"rolloutRules": [],
   * 	"value": false
   * }
   * ```
   * If we send an update request body as below:
   * ```
   * [
   * 	{
   * 		"op": "replace",
   * 		"path": "/value",
   * 		"value": true
   * 	}
   * ]
   * ```
   * Only the default value is going to be set to `true` and all the Percentage Rules are remaining unchanged.
   * So we get a response like this:
   * ```
   * {
   * 	"rolloutPercentageItems": [
   * 		{
   * 			"percentage": 30,
   * 			"value": true
   * 		},
   * 		{
   * 			"percentage": 70,
   * 			"value": false
   * 		}
   * 	],
   * 	"rolloutRules": [],
   * 	"value": true
   * }
   * ```
  **/
  UpdateSettingValue(
    req: operations.UpdateSettingValueRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateSettingValueResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateSettingValueRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/environments/{environmentId}/settings/{settingId}/value", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .patch(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdateSettingValueResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/hal+json`)) {
                res.settingValueModelHaljson = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.settingValueModel = httpRes?.data;
            }
            break;
          case 204:
            break;
          case 400:
            break;
          case 401:
            break;
          case 404:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateSettingValueBySdkkey - Update value
  /** 
   * This endpoint updates the value of a Feature Flag or Setting 
   * with a collection of [JSON Patch](http://jsonpatch.com) operations in a specified Environment
   * identified by the <a target="_blank" rel="noopener noreferrer" href="https://app.configcat.com/sdkkey">SDK key</a> passed in the `X-CONFIGCAT-SDKKEY` header.
   * 
   * Only the `value`, `rolloutRules` and `percentageRules` attributes are modifiable by this endpoint.
   * 
   * The advantage of using JSON Patch is that you can describe individual update operations on a resource
   * without touching attributes that you don't want to change. It supports collection reordering, so it also 
   * can be used for reordering the targeting rules of a Feature Flag or Setting.
   * 
   * For example: We have the following resource.
   * ```
   * {
   * 	"rolloutPercentageItems": [
   * 		{
   * 			"percentage": 30,
   * 			"value": true
   * 		},
   * 		{
   * 			"percentage": 70,
   * 			"value": false
   * 		}
   * 	],
   * 	"rolloutRules": [],
   * 	"value": false
   * }
   * ```
   * If we send an update request body as below:
   * ```
   * [
   * 	{
   * 		"op": "replace",
   * 		"path": "/value",
   * 		"value": true
   * 	}
   * ]
   * ```
   * Only the default served value is going to be set to `true` and all the Percentage Rules are remaining unchanged.
   * So we get a response like this:
   * ```
   * {
   * 	"rolloutPercentageItems": [
   * 		{
   * 			"percentage": 30,
   * 			"value": true
   * 		},
   * 		{
   * 			"percentage": 70,
   * 			"value": false
   * 		}
   * 	],
   * 	"rolloutRules": [],
   * 	"value": true
   * }
   * ```
  **/
  UpdateSettingValueBySdkkey(
    req: operations.UpdateSettingValueBySdkkeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateSettingValueBySdkkeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateSettingValueBySdkkeyRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/settings/{settingKeyOrId}/value", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .patch(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdateSettingValueBySdkkeyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/hal+json`)) {
                res.settingValueModelHaljson = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.settingValueModel = httpRes?.data;
            }
            break;
          case 204:
            break;
          case 400:
            break;
          case 401:
            break;
          case 404:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateTag - Update Tag
  /** 
   * This endpoint updates a Tag identified by the `tagId` parameter.
  **/
  UpdateTag(
    req: operations.UpdateTagRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateTagResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateTagRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/tags/{tagId}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdateTagResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/hal+json`)) {
                res.tagModelHaljson = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.tagModel = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 404:
            break;
          case 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
