import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Relations {
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
   * createRelations - Create relations
   *
   * This call allows you to add existing Postman entities as new relations to an API. The request body should contain the relations to be created along with an array of entity IDs. 
   * 
   * <table>
   *   <tr>
   *     <th>Relation</th>
   *     <th>Entity ID type</th>
   *   <tr>
   *   <tr>
   *     <td>contracttest</td>
   *     <td>Collection UIDs</td>
   *   </tr>
   *   <tr>
   *     <td>integrationtest</td>
   *     <td>Collection UIDs</td>
   *   </tr>
   *   <tr>
   *     <td>documentation</td>
   *     <td>Collection UIDs</td>
   *   </tr>
   *   <tr>
   *     <td>testsuite</td>
   *     <td>Collection UIDs</td>
   *   </tr>
   *   <tr>
   *     <td>environment</td>
   *     <td>Environment UIDs</td>
   *   </tr>
   *   <tr>
   *     <td>mock</td>
   *     <td>Mock IDs</td>
   *   </tr>
   *   <tr>
   *     <td>monitor</td>
   *     <td>Monitor IDs</td>
   *   </tr>
   * </table>
   * 
   * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
  **/
  createRelations(
    req: operations.CreateRelationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateRelationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateRelationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/apis/{apiId}/versions/{apiVersionId}/relations", req.pathParams);

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
        const res: operations.CreateRelationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.createRelations200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getContractTestRelations - Get contract test relations
   *
   * This call fetches all the relations by type which are linked to the specified API version along with their details.
   * 
   * The response will contain an array with key `{{relationType}}`. Each of the item will consist of all the details related each of the relation.
   * 
   * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
  **/
  getContractTestRelations(
    req: operations.GetContractTestRelationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetContractTestRelationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetContractTestRelationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/apis/{apiId}/versions/{apiVersionId}/contracttest", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetContractTestRelationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getContractTestRelations200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getDocumentationRelations - Get  documentation relations
   *
   * This call fetches all the relations by type which are linked to the specified API version along with their details.
   * 
   * The response will contain an array with key `{{relationType}}`. Each of the item will consist of all the details related each of the relation.
   * 
   * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
  **/
  getDocumentationRelations(
    req: operations.GetDocumentationRelationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDocumentationRelationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDocumentationRelationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/apis/{apiId}/versions/{apiVersionId}/documentation", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetDocumentationRelationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getDocumentationRelations200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getEnvironmentRelations - Get environment relations
   *
   * This call fetches all the relations by type which are linked to the specified API version along with their details.
   * 
   * The response will contain an array with key `{{relationType}}`. Each of the item will consist of all the details related each of the relation.
   * 
   * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
  **/
  getEnvironmentRelations(
    req: operations.GetEnvironmentRelationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetEnvironmentRelationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetEnvironmentRelationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/apis/{apiId}/versions/{apiVersionId}/environment", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetEnvironmentRelationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getEnvironmentRelations200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getIntegrationTestRelations - Get integration test relations
   *
   * This call fetches all the relations by type which are linked to the specified API version along with their details.
   * 
   * The response will contain an array with key `{{relationType}}`. Each of the item will consist of all the details related each of the relation.
   * 
   * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
  **/
  getIntegrationTestRelations(
    req: operations.GetIntegrationTestRelationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetIntegrationTestRelationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetIntegrationTestRelationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/apis/{apiId}/versions/{apiVersionId}/integrationtest", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetIntegrationTestRelationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getIntegrationTestRelations200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getLinkedRelations - Get linked relations
   *
   * This call fetches all the relations which are linked to the specified API version along with their details.
   * 
   * The response will contain a `relations` object which lists all the relation types which are linked to the API version. Each of the relation type will be an object which details the relations of this type. 
   * 
   * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
  **/
  getLinkedRelations(
    req: operations.GetLinkedRelationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetLinkedRelationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetLinkedRelationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/apis/{apiId}/versions/{apiVersionId}/relations", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetLinkedRelationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getLinkedRelations200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getMonitorRelations - Get monitor relations
   *
   * This call fetches all the relations by type which are linked to the specified API version along with their details.
   * 
   * The response will contain an array with key `{{relationType}}`. Each of the item will consist of all the details related each of the relation.
   * 
   * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
  **/
  getMonitorRelations(
    req: operations.GetMonitorRelationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMonitorRelationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMonitorRelationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/apis/{apiId}/versions/{apiVersionId}/monitor", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetMonitorRelationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getMonitorRelations200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getTestSuiteRelations - Get test suite relations
   *
   * This call fetches all the relations by type which are linked to the specified API version along with their details.
   * 
   * The response will contain an array with key `{{relationType}}`. Each of the item will consist of all the details related each of the relation.
   * 
   * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
  **/
  getTestSuiteRelations(
    req: operations.GetTestSuiteRelationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTestSuiteRelationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTestSuiteRelationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/apis/{apiId}/versions/{apiVersionId}/testsuite", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetTestSuiteRelationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getTestSuiteRelations200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * syncRelationsWithSchema - Sync relations with schema
   *
   * This call allows you to keep the relation in sync with the API schema.
   * 
   * 
   * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
  **/
  syncRelationsWithSchema(
    req: operations.SyncRelationsWithSchemaRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SyncRelationsWithSchemaResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SyncRelationsWithSchemaRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/apis/{apiId}/versions/{apiVersionId}/{entityType}/{entityId}/syncWithSchema", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SyncRelationsWithSchemaResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.syncRelationsWithSchema200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.syncRelationsWithSchema400ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
