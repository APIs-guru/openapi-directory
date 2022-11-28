import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";
import { Security } from "./models/shared";



type OptsFunc = (sdk: SDK) => void;

export const ServerList = [
	"https://circleci.com/api/v1",
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
   * deleteProjectUsernameProjectBuildCache - Clears the cache for a project.
   * 
  **/
  deleteProjectUsernameProjectBuildCache(
    req: operations.DeleteProjectUsernameProjectBuildCacheRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteProjectUsernameProjectBuildCacheResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteProjectUsernameProjectBuildCacheRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/project/{username}/{project}/build-cache", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteProjectUsernameProjectBuildCacheResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.deleteProjectUsernameProjectBuildCache200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteProjectUsernameProjectCheckoutKeyFingerprint - Delete a checkout key.
   * 
  **/
  deleteProjectUsernameProjectCheckoutKeyFingerprint(
    req: operations.DeleteProjectUsernameProjectCheckoutKeyFingerprintRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteProjectUsernameProjectCheckoutKeyFingerprintResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteProjectUsernameProjectCheckoutKeyFingerprintRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/project/{username}/{project}/checkout-key/{fingerprint}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteProjectUsernameProjectCheckoutKeyFingerprintResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.deleteProjectUsernameProjectCheckoutKeyFingerprint200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteProjectUsernameProjectEnvvarName - Deletes the environment variable named ':name'
   * 
  **/
  deleteProjectUsernameProjectEnvvarName(
    req: operations.DeleteProjectUsernameProjectEnvvarNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteProjectUsernameProjectEnvvarNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteProjectUsernameProjectEnvvarNameRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/project/{username}/{project}/envvar/{name}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteProjectUsernameProjectEnvvarNameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.deleteProjectUsernameProjectEnvvarName200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getMe - Provides information about the signed in user.
   * 
  **/
  getMe(
    config?: AxiosRequestConfig
  ): Promise<operations.GetMeResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/me";
    
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
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.user = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getProjectUsernameProject - Build summary for each of the last 30 builds for a single git repo.
   * 
  **/
  getProjectUsernameProject(
    req: operations.GetProjectUsernameProjectRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetProjectUsernameProjectResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetProjectUsernameProjectRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/project/{username}/{project}", req.pathParams);
    
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
        const res: operations.GetProjectUsernameProjectResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.builds = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getProjectUsernameProjectBuildNum - Full details for a single build. The response includes all of the fields from the build summary.
   * This is also the payload for the [notification webhooks](/docs/configuration/#notify), in which case this object is the value to a key named 'payload'.
   * 
  **/
  getProjectUsernameProjectBuildNum(
    req: operations.GetProjectUsernameProjectBuildNumRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetProjectUsernameProjectBuildNumResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetProjectUsernameProjectBuildNumRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/project/{username}/{project}/{build_num}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetProjectUsernameProjectBuildNumResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.buildDetail = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getProjectUsernameProjectBuildNumArtifacts - List the artifacts produced by a given build.
   * 
  **/
  getProjectUsernameProjectBuildNumArtifacts(
    req: operations.GetProjectUsernameProjectBuildNumArtifactsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetProjectUsernameProjectBuildNumArtifactsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetProjectUsernameProjectBuildNumArtifactsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/project/{username}/{project}/{build_num}/artifacts", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetProjectUsernameProjectBuildNumArtifactsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.artifacts = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getProjectUsernameProjectBuildNumTests - Provides test metadata for a build
   * Note: [Learn how to set up your builds to collect test metadata](https://circleci.com/docs/test-metadata/)
   * 
  **/
  getProjectUsernameProjectBuildNumTests(
    req: operations.GetProjectUsernameProjectBuildNumTestsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetProjectUsernameProjectBuildNumTestsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetProjectUsernameProjectBuildNumTestsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/project/{username}/{project}/{build_num}/tests", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetProjectUsernameProjectBuildNumTestsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.tests = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getProjectUsernameProjectCheckoutKey - Lists checkout keys.
   * 
  **/
  getProjectUsernameProjectCheckoutKey(
    req: operations.GetProjectUsernameProjectCheckoutKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetProjectUsernameProjectCheckoutKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetProjectUsernameProjectCheckoutKeyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/project/{username}/{project}/checkout-key", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetProjectUsernameProjectCheckoutKeyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.keys = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getProjectUsernameProjectCheckoutKeyFingerprint - Get a checkout key.
   * 
  **/
  getProjectUsernameProjectCheckoutKeyFingerprint(
    req: operations.GetProjectUsernameProjectCheckoutKeyFingerprintRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetProjectUsernameProjectCheckoutKeyFingerprintResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetProjectUsernameProjectCheckoutKeyFingerprintRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/project/{username}/{project}/checkout-key/{fingerprint}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetProjectUsernameProjectCheckoutKeyFingerprintResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.key = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getProjectUsernameProjectEnvvar - Lists the environment variables for :project
   * 
  **/
  getProjectUsernameProjectEnvvar(
    req: operations.GetProjectUsernameProjectEnvvarRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetProjectUsernameProjectEnvvarResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetProjectUsernameProjectEnvvarRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/project/{username}/{project}/envvar", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetProjectUsernameProjectEnvvarResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.envvars = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getProjectUsernameProjectEnvvarName - Gets the hidden value of environment variable :name
   * 
  **/
  getProjectUsernameProjectEnvvarName(
    req: operations.GetProjectUsernameProjectEnvvarNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetProjectUsernameProjectEnvvarNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetProjectUsernameProjectEnvvarNameRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/project/{username}/{project}/envvar/{name}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetProjectUsernameProjectEnvvarNameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.envvar = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getProjects - List of all the projects you're following on CircleCI, with build information organized by branch.
   * 
  **/
  getProjects(
    config?: AxiosRequestConfig
  ): Promise<operations.GetProjectsResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/projects";
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetProjectsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.projects = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRecentBuilds - Build summary for each of the last 30 recent builds, ordered by build_num.
   * 
  **/
  getRecentBuilds(
    req: operations.GetRecentBuildsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRecentBuildsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRecentBuildsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/recent-builds";
    
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
        const res: operations.GetRecentBuildsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.builds = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postProjectUsernameProject - Triggers a new build, returns a summary of the build.
   * 
  **/
  postProjectUsernameProject(
    req: operations.PostProjectUsernameProjectRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostProjectUsernameProjectResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostProjectUsernameProjectRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/project/{username}/{project}", req.pathParams);

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
        const res: operations.PostProjectUsernameProjectResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.buildSummary = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postProjectUsernameProjectBuildNumCancel - Cancels the build, returns a summary of the build.
   * 
  **/
  postProjectUsernameProjectBuildNumCancel(
    req: operations.PostProjectUsernameProjectBuildNumCancelRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostProjectUsernameProjectBuildNumCancelResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostProjectUsernameProjectBuildNumCancelRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/project/{username}/{project}/{build_num}/cancel", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostProjectUsernameProjectBuildNumCancelResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.build = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postProjectUsernameProjectBuildNumRetry - Retries the build, returns a summary of the new build.
   * 
  **/
  postProjectUsernameProjectBuildNumRetry(
    req: operations.PostProjectUsernameProjectBuildNumRetryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostProjectUsernameProjectBuildNumRetryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostProjectUsernameProjectBuildNumRetryRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/project/{username}/{project}/{build_num}/retry", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostProjectUsernameProjectBuildNumRetryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.build = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postProjectUsernameProjectCheckoutKey - Creates a new checkout key.
   * Only usable with a user API token.
   * 
  **/
  postProjectUsernameProjectCheckoutKey(
    req: operations.PostProjectUsernameProjectCheckoutKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostProjectUsernameProjectCheckoutKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostProjectUsernameProjectCheckoutKeyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/project/{username}/{project}/checkout-key", req.pathParams);

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
        const res: operations.PostProjectUsernameProjectCheckoutKeyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.key = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postProjectUsernameProjectEnvvar - Creates a new environment variable
   * 
  **/
  postProjectUsernameProjectEnvvar(
    req: operations.PostProjectUsernameProjectEnvvarRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostProjectUsernameProjectEnvvarResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostProjectUsernameProjectEnvvarRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/project/{username}/{project}/envvar", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostProjectUsernameProjectEnvvarResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.envvar = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postProjectUsernameProjectSshKey - Create an ssh key used to access external systems that require SSH key-based authentication
   * 
  **/
  postProjectUsernameProjectSshKey(
    req: operations.PostProjectUsernameProjectSshKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostProjectUsernameProjectSshKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostProjectUsernameProjectSshKeyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/project/{username}/{project}/ssh-key", req.pathParams);

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
        const res: operations.PostProjectUsernameProjectSshKeyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postProjectUsernameProjectSshKeyDefaultApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postProjectUsernameProjectTreeBranch - Triggers a new build, returns a summary of the build.
   * Optional build parameters can be set using an experimental API.
   * 
   * Note: For more about build parameters, read about [using parameterized builds](https://circleci.com/docs/parameterized-builds/)
   * 
  **/
  postProjectUsernameProjectTreeBranch(
    req: operations.PostProjectUsernameProjectTreeBranchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostProjectUsernameProjectTreeBranchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostProjectUsernameProjectTreeBranchRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/project/{username}/{project}/tree/{branch}", req.pathParams);

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
        const res: operations.PostProjectUsernameProjectTreeBranchResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.build = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postUserHerokuKey - Adds your Heroku API key to CircleCI, takes apikey as form param name.
   * 
  **/
  postUserHerokuKey(
    config?: AxiosRequestConfig
  ): Promise<operations.PostUserHerokuKeyResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/user/heroku-key";
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostUserHerokuKeyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postUserHerokuKey403ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
