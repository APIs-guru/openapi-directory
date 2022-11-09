import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { MatchContentType } from "../internal/utils/contenttype";
import * as operations from "./models/operations";
import { ParamsSerializerOptions } from "axios";
import { GetQueryParamSerializer } from "../internal/utils/queryparams";
import { SerializeRequestBody } from "../internal/utils/requestbody";
import FormData from 'form-data';
import {GetHeadersFromRequest} from "../internal/utils/headers";
import {GetHeadersFromResponse} from "../internal/utils/headers";
import { CreateSecurityClient } from "../internal/utils/security";
import * as utils from "../internal/utils/utils";
import { Security } from "./models/shared";

type OptsFunc = (sdk: SDK) => void;

const Servers = [
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
  
  // DeleteProjectUsernameProjectBuildCache - Clears the cache for a project.

  DeleteProjectUsernameProjectBuildCache(
    req: operations.DeleteProjectUsernameProjectBuildCacheRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteProjectUsernameProjectBuildCacheResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteProjectUsernameProjectBuildCacheRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/project/{username}/{project}/build-cache", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteProjectUsernameProjectBuildCacheResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.deleteProjectUsernameProjectBuildCache200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteProjectUsernameProjectCheckoutKeyFingerprint - Delete a checkout key.

  DeleteProjectUsernameProjectCheckoutKeyFingerprint(
    req: operations.DeleteProjectUsernameProjectCheckoutKeyFingerprintRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteProjectUsernameProjectCheckoutKeyFingerprintResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteProjectUsernameProjectCheckoutKeyFingerprintRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/project/{username}/{project}/checkout-key/{fingerprint}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteProjectUsernameProjectCheckoutKeyFingerprintResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.deleteProjectUsernameProjectCheckoutKeyFingerprint200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteProjectUsernameProjectEnvvarName - Deletes the environment variable named ':name'

  DeleteProjectUsernameProjectEnvvarName(
    req: operations.DeleteProjectUsernameProjectEnvvarNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteProjectUsernameProjectEnvvarNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteProjectUsernameProjectEnvvarNameRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/project/{username}/{project}/envvar/{name}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteProjectUsernameProjectEnvvarNameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.deleteProjectUsernameProjectEnvvarName200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetMe - Provides information about the signed in user.

  GetMe(
    
    config?: AxiosRequestConfig
  ): Promise<operations.GetMeResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/me";
    
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
            if (MatchContentType(contentType, `application/json`)) {
                res.user = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetProjectUsernameProject - Build summary for each of the last 30 builds for a single git repo.

  GetProjectUsernameProject(
    req: operations.GetProjectUsernameProjectRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetProjectUsernameProjectResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetProjectUsernameProjectRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/project/{username}/{project}", req.pathParams);
    
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
        let res: operations.GetProjectUsernameProjectResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.builds = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetProjectUsernameProjectBuildNum - Full details for a single build. The response includes all of the fields from the build summary.
This is also the payload for the [notification webhooks](/docs/configuration/#notify), in which case this object is the value to a key named 'payload'.

  GetProjectUsernameProjectBuildNum(
    req: operations.GetProjectUsernameProjectBuildNumRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetProjectUsernameProjectBuildNumResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetProjectUsernameProjectBuildNumRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/project/{username}/{project}/{build_num}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetProjectUsernameProjectBuildNumResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.buildDetail = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetProjectUsernameProjectBuildNumArtifacts - List the artifacts produced by a given build.

  GetProjectUsernameProjectBuildNumArtifacts(
    req: operations.GetProjectUsernameProjectBuildNumArtifactsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetProjectUsernameProjectBuildNumArtifactsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetProjectUsernameProjectBuildNumArtifactsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/project/{username}/{project}/{build_num}/artifacts", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetProjectUsernameProjectBuildNumArtifactsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.artifacts = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetProjectUsernameProjectBuildNumTests - Provides test metadata for a build
Note: [Learn how to set up your builds to collect test metadata](https://circleci.com/docs/test-metadata/)

  GetProjectUsernameProjectBuildNumTests(
    req: operations.GetProjectUsernameProjectBuildNumTestsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetProjectUsernameProjectBuildNumTestsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetProjectUsernameProjectBuildNumTestsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/project/{username}/{project}/{build_num}/tests", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetProjectUsernameProjectBuildNumTestsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.tests = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetProjectUsernameProjectCheckoutKey - Lists checkout keys.

  GetProjectUsernameProjectCheckoutKey(
    req: operations.GetProjectUsernameProjectCheckoutKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetProjectUsernameProjectCheckoutKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetProjectUsernameProjectCheckoutKeyRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/project/{username}/{project}/checkout-key", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetProjectUsernameProjectCheckoutKeyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.keys = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetProjectUsernameProjectCheckoutKeyFingerprint - Get a checkout key.

  GetProjectUsernameProjectCheckoutKeyFingerprint(
    req: operations.GetProjectUsernameProjectCheckoutKeyFingerprintRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetProjectUsernameProjectCheckoutKeyFingerprintResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetProjectUsernameProjectCheckoutKeyFingerprintRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/project/{username}/{project}/checkout-key/{fingerprint}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetProjectUsernameProjectCheckoutKeyFingerprintResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.key = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetProjectUsernameProjectEnvvar - Lists the environment variables for :project

  GetProjectUsernameProjectEnvvar(
    req: operations.GetProjectUsernameProjectEnvvarRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetProjectUsernameProjectEnvvarResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetProjectUsernameProjectEnvvarRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/project/{username}/{project}/envvar", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetProjectUsernameProjectEnvvarResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.envvars = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetProjectUsernameProjectEnvvarName - Gets the hidden value of environment variable :name

  GetProjectUsernameProjectEnvvarName(
    req: operations.GetProjectUsernameProjectEnvvarNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetProjectUsernameProjectEnvvarNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetProjectUsernameProjectEnvvarNameRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/project/{username}/{project}/envvar/{name}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetProjectUsernameProjectEnvvarNameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.envvar = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetProjects - List of all the projects you're following on CircleCI, with build information organized by branch.

  GetProjects(
    
    config?: AxiosRequestConfig
  ): Promise<operations.GetProjectsResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/projects";
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetProjectsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.projects = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRecentBuilds - Build summary for each of the last 30 recent builds, ordered by build_num.

  GetRecentBuilds(
    req: operations.GetRecentBuildsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRecentBuildsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRecentBuildsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/recent-builds";
    
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
        let res: operations.GetRecentBuildsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.builds = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostProjectUsernameProject - Triggers a new build, returns a summary of the build.

  PostProjectUsernameProject(
    req: operations.PostProjectUsernameProjectRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostProjectUsernameProjectResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostProjectUsernameProjectRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/project/{username}/{project}", req.pathParams);
    
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
        let res: operations.PostProjectUsernameProjectResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.buildSummary = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostProjectUsernameProjectBuildNumCancel - Cancels the build, returns a summary of the build.

  PostProjectUsernameProjectBuildNumCancel(
    req: operations.PostProjectUsernameProjectBuildNumCancelRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostProjectUsernameProjectBuildNumCancelResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostProjectUsernameProjectBuildNumCancelRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/project/{username}/{project}/{build_num}/cancel", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostProjectUsernameProjectBuildNumCancelResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.build = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostProjectUsernameProjectBuildNumRetry - Retries the build, returns a summary of the new build.

  PostProjectUsernameProjectBuildNumRetry(
    req: operations.PostProjectUsernameProjectBuildNumRetryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostProjectUsernameProjectBuildNumRetryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostProjectUsernameProjectBuildNumRetryRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/project/{username}/{project}/{build_num}/retry", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostProjectUsernameProjectBuildNumRetryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.build = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostProjectUsernameProjectCheckoutKey - Creates a new checkout key.
Only usable with a user API token.

  PostProjectUsernameProjectCheckoutKey(
    req: operations.PostProjectUsernameProjectCheckoutKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostProjectUsernameProjectCheckoutKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostProjectUsernameProjectCheckoutKeyRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/project/{username}/{project}/checkout-key", req.pathParams);
    
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
        let res: operations.PostProjectUsernameProjectCheckoutKeyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.key = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostProjectUsernameProjectEnvvar - Creates a new environment variable

  PostProjectUsernameProjectEnvvar(
    req: operations.PostProjectUsernameProjectEnvvarRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostProjectUsernameProjectEnvvarResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostProjectUsernameProjectEnvvarRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/project/{username}/{project}/envvar", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostProjectUsernameProjectEnvvarResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.envvar = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostProjectUsernameProjectSshKey - Create an ssh key used to access external systems that require SSH key-based authentication

  PostProjectUsernameProjectSshKey(
    req: operations.PostProjectUsernameProjectSshKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostProjectUsernameProjectSshKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostProjectUsernameProjectSshKeyRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/project/{username}/{project}/ssh-key", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.PostProjectUsernameProjectSshKeyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.postProjectUsernameProjectSshKeyDefaultApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostProjectUsernameProjectTreeBranch - Triggers a new build, returns a summary of the build.
Optional build parameters can be set using an experimental API.

Note: For more about build parameters, read about [using parameterized builds](https://circleci.com/docs/parameterized-builds/)

  PostProjectUsernameProjectTreeBranch(
    req: operations.PostProjectUsernameProjectTreeBranchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostProjectUsernameProjectTreeBranchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostProjectUsernameProjectTreeBranchRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/project/{username}/{project}/tree/{branch}", req.pathParams);
    
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
        let res: operations.PostProjectUsernameProjectTreeBranchResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.build = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostUserHerokuKey - Adds your Heroku API key to CircleCI, takes apikey as form param name.

  PostUserHerokuKey(
    
    config?: AxiosRequestConfig
  ): Promise<operations.PostUserHerokuKeyResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/user/heroku-key";
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostUserHerokuKeyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.postUserHerokuKey403ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
