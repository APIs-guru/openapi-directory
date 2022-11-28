import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";
import { Security } from "./models/shared";



type OptsFunc = (sdk: SDK) => void;

export const ServerList = [
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
    sdk._serverURL = serverURL;
  };
}

export function WithClient(client: AxiosInstance): OptsFunc {
  return (sdk: SDK) => {
    sdk._defaultClient = client;
  };
}

export function WithSecurity(security: Security): OptsFunc {
  if (!(security instanceof utils.SpeakeasyBase)) {
    security = new Security(security);
  }
  return (sdk: SDK) => {
    sdk._security = security;
  };
}


export class SDK {

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _security?: Security;
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "0.0.1";
  private _genVersion = "internal";

  constructor(...opts: OptsFunc[]) {
    opts.forEach((o) => o(this));
    if (this._serverURL == "") {
      this._serverURL = ServerList[0];
    }

    if (!this._defaultClient) {
      this._defaultClient = axios.create({ baseURL: this._serverURL });
    }

    if (!this._securityClient) {
      if (this._security) {
        this._securityClient = utils.CreateSecurityClient(
          this._defaultClient,
          this._security
        );
      } else {
        this._securityClient = this._defaultClient;
      }
    }
    
  }
  
  /**
   * addOrUpdateIntegrationLink - Add or update Integration link
  **/
  addOrUpdateIntegrationLink(
    req: operations.AddOrUpdateIntegrationLinkRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AddOrUpdateIntegrationLinkResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AddOrUpdateIntegrationLinkRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/environments/{environmentId}/settings/{settingId}/integrationLinks/{integrationLinkType}/{key}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
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
        const res: operations.AddOrUpdateIntegrationLinkResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/hal+json`)) {
                res.integrationLinkModel = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.integrationLinkModel = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createConfig - Create Config
   *
   * This endpoint creates a new Config in a specified Product 
   * identified by the `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.
  **/
  createConfig(
    req: operations.CreateConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateConfigRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/products/{productId}/configs", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
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
        const res: operations.CreateConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/hal+json`)) {
                res.configModelHaljson = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.configModel = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createEnvironment - Create Environment
   *
   * This endpoint creates a new Environment in a specified Product 
   * identified by the `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.
  **/
  createEnvironment(
    req: operations.CreateEnvironmentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateEnvironmentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateEnvironmentRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/products/{productId}/environments", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
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
        const res: operations.CreateEnvironmentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/hal+json`)) {
                res.environmentModelHaljson = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.environmentModel = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createPermissionGroup - Create Permission Group
   *
   * This endpoint creates a new Permission Group in a specified Product 
   * identified by the `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.
  **/
  createPermissionGroup(
    req: operations.CreatePermissionGroupRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreatePermissionGroupResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreatePermissionGroupRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/products/{productId}/permissions", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
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
        const res: operations.CreatePermissionGroupResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/hal+json`)) {
                res.permissionGroupModel = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.permissionGroupModel = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createProduct - Create Product
   *
   * This endpoint creates a new Product in a specified Organization 
   * identified by the `organizationId` parameter, which can be obtained from the [List Organizations](#operation/get-organizations) endpoint.
  **/
  createProduct(
    req: operations.CreateProductRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateProductResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateProductRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/organizations/{organizationId}/products", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
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
        const res: operations.CreateProductResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/hal+json`)) {
                res.productModelHaljson = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.productModel = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createSetting - Create Flag
   *
   * This endpoint creates a new Feature Flag or Setting in a specified Config
   * identified by the `configId` parameter.
   * 
   * **Important:** The `key` attribute must be unique within the given Config.
  **/
  createSetting(
    req: operations.CreateSettingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateSettingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateSettingRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/configs/{configId}/settings", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
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
        const res: operations.CreateSettingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/hal+json`)) {
                res.settingModelHaljson = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.settingModel = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createTag - Create Tag
   *
   * This endpoint creates a new Tag in a specified Product 
   * identified by the `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.
  **/
  createTag(
    req: operations.CreateTagRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateTagResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateTagRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/products/{productId}/tags", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
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
        const res: operations.CreateTagResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/hal+json`)) {
                res.tagModelHaljson = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.tagModel = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteConfig - Delete Config
   *
   * This endpoint removes a Config identified by the `configId` parameter.
  **/
  deleteConfig(
    req: operations.DeleteConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteConfigRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/configs/{configId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteEnvironment - Delete Environment
   *
   * This endpoint removes an Environment identified by the `environmentId` parameter.
  **/
  deleteEnvironment(
    req: operations.DeleteEnvironmentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteEnvironmentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteEnvironmentRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/environments/{environmentId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteEnvironmentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteIntegrationLink - Delete Integration link
  **/
  deleteIntegrationLink(
    req: operations.DeleteIntegrationLinkRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteIntegrationLinkResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteIntegrationLinkRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/environments/{environmentId}/settings/{settingId}/integrationLinks/{integrationLinkType}/{key}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteIntegrationLinkResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/hal+json`)) {
                res.deleteIntegrationLinkModel = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.deleteIntegrationLinkModel = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteOrganizationMember - Delete Member from Organization
   *
   * This endpoint removes a Member identified by the `userId` from the 
   * given Organization identified by the `organizationId` parameter.
  **/
  deleteOrganizationMember(
    req: operations.DeleteOrganizationMemberRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteOrganizationMemberResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteOrganizationMemberRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/organizations/{organizationId}/members/{userId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteOrganizationMemberResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deletePermissionGroup - Delete Permission Group
   *
   * This endpoint removes a Permission Group identified by the `permissionGroupId` parameter.
  **/
  deletePermissionGroup(
    req: operations.DeletePermissionGroupRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeletePermissionGroupResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeletePermissionGroupRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/permissions/{permissionGroupId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeletePermissionGroupResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteProduct - Delete Product
   *
   * This endpoint removes a Product identified by the `productId` parameter.
  **/
  deleteProduct(
    req: operations.DeleteProductRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteProductResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteProductRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/products/{productId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteProductResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteProductMember - Delete Member from Product
   *
   * This endpoint removes a Member identified by the `userId` from the 
   * given Product identified by the `productId` parameter.
  **/
  deleteProductMember(
    req: operations.DeleteProductMemberRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteProductMemberResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteProductMemberRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/products/{productId}/members/{userId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteProductMemberResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteSetting - Delete Flag
   *
   * This endpoint removes a Feature Flag or Setting from a specified Config, 
   * identified by the `configId` parameter.
  **/
  deleteSetting(
    req: operations.DeleteSettingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSettingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteSettingRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/settings/{settingId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteSettingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteTag - Delete Tag
   *
   * This endpoint deletes a Tag identified by the `tagId` parameter. To remove a Tag from a Feature Flag or Setting use the [Update Flag](#operation/update-setting) endpoint.
  **/
  deleteTag(
    req: operations.DeleteTagRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteTagResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteTagRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/tags/{tagId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteTagResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getAuditlogs - List Audit log items for Product
   *
   * This endpoint returns the list of Audit log items for a given Product 
   * and the result can be optionally filtered by Config and/or Environment.
  **/
  getAuditlogs(
    req: operations.GetAuditlogsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAuditlogsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAuditlogsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/products/{productId}/auditlogs", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
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
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetAuditlogsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/hal+json`)) {
                res.auditLogItemModels = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.auditLogItemModels = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getConfig - Get Config
   *
   * This endpoint returns the metadata of a Config
   * identified by the `configId`.
  **/
  getConfig(
    req: operations.GetConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetConfigRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/configs/{configId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/hal+json`)) {
                res.configModelHaljson = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.configModel = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getConfigs - List Configs
   *
   * This endpoint returns the list of the Configs that belongs to the given Product identified by the
   * `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.
  **/
  getConfigs(
    req: operations.GetConfigsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetConfigsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetConfigsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/products/{productId}/configs", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetConfigsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/hal+json`)) {
                res.configModelHaljsons = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.configModels = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getDeletedSettings - List Deleted Settings
   *
   * This endpoint returns the list of Feature Flags and Settings that were deleted from the given Config.
  **/
  getDeletedSettings(
    req: operations.GetDeletedSettingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDeletedSettingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDeletedSettingsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/configs/{configId}/deleted-settings", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetDeletedSettingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/hal+json`)) {
                res.settingModelHaljsons = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.settingModels = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getEnvironment - Get Environment
   *
   * This endpoint returns the metadata of an Environment 
   * identified by the `environmentId`.
  **/
  getEnvironment(
    req: operations.GetEnvironmentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetEnvironmentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetEnvironmentRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/environments/{environmentId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetEnvironmentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/hal+json`)) {
                res.environmentModelHaljson = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.environmentModel = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getEnvironments - List Environments
   *
   * This endpoint returns the list of the Environments that belongs to the given Product identified by the
   * `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.
  **/
  getEnvironments(
    req: operations.GetEnvironmentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetEnvironmentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetEnvironmentsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/products/{productId}/environments", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetEnvironmentsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/hal+json`)) {
                res.environmentModelHaljsons = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.environmentModels = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getIntegrationLinkDetails - Get Integration link
  **/
  getIntegrationLinkDetails(
    req: operations.GetIntegrationLinkDetailsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetIntegrationLinkDetailsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetIntegrationLinkDetailsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/integrationLink/{integrationLinkType}/{key}/details", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetIntegrationLinkDetailsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/hal+json`)) {
                res.integrationLinkDetailsModel = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.integrationLinkDetailsModel = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getMe - Get authenticated user details
  **/
  getMe(
    config?: AxiosRequestConfig
  ): Promise<operations.GetMeResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/me";
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetMeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/hal+json`)) {
                res.meModel = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.meModel = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getOrganizationAuditlogs - List Audit log items for Organization
   *
   * This endpoint returns the list of Audit log items for a given Organization 
   * and the result can be optionally filtered by Product and/or Config and/or Environment.
  **/
  getOrganizationAuditlogs(
    req: operations.GetOrganizationAuditlogsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOrganizationAuditlogsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOrganizationAuditlogsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/organizations/{organizationId}/auditlogs", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
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
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetOrganizationAuditlogsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/hal+json`)) {
                res.auditLogItemModels = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.auditLogItemModels = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getOrganizationMembers - List Organization Members
   *
   * This endpoint returns the list of Members that belongs 
   * to the given Organization, identified by the `organizationId` parameter.
  **/
  getOrganizationMembers(
    req: operations.GetOrganizationMembersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOrganizationMembersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOrganizationMembersRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/organizations/{organizationId}/members", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetOrganizationMembersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/hal+json`)) {
                res.userModels = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.userModels = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getOrganizations - List Organizations
   *
   * This endpoint returns the list of the Organizations that belongs to the user.
  **/
  getOrganizations(
    config?: AxiosRequestConfig
  ): Promise<operations.GetOrganizationsResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/organizations";
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetOrganizationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/hal+json`)) {
                res.organizationModelHaljsons = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.organizationModels = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getPermissionGroup - Get Permission Group
   *
   * This endpoint returns the metadata of a Permission Group 
   * identified by the `permissionGroupId`.
  **/
  getPermissionGroup(
    req: operations.GetPermissionGroupRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPermissionGroupResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPermissionGroupRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/permissions/{permissionGroupId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetPermissionGroupResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/hal+json`)) {
                res.permissionGroupModel = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.permissionGroupModel = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getPermissionGroups - List Permission Groups
   *
   * This endpoint returns the list of the Permission Groups that belongs to the given Product identified by the
   * `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.
  **/
  getPermissionGroups(
    req: operations.GetPermissionGroupsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPermissionGroupsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPermissionGroupsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/products/{productId}/permissions", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetPermissionGroupsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/hal+json`)) {
                res.permissionGroupModels = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.permissionGroupModels = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getProduct - Get Product
   *
   * This endpoint returns the metadata of a Product 
   * identified by the `productId`.
  **/
  getProduct(
    req: operations.GetProductRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetProductResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetProductRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/products/{productId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetProductResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/hal+json`)) {
                res.productModelHaljson = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.productModel = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getProductMembers - List Product Members
   *
   * This endpoint returns the list of Members that belongs 
   * to the given Product, identified by the `productId` parameter.
  **/
  getProductMembers(
    req: operations.GetProductMembersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetProductMembersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetProductMembersRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/products/{productId}/members", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetProductMembersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/hal+json`)) {
                res.memberModels = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.memberModels = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getProducts - List Products
   *
   * This endpoint returns the list of the Products that belongs to the user.
  **/
  getProducts(
    config?: AxiosRequestConfig
  ): Promise<operations.GetProductsResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/products";
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetProductsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/hal+json`)) {
                res.productModelHaljsons = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.productModels = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getSdkKeys - Get SDK Key
   *
   * This endpoint returns the SDK Key for your Config in a specified Environment.
  **/
  getSdkKeys(
    req: operations.GetSDKKeysRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSDKKeysResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSDKKeysRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/configs/{configId}/environments/{environmentId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetSDKKeysResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/hal+json`)) {
                res.sdkKeysModel = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.sdkKeysModel = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getSetting - Get Flag
   *
   * This endpoint returns the metadata attributes of a Feature Flag or Setting 
   * identified by the `settingId` parameter.
  **/
  getSetting(
    req: operations.GetSettingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSettingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSettingRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/settings/{settingId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetSettingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/hal+json`)) {
                res.settingModelHaljson = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.settingModel = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getSettingValue - Get value
   *
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
  getSettingValue(
    req: operations.GetSettingValueRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSettingValueResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSettingValueRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/environments/{environmentId}/settings/{settingId}/value", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetSettingValueResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/hal+json`)) {
                res.settingValueModelHaljson = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.settingValueModel = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getSettingValueBySdkkey - Get value
   *
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
  getSettingValueBySdkkey(
    req: operations.GetSettingValueBySdkkeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSettingValueBySdkkeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSettingValueBySdkkeyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/settings/{settingKeyOrId}/value", req.pathParams);
    
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
        const res: operations.GetSettingValueBySdkkeyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/hal+json`)) {
                res.settingValueModelHaljson = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.settingValueModel = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getSettingValues - Get values
   *
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
  getSettingValues(
    req: operations.GetSettingValuesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSettingValuesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSettingValuesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/configs/{configId}/environments/{environmentId}/values", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetSettingValuesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/hal+json`)) {
                res.configSettingValuesModel = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.configSettingValuesModel = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getSettings - List Flags
   *
   * This endpoint returns the list of the Feature Flags and Settings defined in a 
   * specified Config, identified by the `configId` parameter.
  **/
  getSettings(
    req: operations.GetSettingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSettingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSettingsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/configs/{configId}/settings", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetSettingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/hal+json`)) {
                res.settingModelHaljsons = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.settingModels = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getSettingsByTag - List Settings by Tag
   *
   * This endpoint returns the list of the Settings that 
   * has the specified Tag, identified by the `tagId` parameter.
  **/
  getSettingsByTag(
    req: operations.GetSettingsByTagRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSettingsByTagResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSettingsByTagRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/tags/{tagId}/settings", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetSettingsByTagResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/hal+json`)) {
                res.settingModelHaljsons = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.settingModels = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getTag - Get Tag
   *
   * This endpoint returns the metadata of a Tag 
   * identified by the `tagId`.
  **/
  getTag(
    req: operations.GetTagRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTagResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTagRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/tags/{tagId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetTagResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/hal+json`)) {
                res.tagModelHaljson = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.tagModel = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getTags - List Tags
   *
   * This endpoint returns the list of the Tags in a 
   * specified Product, identified by the `productId` parameter.
  **/
  getTags(
    req: operations.GetTagsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTagsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTagsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/products/{productId}/tags", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetTagsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/hal+json`)) {
                res.tagModelHaljsons = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.tagModels = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * inviteMember - Invite Member
   *
   * This endpoint invites a Member into the given Product identified by the `productId` parameter.
  **/
  inviteMember(
    req: operations.InviteMemberRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.InviteMemberResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.InviteMemberRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/products/{productId}/members/invite", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
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
        const res: operations.InviteMemberResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * replaceSettingValue - Replace value
   *
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
  replaceSettingValue(
    req: operations.ReplaceSettingValueRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReplaceSettingValueResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReplaceSettingValueRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/environments/{environmentId}/settings/{settingId}/value", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

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
      .request({
        url: url,
        method: "put",
        headers: headers,
        data: body, 
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ReplaceSettingValueResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/hal+json`)) {
                res.settingValueModelHaljson = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.settingValueModel = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * replaceSettingValueBySdkkey - Replace value
   *
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
  replaceSettingValueBySdkkey(
    req: operations.ReplaceSettingValueBySdkkeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReplaceSettingValueBySdkkeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReplaceSettingValueBySdkkeyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/settings/{settingKeyOrId}/value", req.pathParams);

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
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

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
      .request({
        url: url,
        method: "put",
        headers: headers,
        data: body, 
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ReplaceSettingValueBySdkkeyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/hal+json`)) {
                res.settingValueModelHaljson = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.settingValueModel = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateConfig - Update Config
   *
   * This endpoint updates a Config identified by the `configId` parameter.
  **/
  updateConfig(
    req: operations.UpdateConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateConfigRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/configs/{configId}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
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
        const res: operations.UpdateConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/hal+json`)) {
                res.configModelHaljson = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.configModel = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateEnvironment - Update Environment
   *
   * This endpoint updates an Environment identified by the `environmentId` parameter.
  **/
  updateEnvironment(
    req: operations.UpdateEnvironmentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateEnvironmentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateEnvironmentRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/environments/{environmentId}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
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
        const res: operations.UpdateEnvironmentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/hal+json`)) {
                res.environmentModelHaljson = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.environmentModel = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updatePermissionGroup - Update Permission Group
   *
   * This endpoint updates a Permission Group identified by the `permissionGroupId` parameter.
  **/
  updatePermissionGroup(
    req: operations.UpdatePermissionGroupRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdatePermissionGroupResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdatePermissionGroupRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/permissions/{permissionGroupId}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
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
        const res: operations.UpdatePermissionGroupResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/hal+json`)) {
                res.permissionGroupModel = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.permissionGroupModel = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateProduct - Update Product
   *
   * This endpoint updates a Product identified by the `productId` parameter.
  **/
  updateProduct(
    req: operations.UpdateProductRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateProductResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateProductRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/products/{productId}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
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
        const res: operations.UpdateProductResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/hal+json`)) {
                res.productModelHaljson = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.productModel = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateSetting - Update Flag
   *
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
  updateSetting(
    req: operations.UpdateSettingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateSettingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateSettingRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/settings/{settingId}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "patch",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdateSettingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/hal+json`)) {
                res.settingModelHaljson = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.settingModel = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateSettingValue - Update value
   *
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
  updateSettingValue(
    req: operations.UpdateSettingValueRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateSettingValueResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateSettingValueRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/environments/{environmentId}/settings/{settingId}/value", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

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
      .request({
        url: url,
        method: "patch",
        headers: headers,
        data: body, 
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdateSettingValueResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/hal+json`)) {
                res.settingValueModelHaljson = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.settingValueModel = httpRes?.data;
            }
            break;
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateSettingValueBySdkkey - Update value
   *
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
  updateSettingValueBySdkkey(
    req: operations.UpdateSettingValueBySdkkeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateSettingValueBySdkkeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateSettingValueBySdkkeyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/settings/{settingKeyOrId}/value", req.pathParams);

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
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

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
      .request({
        url: url,
        method: "patch",
        headers: headers,
        data: body, 
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdateSettingValueBySdkkeyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/hal+json`)) {
                res.settingValueModelHaljson = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.settingValueModel = httpRes?.data;
            }
            break;
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateTag - Update Tag
   *
   * This endpoint updates a Tag identified by the `tagId` parameter.
  **/
  updateTag(
    req: operations.UpdateTagRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateTagResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateTagRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/tags/{tagId}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
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
        const res: operations.UpdateTagResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/hal+json`)) {
                res.tagModelHaljson = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.tagModel = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
