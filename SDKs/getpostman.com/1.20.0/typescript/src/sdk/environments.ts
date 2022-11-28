import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Environments {
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
   * allEnvironments - All Environments
   *
   * The `/environments` endpoint returns a list of all [environments](https://www.getpostman.com/docs/environments) that belong to you..
   * 
   * The response contains an array of environments' information containing the `name`, `id`, `owner` and `uid` of each environment.
   * 
   * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
  **/
  allEnvironments(
    config?: AxiosRequestConfig
  ): Promise<operations.AllEnvironmentsResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/environments";
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.AllEnvironmentsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.allEnvironments200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createEnvironment - Create Environment
   *
   * A sample body is added to the request that conforms to the following JSON schema:
   * 
   * ```json
   * {
   *   "type": "object",
   *   "properties": {
   *     "environment": {
   *       "type": "object",
   *       "properties": {
   *         "name": {
   *               "type": "string",
   *               "maxLength": 254,
   *               "minLength": 1
   *             },
   *         "values": {
   *           "type": "array",
   *           "maxItems": 100,
   *           "additionalItems": false,
   *           "items": {
   *               "type": "object",
   *               "properties": {
   *                 "key": {
   *                   "type": "string",
   *                   "maxLength": 254
   *                   "minLength": 1
   *                 },
   *                 "value": { "type": "string" },
   *                 "enabled": { "type": "boolean" }
   *               },
   *               "required": ["key", "value"]
   *             }
   *         }
   *       },
   *       "required": ["name"]
   *     }
   *   },
   *   "required": ["environment"]
   * }
   * ```
   * 
   * On successful creation of the environment, the API returns the environment name and `id`.
   * 
   * You can also specify the context of a workspace to create an environment in directly by passing the `workspace` as a query param.
   * 
   * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
  **/
  createEnvironment(
    req: operations.CreateEnvironmentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateEnvironmentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateEnvironmentRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/environments";

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
        const res: operations.CreateEnvironmentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.createEnvironment200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.createEnvironment400ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteEnvironment - Delete Environment
   *
   * This endpoint allows you to delete a single environment based on an environment's unique `uid`.
   * 
   * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
  **/
  deleteEnvironment(
    req: operations.DeleteEnvironmentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteEnvironmentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteEnvironmentRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/environments/{environment_uid}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.deleteEnvironment200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.deleteEnvironment404ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * singleEnvironment - Single Environment
   *
   * Access the contents of an environment that is accessible to you using its unique id (`uid`).
   * 
   * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
  **/
  singleEnvironment(
    req: operations.SingleEnvironmentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SingleEnvironmentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SingleEnvironmentRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/environments/{environment_uid}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SingleEnvironmentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.singleEnvironment200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateEnvironment - Update Environment
   *
   * This endpoint replaces an existing environment.
   * 
   * A sample body is added to the request that conforms to the following JSON schema:
   * 
   * ```json
   * {
   * 	"type": "object",
   * 	"properties": {
   * 		"environment": {
   * 			"type": "object",
   * 			"properties": {
   * 				"name": {
   * 					"type": "string",
   * 					"maxLength": 254,
   * 					"minLength": 1
   * 				},
   * 				"values": {
   * 					"type": "array",
   * 					"maxItems": 100,
   * 					"additionalItems": false,
   * 					"items": {
   * 						"type": "object",
   * 						"properties": {
   * 							"key": {
   * 								"type": "string",
   * 								"maxLength": 254,
   * 								"minLength": 1
   * 							},
   * 							"value": {
   * 								"type": "string",
   * 								"maxLength": 254,
   * 								"minLength": 1
   * 							},
   * 							"type": {
   * 								"type": "string"
   * 							},
   * 							"enabled": {
   * 								"type": "boolean"
   * 							}
   * 						},
   * 						"required": [
   * 							"key",
   * 							"value"
   * 						]
   * 					}
   * 				}
   * 			}
   * 		}
   * 	},
   * 	"required": [
   * 		"environment"
   * 	]
   * }
   * ```
   * 
   * On successful updation of the environment, the API returns the environment name and `id`.
   * 
   * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
  **/
  updateEnvironment(
    req: operations.UpdateEnvironmentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateEnvironmentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateEnvironmentRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/environments/{environment_uid}", req.pathParams);

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
        const res: operations.UpdateEnvironmentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateEnvironment200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateEnvironment400ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
