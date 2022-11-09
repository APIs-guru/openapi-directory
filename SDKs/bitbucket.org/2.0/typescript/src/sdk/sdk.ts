import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { MatchContentType } from "../internal/utils/contenttype";
import * as shared from "./models/shared";
import * as operations from "./models/operations";
import { ParamsSerializerOptions } from "axios";
import { GetQueryParamSerializer } from "../internal/utils/queryparams";
import { SerializeRequestBody } from "../internal/utils/requestbody";
import FormData from 'form-data';
import {GetHeadersFromResponse} from "../internal/utils/headers";
import { CreateSecurityClient } from "../internal/utils/security";
import * as utils from "../internal/utils/utils";

type OptsFunc = (sdk: SDK) => void;

const Servers = [
  "https://api.bitbucket.org/2.0",
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

// SDK Documentation: https://bitbucket.org/api
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
  
  // DeleteAddon - Deletes the application for the user.

This endpoint is intended to be used by Bitbucket Connect apps
and only supports JWT authentication -- that is how Bitbucket
identifies the particular installation of the app. Developers
with applications registered in the "Develop Apps" section
of Bitbucket Marketplace need not use this endpoint as
updates for those applications can be sent out via the
UI of that section.

```
$ curl -X DELETE https://api.bitbucket.org/2.0/addon \
  -H "Authorization: JWT <JWT Token>"
```
  DeleteAddon(
    req: operations.DeleteAddonRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteAddonResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteAddonRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/addon";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteAddonResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteAddonLinkersLinkerKeyValues - Delete all [linker](/cloud/bitbucket/modules/linker/) values for the
specified linker of the authenticated application.
  DeleteAddonLinkersLinkerKeyValues(
    req: operations.DeleteAddonLinkersLinkerKeyValuesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteAddonLinkersLinkerKeyValuesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteAddonLinkersLinkerKeyValuesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/addon/linkers/{linker_key}/values", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteAddonLinkersLinkerKeyValuesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteAddonLinkersLinkerKeyValuesValueId - Delete a single [linker](/cloud/bitbucket/modules/linker/) value
of the authenticated application.
  DeleteAddonLinkersLinkerKeyValuesValueId(
    req: operations.DeleteAddonLinkersLinkerKeyValuesValueIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteAddonLinkersLinkerKeyValuesValueIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteAddonLinkersLinkerKeyValuesValueIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/addon/linkers/{linker_key}/values/{value_id}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteAddonLinkersLinkerKeyValuesValueIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteRepositoriesWorkspaceRepoSlug - Deletes the repository. This is an irreversible operation.

This does not affect its forks.
  DeleteRepositoriesWorkspaceRepoSlug(
    req: operations.DeleteRepositoriesWorkspaceRepoSlugRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRepositoriesWorkspaceRepoSlugResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRepositoriesWorkspaceRepoSlugRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
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
        let res: operations.DeleteRepositoriesWorkspaceRepoSlugResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteRepositoriesWorkspaceRepoSlugBranchRestrictionsId - Deletes an existing branch restriction rule.
  DeleteRepositoriesWorkspaceRepoSlugBranchRestrictionsId(
    req: operations.DeleteRepositoriesWorkspaceRepoSlugBranchRestrictionsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRepositoriesWorkspaceRepoSlugBranchRestrictionsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRepositoriesWorkspaceRepoSlugBranchRestrictionsIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/branch-restrictions/{id}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteRepositoriesWorkspaceRepoSlugBranchRestrictionsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteRepositoriesWorkspaceRepoSlugCommitCommitApprove - Redact the authenticated user's approval of the specified commit.

This operation is only available to users that have explicit access to
the repository. In contrast, just the fact that a repository is
publicly accessible to users does not give them the ability to approve
commits.
  DeleteRepositoriesWorkspaceRepoSlugCommitCommitApprove(
    req: operations.DeleteRepositoriesWorkspaceRepoSlugCommitCommitApproveRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRepositoriesWorkspaceRepoSlugCommitCommitApproveResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRepositoriesWorkspaceRepoSlugCommitCommitApproveRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/commit/{commit}/approve", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteRepositoriesWorkspaceRepoSlugCommitCommitApproveResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsername - Removes a default reviewer from the repository.
  DeleteRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsername(
    req: operations.DeleteRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/default-reviewers/{target_username}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteRepositoriesWorkspaceRepoSlugDeployKeysKeyId - This deletes a deploy key from a repository.

Example:
```
$ curl -XDELETE \
-H "Authorization <auth header>" \
https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-keys/1234
```
  DeleteRepositoriesWorkspaceRepoSlugDeployKeysKeyId(
    req: operations.DeleteRepositoriesWorkspaceRepoSlugDeployKeysKeyIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRepositoriesWorkspaceRepoSlugDeployKeysKeyIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRepositoriesWorkspaceRepoSlugDeployKeysKeyIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/deploy-keys/{key_id}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteRepositoriesWorkspaceRepoSlugDeployKeysKeyIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 403:
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteRepositoriesWorkspaceRepoSlugDownloadsFilename - Deletes the specified download artifact from the repository.
  DeleteRepositoriesWorkspaceRepoSlugDownloadsFilename(
    req: operations.DeleteRepositoriesWorkspaceRepoSlugDownloadsFilenameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRepositoriesWorkspaceRepoSlugDownloadsFilenameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRepositoriesWorkspaceRepoSlugDownloadsFilenameRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/downloads/{filename}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteRepositoriesWorkspaceRepoSlugDownloadsFilenameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteRepositoriesWorkspaceRepoSlugHooksUid - Deletes the specified webhook subscription from the given
repository.
  DeleteRepositoriesWorkspaceRepoSlugHooksUid(
    req: operations.DeleteRepositoriesWorkspaceRepoSlugHooksUidRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRepositoriesWorkspaceRepoSlugHooksUidResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRepositoriesWorkspaceRepoSlugHooksUidRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/hooks/{uid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteRepositoriesWorkspaceRepoSlugHooksUidResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteRepositoriesWorkspaceRepoSlugIssuesIssueId - Deletes the specified issue. This requires write access to the
repository.
  DeleteRepositoriesWorkspaceRepoSlugIssuesIssueId(
    req: operations.DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/issues/{issue_id}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.issue = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPath - Deletes an attachment.
  DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPath(
    req: operations.DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/issues/{issue_id}/attachments/{path}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentId - Deletes the specified comment.
  DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentId(
    req: operations.DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/issues/{issue_id}/comments/{comment_id}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .delete(url, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdVote - Retract your vote.
  DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdVote(
    req: operations.DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/issues/{issue_id}/vote", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdWatch - Stop watching this issue.
  DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdWatch(
    req: operations.DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/issues/{issue_id}/watch", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApprove - Redact the authenticated user's approval of the specified pull
request.
  DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApprove(
    req: operations.DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApproveRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApproveResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApproveRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/approve", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApproveResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentId - Deletes a specific pull request comment.
  DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentId(
    req: operations.DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/comments/{comment_id}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChanges(
    req: operations.DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChangesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChangesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChangesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/request-changes", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChangesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteRepositoriesWorkspaceRepoSlugRefsBranchesName - Delete a branch in the specified repository.

The main branch is not allowed to be deleted and will return a 400
response.

The branch name should not include any prefixes (e.g.
refs/heads).
  DeleteRepositoriesWorkspaceRepoSlugRefsBranchesName(
    req: operations.DeleteRepositoriesWorkspaceRepoSlugRefsBranchesNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRepositoriesWorkspaceRepoSlugRefsBranchesNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRepositoriesWorkspaceRepoSlugRefsBranchesNameRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/refs/branches/{name}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteRepositoriesWorkspaceRepoSlugRefsBranchesNameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteRepositoriesWorkspaceRepoSlugRefsTagsName - Delete a tag in the specified repository.

For Git, the tag name should not include any prefixes (e.g. refs/tags).
For Mercurial, this adds a commit to the main branch that removes the
specified tag.
  DeleteRepositoriesWorkspaceRepoSlugRefsTagsName(
    req: operations.DeleteRepositoriesWorkspaceRepoSlugRefsTagsNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRepositoriesWorkspaceRepoSlugRefsTagsNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRepositoriesWorkspaceRepoSlugRefsTagsNameRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/refs/tags/{name}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteRepositoriesWorkspaceRepoSlugRefsTagsNameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteSnippetsWorkspaceEncodedId - Deletes a snippet and returns an empty response.
  DeleteSnippetsWorkspaceEncodedId(
    req: operations.DeleteSnippetsWorkspaceEncodedIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSnippetsWorkspaceEncodedIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteSnippetsWorkspaceEncodedIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/snippets/{workspace}/{encoded_id}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteSnippetsWorkspaceEncodedIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteSnippetsWorkspaceEncodedIdCommentsCommentId - Deletes a snippet comment.

Comments can only be removed by their author.
  DeleteSnippetsWorkspaceEncodedIdCommentsCommentId(
    req: operations.DeleteSnippetsWorkspaceEncodedIdCommentsCommentIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSnippetsWorkspaceEncodedIdCommentsCommentIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteSnippetsWorkspaceEncodedIdCommentsCommentIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/snippets/{workspace}/{encoded_id}/comments/{comment_id}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteSnippetsWorkspaceEncodedIdCommentsCommentIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteSnippetsWorkspaceEncodedIdNodeId - Deletes the snippet.

Note that this only works for versioned URLs that point to the latest
commit of the snippet. Pointing to an older commit results in a 405
status code.

To delete a snippet, regardless of whether or not concurrent changes
are being made to it, use `DELETE /snippets/{encoded_id}` instead.
  DeleteSnippetsWorkspaceEncodedIdNodeId(
    req: operations.DeleteSnippetsWorkspaceEncodedIdNodeIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSnippetsWorkspaceEncodedIdNodeIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteSnippetsWorkspaceEncodedIdNodeIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/snippets/{workspace}/{encoded_id}/{node_id}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteSnippetsWorkspaceEncodedIdNodeIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 405:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteSnippetsWorkspaceEncodedIdWatch - Used to stop watching a specific snippet. Returns 204 (No Content)
to indicate success.
  DeleteSnippetsWorkspaceEncodedIdWatch(
    req: operations.DeleteSnippetsWorkspaceEncodedIdWatchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSnippetsWorkspaceEncodedIdWatchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteSnippetsWorkspaceEncodedIdWatchRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/snippets/{workspace}/{encoded_id}/watch", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteSnippetsWorkspaceEncodedIdWatchResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            if (MatchContentType(contentType, `application/json`)) {
                res.paginatedUsers = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteTeamsUsernameHooksUid - Deletes the specified webhook subscription from the given team
account.

**This endpoint has been deprecated, and you should
use the new [workspace hooks](../../../workspaces/%7Bworkspace%7D/hooks/%7Buid%7D#delete) endpoint.
For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
  DeleteTeamsUsernameHooksUid(
    req: operations.DeleteTeamsUsernameHooksUidRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteTeamsUsernameHooksUidResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteTeamsUsernameHooksUidRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/teams/{username}/hooks/{uid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteTeamsUsernameHooksUidResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteTeamsUsernameProjectsProjectKey - **This endpoint has been deprecated,
and you should use the [workspace project](../../../workspaces/%7Bworkspace%7D/projects/%7Bproject_key%7D#delete) endpoint.
For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
  DeleteTeamsUsernameProjectsProjectKey(
    req: operations.DeleteTeamsUsernameProjectsProjectKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteTeamsUsernameProjectsProjectKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteTeamsUsernameProjectsProjectKeyRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/teams/{username}/projects/{project_key}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteTeamsUsernameProjectsProjectKeyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteUsersSelectedUserHooksUid - Deletes the specified webhook subscription from the given user
account.

Note that the username path parameter has been deprecated due to
[privacy changes](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-changes-gdpr/#removal-of-usernames-from-user-referencing-apis).
Use the account's UUID or account_id instead.

**This endpoint has been deprecated, and you should
use the new [workspace hooks](../../../workspaces/%7Bworkspace%7D/hooks/%7Buid%7D#delete) endpoint.
For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
  DeleteUsersSelectedUserHooksUid(
    req: operations.DeleteUsersSelectedUserHooksUidRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteUsersSelectedUserHooksUidResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteUsersSelectedUserHooksUidRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/users/{selected_user}/hooks/{uid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteUsersSelectedUserHooksUidResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteUsersSelectedUserSshKeysKeyId - Deletes a specific SSH public key from a user's account

Example:
```
$ curl -X DELETE https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}/ssh-keys/{b15b6026-9c02-4626-b4ad-b905f99f763a}
```
  DeleteUsersSelectedUserSshKeysKeyId(
    req: operations.DeleteUsersSelectedUserSshKeysKeyIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteUsersSelectedUserSshKeysKeyIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteUsersSelectedUserSshKeysKeyIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/users/{selected_user}/ssh-keys/{key_id}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteUsersSelectedUserSshKeysKeyIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 403:
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteWorkspacesWorkspaceHooksUid - Deletes the specified webhook subscription from the given workspace.
  DeleteWorkspacesWorkspaceHooksUid(
    req: operations.DeleteWorkspacesWorkspaceHooksUidRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteWorkspacesWorkspaceHooksUidResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteWorkspacesWorkspaceHooksUidRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/workspaces/{workspace}/hooks/{uid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteWorkspacesWorkspaceHooksUidResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteWorkspacesWorkspaceProjectsProjectKey - Deletes this project. This is an irreversible operation.

You cannot delete a project that still contains repositories.
To delete the project, [delete](../../../repositories/%7Bworkspace%7D/%7Brepo_slug%7D#delete)
or transfer the repositories first.

Example:
```
$ curl -X DELETE https://api.bitbucket.org/2.0/bbworkspace1/PROJ
```
  DeleteWorkspacesWorkspaceProjectsProjectKey(
    req: operations.DeleteWorkspacesWorkspaceProjectsProjectKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteWorkspacesWorkspaceProjectsProjectKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteWorkspacesWorkspaceProjectsProjectKeyRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/workspaces/{workspace}/projects/{project_key}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteWorkspacesWorkspaceProjectsProjectKeyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetAddonLinkers - Gets a list of all [linkers](/cloud/bitbucket/modules/linker/)
for the authenticated application.
  GetAddonLinkers(
    req: operations.GetAddonLinkersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAddonLinkersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAddonLinkersRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/addon/linkers";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetAddonLinkersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetAddonLinkersLinkerKey - Gets a [linker](/cloud/bitbucket/modules/linker/) specified by `linker_key`
for the authenticated application.
  GetAddonLinkersLinkerKey(
    req: operations.GetAddonLinkersLinkerKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAddonLinkersLinkerKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAddonLinkersLinkerKeyRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/addon/linkers/{linker_key}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetAddonLinkersLinkerKeyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetAddonLinkersLinkerKeyValues - Gets a list of all [linker](/cloud/bitbucket/modules/linker/) values for the
specified linker of the authenticated application.

A linker value lets applications supply values to modify its regular expression.

The base regular expression must use a Bitbucket-specific match group `(?K)`
which will be translated to `([\w\-]+)`. A value must match this pattern.

[Read more about linker values](/cloud/bitbucket/modules/linker/#usingthebitbucketapitosupplyvalues)
  GetAddonLinkersLinkerKeyValues(
    req: operations.GetAddonLinkersLinkerKeyValuesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAddonLinkersLinkerKeyValuesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAddonLinkersLinkerKeyValuesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/addon/linkers/{linker_key}/values", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetAddonLinkersLinkerKeyValuesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetAddonLinkersLinkerKeyValuesValueId - Get a single [linker](/cloud/bitbucket/modules/linker/) value
of the authenticated application.
  GetAddonLinkersLinkerKeyValuesValueId(
    req: operations.GetAddonLinkersLinkerKeyValuesValueIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAddonLinkersLinkerKeyValuesValueIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAddonLinkersLinkerKeyValuesValueIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/addon/linkers/{linker_key}/values/{value_id}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetAddonLinkersLinkerKeyValuesValueIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetHookEvents - Returns the webhook resource or subject types on which webhooks can
be registered.

Each resource/subject type contains an `events` link that returns the
paginated list of specific events each individual subject type can
emit.

This endpoint is publicly accessible and does not require
authentication or scopes.

Example:

```
$ curl https://api.bitbucket.org/2.0/hook_events

{
    "repository": {
        "links": {
            "events": {
                "href": "https://api.bitbucket.org/2.0/hook_events/repository"
            }
        }
    },
    "team": {
        "links": {
            "events": {
                "href": "https://api.bitbucket.org/2.0/hook_events/team"
            }
        }
    },
    "user": {
        "links": {
            "events": {
                "href": "https://api.bitbucket.org/2.0/hook_events/user"
            }
        }
    }
}
```
  GetHookEvents(
    req: operations.GetHookEventsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetHookEventsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetHookEventsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/hook_events";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetHookEventsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.subjectTypes = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetHookEventsSubjectType - Returns a paginated list of all valid webhook events for the
specified entity.
**The team and user webhooks are deprecated, and you should use workspace instead.
For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**

This is public data that does not require any scopes or authentication.

Example:

NOTE: The following example is a truncated response object for the `workspace` `subject_type`.
We return the same structure for the other `subject_type` objects.

```
$ curl https://api.bitbucket.org/2.0/hook_events/workspace
{
    "page": 1,
    "pagelen": 30,
    "size": 21,
    "values": [
        {
            "category": "Repository",
            "description": "Whenever a repository push occurs",
            "event": "repo:push",
            "label": "Push"
        },
        {
            "category": "Repository",
            "description": "Whenever a repository fork occurs",
            "event": "repo:fork",
            "label": "Fork"
        },
        {
            "category": "Repository",
            "description": "Whenever a repository import occurs",
            "event": "repo:imported",
            "label": "Import"
        },
        ...
        {
            "category":"Pull Request",
            "label":"Approved",
            "description":"When someone has approved a pull request",
            "event":"pullrequest:approved"
        },
    ]
}
```
  GetHookEventsSubjectType(
    req: operations.GetHookEventsSubjectTypeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetHookEventsSubjectTypeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetHookEventsSubjectTypeRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/hook_events/{subject_type}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetHookEventsSubjectTypeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.paginatedHookEvents = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetPullrequestsSelectedUser - Returns all pull requests authored by the specified user.

By default only open pull requests are returned. This can be controlled
using the `state` query parameter. To retrieve pull requests that are
in one of multiple states, repeat the `state` parameter for each
individual state.

This endpoint also supports filtering and sorting of the results. See
[filtering and sorting](../../../../meta/filtering) for more details.
  GetPullrequestsSelectedUser(
    req: operations.GetPullrequestsSelectedUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPullrequestsSelectedUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPullrequestsSelectedUserRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/pullrequests/{selected_user}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
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
        let res: operations.GetPullrequestsSelectedUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.paginatedPullrequests = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRepositories - Returns a paginated list of all public repositories.

This endpoint also supports filtering and sorting of the results. See
[filtering and sorting](../meta/filtering) for more details.
  GetRepositories(
    req: operations.GetRepositoriesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRepositoriesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRepositoriesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repositories";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
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
        let res: operations.GetRepositoriesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.paginatedRepositories = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRepositoriesWorkspace - Returns a paginated list of all repositories owned by the specified
account or UUID.

The result can be narrowed down based on the authenticated user's role.

E.g. with `?role=contributor`, only those repositories that the
authenticated user has write access to are returned (this includes any
repo the user is an admin on, as that implies write access).

This endpoint also supports filtering and sorting of the results. See
[filtering and sorting](../../meta/filtering) for more details.
  GetRepositoriesWorkspace(
    req: operations.GetRepositoriesWorkspaceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRepositoriesWorkspaceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRepositoriesWorkspaceRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
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
        let res: operations.GetRepositoriesWorkspaceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.paginatedRepositories = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 410:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRepositoriesWorkspaceRepoSlug - Returns the object describing this repository.
  GetRepositoriesWorkspaceRepoSlug(
    req: operations.GetRepositoriesWorkspaceRepoSlugRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRepositoriesWorkspaceRepoSlugResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRepositoriesWorkspaceRepoSlugRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRepositoriesWorkspaceRepoSlugResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.repository = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRepositoriesWorkspaceRepoSlugBranchRestrictions - Returns a paginated list of all branch restrictions on the
repository.
  GetRepositoriesWorkspaceRepoSlugBranchRestrictions(
    req: operations.GetRepositoriesWorkspaceRepoSlugBranchRestrictionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRepositoriesWorkspaceRepoSlugBranchRestrictionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRepositoriesWorkspaceRepoSlugBranchRestrictionsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/branch-restrictions", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
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
        let res: operations.GetRepositoriesWorkspaceRepoSlugBranchRestrictionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.paginatedBranchrestrictions = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRepositoriesWorkspaceRepoSlugBranchRestrictionsId - Returns a specific branch restriction rule.
  GetRepositoriesWorkspaceRepoSlugBranchRestrictionsId(
    req: operations.GetRepositoriesWorkspaceRepoSlugBranchRestrictionsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRepositoriesWorkspaceRepoSlugBranchRestrictionsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRepositoriesWorkspaceRepoSlugBranchRestrictionsIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/branch-restrictions/{id}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRepositoriesWorkspaceRepoSlugBranchRestrictionsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.branchrestriction = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRepositoriesWorkspaceRepoSlugBranchingModel - Return the branching model as applied to the repository. This view is
read-only. The branching model settings can be changed using the
[settings](branching-model/settings#get) API.

The returned object:

1. Always has a `development` property. `development.branch` contains
   the actual repository branch object that is considered to be the
   `development` branch. `development.branch` will not be present
   if it does not exist.
2. Might have a `production` property. `production` will not
   be present when `production` is disabled.
   `production.branch` contains the actual branch object that is
   considered to be the `production` branch. `production.branch` will
   not be present if it does not exist.
3. Always has a `branch_types` array which contains all enabled branch
   types.

Example body:

```
{
  "development": {
    "name": "master",
    "branch": {
      "type": "branch",
      "name": "master",
      "target": {
        "hash": "16dffcb0de1b22e249db6799532074cf32efe80f"
      }
    },
    "use_mainbranch": true
  },
  "production": {
    "name": "production",
    "branch": {
      "type": "branch",
      "name": "production",
      "target": {
        "hash": "16dffcb0de1b22e249db6799532074cf32efe80f"
      }
    },
    "use_mainbranch": false
  },
  "branch_types": [
    {
      "kind": "release",
      "prefix": "release/"
    },
    {
      "kind": "hotfix",
      "prefix": "hotfix/"
    },
    {
      "kind": "feature",
      "prefix": "feature/"
    },
    {
      "kind": "bugfix",
      "prefix": "bugfix/"
    }
  ],
  "type": "branching_model",
  "links": {
    "self": {
      "href": "https://api.bitbucket.org/.../branching-model"
    }
  }
}
```
  GetRepositoriesWorkspaceRepoSlugBranchingModel(
    req: operations.GetRepositoriesWorkspaceRepoSlugBranchingModelRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRepositoriesWorkspaceRepoSlugBranchingModelResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRepositoriesWorkspaceRepoSlugBranchingModelRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/branching-model", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRepositoriesWorkspaceRepoSlugBranchingModelResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.branchingModel = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRepositoriesWorkspaceRepoSlugBranchingModelSettings - Return the branching model configuration for a repository. The returned
object:

1. Always has a `development` property for the development branch.
2. Always a `production` property for the production branch. The
   production branch can be disabled.
3. The `branch_types` contains all the branch types.

This is the raw configuration for the branching model. A client
wishing to see the branching model with its actual current branches may
find the [active model API](../branching-model#get) more useful.

Example body:

```
{
  "development": {
    "is_valid": true,
    "name": null,
    "use_mainbranch": true
  },
  "production": {
    "is_valid": true,
    "name": "production",
    "use_mainbranch": false,
    "enabled": false
  },
  "branch_types": [
    {
      "kind": "release",
      "enabled": true,
      "prefix": "release/"
    },
    {
      "kind": "hotfix",
      "enabled": true,
      "prefix": "hotfix/"
    },
    {
      "kind": "feature",
      "enabled": true,
      "prefix": "feature/"
    },
    {
      "kind": "bugfix",
      "enabled": false,
      "prefix": "bugfix/"
    }
  ],
  "type": "branching_model_settings",
  "links": {
    "self": {
      "href": "https://api.bitbucket.org/.../branching-model/settings"
    }
  }
}
```
  GetRepositoriesWorkspaceRepoSlugBranchingModelSettings(
    req: operations.GetRepositoriesWorkspaceRepoSlugBranchingModelSettingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRepositoriesWorkspaceRepoSlugBranchingModelSettingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRepositoriesWorkspaceRepoSlugBranchingModelSettingsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/branching-model/settings", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRepositoriesWorkspaceRepoSlugBranchingModelSettingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.branchingModelSettings = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRepositoriesWorkspaceRepoSlugCommitCommit - Returns the specified commit.

Example:

```
$ curl https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/commit/f7591a1
{
    "rendered": {
        "message": {
        "raw": "Add a GEORDI_OUTPUT_DIR setting",
        "markup": "markdown",
        "html": "<p>Add a GEORDI_OUTPUT_DIR setting</p>",
        "type": "rendered"
        }
    },
    "hash": "f7591a13eda445d9a9167f98eb870319f4b6c2d8",
    "repository": {
        "name": "geordi",
        "type": "repository",
        "full_name": "bitbucket/geordi",
        "links": {
            "self": {
                "href": "https://api.bitbucket.org/2.0/repositories/bitbucket/geordi"
            },
            "html": {
                "href": "https://bitbucket.org/bitbucket/geordi"
            },
            "avatar": {
                "href": "https://bytebucket.org/ravatar/%7B85d08b4e-571d-44e9-a507-fa476535aa98%7D?ts=1730260"
            }
        },
        "uuid": "{85d08b4e-571d-44e9-a507-fa476535aa98}"
    },
    "links": {
        "self": {
            "href": "https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/commit/f7591a13eda445d9a9167f98eb870319f4b6c2d8"
        },
        "comments": {
            "href": "https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/commit/f7591a13eda445d9a9167f98eb870319f4b6c2d8/comments"
        },
        "patch": {
            "href": "https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/patch/f7591a13eda445d9a9167f98eb870319f4b6c2d8"
        },
        "html": {
            "href": "https://bitbucket.org/bitbucket/geordi/commits/f7591a13eda445d9a9167f98eb870319f4b6c2d8"
        },
        "diff": {
            "href": "https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/diff/f7591a13eda445d9a9167f98eb870319f4b6c2d8"
        },
        "approve": {
            "href": "https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/commit/f7591a13eda445d9a9167f98eb870319f4b6c2d8/approve"
        },
        "statuses": {
            "href": "https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/commit/f7591a13eda445d9a9167f98eb870319f4b6c2d8/statuses"
        }
    },
    "author": {
        "raw": "Brodie Rao <a@b.c>",
        "type": "author",
        "user": {
            "display_name": "Brodie Rao",
            "uuid": "{9484702e-c663-4afd-aefb-c93a8cd31c28}",
            "links": {
                "self": {
                    "href": "https://api.bitbucket.org/2.0/users/%7B9484702e-c663-4afd-aefb-c93a8cd31c28%7D"
                },
                "html": {
                    "href": "https://bitbucket.org/%7B9484702e-c663-4afd-aefb-c93a8cd31c28%7D/"
                },
                "avatar": {
                    "href": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:3aae1e05-702a-41e5-81c8-f36f29afb6ca/613070db-28b0-421f-8dba-ae8a87e2a5c7/128"
                }
            },
            "type": "user",
            "nickname": "brodie",
            "account_id": "557058:3aae1e05-702a-41e5-81c8-f36f29afb6ca"
        }
    },
    "summary": {
        "raw": "Add a GEORDI_OUTPUT_DIR setting",
        "markup": "markdown",
        "html": "<p>Add a GEORDI_OUTPUT_DIR setting</p>",
        "type": "rendered"
    },
    "participants": [],
    "parents": [
        {
            "type": "commit",
            "hash": "f06941fec4ef6bcb0c2456927a0cf258fa4f899b",
            "links": {
                "self": {
                    "href": "https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/commit/f06941fec4ef6bcb0c2456927a0cf258fa4f899b"
                },
                "html": {
                    "href": "https://bitbucket.org/bitbucket/geordi/commits/f06941fec4ef6bcb0c2456927a0cf258fa4f899b"
                }
            }
        }
    ],
    "date": "2012-07-16T19:37:54+00:00",
    "message": "Add a GEORDI_OUTPUT_DIR setting",
    "type": "commit"
}
```
  GetRepositoriesWorkspaceRepoSlugCommitCommit(
    req: operations.GetRepositoriesWorkspaceRepoSlugCommitCommitRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRepositoriesWorkspaceRepoSlugCommitCommitResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRepositoriesWorkspaceRepoSlugCommitCommitRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/commit/{commit}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRepositoriesWorkspaceRepoSlugCommitCommitResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.commit = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRepositoriesWorkspaceRepoSlugCommitCommitComments - Returns the commit's comments.

This includes both global and inline comments.

The default sorting is oldest to newest and can be overridden with
the `sort` query parameter.
  GetRepositoriesWorkspaceRepoSlugCommitCommitComments(
    req: operations.GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/commit/{commit}/comments", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
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
        let res: operations.GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.paginatedCommitComments = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentId - Returns the specified commit comment.
  GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentId(
    req: operations.GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/commit/{commit}/comments/{comment_id}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.commitComment = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRepositoriesWorkspaceRepoSlugCommitCommitStatuses - Returns all statuses (e.g. build results) for a specific commit.
  GetRepositoriesWorkspaceRepoSlugCommitCommitStatuses(
    req: operations.GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/commit/{commit}/statuses", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
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
        let res: operations.GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.paginatedCommitstatuses = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKey - Returns the specified build status for a commit.
  GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKey(
    req: operations.GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/commit/{commit}/statuses/build/{key}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.commitstatus = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRepositoriesWorkspaceRepoSlugCommits - These are the repository's commits. They are paginated and returned
in reverse chronological order, similar to the output of `git log`.
Like these tools, the DAG can be filtered.

## GET /repositories/{workspace}/{repo_slug}/commits/

Returns all commits in the repo in topological order (newest commit
first). All branches and tags are included (similar to
`git log --all`).

## GET /repositories/{workspace}/{repo_slug}/commits/?exclude=master

Returns all commits in the repo that are not on master
(similar to `git log --all ^master`).

## GET /repositories/{workspace}/{repo_slug}/commits/?include=foo&include=bar&exclude=fu&exclude=fubar

Returns all commits that are on refs `foo` or `bar`, but not on `fu` or
`fubar` (similar to `git log foo bar ^fu ^fubar`).

An optional `path` parameter can be specified that will limit the
results to commits that affect that path. `path` can either be a file
or a directory. If a directory is specified, commits are returned that
have modified any file in the directory tree rooted by `path`. It is
important to note that if the `path` parameter is specified, the commits
returned by this endpoint may no longer be a DAG, parent commits that
do not modify the path will be omitted from the response.

## GET /repositories/{workspace}/{repo_slug}/commits/?path=README.md&include=foo&include=bar&exclude=master

Returns all commits that are on refs `foo` or `bar`, but not on `master`
that changed the file README.md.

## GET /repositories/{workspace}/{repo_slug}/commits/?path=src/&include=foo&include=bar&exclude=master

Returns all commits that are on refs `foo` or `bar`, but not on `master`
that changed to a file in any file in the directory src or its children.

Because the response could include a very large number of commits, it
is paginated. Follow the 'next' link in the response to navigate to the
next page of commits. As with other paginated resources, do not
construct your own links.

When the include and exclude parameters are more than can fit in a
query string, clients can use a `x-www-form-urlencoded` POST instead.
  GetRepositoriesWorkspaceRepoSlugCommits(
    req: operations.GetRepositoriesWorkspaceRepoSlugCommitsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRepositoriesWorkspaceRepoSlugCommitsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRepositoriesWorkspaceRepoSlugCommitsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/commits", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRepositoriesWorkspaceRepoSlugCommitsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.paginatedChangeset = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRepositoriesWorkspaceRepoSlugCommitsRevision - These are the repository's commits. They are paginated and returned
in reverse chronological order, similar to the output of `git log`.
Like these tools, the DAG can be filtered.

## GET /repositories/{workspace}/{repo_slug}/commits/master

Returns all commits on rev `master` (similar to `git log master`).

## GET /repositories/{workspace}/{repo_slug}/commits/dev?include=foo&exclude=master

Returns all commits on ref `dev` or `foo`, except those that are reachable on
`master` (similar to `git log dev foo ^master`).

An optional `path` parameter can be specified that will limit the
results to commits that affect that path. `path` can either be a file
or a directory. If a directory is specified, commits are returned that
have modified any file in the directory tree rooted by `path`. It is
important to note that if the `path` parameter is specified, the commits
returned by this endpoint may no longer be a DAG, parent commits that
do not modify the path will be omitted from the response.

## GET /repositories/{workspace}/{repo_slug}/commits/dev?path=README.md&include=foo&include=bar&exclude=master

Returns all commits that are on refs `dev` or `foo` or `bar`, but not on `master`
that changed the file README.md.

## GET /repositories/{workspace}/{repo_slug}/commits/dev?path=src/&include=foo&exclude=master

Returns all commits that are on refs `dev` or `foo`, but not on `master`
that changed to a file in any file in the directory src or its children.

Because the response could include a very large number of commits, it
is paginated. Follow the 'next' link in the response to navigate to the
next page of commits. As with other paginated resources, do not
construct your own links.

When the include and exclude parameters are more than can fit in a
query string, clients can use a `x-www-form-urlencoded` POST instead.
  GetRepositoriesWorkspaceRepoSlugCommitsRevision(
    req: operations.GetRepositoriesWorkspaceRepoSlugCommitsRevisionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRepositoriesWorkspaceRepoSlugCommitsRevisionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRepositoriesWorkspaceRepoSlugCommitsRevisionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/commits/{revision}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRepositoriesWorkspaceRepoSlugCommitsRevisionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.paginatedChangeset = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRepositoriesWorkspaceRepoSlugComponents - Returns the components that have been defined in the issue tracker.

This resource is only available on repositories that have the issue
tracker enabled.
  GetRepositoriesWorkspaceRepoSlugComponents(
    req: operations.GetRepositoriesWorkspaceRepoSlugComponentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRepositoriesWorkspaceRepoSlugComponentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRepositoriesWorkspaceRepoSlugComponentsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/components", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRepositoriesWorkspaceRepoSlugComponentsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.paginatedComponents = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRepositoriesWorkspaceRepoSlugComponentsComponentId - Returns the specified issue tracker component object.
  GetRepositoriesWorkspaceRepoSlugComponentsComponentId(
    req: operations.GetRepositoriesWorkspaceRepoSlugComponentsComponentIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRepositoriesWorkspaceRepoSlugComponentsComponentIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRepositoriesWorkspaceRepoSlugComponentsComponentIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/components/{component_id}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRepositoriesWorkspaceRepoSlugComponentsComponentIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.component = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRepositoriesWorkspaceRepoSlugDefaultReviewers - Returns the repository's default reviewers.

These are the users that are automatically added as reviewers on every
new pull request that is created.
  GetRepositoriesWorkspaceRepoSlugDefaultReviewers(
    req: operations.GetRepositoriesWorkspaceRepoSlugDefaultReviewersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRepositoriesWorkspaceRepoSlugDefaultReviewersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRepositoriesWorkspaceRepoSlugDefaultReviewersRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/default-reviewers", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRepositoriesWorkspaceRepoSlugDefaultReviewersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsername - Returns the specified reviewer.

This can be used to test whether a user is among the repository's
default reviewers list. A 404 indicates that that specified user is not
a default reviewer.
  GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsername(
    req: operations.GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/default-reviewers/{target_username}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRepositoriesWorkspaceRepoSlugDeployKeys - Returns all deploy-keys belonging to a repository.

Example:
```
$ curl -H "Authorization <auth header>" \
https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-keys

Output:
{
    "pagelen": 10,
    "values": [
        {
            "id": 123,
            "key": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDAK/b1cHHDr/TEV1JGQl+WjCwStKG6Bhrv0rFpEsYlyTBm1fzN0VOJJYn4ZOPCPJwqse6fGbXntEs+BbXiptR+++HycVgl65TMR0b5ul5AgwrVdZdT7qjCOCgaSV74/9xlHDK8oqgGnfA7ZoBBU+qpVyaloSjBdJfLtPY/xqj4yHnXKYzrtn/uFc4Kp9Tb7PUg9Io3qohSTGJGVHnsVblq/rToJG7L5xIo0OxK0SJSQ5vuId93ZuFZrCNMXj8JDHZeSEtjJzpRCBEXHxpOPhAcbm4MzULgkFHhAVgp4JbkrT99/wpvZ7r9AdkTg7HGqL3rlaDrEcWfL7Lu6TnhBdq5",
            "label": "mykey",
            "type": "deploy_key",
            "created_on": "2018-08-15T23:50:59.993890+00:00",
            "repository": {
                "full_name": "mleu/test",
                "name": "test",
                "type": "repository",
                "uuid": "{85d08b4e-571d-44e9-a507-fa476535aa98}"
            },
            "links":{
                "self":{
                    "href": "https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-keys/123"
                }
            }
            "last_used": null,
            "comment": "mleu@C02W454JHTD8"
        }
    ],
    "page": 1,
    "size": 1
}
```
  GetRepositoriesWorkspaceRepoSlugDeployKeys(
    req: operations.GetRepositoriesWorkspaceRepoSlugDeployKeysRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRepositoriesWorkspaceRepoSlugDeployKeysResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRepositoriesWorkspaceRepoSlugDeployKeysRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/deploy-keys", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRepositoriesWorkspaceRepoSlugDeployKeysResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.paginatedDeployKeys = httpRes?.data;
            }
            break;
          case 403:
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRepositoriesWorkspaceRepoSlugDeployKeysKeyId - Returns the deploy key belonging to a specific key.

Example:
```
$ curl -H "Authorization <auth header>" \
https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-key/1234

Output:
{
    "comment": "mleu@C02W454JHTD8",
    "last_used": null,
    "links": {
        "self": {
            "href": https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-key/1234"
        }
    },
    "repository": {
        "full_name": "mleu/test",
        "name": "test",
        "type": "repository",
        "uuid": "{85d08b4e-571d-44e9-a507-fa476535aa98}"
    },
    "label": "mykey",
    "created_on": "2018-08-15T23:50:59.993890+00:00",
    "key": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDAK/b1cHHDr/TEV1JGQl+WjCwStKG6Bhrv0rFpEsYlyTBm1fzN0VOJJYn4ZOPCPJwqse6fGbXntEs+BbXiptR+++HycVgl65TMR0b5ul5AgwrVdZdT7qjCOCgaSV74/9xlHDK8oqgGnfA7ZoBBU+qpVyaloSjBdJfLtPY/xqj4yHnXKYzrtn/uFc4Kp9Tb7PUg9Io3qohSTGJGVHnsVblq/rToJG7L5xIo0OxK0SJSQ5vuId93ZuFZrCNMXj8JDHZeSEtjJzpRCBEXHxpOPhAcbm4MzULgkFHhAVgp4JbkrT99/wpvZ7r9AdkTg7HGqL3rlaDrEcWfL7Lu6TnhBdq5",
    "id": 1234,
    "type": "deploy_key"
}
```
  GetRepositoriesWorkspaceRepoSlugDeployKeysKeyId(
    req: operations.GetRepositoriesWorkspaceRepoSlugDeployKeysKeyIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRepositoriesWorkspaceRepoSlugDeployKeysKeyIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRepositoriesWorkspaceRepoSlugDeployKeysKeyIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/deploy-keys/{key_id}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRepositoriesWorkspaceRepoSlugDeployKeysKeyIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.deployKey = httpRes?.data;
            }
            break;
          case 403:
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRepositoriesWorkspaceRepoSlugDiffSpec - Produces a raw git-style diff.

#### Single commit spec

If the `spec` argument to this API is a single commit, the diff is
produced against the first parent of the specified commit.

#### Two commit spec

Two commits separated by `..` may be provided as the `spec`, e.g.,
`3a8b42..9ff173`. When two commits are provided and the `merge` query
parameter is true or absent, this API produces a 3-way diff, also
referred to as a merge diff. This is equivalent to merging the left
branch into the right branch and then computing the diff of the merge
commit against its first parent (the right branch). These diffs have
the same behavior as pull requests that show the 3-way diff, such as
the [Bitbucket Cloud Pull
Request](https://blog.developer.atlassian.com/a-better-pull-request/).
For a simple git-style diff, add `merge=false` to the query.

The two commits are interpreted as follows:

* First commit: the commit containing the changes we wish to preview
* Second commit: the commit representing the state to which we want to
  compare the first commit
* **Note**: This is the opposite of the order used in `git diff`.

#### Comparison to patches

While similar to patches, diffs:

* Don't have a commit header (username, commit message, etc)
* Support the optional `path=foo/bar.py` query param to filter
  the diff to just that one file diff

#### Response

The raw diff is returned as-is, in whatever encoding the files in the
repository use. It is not decoded into unicode. As such, the
content-type is `text/plain`.
  GetRepositoriesWorkspaceRepoSlugDiffSpec(
    req: operations.GetRepositoriesWorkspaceRepoSlugDiffSpecRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRepositoriesWorkspaceRepoSlugDiffSpecResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRepositoriesWorkspaceRepoSlugDiffSpecRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/diff/{spec}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
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
        let res: operations.GetRepositoriesWorkspaceRepoSlugDiffSpecResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          case 555:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRepositoriesWorkspaceRepoSlugDiffstatSpec - Produces a response in JSON format with a record for every path
modified, including information on the type of the change and the
number of lines added and removed.

#### Single commit spec

If the `spec` argument to this API is a single commit, the diff is
produced against the first parent of the specified commit.

#### Two commit spec

Two commits separated by `..` may be provided as the `spec`, e.g.,
`3a8b42..9ff173`. When two commits are provided and the `merge` query
parameter is true or absent, this API produces a 3-way diff, also
referred to as a merge diff. This is equivalent to merging the left
branch into the right branch and then computing the diff of the merge
commit against its first parent (the right branch). These diffs have
the same behavior as pull requests that show the 3-way diff, such as
the [Bitbucket Cloud Pull
Request](https://blog.developer.atlassian.com/a-better-pull-request/).
For a simple git-style diff, add `merge=false` to the query.

The two commits are interpreted as follows:

* First commit: the commit containing the changes we wish to preview
* Second commit: the commit representing the state to which we want to
  compare the first commit
* **Note**: This is the opposite of the order used in `git diff`.

#### Sample output
```
curl https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/diffstat/d222fa2..e174964
{
    "pagelen": 500,
    "values": [
        {
            "type": "diffstat",
            "status": "modified",
            "lines_removed": 1,
            "lines_added": 2,
            "old": {
                "path": "setup.py",
                "escaped_path": "setup.py",
                "type": "commit_file",
                "links": {
                    "self": {
                        "href": "https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/src/e1749643d655d7c7014001a6c0f58abaf42ad850/setup.py"
                    }
                }
            },
            "new": {
                "path": "setup.py",
                "escaped_path": "setup.py",
                "type": "commit_file",
                "links": {
                    "self": {
                        "href": "https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/src/d222fa235229c55dad20b190b0b571adf737d5a6/setup.py"
                    }
                }
            }
        }
    ],
    "page": 1,
    "size": 1
}
```
  GetRepositoriesWorkspaceRepoSlugDiffstatSpec(
    req: operations.GetRepositoriesWorkspaceRepoSlugDiffstatSpecRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRepositoriesWorkspaceRepoSlugDiffstatSpecResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRepositoriesWorkspaceRepoSlugDiffstatSpecRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/diffstat/{spec}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
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
        let res: operations.GetRepositoriesWorkspaceRepoSlugDiffstatSpecResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.paginatedDiffstats = httpRes?.data;
            }
            break;
          case 555:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRepositoriesWorkspaceRepoSlugDownloads - Returns a list of download links associated with the repository.
  GetRepositoriesWorkspaceRepoSlugDownloads(
    req: operations.GetRepositoriesWorkspaceRepoSlugDownloadsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRepositoriesWorkspaceRepoSlugDownloadsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRepositoriesWorkspaceRepoSlugDownloadsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/downloads", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRepositoriesWorkspaceRepoSlugDownloadsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRepositoriesWorkspaceRepoSlugDownloadsFilename - Return a redirect to the contents of a download artifact.

This endpoint returns the actual file contents and not the artifact's
metadata.

    $ curl -s -L https://api.bitbucket.org/2.0/repositories/evzijst/git-tests/downloads/hello.txt
    Hello World
  GetRepositoriesWorkspaceRepoSlugDownloadsFilename(
    req: operations.GetRepositoriesWorkspaceRepoSlugDownloadsFilenameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRepositoriesWorkspaceRepoSlugDownloadsFilenameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRepositoriesWorkspaceRepoSlugDownloadsFilenameRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/downloads/{filename}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRepositoriesWorkspaceRepoSlugDownloadsFilenameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPath - Returns a paginated list of commits that modified the specified file.

Commits are returned in reverse chronological order. This is roughly
equivalent to the following commands:

    $ git log --follow --date-order <sha> <path>

    $ hg log --follow <path>

By default, Bitbucket will follow renames and the path name in the
returned entries reflects that. This can be turned off using the
`?renames=false` query parameter.

Results are returned in descending chronological order by default, and
like most endpoints you can
[filter and sort](../../../../../../meta/filtering) the response to
only provide exactly the data you want.

For example, if you wanted to find commits made before 2011-05-18
against a file named `README.rst`, but you only wanted the path and
date, your query would look like this:

```
$ curl 'https://api.bitbucket.org/2.0/repositories/evzijst/dogslow/filehistory/master/README.rst'\
  '?fields=values.next,values.path,values.commit.date&q=commit.date<=2011-05-18'
{
  "values": [
    {
      "commit": {
        "date": "2011-05-17T07:32:09+00:00"
      },
      "path": "README.rst"
    },
    {
      "commit": {
        "date": "2011-05-16T06:33:28+00:00"
      },
      "path": "README.txt"
    },
    {
      "commit": {
        "date": "2011-05-16T06:15:39+00:00"
      },
      "path": "README.txt"
    }
  ]
}
```

In the response you can see that the file was renamed to `README.rst`
by the commit made on 2011-05-16, and was previously named `README.txt`.
  GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPath(
    req: operations.GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/filehistory/{commit}/{path}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
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
        let res: operations.GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.paginatedFiles = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRepositoriesWorkspaceRepoSlugForks - Returns a paginated list of all the forks of the specified
repository.
  GetRepositoriesWorkspaceRepoSlugForks(
    req: operations.GetRepositoriesWorkspaceRepoSlugForksRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRepositoriesWorkspaceRepoSlugForksResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRepositoriesWorkspaceRepoSlugForksRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/forks", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
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
        let res: operations.GetRepositoriesWorkspaceRepoSlugForksResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.paginatedRepositories = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRepositoriesWorkspaceRepoSlugHooks - Returns a paginated list of webhooks installed on this repository.
  GetRepositoriesWorkspaceRepoSlugHooks(
    req: operations.GetRepositoriesWorkspaceRepoSlugHooksRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRepositoriesWorkspaceRepoSlugHooksResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRepositoriesWorkspaceRepoSlugHooksRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/hooks", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRepositoriesWorkspaceRepoSlugHooksResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.paginatedWebhookSubscriptions = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRepositoriesWorkspaceRepoSlugHooksUid - Returns the webhook with the specified id installed on the specified
repository.
  GetRepositoriesWorkspaceRepoSlugHooksUid(
    req: operations.GetRepositoriesWorkspaceRepoSlugHooksUidRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRepositoriesWorkspaceRepoSlugHooksUidResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRepositoriesWorkspaceRepoSlugHooksUidRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/hooks/{uid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRepositoriesWorkspaceRepoSlugHooksUidResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.webhookSubscription = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRepositoriesWorkspaceRepoSlugIssues - Returns the issues in the issue tracker.
  GetRepositoriesWorkspaceRepoSlugIssues(
    req: operations.GetRepositoriesWorkspaceRepoSlugIssuesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRepositoriesWorkspaceRepoSlugIssuesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRepositoriesWorkspaceRepoSlugIssuesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/issues", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRepositoriesWorkspaceRepoSlugIssuesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.paginatedIssues = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZip - This endpoint is used to poll for the progress of an issue export
job and return the zip file after the job is complete.
As long as the job is running, this will return a 200 response
with in the response body a description of the current status.

After the job has been scheduled, but before it starts executing, this
endpoint's response is:

{
 "type": "issue_job_status",
 "status": "ACCEPTED",
 "phase": "Initializing",
 "total": 0,
 "count": 0,
 "pct": 0
}


Then once it starts running, it becomes:

{
 "type": "issue_job_status",
 "status": "STARTED",
 "phase": "Attachments",
 "total": 15,
 "count": 11,
 "pct": 73
}

Once the job has successfully completed, it returns a stream of the zip file.
  GetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZip(
    req: operations.GetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZipRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZipResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZipRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/issues/export/{repo_name}-issues-{task_id}.zip", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZipResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 202:
            if (MatchContentType(contentType, `application/json`)) {
                res.issueJobStatus = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRepositoriesWorkspaceRepoSlugIssuesImport - When using GET, this endpoint reports the status of the current import task. Request example:

```
$ curl -u <username> -X GET https://api.bitbucket.org/2.0/repositories/<owner_username>/<repo_slug>/issues/import
```

After the job has been scheduled, but before it starts executing, this endpoint's response is:

```
< HTTP/1.1 202 Accepted
{
    "type": "issue_job_status",
    "status": "PENDING",
    "phase": "Attachments",
    "total": 15,
    "count": 0,
    "percent": 0
}
```

Once it starts running, it is a 202 response with status STARTED and progress filled.

After it is finished, it becomes a 200 response with status SUCCESS or FAILURE.
  GetRepositoriesWorkspaceRepoSlugIssuesImport(
    req: operations.GetRepositoriesWorkspaceRepoSlugIssuesImportRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRepositoriesWorkspaceRepoSlugIssuesImportResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRepositoriesWorkspaceRepoSlugIssuesImportRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/issues/import", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRepositoriesWorkspaceRepoSlugIssuesImportResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.issueJobStatus = httpRes?.data;
            }
            break;
          case 202:
            if (MatchContentType(contentType, `application/json`)) {
                res.issueJobStatus = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRepositoriesWorkspaceRepoSlugIssuesIssueId - Returns the specified issue.
  GetRepositoriesWorkspaceRepoSlugIssuesIssueId(
    req: operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/issues/{issue_id}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.issue = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 410:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachments - Returns all attachments for this issue.

This returns the files' meta data. This does not return the files'
actual contents.

The files are always ordered by their upload date.
  GetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachments(
    req: operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/issues/{issue_id}/attachments", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.paginatedIssueAttachments = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPath - Returns the contents of the specified file attachment.

Note that this endpoint does not return a JSON response, but instead
returns a redirect pointing to the actual file that in turn will return
the raw contents.

The redirect URL contains a one-time token that has a limited lifetime.
As a result, the link should not be persisted, stored, or shared.
  GetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPath(
    req: operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/issues/{issue_id}/attachments/{path}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 302:
            break;
          case 401:
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRepositoriesWorkspaceRepoSlugIssuesIssueIdChanges - Returns the list of all changes that have been made to the specified
issue. Changes are returned in chronological order with the oldest
change first.

Each time an issue is edited in the UI or through the API, an immutable
change record is created under the `/issues/123/changes` endpoint. It
also has a comment associated with the change.

Note that this operation is changing significantly, due to privacy changes.
See the [announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-changes-gdpr/#changes-to-the-issue-changes-api)
for details.

```
$ curl -s https://api.bitbucket.org/2.0/repositories/evzijst/dogslow/issues/1/changes - | jq .

{
  "pagelen": 20,
  "values": [
    {
      "changes": {
        "priority": {
          "new": "trivial",
          "old": "major"
        },
        "assignee": {
          "new": "",
          "old": "evzijst"
        },
        "assignee_account_id": {
          "new": "",
          "old": "557058:c0b72ad0-1cb5-4018-9cdc-0cde8492c443"
        },
        "kind": {
          "new": "enhancement",
          "old": "bug"
        }
      },
      "links": {
        "self": {
          "href": "https://api.bitbucket.org/2.0/repositories/evzijst/dogslow/issues/1/changes/2"
        },
        "html": {
          "href": "https://bitbucket.org/evzijst/dogslow/issues/1#comment-2"
        }
      },
      "issue": {
        "links": {
          "self": {
            "href": "https://api.bitbucket.org/2.0/repositories/evzijst/dogslow/issues/1"
          }
        },
        "type": "issue",
        "id": 1,
        "repository": {
          "links": {
            "self": {
              "href": "https://api.bitbucket.org/2.0/repositories/evzijst/dogslow"
            },
            "html": {
              "href": "https://bitbucket.org/evzijst/dogslow"
            },
            "avatar": {
              "href": "https://bitbucket.org/evzijst/dogslow/avatar/32/"
            }
          },
          "type": "repository",
          "name": "dogslow",
          "full_name": "evzijst/dogslow",
          "uuid": "{988b17c6-1a47-4e70-84ee-854d5f012bf6}"
        },
        "title": "Updated title"
      },
      "created_on": "2018-03-03T00:35:28.353630+00:00",
      "user": {
        "username": "evzijst",
        "nickname": "evzijst",
        "display_name": "evzijst",
        "type": "user",
        "uuid": "{aaa7972b-38af-4fb1-802d-6e3854c95778}",
        "links": {
          "self": {
            "href": "https://api.bitbucket.org/2.0/users/evzijst"
          },
          "html": {
            "href": "https://bitbucket.org/evzijst/"
          },
          "avatar": {
            "href": "https://bitbucket.org/account/evzijst/avatar/32/"
          }
        }
      },
      "message": {
        "raw": "Removed assignee, changed kind and priority.",
        "markup": "markdown",
        "html": "<p>Removed assignee, changed kind and priority.</p>",
        "type": "rendered"
      },
      "type": "issue_change",
      "id": 2
    }
  ],
  "page": 1
}
```

Changes support [filtering and sorting](../../../meta/filtering) that
can be used to search for specific changes. For instance, to see
when an issue transitioned to "resolved":

```
$ curl -s https://api.bitbucket.org/2.0/repositories/site/master/issues/1/changes \
   -G --data-urlencode='q=changes.state.new = "resolved"'
```

This resource is only available on repositories that have the issue
tracker enabled.

N.B.

The `changes.assignee` and `changes.assignee_account_id` fields are not
a `user` object. Instead, they contain the raw `username` and
`account_id` of the user. This is to protect the integrity of the audit
log even after a user account gets deleted.

The `changes.assignee` field is deprecated will disappear in the
future. Use `changes.assignee_account_id` instead.
  GetRepositoriesWorkspaceRepoSlugIssuesIssueIdChanges(
    req: operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/issues/{issue_id}/changes", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
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
        let res: operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.paginatedLogEntries = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesChangeId - Returns the specified issue change object.

This resource is only available on repositories that have the issue
tracker enabled.
  GetRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesChangeId(
    req: operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesChangeIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesChangeIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesChangeIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/issues/{issue_id}/changes/{change_id}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesChangeIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.issueChange = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRepositoriesWorkspaceRepoSlugIssuesIssueIdComments - Returns a paginated list of all comments that were made on the
specified issue.

The default sorting is oldest to newest and can be overridden with
the `sort` query parameter.

This endpoint also supports filtering and sorting of the results. See
[filtering and sorting](../../../../../../meta/filtering) for more details.
  GetRepositoriesWorkspaceRepoSlugIssuesIssueIdComments(
    req: operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/issues/{issue_id}/comments", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
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
        let res: operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.paginatedIssueComments = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentId - Returns the specified issue comment object.
  GetRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentId(
    req: operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/issues/{issue_id}/comments/{comment_id}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.issueComment = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRepositoriesWorkspaceRepoSlugIssuesIssueIdVote - Check whether the authenticated user has voted for this issue.
A 204 status code indicates that the user has voted, while a 404
implies they haven't.
  GetRepositoriesWorkspaceRepoSlugIssuesIssueIdVote(
    req: operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/issues/{issue_id}/vote", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRepositoriesWorkspaceRepoSlugIssuesIssueIdWatch - Indicated whether or not the authenticated user is watching this
issue.
  GetRepositoriesWorkspaceRepoSlugIssuesIssueIdWatch(
    req: operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/issues/{issue_id}/watch", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRepositoriesWorkspaceRepoSlugMergeBaseRevspec - Returns the best common ancestor between two commits, specified in a revspec
of 2 commits (e.g. 3a8b42..9ff173).

If more than one best common ancestor exists, only one will be returned. It is
unspecified which will be returned.
  GetRepositoriesWorkspaceRepoSlugMergeBaseRevspec(
    req: operations.GetRepositoriesWorkspaceRepoSlugMergeBaseRevspecRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRepositoriesWorkspaceRepoSlugMergeBaseRevspecResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRepositoriesWorkspaceRepoSlugMergeBaseRevspecRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/merge-base/{revspec}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRepositoriesWorkspaceRepoSlugMergeBaseRevspecResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.commit = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRepositoriesWorkspaceRepoSlugMilestones - Returns the milestones that have been defined in the issue tracker.

This resource is only available on repositories that have the issue
tracker enabled.
  GetRepositoriesWorkspaceRepoSlugMilestones(
    req: operations.GetRepositoriesWorkspaceRepoSlugMilestonesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRepositoriesWorkspaceRepoSlugMilestonesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRepositoriesWorkspaceRepoSlugMilestonesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/milestones", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRepositoriesWorkspaceRepoSlugMilestonesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.paginatedMilestones = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRepositoriesWorkspaceRepoSlugMilestonesMilestoneId - Returns the specified issue tracker milestone object.
  GetRepositoriesWorkspaceRepoSlugMilestonesMilestoneId(
    req: operations.GetRepositoriesWorkspaceRepoSlugMilestonesMilestoneIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRepositoriesWorkspaceRepoSlugMilestonesMilestoneIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRepositoriesWorkspaceRepoSlugMilestonesMilestoneIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/milestones/{milestone_id}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRepositoriesWorkspaceRepoSlugMilestonesMilestoneIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.milestone = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRepositoriesWorkspaceRepoSlugPatchSpec - Produces a raw patch for a single commit (diffed against its first
parent), or a patch-series for a revspec of 2 commits (e.g.
`3a8b42..9ff173` where the first commit represents the source and the
second commit the destination).

In case of the latter (diffing a revspec), a patch series is returned
for the commits on the source branch (`3a8b42` and its ancestors in
our example). For Mercurial, a single patch is returned that combines
the changes of all commits on the source branch.

While similar to diffs, patches:

* Have a commit header (username, commit message, etc)
* Do not support the `path=foo/bar.py` query parameter

The raw patch is returned as-is, in whatever encoding the files in the
repository use. It is not decoded into unicode. As such, the
content-type is `text/plain`.
  GetRepositoriesWorkspaceRepoSlugPatchSpec(
    req: operations.GetRepositoriesWorkspaceRepoSlugPatchSpecRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRepositoriesWorkspaceRepoSlugPatchSpecResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRepositoriesWorkspaceRepoSlugPatchSpecRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/patch/{spec}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRepositoriesWorkspaceRepoSlugPatchSpecResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          case 555:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidLogsLogUuid(
    req: operations.GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidLogsLogUuidRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidLogsLogUuidResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidLogsLogUuidRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}/logs/{log_uuid}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidLogsLogUuidResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReports(
    req: operations.GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}/test_reports", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsTestCases(
    req: operations.GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsTestCasesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsTestCasesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsTestCasesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}/test_reports/test_cases", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsTestCasesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsTestCasesTestCaseUuidTestCaseReasons(
    req: operations.GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsTestCasesTestCaseUuidTestCaseReasonsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsTestCasesTestCaseUuidTestCaseReasonsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsTestCasesTestCaseUuidTestCaseReasonsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}/test_reports/test_cases/{test_case_uuid}/test_case_reasons", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsTestCasesTestCaseUuidTestCaseReasonsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRepositoriesWorkspaceRepoSlugPullrequests - Returns all pull requests on the specified repository.

By default only open pull requests are returned. This can be controlled
using the `state` query parameter. To retrieve pull requests that are
in one of multiple states, repeat the `state` parameter for each
individual state.

This endpoint also supports filtering and sorting of the results. See
[filtering and sorting](../../../../meta/filtering) for more details.
  GetRepositoriesWorkspaceRepoSlugPullrequests(
    req: operations.GetRepositoriesWorkspaceRepoSlugPullrequestsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRepositoriesWorkspaceRepoSlugPullrequestsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRepositoriesWorkspaceRepoSlugPullrequestsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/pullrequests", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
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
        let res: operations.GetRepositoriesWorkspaceRepoSlugPullrequestsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.paginatedPullrequests = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRepositoriesWorkspaceRepoSlugPullrequestsActivity - Returns a paginated list of the pull request's activity log.

This handler serves both a v20 and internal endpoint. The v20 endpoint
returns reviewer comments, updates, approvals and request changes. The internal
endpoint includes those plus tasks and attachments.

Comments created on a file or a line of code have an inline property.

Comment example:
```
{
    "pagelen": 20,
    "values": [
        {
            "comment": {
                "links": {
                    "self": {
                        "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695/comments/118571088"
                    },
                    "html": {
                        "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695/_/diff#comment-118571088"
                    }
                },
                "deleted": false,
                "pullrequest": {
                    "type": "pullrequest",
                    "id": 5695,
                    "links": {
                        "self": {
                            "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
                        },
                        "html": {
                            "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695"
                        }
                    },
                    "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it"
                },
                "content": {
                    "raw": "inline with to a dn from lines",
                    "markup": "markdown",
                    "html": "<p>inline with to a dn from lines</p>",
                    "type": "rendered"
                },
                "created_on": "2019-09-27T00:33:46.039178+00:00",
                "user": {
                    "display_name": "Name Lastname",
                    "uuid": "{}",
                    "links": {
                        "self": {
                            "href": "https://bitbucket.org/!api/2.0/users/%7B%7D"
                        },
                        "html": {
                            "href": "https://bitbucket.org/%7B%7D/"
                        },
                        "avatar": {
                            "href": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128"
                        }
                    },
                    "type": "user",
                    "nickname": "Name",
                    "account_id": ""
                },
                "created_on": "2019-09-27T00:33:46.039178+00:00",
                "user": {
                    "display_name": "Name Lastname",
                    "uuid": "{}",
                    "links": {
                        "self": {
                            "href": "https://bitbucket.org/!api/2.0/users/%7B%7D"
                        },
                        "html": {
                            "href": "https://bitbucket.org/%7B%7D/"
                        },
                        "avatar": {
                            "href": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128"
                        }
                    },
                    "type": "user",
                    "nickname": "Name",
                    "account_id": ""
                },
                "updated_on": "2019-09-27T00:33:46.055384+00:00",
                "inline": {
                    "context_lines": "",
                    "to": null,
                    "path": "",
                    "outdated": false,
                    "from": 211
                },
                "type": "pullrequest_comment",
                "id": 118571088
            },
            "pull_request": {
                "type": "pullrequest",
                "id": 5695,
                "links": {
                    "self": {
                        "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
                    },
                    "html": {
                        "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695"
                    }
                },
                "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it"
            }
        }
    ]
}
```

Updates include a state property of OPEN, MERGED, or DECLINED.

Update example:
```
{
    "pagelen": 20,
    "values": [
        {
            "update": {
                "description": "",
                "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it",
                "destination": {
                    "commit": {
                        "type": "commit",
                        "hash": "6a2c16e4a152",
                        "links": {
                            "self": {
                                "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/commit/6a2c16e4a152"
                            },
                            "html": {
                                "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/commits/6a2c16e4a152"
                            }
                        }
                    },
                    "branch": {
                        "name": "master"
                    },
                    "repository": {
                        "name": "Atlaskit-MK-2",
                        "type": "repository",
                        "full_name": "atlassian/atlaskit-mk-2",
                        "links": {
                            "self": {
                                "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2"
                            },
                            "html": {
                                "href": "https://bitbucket.org/atlassian/atlaskit-mk-2"
                            },
                            "avatar": {
                                "href": "https://bytebucket.org/ravatar/%7B%7D?ts=js"
                            }
                        },
                        "uuid": "{}"
                    }
                },
                "reason": "",
                "source": {
                    "commit": {
                        "type": "commit",
                        "hash": "728c8bad1813",
                        "links": {
                            "self": {
                                "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/commit/728c8bad1813"
                            },
                            "html": {
                                "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/commits/728c8bad1813"
                            }
                        }
                    },
                    "branch": {
                        "name": "username/NONE-add-onClick-prop-for-accessibility"
                    },
                    "repository": {
                        "name": "Atlaskit-MK-2",
                        "type": "repository",
                        "full_name": "atlassian/atlaskit-mk-2",
                        "links": {
                            "self": {
                                "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2"
                            },
                            "html": {
                                "href": "https://bitbucket.org/atlassian/atlaskit-mk-2"
                            },
                            "avatar": {
                                "href": "https://bytebucket.org/ravatar/%7B%7D?ts=js"
                            }
                        },
                        "uuid": "{}"
                    }
                },
                "state": "OPEN",
                "author": {
                    "display_name": "Name Lastname",
                    "uuid": "{}",
                    "links": {
                        "self": {
                            "href": "https://bitbucket.org/!api/2.0/users/%7B%7D"
                        },
                        "html": {
                            "href": "https://bitbucket.org/%7B%7D/"
                        },
                        "avatar": {
                            "href": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128"
                        }
                    },
                    "type": "user",
                    "nickname": "Name",
                    "account_id": ""
                },
                "date": "2019-05-10T06:48:25.305565+00:00"
            },
            "pull_request": {
                "type": "pullrequest",
                "id": 5695,
                "links": {
                    "self": {
                        "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
                    },
                    "html": {
                        "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695"
                    }
                },
                "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it"
            }
        }
    ]
}
```

Approval example:
```
{
    "pagelen": 20,
    "values": [
        {
            "approval": {
                "date": "2019-09-27T00:37:19.849534+00:00",
                "pullrequest": {
                    "type": "pullrequest",
                    "id": 5695,
                    "links": {
                        "self": {
                            "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
                        },
                        "html": {
                            "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695"
                        }
                    },
                    "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it"
                },
                "user": {
                    "display_name": "Name Lastname",
                    "uuid": "{}",
                    "links": {
                        "self": {
                            "href": "https://bitbucket.org/!api/2.0/users/%7B%7D"
                        },
                        "html": {
                            "href": "https://bitbucket.org/%7B%7D/"
                        },
                        "avatar": {
                            "href": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128"
                        }
                    },
                    "type": "user",
                    "nickname": "Name",
                    "account_id": ""
                }
            },
            "pull_request": {
                "type": "pullrequest",
                "id": 5695,
                "links": {
                    "self": {
                        "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
                    },
                    "html": {
                        "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695"
                    }
                },
                "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it"
            }
        }
    ]
}
```
  GetRepositoriesWorkspaceRepoSlugPullrequestsActivity(
    req: operations.GetRepositoriesWorkspaceRepoSlugPullrequestsActivityRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRepositoriesWorkspaceRepoSlugPullrequestsActivityResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRepositoriesWorkspaceRepoSlugPullrequestsActivityRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/pullrequests/activity", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRepositoriesWorkspaceRepoSlugPullrequestsActivityResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          case 401:
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestId - Returns the specified pull request.
  GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestId(
    req: operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.pullrequest = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdActivity - Returns a paginated list of the pull request's activity log.

This handler serves both a v20 and internal endpoint. The v20 endpoint
returns reviewer comments, updates, approvals and request changes. The internal
endpoint includes those plus tasks and attachments.

Comments created on a file or a line of code have an inline property.

Comment example:
```
{
    "pagelen": 20,
    "values": [
        {
            "comment": {
                "links": {
                    "self": {
                        "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695/comments/118571088"
                    },
                    "html": {
                        "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695/_/diff#comment-118571088"
                    }
                },
                "deleted": false,
                "pullrequest": {
                    "type": "pullrequest",
                    "id": 5695,
                    "links": {
                        "self": {
                            "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
                        },
                        "html": {
                            "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695"
                        }
                    },
                    "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it"
                },
                "content": {
                    "raw": "inline with to a dn from lines",
                    "markup": "markdown",
                    "html": "<p>inline with to a dn from lines</p>",
                    "type": "rendered"
                },
                "created_on": "2019-09-27T00:33:46.039178+00:00",
                "user": {
                    "display_name": "Name Lastname",
                    "uuid": "{}",
                    "links": {
                        "self": {
                            "href": "https://bitbucket.org/!api/2.0/users/%7B%7D"
                        },
                        "html": {
                            "href": "https://bitbucket.org/%7B%7D/"
                        },
                        "avatar": {
                            "href": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128"
                        }
                    },
                    "type": "user",
                    "nickname": "Name",
                    "account_id": ""
                },
                "created_on": "2019-09-27T00:33:46.039178+00:00",
                "user": {
                    "display_name": "Name Lastname",
                    "uuid": "{}",
                    "links": {
                        "self": {
                            "href": "https://bitbucket.org/!api/2.0/users/%7B%7D"
                        },
                        "html": {
                            "href": "https://bitbucket.org/%7B%7D/"
                        },
                        "avatar": {
                            "href": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128"
                        }
                    },
                    "type": "user",
                    "nickname": "Name",
                    "account_id": ""
                },
                "updated_on": "2019-09-27T00:33:46.055384+00:00",
                "inline": {
                    "context_lines": "",
                    "to": null,
                    "path": "",
                    "outdated": false,
                    "from": 211
                },
                "type": "pullrequest_comment",
                "id": 118571088
            },
            "pull_request": {
                "type": "pullrequest",
                "id": 5695,
                "links": {
                    "self": {
                        "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
                    },
                    "html": {
                        "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695"
                    }
                },
                "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it"
            }
        }
    ]
}
```

Updates include a state property of OPEN, MERGED, or DECLINED.

Update example:
```
{
    "pagelen": 20,
    "values": [
        {
            "update": {
                "description": "",
                "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it",
                "destination": {
                    "commit": {
                        "type": "commit",
                        "hash": "6a2c16e4a152",
                        "links": {
                            "self": {
                                "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/commit/6a2c16e4a152"
                            },
                            "html": {
                                "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/commits/6a2c16e4a152"
                            }
                        }
                    },
                    "branch": {
                        "name": "master"
                    },
                    "repository": {
                        "name": "Atlaskit-MK-2",
                        "type": "repository",
                        "full_name": "atlassian/atlaskit-mk-2",
                        "links": {
                            "self": {
                                "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2"
                            },
                            "html": {
                                "href": "https://bitbucket.org/atlassian/atlaskit-mk-2"
                            },
                            "avatar": {
                                "href": "https://bytebucket.org/ravatar/%7B%7D?ts=js"
                            }
                        },
                        "uuid": "{}"
                    }
                },
                "reason": "",
                "source": {
                    "commit": {
                        "type": "commit",
                        "hash": "728c8bad1813",
                        "links": {
                            "self": {
                                "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/commit/728c8bad1813"
                            },
                            "html": {
                                "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/commits/728c8bad1813"
                            }
                        }
                    },
                    "branch": {
                        "name": "username/NONE-add-onClick-prop-for-accessibility"
                    },
                    "repository": {
                        "name": "Atlaskit-MK-2",
                        "type": "repository",
                        "full_name": "atlassian/atlaskit-mk-2",
                        "links": {
                            "self": {
                                "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2"
                            },
                            "html": {
                                "href": "https://bitbucket.org/atlassian/atlaskit-mk-2"
                            },
                            "avatar": {
                                "href": "https://bytebucket.org/ravatar/%7B%7D?ts=js"
                            }
                        },
                        "uuid": "{}"
                    }
                },
                "state": "OPEN",
                "author": {
                    "display_name": "Name Lastname",
                    "uuid": "{}",
                    "links": {
                        "self": {
                            "href": "https://bitbucket.org/!api/2.0/users/%7B%7D"
                        },
                        "html": {
                            "href": "https://bitbucket.org/%7B%7D/"
                        },
                        "avatar": {
                            "href": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128"
                        }
                    },
                    "type": "user",
                    "nickname": "Name",
                    "account_id": ""
                },
                "date": "2019-05-10T06:48:25.305565+00:00"
            },
            "pull_request": {
                "type": "pullrequest",
                "id": 5695,
                "links": {
                    "self": {
                        "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
                    },
                    "html": {
                        "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695"
                    }
                },
                "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it"
            }
        }
    ]
}
```

Approval example:
```
{
    "pagelen": 20,
    "values": [
        {
            "approval": {
                "date": "2019-09-27T00:37:19.849534+00:00",
                "pullrequest": {
                    "type": "pullrequest",
                    "id": 5695,
                    "links": {
                        "self": {
                            "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
                        },
                        "html": {
                            "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695"
                        }
                    },
                    "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it"
                },
                "user": {
                    "display_name": "Name Lastname",
                    "uuid": "{}",
                    "links": {
                        "self": {
                            "href": "https://bitbucket.org/!api/2.0/users/%7B%7D"
                        },
                        "html": {
                            "href": "https://bitbucket.org/%7B%7D/"
                        },
                        "avatar": {
                            "href": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128"
                        }
                    },
                    "type": "user",
                    "nickname": "Name",
                    "account_id": ""
                }
            },
            "pull_request": {
                "type": "pullrequest",
                "id": 5695,
                "links": {
                    "self": {
                        "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
                    },
                    "html": {
                        "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695"
                    }
                },
                "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it"
            }
        }
    ]
}
```
  GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdActivity(
    req: operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdActivityRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdActivityResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdActivityRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/activity", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdActivityResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          case 401:
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdComments - Returns a paginated list of the pull request's comments.

This includes both global, inline comments and replies.

The default sorting is oldest to newest and can be overridden with
the `sort` query parameter.

This endpoint also supports filtering and sorting of the results. See
[filtering and sorting](../../../../../../meta/filtering) for more
details.
  GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdComments(
    req: operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/comments", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.paginatedPullrequestComments = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentId - Returns a specific pull request comment.
  GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentId(
    req: operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/comments/{comment_id}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.pullrequestComment = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommits - Returns a paginated list of the pull request's commits.

These are the commits that are being merged into the destination
branch when the pull requests gets accepted.
  GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommits(
    req: operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommitsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommitsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommitsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/commits", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommitsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiff - Redirects to the [repository diff](../../diff/%7Bspec%7D)
with the revspec that corresponds to the pull request.
  GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiff(
    req: operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/diff", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 302:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffstat - Redirects to the [repository diffstat](../../diffstat/%7Bspec%7D)
with the revspec that corresponds to the pull request.
  GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffstat(
    req: operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffstatRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffstatResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffstatRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/diffstat", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffstatResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 302:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeTaskStatusTaskId - When merging a pull request takes too long, the client receives a
task ID along with a 202 status code. The task ID can be used in a call
to this endpoint to check the status of a merge task.

```
curl -X GET https://api.bitbucket.org/2.0/repositories/atlassian/bitbucket/pullrequests/2286/merge/task-status/<task_id>
```

If the merge task is not yet finished, a PENDING status will be returned.

```
HTTP/2 200
{
    "task_status": "PENDING",
    "links": {
        "self": {
            "href": "https://api.bitbucket.org/2.0/repositories/atlassian/bitbucket/pullrequests/2286/merge/task-status/<task_id>"
        }
    }
}
```

If the merge was successful, a SUCCESS status will be returned.

```
HTTP/2 200
{
    "task_status": "SUCCESS",
    "links": {
        "self": {
            "href": "https://api.bitbucket.org/2.0/repositories/atlassian/bitbucket/pullrequests/2286/merge/task-status/<task_id>"
        }
    },
    "merge_result": <the merged pull request object>
}
```

If the merge task failed, an error will be returned.

```
{
    "type": "error",
    "error": {
        "message": "<error message>"
    }
}
```
  GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeTaskStatusTaskId(
    req: operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeTaskStatusTaskIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeTaskStatusTaskIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeTaskStatusTaskIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/merge/task-status/{task_id}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeTaskStatusTaskIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          case 400:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPatch - Redirects to the [repository patch](../../patch/%7Bspec%7D)
with the revspec that corresponds to pull request.
  GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPatch(
    req: operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPatchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPatchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPatchRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/patch", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPatchResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 302:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatuses - Returns all statuses (e.g. build results) for the given pull
request.
  GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatuses(
    req: operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/statuses", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
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
        let res: operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.paginatedCommitstatuses = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRepositoriesWorkspaceRepoSlugRefs - Returns the branches and tags in the repository.

By default, results will be in the order the underlying source control system returns them and identical to
the ordering one sees when running "$ git show-ref". Note that this follows simple
lexical ordering of the ref names.

This can be undesirable as it does apply any natural sorting semantics, meaning for instance that refs are
sorted ["branch1", "branch10", "branch2", "v10", "v11", "v9"] instead of ["branch1", "branch2",
"branch10", "v9", "v10", "v11"].

Sorting can be changed using the ?sort= query parameter. When using ?sort=name to explicitly sort on ref name,
Bitbucket will apply natural sorting and interpret numerical values as numbers instead of strings.
  GetRepositoriesWorkspaceRepoSlugRefs(
    req: operations.GetRepositoriesWorkspaceRepoSlugRefsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRepositoriesWorkspaceRepoSlugRefsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRepositoriesWorkspaceRepoSlugRefsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/refs", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
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
        let res: operations.GetRepositoriesWorkspaceRepoSlugRefsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.paginatedRefs = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRepositoriesWorkspaceRepoSlugRefsBranches - Returns a list of all open branches within the specified repository.
        Results will be in the order the source control manager returns them.

        ```
        $ curl -s https://api.bitbucket.org/2.0/repositories/atlassian/aui/refs/branches?pagelen=1 | jq .
        {
          "pagelen": 1,
          "size": 187,
          "values": [
            {
              "name": "issue-9.3/AUI-5343-assistive-class",
              "links": {
                "commits": {
                  "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/commits/issue-9.3/AUI-5343-assistive-class"
                },
                "self": {
                  "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/refs/branches/issue-9.3/AUI-5343-assistive-class"
                },
                "html": {
                  "href": "https://bitbucket.org/atlassian/aui/branch/issue-9.3/AUI-5343-assistive-class"
                }
              },
              "default_merge_strategy": "squash",
              "merge_strategies": [
                "merge_commit",
                "squash",
                "fast_forward"
              ],
              "type": "branch",
              "target": {
                "hash": "e5d1cde9069fcb9f0af90403a4de2150c125a148",
                "repository": {
                  "links": {
                    "self": {
                      "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui"
                    },
                    "html": {
                      "href": "https://bitbucket.org/atlassian/aui"
                    },
                    "avatar": {
                      "href": "https://bytebucket.org/ravatar/%7B585074de-7b60-4fd1-81ed-e0bc7fafbda5%7D?ts=86317"
                    }
                  },
                  "type": "repository",
                  "name": "aui",
                  "full_name": "atlassian/aui",
                  "uuid": "{585074de-7b60-4fd1-81ed-e0bc7fafbda5}"
                },
                "links": {
                  "self": {
                    "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/commit/e5d1cde9069fcb9f0af90403a4de2150c125a148"
                  },
                  "comments": {
                    "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/commit/e5d1cde9069fcb9f0af90403a4de2150c125a148/comments"
                  },
                  "patch": {
                    "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/patch/e5d1cde9069fcb9f0af90403a4de2150c125a148"
                  },
                  "html": {
                    "href": "https://bitbucket.org/atlassian/aui/commits/e5d1cde9069fcb9f0af90403a4de2150c125a148"
                  },
                  "diff": {
                    "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/diff/e5d1cde9069fcb9f0af90403a4de2150c125a148"
                  },
                  "approve": {
                    "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/commit/e5d1cde9069fcb9f0af90403a4de2150c125a148/approve"
                  },
                  "statuses": {
                    "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/commit/e5d1cde9069fcb9f0af90403a4de2150c125a148/statuses"
                  }
                },
                "author": {
                  "raw": "Marcin Konopka <mkonopka@atlassian.com>",
                  "type": "author",
                  "user": {
                    "display_name": "Marcin Konopka",
                    "uuid": "{47cc24f4-2a05-4420-88fe-0417535a110a}",
                    "links": {
                      "self": {
                        "href": "https://api.bitbucket.org/2.0/users/%7B47cc24f4-2a05-4420-88fe-0417535a110a%7D"
                      },
                      "html": {
                        "href": "https://bitbucket.org/%7B47cc24f4-2a05-4420-88fe-0417535a110a%7D/"
                      },
                      "avatar": {
                        "href": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/initials/MK-1.png"
                      }
                    },
                    "nickname": "Marcin Konopka",
                    "type": "user",
                    "account_id": "60113d2b47a9540069f4de03"
                  }
                },
                "parents": [
                  {
                    "hash": "87f7fc92b00464ae47b13ef65c91884e4ac9be51",
                    "type": "commit",
                    "links": {
                      "self": {
                        "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/commit/87f7fc92b00464ae47b13ef65c91884e4ac9be51"
                      },
                      "html": {
                        "href": "https://bitbucket.org/atlassian/aui/commits/87f7fc92b00464ae47b13ef65c91884e4ac9be51"
                      }
                    }
                  }
                ],
                "date": "2021-04-13T13:44:49+00:00",
                "message": "wip
",
                "type": "commit"
              }
            }
          ],
          "page": 1,
          "next": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/refs/branches?pagelen=1&page=2"
        }
        ```

        Branches support [filtering and sorting](../../../../../meta/filtering)
        that can be used to search for specific branches. For instance, to find
        all branches that have "stab" in their name:

        ```
        curl -s https://api.bitbucket.org/2.0/repositories/atlassian/aui/refs/branches -G --data-urlencode 'q=name ~ "stab"'
        ```

        By default, results will be in the order the underlying source control system returns them and identical to
        the ordering one sees when running "$ hg branches" or "$ git branch --list". Note that this follows simple
        lexical ordering of the ref names.

        This can be undesirable as it does apply any natural sorting semantics, meaning for instance that tags are
        sorted ["v10", "v11", "v9"] instead of ["v9", "v10", "v11"].

        Sorting can be changed using the ?q= query parameter. When using ?q=name to explicitly sort on ref name,
        Bitbucket will apply natural sorting and interpret numerical values as numbers instead of strings.
  GetRepositoriesWorkspaceRepoSlugRefsBranches(
    req: operations.GetRepositoriesWorkspaceRepoSlugRefsBranchesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRepositoriesWorkspaceRepoSlugRefsBranchesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRepositoriesWorkspaceRepoSlugRefsBranchesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/refs/branches", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
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
        let res: operations.GetRepositoriesWorkspaceRepoSlugRefsBranchesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.paginatedBranches = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRepositoriesWorkspaceRepoSlugRefsBranchesName - Returns a branch object within the specified repository.

        ```
        $ curl -s https://api.bitbucket.org/2.0/repositories/atlassian/aui/refs/branches/master | jq .
        {
          "name": "master",
          "links": {
            "commits": {
              "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/commits/master"
            },
            "self": {
              "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/refs/branches/master"
            },
            "html": {
              "href": "https://bitbucket.org/atlassian/aui/branch/master"
            }
          },
          "default_merge_strategy": "squash",
          "merge_strategies": [
            "merge_commit",
            "squash",
            "fast_forward"
          ],
          "type": "branch",
          "target": {
            "hash": "e7d158ff7ed5538c28f94cd97a9ad569680fc94e",
            "repository": {
              "links": {
                "self": {
                  "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui"
                },
                "html": {
                  "href": "https://bitbucket.org/atlassian/aui"
                },
                "avatar": {
                  "href": "https://bytebucket.org/ravatar/%7B585074de-7b60-4fd1-81ed-e0bc7fafbda5%7D?ts=86317"
                }
              },
              "type": "repository",
              "name": "aui",
              "full_name": "atlassian/aui",
              "uuid": "{585074de-7b60-4fd1-81ed-e0bc7fafbda5}"
            },
            "links": {
              "self": {
                "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/commit/e7d158ff7ed5538c28f94cd97a9ad569680fc94e"
              },
              "comments": {
                "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/commit/e7d158ff7ed5538c28f94cd97a9ad569680fc94e/comments"
              },
              "patch": {
                "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/patch/e7d158ff7ed5538c28f94cd97a9ad569680fc94e"
              },
              "html": {
                "href": "https://bitbucket.org/atlassian/aui/commits/e7d158ff7ed5538c28f94cd97a9ad569680fc94e"
              },
              "diff": {
                "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/diff/e7d158ff7ed5538c28f94cd97a9ad569680fc94e"
              },
              "approve": {
                "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/commit/e7d158ff7ed5538c28f94cd97a9ad569680fc94e/approve"
              },
              "statuses": {
                "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/commit/e7d158ff7ed5538c28f94cd97a9ad569680fc94e/statuses"
              }
            },
            "author": {
              "raw": "psre-renovate-bot <psre-renovate-bot@atlassian.com>",
              "type": "author",
              "user": {
                "display_name": "psre-renovate-bot",
                "uuid": "{250a442a-3ab3-4fcb-87c3-3c8f3df65ec7}",
                "links": {
                  "self": {
                    "href": "https://api.bitbucket.org/2.0/users/%7B250a442a-3ab3-4fcb-87c3-3c8f3df65ec7%7D"
                  },
                  "html": {
                    "href": "https://bitbucket.org/%7B250a442a-3ab3-4fcb-87c3-3c8f3df65ec7%7D/"
                  },
                  "avatar": {
                    "href": "https://secure.gravatar.com/avatar/6972ee037c9f36360170a86f544071a2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FP-3.png"
                  }
                },
                "nickname": "Renovate Bot",
                "type": "user",
                "account_id": "5d5355e8c6b9320d9ea5b28d"
              }
            },
            "parents": [
              {
                "hash": "eab868a309e75733de80969a7bed1ec6d4651e06",
                "type": "commit",
                "links": {
                  "self": {
                    "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/commit/eab868a309e75733de80969a7bed1ec6d4651e06"
                  },
                  "html": {
                    "href": "https://bitbucket.org/atlassian/aui/commits/eab868a309e75733de80969a7bed1ec6d4651e06"
                  }
                }
              }
            ],
            "date": "2021-04-12T06:44:38+00:00",
            "message": "Merged in issue/NONE-renovate-master-babel-monorepo (pull request #2883)

chore(deps): update babel monorepo to v7.13.15 (master)

Approved-by: Chris "Daz" Darroch
",
            "type": "commit"
          }
        }
        ```

        This call requires authentication. Private repositories require the
        caller to authenticate with an account that has appropriate
        authorization.

        For Git, the branch name should not include any prefixes (e.g.
        refs/heads).
  GetRepositoriesWorkspaceRepoSlugRefsBranchesName(
    req: operations.GetRepositoriesWorkspaceRepoSlugRefsBranchesNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRepositoriesWorkspaceRepoSlugRefsBranchesNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRepositoriesWorkspaceRepoSlugRefsBranchesNameRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/refs/branches/{name}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRepositoriesWorkspaceRepoSlugRefsBranchesNameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.branch = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRepositoriesWorkspaceRepoSlugRefsTags - Returns the tags in the repository.

By default, results will be in the order the underlying source control system returns them and identical to
the ordering one sees when running "$ hg tags" or "$ git tag --list". Note that this follows simple
lexical ordering of the ref names.

This can be undesirable as it does apply any natural sorting semantics, meaning for instance that tags are
sorted ["v10", "v11", "v9"] instead of ["v9", "v10", "v11"].

Sorting can be changed using the ?sort= query parameter. When using ?sort=name to explicitly sort on ref name,
Bitbucket will apply natural sorting and interpret numerical values as numbers instead of strings.
  GetRepositoriesWorkspaceRepoSlugRefsTags(
    req: operations.GetRepositoriesWorkspaceRepoSlugRefsTagsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRepositoriesWorkspaceRepoSlugRefsTagsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRepositoriesWorkspaceRepoSlugRefsTagsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/refs/tags", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
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
        let res: operations.GetRepositoriesWorkspaceRepoSlugRefsTagsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.paginatedTags = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRepositoriesWorkspaceRepoSlugRefsTagsName - Returns the specified tag.

```
$ curl -s https://api.bitbucket.org/2.0/repositories/seanfarley/hg/refs/tags/3.8 -G | jq .
{
  "name": "3.8",
  "links": {
    "commits": {
      "href": "https://api.bitbucket.org/2.0/repositories/seanfarley/hg/commits/3.8"
    },
    "self": {
      "href": "https://api.bitbucket.org/2.0/repositories/seanfarley/hg/refs/tags/3.8"
    },
    "html": {
      "href": "https://bitbucket.org/seanfarley/hg/commits/tag/3.8"
    }
  },
  "tagger": {
    "raw": "Matt Mackall <mpm@selenic.com>",
    "type": "author",
    "user": {
      "username": "mpmselenic",
      "nickname": "mpmselenic",
      "display_name": "Matt Mackall",
      "type": "user",
      "uuid": "{a4934530-db4c-419c-a478-9ab4964c2ee7}",
      "links": {
        "self": {
          "href": "https://api.bitbucket.org/2.0/users/mpmselenic"
        },
        "html": {
          "href": "https://bitbucket.org/mpmselenic/"
        },
        "avatar": {
          "href": "https://bitbucket.org/account/mpmselenic/avatar/32/"
        }
      }
    }
  },
  "date": "2016-05-01T18:52:25+00:00",
  "message": "Added tag 3.8 for changeset f85de28eae32",
  "type": "tag",
  "target": {
    "hash": "f85de28eae32e7d3064b1a1321309071bbaaa069",
    "repository": {
      "links": {
        "self": {
          "href": "https://api.bitbucket.org/2.0/repositories/seanfarley/hg"
        },
        "html": {
          "href": "https://bitbucket.org/seanfarley/hg"
        },
        "avatar": {
          "href": "https://bitbucket.org/seanfarley/hg/avatar/32/"
        }
      },
      "type": "repository",
      "name": "hg",
      "full_name": "seanfarley/hg",
      "uuid": "{c75687fb-e99d-4579-9087-190dbd406d30}"
    },
    "links": {
      "self": {
        "href": "https://api.bitbucket.org/2.0/repositories/seanfarley/hg/commit/f85de28eae32e7d3064b1a1321309071bbaaa069"
      },
      "comments": {
        "href": "https://api.bitbucket.org/2.0/repositories/seanfarley/hg/commit/f85de28eae32e7d3064b1a1321309071bbaaa069/comments"
      },
      "patch": {
        "href": "https://api.bitbucket.org/2.0/repositories/seanfarley/hg/patch/f85de28eae32e7d3064b1a1321309071bbaaa069"
      },
      "html": {
        "href": "https://bitbucket.org/seanfarley/hg/commits/f85de28eae32e7d3064b1a1321309071bbaaa069"
      },
      "diff": {
        "href": "https://api.bitbucket.org/2.0/repositories/seanfarley/hg/diff/f85de28eae32e7d3064b1a1321309071bbaaa069"
      },
      "approve": {
        "href": "https://api.bitbucket.org/2.0/repositories/seanfarley/hg/commit/f85de28eae32e7d3064b1a1321309071bbaaa069/approve"
      },
      "statuses": {
        "href": "https://api.bitbucket.org/2.0/repositories/seanfarley/hg/commit/f85de28eae32e7d3064b1a1321309071bbaaa069/statuses"
      }
    },
    "author": {
      "raw": "Sean Farley <sean@farley.io>",
      "type": "author",
      "user": {
        "username": "seanfarley",
        "nickname": "seanfarley",
        "display_name": "Sean Farley",
        "type": "user",
        "uuid": "{a295f8a8-5876-4d43-89b5-3ad8c6c3c51d}",
        "links": {
          "self": {
            "href": "https://api.bitbucket.org/2.0/users/seanfarley"
          },
          "html": {
            "href": "https://bitbucket.org/seanfarley/"
          },
          "avatar": {
            "href": "https://bitbucket.org/account/seanfarley/avatar/32/"
          }
        }
      }
    },
    "parents": [
      {
        "hash": "9a98d0e5b07fc60887f9d3d34d9ac7d536f470d2",
        "type": "commit",
        "links": {
          "self": {
            "href": "https://api.bitbucket.org/2.0/repositories/seanfarley/hg/commit/9a98d0e5b07fc60887f9d3d34d9ac7d536f470d2"
          },
          "html": {
            "href": "https://bitbucket.org/seanfarley/hg/commits/9a98d0e5b07fc60887f9d3d34d9ac7d536f470d2"
          }
        }
      }
    ],
    "date": "2016-05-01T04:21:17+00:00",
    "message": "debian: alphabetize build deps",
    "type": "commit"
  }
}
```
  GetRepositoriesWorkspaceRepoSlugRefsTagsName(
    req: operations.GetRepositoriesWorkspaceRepoSlugRefsTagsNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRepositoriesWorkspaceRepoSlugRefsTagsNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRepositoriesWorkspaceRepoSlugRefsTagsNameRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/refs/tags/{name}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRepositoriesWorkspaceRepoSlugRefsTagsNameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.tag = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRepositoriesWorkspaceRepoSlugSrc - This endpoint redirects the client to the directory listing of the
root directory on the main branch.

This is equivalent to directly hitting
[/2.0/repositories/{username}/{repo_slug}/src/{commit}/{path}](src/%7Bcommit%7D/%7Bpath%7D)
without having to know the name or SHA1 of the repo's main branch.

To create new commits, [POST to this endpoint](#post)
  GetRepositoriesWorkspaceRepoSlugSrc(
    req: operations.GetRepositoriesWorkspaceRepoSlugSrcRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRepositoriesWorkspaceRepoSlugSrcResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRepositoriesWorkspaceRepoSlugSrcRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/src", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
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
        let res: operations.GetRepositoriesWorkspaceRepoSlugSrcResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.paginatedTreeentries = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRepositoriesWorkspaceRepoSlugSrcCommitPath - This endpoints is used to retrieve the contents of a single file,
or the contents of a directory at a specified revision.

## Raw file contents

When `path` points to a file, this endpoint returns the raw contents.
The response's Content-Type is derived from the filename
extension (not from the contents). The file contents are not processed
and no character encoding/recoding is performed and as a result no
character encoding is included as part of the Content-Type.

The `Content-Disposition` header will be "attachment" to prevent
browsers from running executable files.

If the file is managed by LFS, then a 301 redirect pointing to
Atlassian's media services platform is returned.

The response includes an ETag that is based on the contents of the file
and its attributes. This means that an empty `__init__.py` always
returns the same ETag, regardless on the directory it lives in, or the
commit it is on.

## File meta data

When the request for a file path includes the query parameter
`?format=meta`, instead of returning the file's raw contents, Bitbucket
instead returns the JSON object describing the file's properties:

```javascript
$ curl https://api.bitbucket.org/2.0/repositories/atlassian/bbql/src/eefd5ef/tests/__init__.py?format=meta
{
  "links": {
    "self": {
      "href": "https://api.bitbucket.org/2.0/repositories/atlassian/bbql/src/eefd5ef5d3df01aed629f650959d6706d54cd335/tests/__init__.py"
    },
    "meta": {
      "href": "https://api.bitbucket.org/2.0/repositories/atlassian/bbql/src/eefd5ef5d3df01aed629f650959d6706d54cd335/tests/__init__.py?format=meta"
    }
  },
  "path": "tests/__init__.py",
  "commit": {
    "type": "commit",
    "hash": "eefd5ef5d3df01aed629f650959d6706d54cd335",
    "links": {
      "self": {
        "href": "https://api.bitbucket.org/2.0/repositories/atlassian/bbql/commit/eefd5ef5d3df01aed629f650959d6706d54cd335"
      },
      "html": {
        "href": "https://bitbucket.org/atlassian/bbql/commits/eefd5ef5d3df01aed629f650959d6706d54cd335"
      }
    }
  },
  "attributes": [],
  "type": "commit_file",
  "size": 0
}
```

File objects contain an `attributes` element that contains a list of
possible modifiers. Currently defined values are:

* `link` -- indicates that the entry is a symbolic link. The contents
    of the file represent the path the link points to.
* `executable` -- indicates that the file has the executable bit set.
* `subrepository` -- indicates that the entry points to a submodule or
    subrepo. The contents of the file is the SHA1 of the repository
    pointed to.
* `binary` -- indicates whether Bitbucket thinks the file is binary.

This endpoint can provide an alternative to how a HEAD request can be
used to check for the existence of a file, or a file's size without
incurring the overhead of receiving its full contents.


## Directory listings

When `path` points to a directory instead of a file, the response is a
paginated list of directory and file objects in the same order as the
underlying SCM system would return them.

For example:

```javascript
$ curl https://api.bitbucket.org/2.0/repositories/atlassian/bbql/src/eefd5ef/tests
{
  "pagelen": 10,
  "values": [
    {
      "path": "tests/test_project",
      "type": "commit_directory",
      "links": {
        "self": {
          "href": "https://api.bitbucket.org/2.0/repositories/atlassian/bbql/src/eefd5ef5d3df01aed629f650959d6706d54cd335/tests/test_project/"
        },
        "meta": {
          "href": "https://api.bitbucket.org/2.0/repositories/atlassian/bbql/src/eefd5ef5d3df01aed629f650959d6706d54cd335/tests/test_project/?format=meta"
        }
      },
      "commit": {
        "type": "commit",
        "hash": "eefd5ef5d3df01aed629f650959d6706d54cd335",
        "links": {
          "self": {
            "href": "https://api.bitbucket.org/2.0/repositories/atlassian/bbql/commit/eefd5ef5d3df01aed629f650959d6706d54cd335"
          },
          "html": {
            "href": "https://bitbucket.org/atlassian/bbql/commits/eefd5ef5d3df01aed629f650959d6706d54cd335"
          }
        }
      }
    },
    {
      "links": {
        "self": {
          "href": "https://api.bitbucket.org/2.0/repositories/atlassian/bbql/src/eefd5ef5d3df01aed629f650959d6706d54cd335/tests/__init__.py"
        },
        "meta": {
          "href": "https://api.bitbucket.org/2.0/repositories/atlassian/bbql/src/eefd5ef5d3df01aed629f650959d6706d54cd335/tests/__init__.py?format=meta"
        }
      },
      "path": "tests/__init__.py",
      "commit": {
        "type": "commit",
        "hash": "eefd5ef5d3df01aed629f650959d6706d54cd335",
        "links": {
          "self": {
            "href": "https://api.bitbucket.org/2.0/repositories/atlassian/bbql/commit/eefd5ef5d3df01aed629f650959d6706d54cd335"
          },
          "html": {
            "href": "https://bitbucket.org/atlassian/bbql/commits/eefd5ef5d3df01aed629f650959d6706d54cd335"
          }
        }
      },
      "attributes": [],
      "type": "commit_file",
      "size": 0
    }
  ],
  "page": 1,
  "size": 2
}
```

When listing the contents of the repo's root directory, the use of a
trailing slash at the end of the URL is required.

The response by default is not recursive, meaning that only the direct contents of
a path are returned. The response does not recurse down into
subdirectories. In order to "walk" the entire directory tree, the
client can either parse each response and follow the `self` links of each
`commit_directory` object, or can specify a `max_depth` to recurse to.

The max_depth parameter will do a breadth-first search to return the contents of the subdirectories
up to the depth specified. Breadth-first search was chosen as it leads to the least amount of
file system operations for git. If the `max_depth` parameter is specified to be too
large, the call will time out and return a 555.

Each returned object is either a `commit_file`, or a `commit_directory`,
both of which contain a `path` element. This path is the absolute path
from the root of the repository. Each object also contains a `commit`
object which embeds the commit the file is on. Note that this is merely
the commit that was used in the URL. It is *not* the commit that last
modified the file.

Directory objects have 2 representations. Their `self` link returns the
paginated contents of the directory. The `meta` link on the other hand
returns the actual `directory` object itself, e.g.:

```javascript
{
  "path": "tests/test_project",
  "type": "commit_directory",
  "links": {
    "self": {
      "href": "https://api.bitbucket.org/2.0/repositories/atlassian/bbql/src/eefd5ef5d3df01aed629f650959d6706d54cd335/tests/test_project/"
    },
    "meta": {
      "href": "https://api.bitbucket.org/2.0/repositories/atlassian/bbql/src/eefd5ef5d3df01aed629f650959d6706d54cd335/tests/test_project/?format=meta"
    }
  },
  "commit": { ... }
}
```

## Querying, filtering and sorting

Like most API endpoints, this API supports the Bitbucket
querying/filtering syntax and so you could filter a directory listing
to only include entries that match certain criteria. For instance, to
list all binary files over 1kb use the expression:

`size > 1024 and attributes = "binary"`

which after urlencoding yields the query string:

`?q=size%3E1024+and+attributes%3D%22binary%22`

To change the ordering of the response, use the `?sort` parameter:

`.../src/eefd5ef/?sort=-size`

See [filtering and sorting](../../../../../../meta/filtering) for more
details.
  GetRepositoriesWorkspaceRepoSlugSrcCommitPath(
    req: operations.GetRepositoriesWorkspaceRepoSlugSrcCommitPathRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRepositoriesWorkspaceRepoSlugSrcCommitPathResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRepositoriesWorkspaceRepoSlugSrcCommitPathRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/src/{commit}/{path}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
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
        let res: operations.GetRepositoriesWorkspaceRepoSlugSrcCommitPathResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.paginatedTreeentries = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 555:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRepositoriesWorkspaceRepoSlugVersions - Returns the versions that have been defined in the issue tracker.

This resource is only available on repositories that have the issue
tracker enabled.
  GetRepositoriesWorkspaceRepoSlugVersions(
    req: operations.GetRepositoriesWorkspaceRepoSlugVersionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRepositoriesWorkspaceRepoSlugVersionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRepositoriesWorkspaceRepoSlugVersionsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/versions", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRepositoriesWorkspaceRepoSlugVersionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.paginatedVersions = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRepositoriesWorkspaceRepoSlugVersionsVersionId - Returns the specified issue tracker version object.
  GetRepositoriesWorkspaceRepoSlugVersionsVersionId(
    req: operations.GetRepositoriesWorkspaceRepoSlugVersionsVersionIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRepositoriesWorkspaceRepoSlugVersionsVersionIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRepositoriesWorkspaceRepoSlugVersionsVersionIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/versions/{version_id}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRepositoriesWorkspaceRepoSlugVersionsVersionIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.version = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRepositoriesWorkspaceRepoSlugWatchers - Returns a paginated list of all the watchers on the specified
repository.
  GetRepositoriesWorkspaceRepoSlugWatchers(
    req: operations.GetRepositoriesWorkspaceRepoSlugWatchersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRepositoriesWorkspaceRepoSlugWatchersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRepositoriesWorkspaceRepoSlugWatchersRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/watchers", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRepositoriesWorkspaceRepoSlugWatchersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSnippets - Returns all snippets. Like pull requests, repositories and workspaces, the
full set of snippets is defined by what the current user has access to.

This includes all snippets owned by any of the workspaces the user is a member of,
or snippets by other users that the current user is either watching or has collaborated
on (for instance by commenting on it).

To limit the set of returned snippets, apply the
`?role=[owner|contributor|member]` query parameter where the roles are
defined as follows:

* `owner`: all snippets owned by the current user
* `contributor`: all snippets owned by, or watched by the current user
* `member`: created in a workspaces or watched by the current user

When no role is specified, all public snippets are returned, as well as all
privately owned snippets watched or commented on.

The returned response is a normal paginated JSON list. This endpoint
only supports `application/json` responses and no
`multipart/form-data` or `multipart/related`. As a result, it is not
possible to include the file contents.
  GetSnippets(
    req: operations.GetSnippetsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSnippetsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSnippetsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/snippets";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
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
        let res: operations.GetSnippetsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.paginatedSnippets = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSnippetsWorkspace - Identical to [`/snippets`](../snippets), except that the result is further filtered
by the snippet owner and only those that are owned by `{workspace}` are
returned.
  GetSnippetsWorkspace(
    req: operations.GetSnippetsWorkspaceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSnippetsWorkspaceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSnippetsWorkspaceRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/snippets/{workspace}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
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
        let res: operations.GetSnippetsWorkspaceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.paginatedSnippets = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSnippetsWorkspaceEncodedId - Retrieves a single snippet.

Snippets support multiple content types:

* application/json
* multipart/related
* multipart/form-data


application/json
----------------

The default content type of the response is `application/json`.
Since JSON is always `utf-8`, it cannot reliably contain file contents
for files that are not text. Therefore, JSON snippet documents only
contain the filename and links to the file contents.

This means that in order to retrieve all parts of a snippet, N+1
requests need to be made (where N is the number of files in the
snippet).


multipart/related
-----------------

To retrieve an entire snippet in a single response, use the
`Accept: multipart/related` HTTP request header.

    $ curl -H "Accept: multipart/related" https://api.bitbucket.org/2.0/snippets/evzijst/1

Response:

    HTTP/1.1 200 OK
    Content-Length: 2214
    Content-Type: multipart/related; start="snippet"; boundary="===============1438169132528273974=="
    MIME-Version: 1.0

    --===============1438169132528273974==
    Content-Type: application/json; charset="utf-8"
    MIME-Version: 1.0
    Content-ID: snippet

    {
      "links": {
        "self": {
          "href": "https://api.bitbucket.org/2.0/snippets/evzijst/kypj"
        },
        "html": {
          "href": "https://bitbucket.org/snippets/evzijst/kypj"
        },
        "comments": {
          "href": "https://api.bitbucket.org/2.0/snippets/evzijst/kypj/comments"
        },
        "watchers": {
          "href": "https://api.bitbucket.org/2.0/snippets/evzijst/kypj/watchers"
        },
        "commits": {
          "href": "https://api.bitbucket.org/2.0/snippets/evzijst/kypj/commits"
        }
      },
      "id": kypj,
      "title": "My snippet",
      "created_on": "2014-12-29T22:22:04.790331+00:00",
      "updated_on": "2014-12-29T22:22:04.790331+00:00",
      "is_private": false,
      "files": {
        "foo.txt": {
          "links": {
            "self": {
              "href": "https://api.bitbucket.org/2.0/snippets/evzijst/kypj/files/367ab19/foo.txt"
            },
            "html": {
              "href": "https://bitbucket.org/snippets/evzijst/kypj#file-foo.txt"
            }
          }
        },
        "image.png": {
          "links": {
            "self": {
              "href": "https://api.bitbucket.org/2.0/snippets/evzijst/kypj/files/367ab19/image.png"
            },
            "html": {
              "href": "https://bitbucket.org/snippets/evzijst/kypj#file-image.png"
            }
          }
        }
      ],
      "owner": {
        "username": "evzijst",
        "nickname": "evzijst",
        "display_name": "Erik van Zijst",
        "uuid": "{d301aafa-d676-4ee0-88be-962be7417567}",
        "links": {
          "self": {
            "href": "https://api.bitbucket.org/2.0/users/evzijst"
          },
          "html": {
            "href": "https://bitbucket.org/evzijst"
          },
          "avatar": {
            "href": "https://bitbucket-staging-assetroot.s3.amazonaws.com/c/photos/2013/Jul/31/erik-avatar-725122544-0_avatar.png"
          }
        }
      },
      "creator": {
        "username": "evzijst",
        "nickname": "evzijst",
        "display_name": "Erik van Zijst",
        "uuid": "{d301aafa-d676-4ee0-88be-962be7417567}",
        "links": {
          "self": {
            "href": "https://api.bitbucket.org/2.0/users/evzijst"
          },
          "html": {
            "href": "https://bitbucket.org/evzijst"
          },
          "avatar": {
            "href": "https://bitbucket-staging-assetroot.s3.amazonaws.com/c/photos/2013/Jul/31/erik-avatar-725122544-0_avatar.png"
          }
        }
      }
    }

    --===============1438169132528273974==
    Content-Type: text/plain; charset="us-ascii"
    MIME-Version: 1.0
    Content-Transfer-Encoding: 7bit
    Content-ID: "foo.txt"
    Content-Disposition: attachment; filename="foo.txt"

    foo

    --===============1438169132528273974==
    Content-Type: image/png
    MIME-Version: 1.0
    Content-Transfer-Encoding: base64
    Content-ID: "image.png"
    Content-Disposition: attachment; filename="image.png"

    iVBORw0KGgoAAAANSUhEUgAAABQAAAAoCAYAAAD+MdrbAAABD0lEQVR4Ae3VMUoDQRTG8ccUaW2m
    TKONFxArJYJamCvkCnZTaa+VnQdJSBFl2SMsLFrEWNjZBZs0JgiL/+KrhhVmJRbCLPx4O+/DT2TB
    cbblJxf+UWFVVRNsEGAtgvJxnLm2H+A5RQ93uIl+3632PZyl/skjfOn9Gvdwmlcw5aPUwimG+NT5
    EnNN036IaZePUuIcK533NVfal7/5yjWeot2z9ta1cAczHEf7I+3J0ws9Cgx0fsOFpmlfwKcWPuBQ
    73Oc4FHzBaZ8llq4q1mr5B2mOUCt815qYR8eB1hG2VJ7j35q4RofaH7IG+Xrf/PfJhfmwtfFYoIN
    AqxFUD6OMxcvkO+UfKfkOyXfKdsv/AYCHMLVkHAFWgAAAABJRU5ErkJggg==
    --===============1438169132528273974==--

multipart/form-data
-------------------

As with creating new snippets, `multipart/form-data` can be used as an
alternative to `multipart/related`. However, the inherently flat
structure of form-data means that only basic, root-level properties
can be returned, while nested elements like `links` are omitted:

    $ curl -H "Accept: multipart/form-data" https://api.bitbucket.org/2.0/snippets/evzijst/kypj

Response:

    HTTP/1.1 200 OK
    Content-Length: 951
    Content-Type: multipart/form-data; boundary=----------------------------63a4b224c59f

    ------------------------------63a4b224c59f
    Content-Disposition: form-data; name="title"
    Content-Type: text/plain; charset="utf-8"

    My snippet
    ------------------------------63a4b224c59f--
    Content-Disposition: attachment; name="file"; filename="foo.txt"
    Content-Type: text/plain

    foo

    ------------------------------63a4b224c59f
    Content-Disposition: attachment; name="file"; filename="image.png"
    Content-Transfer-Encoding: base64
    Content-Type: application/octet-stream

    iVBORw0KGgoAAAANSUhEUgAAABQAAAAoCAYAAAD+MdrbAAABD0lEQVR4Ae3VMUoDQRTG8ccUaW2m
    TKONFxArJYJamCvkCnZTaa+VnQdJSBFl2SMsLFrEWNjZBZs0JgiL/+KrhhVmJRbCLPx4O+/DT2TB
    cbblJxf+UWFVVRNsEGAtgvJxnLm2H+A5RQ93uIl+3632PZyl/skjfOn9Gvdwmlcw5aPUwimG+NT5
    EnNN036IaZePUuIcK533NVfal7/5yjWeot2z9ta1cAczHEf7I+3J0ws9Cgx0fsOFpmlfwKcWPuBQ
    73Oc4FHzBaZ8llq4q1mr5B2mOUCt815qYR8eB1hG2VJ7j35q4RofaH7IG+Xrf/PfJhfmwtfFYoIN
    AqxFUD6OMxcvkO+UfKfkOyXfKdsv/AYCHMLVkHAFWgAAAABJRU5ErkJggg==
    ------------------------------5957323a6b76--
  GetSnippetsWorkspaceEncodedId(
    req: operations.GetSnippetsWorkspaceEncodedIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSnippetsWorkspaceEncodedIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSnippetsWorkspaceEncodedIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/snippets/{workspace}/{encoded_id}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetSnippetsWorkspaceEncodedIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.snippet = httpRes?.data;
            }
            if (MatchContentType(contentType, `multipart/form-data`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `multipart/related`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `multipart/form-data`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `multipart/related`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `multipart/form-data`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `multipart/related`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `multipart/form-data`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `multipart/related`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 410:
            if (MatchContentType(contentType, `multipart/form-data`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `multipart/related`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSnippetsWorkspaceEncodedIdComments - Used to retrieve a paginated list of all comments for a specific
snippet.

This resource works identical to commit and pull request comments.

The default sorting is oldest to newest and can be overridden with
the `sort` query parameter.
  GetSnippetsWorkspaceEncodedIdComments(
    req: operations.GetSnippetsWorkspaceEncodedIdCommentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSnippetsWorkspaceEncodedIdCommentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSnippetsWorkspaceEncodedIdCommentsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/snippets/{workspace}/{encoded_id}/comments", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetSnippetsWorkspaceEncodedIdCommentsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.paginatedSnippetComments = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSnippetsWorkspaceEncodedIdCommentsCommentId - Returns the specific snippet comment.
  GetSnippetsWorkspaceEncodedIdCommentsCommentId(
    req: operations.GetSnippetsWorkspaceEncodedIdCommentsCommentIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSnippetsWorkspaceEncodedIdCommentsCommentIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSnippetsWorkspaceEncodedIdCommentsCommentIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/snippets/{workspace}/{encoded_id}/comments/{comment_id}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetSnippetsWorkspaceEncodedIdCommentsCommentIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.snippetComment = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSnippetsWorkspaceEncodedIdCommits - Returns the changes (commits) made on this snippet.
  GetSnippetsWorkspaceEncodedIdCommits(
    req: operations.GetSnippetsWorkspaceEncodedIdCommitsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSnippetsWorkspaceEncodedIdCommitsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSnippetsWorkspaceEncodedIdCommitsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/snippets/{workspace}/{encoded_id}/commits", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetSnippetsWorkspaceEncodedIdCommitsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.paginatedSnippetCommit = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSnippetsWorkspaceEncodedIdCommitsRevision - Returns the changes made on this snippet in this commit.
  GetSnippetsWorkspaceEncodedIdCommitsRevision(
    req: operations.GetSnippetsWorkspaceEncodedIdCommitsRevisionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSnippetsWorkspaceEncodedIdCommitsRevisionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSnippetsWorkspaceEncodedIdCommitsRevisionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/snippets/{workspace}/{encoded_id}/commits/{revision}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetSnippetsWorkspaceEncodedIdCommitsRevisionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.snippetCommit = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSnippetsWorkspaceEncodedIdFilesPath - Convenience resource for getting to a snippet's raw files without the
need for first having to retrieve the snippet itself and having to pull
out the versioned file links.
  GetSnippetsWorkspaceEncodedIdFilesPath(
    req: operations.GetSnippetsWorkspaceEncodedIdFilesPathRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSnippetsWorkspaceEncodedIdFilesPathResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSnippetsWorkspaceEncodedIdFilesPathRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/snippets/{workspace}/{encoded_id}/files/{path}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetSnippetsWorkspaceEncodedIdFilesPathResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 302:
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSnippetsWorkspaceEncodedIdNodeId - Identical to `GET /snippets/encoded_id`, except that this endpoint
can be used to retrieve the contents of the snippet as it was at an
older revision, while `/snippets/encoded_id` always returns the
snippet's current revision.

Note that only the snippet's file contents are versioned, not its
meta data properties like the title.

Other than that, the two endpoints are identical in behavior.
  GetSnippetsWorkspaceEncodedIdNodeId(
    req: operations.GetSnippetsWorkspaceEncodedIdNodeIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSnippetsWorkspaceEncodedIdNodeIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSnippetsWorkspaceEncodedIdNodeIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/snippets/{workspace}/{encoded_id}/{node_id}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetSnippetsWorkspaceEncodedIdNodeIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.snippet = httpRes?.data;
            }
            if (MatchContentType(contentType, `multipart/form-data`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `multipart/related`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `multipart/form-data`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `multipart/related`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `multipart/form-data`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `multipart/related`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `multipart/form-data`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `multipart/related`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSnippetsWorkspaceEncodedIdNodeIdFilesPath - Retrieves the raw contents of a specific file in the snippet. The
`Content-Disposition` header will be "attachment" to avoid issues with
malevolent executable files.

The file's mime type is derived from its filename and returned in the
`Content-Type` header.

Note that for text files, no character encoding is included as part of
the content type.
  GetSnippetsWorkspaceEncodedIdNodeIdFilesPath(
    req: operations.GetSnippetsWorkspaceEncodedIdNodeIdFilesPathRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSnippetsWorkspaceEncodedIdNodeIdFilesPathResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSnippetsWorkspaceEncodedIdNodeIdFilesPathRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/snippets/{workspace}/{encoded_id}/{node_id}/files/{path}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetSnippetsWorkspaceEncodedIdNodeIdFilesPathResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSnippetsWorkspaceEncodedIdRevisionDiff - Returns the diff of the specified commit against its first parent.

Note that this resource is different in functionality from the `patch`
resource.

The differences between a diff and a patch are:

* patches have a commit header with the username, message, etc
* diffs support the optional `path=foo/bar.py` query param to filter the
  diff to just that one file diff (not supported for patches)
* for a merge, the diff will show the diff between the merge commit and
  its first parent (identical to how PRs work), while patch returns a
  response containing separate patches for each commit on the second
  parent's ancestry, up to the oldest common ancestor (identical to
  its reachability).

Note that the character encoding of the contents of the diff is
unspecified as Git does not track this, making it hard for
Bitbucket to reliably determine this.
  GetSnippetsWorkspaceEncodedIdRevisionDiff(
    req: operations.GetSnippetsWorkspaceEncodedIdRevisionDiffRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSnippetsWorkspaceEncodedIdRevisionDiffResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSnippetsWorkspaceEncodedIdRevisionDiffRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/snippets/{workspace}/{encoded_id}/{revision}/diff", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
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
        let res: operations.GetSnippetsWorkspaceEncodedIdRevisionDiffResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSnippetsWorkspaceEncodedIdRevisionPatch - Returns the patch of the specified commit against its first
parent.

Note that this resource is different in functionality from the `diff`
resource.

The differences between a diff and a patch are:

* patches have a commit header with the username, message, etc
* diffs support the optional `path=foo/bar.py` query param to filter the
  diff to just that one file diff (not supported for patches)
* for a merge, the diff will show the diff between the merge commit and
  its first parent (identical to how PRs work), while patch returns a
  response containing separate patches for each commit on the second
  parent's ancestry, up to the oldest common ancestor (identical to
  its reachability).

Note that the character encoding of the contents of the patch is
unspecified as Git does not track this, making it hard for
Bitbucket to reliably determine this.
  GetSnippetsWorkspaceEncodedIdRevisionPatch(
    req: operations.GetSnippetsWorkspaceEncodedIdRevisionPatchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSnippetsWorkspaceEncodedIdRevisionPatchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSnippetsWorkspaceEncodedIdRevisionPatchRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/snippets/{workspace}/{encoded_id}/{revision}/patch", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetSnippetsWorkspaceEncodedIdRevisionPatchResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSnippetsWorkspaceEncodedIdWatch - Used to check if the current user is watching a specific snippet.

Returns 204 (No Content) if the user is watching the snippet and 404 if
not.

Hitting this endpoint anonymously always returns a 404.
  GetSnippetsWorkspaceEncodedIdWatch(
    req: operations.GetSnippetsWorkspaceEncodedIdWatchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSnippetsWorkspaceEncodedIdWatchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSnippetsWorkspaceEncodedIdWatchRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/snippets/{workspace}/{encoded_id}/watch", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetSnippetsWorkspaceEncodedIdWatchResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            if (MatchContentType(contentType, `application/json`)) {
                res.paginatedUsers = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSnippetsWorkspaceEncodedIdWatchers - Returns a paginated list of all users watching a specific snippet.
  GetSnippetsWorkspaceEncodedIdWatchers(
    req: operations.GetSnippetsWorkspaceEncodedIdWatchersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSnippetsWorkspaceEncodedIdWatchersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSnippetsWorkspaceEncodedIdWatchersRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/snippets/{workspace}/{encoded_id}/watchers", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetSnippetsWorkspaceEncodedIdWatchersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.paginatedUsers = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetTeams - Returns all the teams that the authenticated user is associated
with.

**This endpoint has been deprecated,
and you should use the [workspaces](./workspaces) endpoint.
For more information, see [this post](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
  GetTeams(
    req: operations.GetTeamsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTeamsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTeamsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/teams";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
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
        let res: operations.GetTeamsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.paginatedTeams = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetTeamsUsername - Gets the public information associated with a team.

If the team's profile is private, `location`, `website` and
`created_on` elements are omitted.

**This endpoint has been deprecated,
and you should use the [workspace](../workspaces/%7Bworkspace%7D) endpoint.
For more information, see [this post](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
  GetTeamsUsername(
    req: operations.GetTeamsUsernameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTeamsUsernameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTeamsUsernameRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/teams/{username}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetTeamsUsernameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.team = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetTeamsUsernameFollowers - Returns the list of accounts that are following this team.

**This endpoint has been deprecated. There is no workspaces replacement.
For more information, see [this post](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
  GetTeamsUsernameFollowers(
    req: operations.GetTeamsUsernameFollowersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTeamsUsernameFollowersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTeamsUsernameFollowersRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/teams/{username}/followers", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetTeamsUsernameFollowersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.paginatedUsers = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetTeamsUsernameFollowing - Returns the list of accounts this team is following.

**This endpoint has been deprecated. There is no workspaces replacement.
For more information, see [this post](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
  GetTeamsUsernameFollowing(
    req: operations.GetTeamsUsernameFollowingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTeamsUsernameFollowingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTeamsUsernameFollowingRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/teams/{username}/following", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetTeamsUsernameFollowingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.paginatedUsers = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetTeamsUsernameHooks - Returns a paginated list of webhooks installed on this team.

**This endpoint has been deprecated, and you should
use the new [workspace hooks](../../workspaces/%7Bworkspace%7D/hooks#get) endpoint.
For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
  GetTeamsUsernameHooks(
    req: operations.GetTeamsUsernameHooksRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTeamsUsernameHooksResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTeamsUsernameHooksRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/teams/{username}/hooks", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetTeamsUsernameHooksResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.paginatedWebhookSubscriptions = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetTeamsUsernameHooksUid - Returns the webhook with the specified id installed on the given
team account.

**This endpoint has been deprecated, and you should
use the new [workspace hooks](../../../workspaces/%7Bworkspace%7D/hooks/%7Buid%7D#get) endpoint.
For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
  GetTeamsUsernameHooksUid(
    req: operations.GetTeamsUsernameHooksUidRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTeamsUsernameHooksUidResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTeamsUsernameHooksUidRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/teams/{username}/hooks/{uid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetTeamsUsernameHooksUidResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.webhookSubscription = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetTeamsUsernameMembers - Returns all members of the specified team. Any member of any of the
team's groups is considered a member of the team. This includes users
in groups that may not actually have access to any of the team's
repositories.

**This operation has been deprecated due to privacy changes.
See the [announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-changes-gdpr/)
for details.
You should this [workspaces](../../workspaces/%7Bworkspace%7D/members) endpoint as a replacement.**
  GetTeamsUsernameMembers(
    req: operations.GetTeamsUsernameMembersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTeamsUsernameMembersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTeamsUsernameMembersRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/teams/{username}/members", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetTeamsUsernameMembersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.user = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetTeamsUsernamePermissions - Returns an object for each team permission a user on the team has.

**This endpoint has been deprecated,
and you should use the [workspace permissions](../../workspaces/%7Bworkspace%7D/permissions) endpoint.
For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**

Permissions returned are effective permissions — if a user is a member of
multiple groups with distinct roles, only the highest level is returned.

Permissions can be:

* `admin`
* `collaborator`

Only users with admin permission for the team may access this resource.

Example:

```
$ curl https://api.bitbucket.org/2.0/teams/atlassian_tutorial/permissions

{
  "pagelen": 10,
  "values": [
    {
      "permission": "admin",
      "type": "team_permission",
      "user": {
        "type": "user",
        "nickname": "evzijst",
        "display_name": "Erik van Zijst",
        "uuid": "{d301aafa-d676-4ee0-88be-962be7417567}"
      },
      "team": {
        "display_name": "Atlassian Bitbucket",
        "uuid": "{4cc6108a-a241-4db0-96a5-64347ac04f87}"
      }
    },
    {
      "permission": "collaborator",
      "type": "team_permission",
      "user": {
        "type": "user",
        "nickname": "seanaty",
        "display_name": "Sean Conaty",
        "uuid": "{504c3b62-8120-4f0c-a7bc-87800b9d6f70}"
      },
      "team": {
        "display_name": "Atlassian Bitbucket",
        "uuid": "{4cc6108a-a241-4db0-96a5-64347ac04f87}"
      }
    }
  ],
  "page": 1,
  "size": 2
}
```

Results may be further [filtered or sorted](../../../meta/filtering) by
team, user, or permission by adding the following query string
parameters:

* `q=user.uuid="{d301aafa-d676-4ee0-88be-962be7417567}"` or `q=permission="admin"`
* `sort=team.display_name`

Note that the query parameter values need to be URL escaped so that `=`
would become `%3D`.
  GetTeamsUsernamePermissions(
    req: operations.GetTeamsUsernamePermissionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTeamsUsernamePermissionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTeamsUsernamePermissionsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/teams/{username}/permissions", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
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
        let res: operations.GetTeamsUsernamePermissionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.paginatedTeamPermissions = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetTeamsUsernamePermissionsRepositories - Returns an object for each repository permission for all of a
team’s repositories.

**This endpoint has been deprecated,
and you should use the [workspace repository permissions](../../../workspaces/%7Bworkspace%7D/permissions/repositories) endpoint.
For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**

If the username URL parameter refers to a user account instead of
a team account, an object containing the repository permissions
of all the username's repositories will be returned.

Permissions returned are effective permissions — the highest level of
permission the user has. This does not include public repositories that
users are not granted any specific permission in, and does not
distinguish between direct and indirect privileges.

Only users with admin permission for the team may access this resource.

Permissions can be:

* `admin`
* `write`
* `read`

Example:

```
$ curl https://api.bitbucket.org/2.0/teams/atlassian_tutorial/permissions/repositories

{
  "pagelen": 10,
  "values": [
    {
      "type": "repository_permission",
      "user": {
        "type": "user",
        "display_name": "Erik van Zijst",
        "uuid": "{d301aafa-d676-4ee0-88be-962be7417567}"
      },
      "repository": {
        "type": "repository",
        "name": "geordi",
        "full_name": "bitbucket/geordi",
        "uuid": "{85d08b4e-571d-44e9-a507-fa476535aa98}"
      },
      "permission": "admin"
    },
    {
      "type": "repository_permission",
      "user": {
        "type": "user",
        "display_name": "Sean Conaty",
        "uuid": "{504c3b62-8120-4f0c-a7bc-87800b9d6f70}"
      },
      "repository": {
        "type": "repository",
        "name": "geordi",
        "full_name": "bitbucket/geordi",
        "uuid": "{85d08b4e-571d-44e9-a507-fa476535aa98}"
      },
      "permission": "write"
    }
  ],
  "page": 1,
  "size": 2
}
```

Results may be further [filtered or sorted](../../../../meta/filtering)
by repository, user, or permission by adding the following query string
parameters:

* `q=repository.name="geordi"` or `q=permission>"read"`
* `sort=user.display_name`

Note that the query parameter values need to be URL escaped so that `=`
would become `%3D`.
  GetTeamsUsernamePermissionsRepositories(
    req: operations.GetTeamsUsernamePermissionsRepositoriesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTeamsUsernamePermissionsRepositoriesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTeamsUsernamePermissionsRepositoriesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/teams/{username}/permissions/repositories", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
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
        let res: operations.GetTeamsUsernamePermissionsRepositoriesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.paginatedRepositoryPermissions = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetTeamsUsernamePermissionsRepositoriesRepoSlug - Returns an object for each repository permission of a given repository.

**This endpoint has been deprecated,
and you should use the [workspace repository permissions](../../../../workspaces/%7Bworkspace%7D/permissions/repositories/%7Brepo_slug%7D) endpoint.
For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**

If the username URL parameter refers to a user account instead of
a team account, an object containing the repository permissions
of the username's repository will be returned.

Permissions returned are effective permissions — the highest level of
permission the user has. This does not include public repositories that
users are not granted any specific permission in, and does not
distinguish between direct and indirect privileges.

Only users with admin permission for the repository may access this resource.

Permissions can be:

* `admin`
* `write`
* `read`

Example:

```
$ curl https://api.bitbucket.org/2.0/teams/atlassian_tutorial/permissions/repositories/geordi

{
  "pagelen": 10,
  "values": [
    {
      "type": "repository_permission",
      "user": {
        "type": "user",
        "display_name": "Erik van Zijst",
        "uuid": "{d301aafa-d676-4ee0-88be-962be7417567}"
      },
      "repository": {
        "type": "repository",
        "name": "geordi",
        "full_name": "bitbucket/geordi",
        "uuid": "{85d08b4e-571d-44e9-a507-fa476535aa98}"
      },
      "permission": "admin"
    },
    {
      "type": "repository_permission",
      "user": {
        "type": "user",
        "display_name": "Sean Conaty",
        "uuid": "{504c3b62-8120-4f0c-a7bc-87800b9d6f70}"
      },
      "repository": {
        "type": "repository",
        "name": "geordi",
        "full_name": "bitbucket/geordi",
        "uuid": "{85d08b4e-571d-44e9-a507-fa476535aa98}"
      },
      "permission": "write"
    }
  ],
  "page": 1,
  "size": 2
}
```

Results may be further [filtered or sorted](../../../../meta/filtering)
by user, or permission by adding the following query string parameters:

* `q=permission>"read"`
* `sort=user.display_name`

Note that the query parameter values need to be URL escaped so that `=`
would become `%3D`.
  GetTeamsUsernamePermissionsRepositoriesRepoSlug(
    req: operations.GetTeamsUsernamePermissionsRepositoriesRepoSlugRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTeamsUsernamePermissionsRepositoriesRepoSlugResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTeamsUsernamePermissionsRepositoriesRepoSlugRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/teams/{username}/permissions/repositories/{repo_slug}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
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
        let res: operations.GetTeamsUsernamePermissionsRepositoriesRepoSlugResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.paginatedRepositoryPermissions = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetTeamsUsernameProjects - **This endpoint has been deprecated,
and you should use the [workspace projects](../../../workspaces/%7Bworkspace%7D/projects#get) endpoint.
For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
  GetTeamsUsernameProjects(
    req: operations.GetTeamsUsernameProjectsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTeamsUsernameProjectsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTeamsUsernameProjectsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/teams/{username}/projects/", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetTeamsUsernameProjectsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.paginatedProjects = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetTeamsUsernameProjectsProjectKey - **This endpoint has been deprecated,
and you should use the [workspace project](../../../workspaces/%7Bworkspace%7D/projects/%7Bproject_key%7D#get) endpoint.
For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
  GetTeamsUsernameProjectsProjectKey(
    req: operations.GetTeamsUsernameProjectsProjectKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTeamsUsernameProjectsProjectKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTeamsUsernameProjectsProjectKeyRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/teams/{username}/projects/{project_key}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetTeamsUsernameProjectsProjectKeyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.project = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetTeamsWorkspaceRepositories - All repositories in the given workspace. This includes any private
repositories the calling user has access to.

**This endpoint has been deprecated,
and you should use the [repository list](../../repositories/%7Bworkspace%7D) endpoint.
For more information, see the [deprecation announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
  GetTeamsWorkspaceRepositories(
    req: operations.GetTeamsWorkspaceRepositoriesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTeamsWorkspaceRepositoriesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTeamsWorkspaceRepositoriesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/teams/{workspace}/repositories", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetTeamsWorkspaceRepositoriesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetUser - Returns the currently logged in user.
  GetUser(
    req: operations.GetUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUserRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/user";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.user = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetUserEmails - Returns all the authenticated user's email addresses. Both
confirmed and unconfirmed.
  GetUserEmails(
    req: operations.GetUserEmailsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUserEmailsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUserEmailsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/user/emails";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetUserEmailsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetUserEmailsEmail - Returns details about a specific one of the authenticated user's
email addresses.

Details describe whether the address has been confirmed by the user and
whether it is the user's primary address or not.
  GetUserEmailsEmail(
    req: operations.GetUserEmailsEmailRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUserEmailsEmailResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUserEmailsEmailRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/user/emails/{email}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetUserEmailsEmailResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetUserPermissionsRepositories - Returns an object for each repository the caller has explicit access
to and their effective permission — the highest level of permission the
caller has. This does not return public repositories that the user was
not granted any specific permission in, and does not distinguish between
direct and indirect privileges.

Permissions can be:

* `admin`
* `write`
* `read`

Example:

```
$ curl https://api.bitbucket.org/2.0/user/permissions/repositories

{
  "pagelen": 10,
  "values": [
    {
      "type": "repository_permission",
      "user": {
        "type": "user",
        "nickname": "evzijst",
        "display_name": "Erik van Zijst",
        "uuid": "{d301aafa-d676-4ee0-88be-962be7417567}"
      },
      "repository": {
        "type": "repository",
        "name": "geordi",
        "full_name": "bitbucket/geordi",
        "uuid": "{85d08b4e-571d-44e9-a507-fa476535aa98}"
      },
      "permission": "admin"
    }
  ],
  "page": 1,
  "size": 1
}
```

Results may be further [filtered or sorted](../../../meta/filtering) by
repository or permission by adding the following query string
parameters:

* `q=repository.name="geordi"` or `q=permission>"read"`
* `sort=repository.name`

Note that the query parameter values need to be URL escaped so that `=`
would become `%3D`.
  GetUserPermissionsRepositories(
    req: operations.GetUserPermissionsRepositoriesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUserPermissionsRepositoriesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUserPermissionsRepositoriesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/user/permissions/repositories";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
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
        let res: operations.GetUserPermissionsRepositoriesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.paginatedRepositoryPermissions = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetUserPermissionsTeams - Returns an object for each team the caller is a member of, and their
effective role — the highest level of privilege the caller has. If a
user is a member of multiple groups with distinct roles, only the
highest level is returned.

**This endpoint has been deprecated,
and you should use the [workspace permissions](./workspaces) endpoint.
For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**

Permissions can be:

* `admin`
* `collaborator`

Example:

```
$ curl https://api.bitbucket.org/2.0/user/permissions/teams

{
  "pagelen": 10,
  "values": [
    {
      "permission": "admin",
      "type": "team_permission",
      "user": {
        "type": "user",
        "nickname": "evzijst",
        "display_name": "Erik van Zijst",
        "uuid": "{d301aafa-d676-4ee0-88be-962be7417567}"
      },
      "team": {
        "display_name": "Atlassian Bitbucket",
        "uuid": "{4cc6108a-a241-4db0-96a5-64347ac04f87}"
      }
    }
  ],
  "page": 1,
  "size": 1
}
```

Results may be further [filtered or sorted](../../../meta/filtering) by
team or permission by adding the following query string parameters:

* `q=team.uuid="{4cc6108a-a241-4db0-96a5-64347ac04f87}"` or `q=permission="admin"`
* `sort=team.display_name`

Note that the query parameter values need to be URL escaped so that `=`
would become `%3D`.
  GetUserPermissionsTeams(
    req: operations.GetUserPermissionsTeamsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUserPermissionsTeamsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUserPermissionsTeamsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/user/permissions/teams";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
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
        let res: operations.GetUserPermissionsTeamsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.paginatedTeamPermissions = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetUserPermissionsWorkspaces - Returns an object for each workspace the caller is a member of, and
their effective role - the highest level of privilege the caller has.
If a user is a member of multiple groups with distinct roles, only the
highest level is returned.

Permissions can be:

* `owner`
* `collaborator`
* `member`

Example:

```
$ curl https://api.bitbucket.org/2.0/user/permissions/workspaces

{
  "pagelen": 10,
  "page": 1,
  "size": 1,
  "values": [
    {
      "type": "workspace_membership",
      "permission": "owner",
      "last_accessed": "2019-03-07T12:35:02.900024+00:00",
      "added_on": "2018-10-11T17:42:02.961424+00:00",
      "user": {
        "type": "user",
        "uuid": "{470c176d-3574-44ea-bb41-89e8638bcca4}",
        "nickname": "evzijst",
        "display_name": "Erik van Zijst",
      },
      "workspace": {
        "type": "workspace",
        "uuid": "{a15fb181-db1f-48f7-b41f-e1eff06929d6}",
        "slug": "bbworkspace1",
        "name": "Atlassian Bitbucket",
      }
    }
  ]
}
```

Results may be further [filtered or sorted](../../../meta/filtering) by
workspace or permission by adding the following query string parameters:

* `q=workspace.slug="bbworkspace1"` or `q=permission="owner"`
* `sort=workspace.slug`

Note that the query parameter values need to be URL escaped so that `=`
would become `%3D`.
  GetUserPermissionsWorkspaces(
    req: operations.GetUserPermissionsWorkspacesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUserPermissionsWorkspacesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUserPermissionsWorkspacesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/user/permissions/workspaces";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
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
        let res: operations.GetUserPermissionsWorkspacesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.paginatedWorkspaceMemberships = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetUsersSelectedUser - Gets the public information associated with a user account.

If the user's profile is private, `location`, `website` and
`created_on` elements are omitted.

Note that the user object returned by this operation is changing significantly, due to privacy changes.
See the [announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-changes-gdpr/#changes-to-bitbucket-user-objects) for details.
  GetUsersSelectedUser(
    req: operations.GetUsersSelectedUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUsersSelectedUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUsersSelectedUserRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/users/{selected_user}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetUsersSelectedUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.user = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetUsersSelectedUserHooks - Returns a paginated list of webhooks installed on this user account.

Note that the username path parameter has been deprecated due to
[privacy changes](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-changes-gdpr/#removal-of-usernames-from-user-referencing-apis).
Use the account's UUID or account_id instead.

**This endpoint has been deprecated, and you should
use the new [workspace hooks](../../workspaces/%7Bworkspace%7D/hooks#get) endpoint.
For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
  GetUsersSelectedUserHooks(
    req: operations.GetUsersSelectedUserHooksRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUsersSelectedUserHooksResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUsersSelectedUserHooksRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/users/{selected_user}/hooks", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetUsersSelectedUserHooksResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.paginatedWebhookSubscriptions = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetUsersSelectedUserHooksUid - Returns the webhook with the specified id installed on the given
user account.

Note that the username path parameter has been deprecated due to
[privacy changes](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-changes-gdpr/#removal-of-usernames-from-user-referencing-apis).
Use the account's UUID or account_id instead.

**This endpoint has been deprecated, and you should
use the new [workspace hook details](../../../workspaces/%7Bworkspace%7D/hooks/%7Buid%7D#get) endpoint.
For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
  GetUsersSelectedUserHooksUid(
    req: operations.GetUsersSelectedUserHooksUidRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUsersSelectedUserHooksUidResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUsersSelectedUserHooksUidRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/users/{selected_user}/hooks/{uid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetUsersSelectedUserHooksUidResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.webhookSubscription = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetUsersSelectedUserSearchCode - Search for code in the repositories of the specified user.

Searching across all repositories:

```
curl 'https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}/search/code?search_query=foo'
{
  "size": 1,
  "page": 1,
  "pagelen": 10,
  "query_substituted": false,
  "values": [
    {
      "type": "code_search_result",
      "content_match_count": 2,
      "content_matches": [
        {
          "lines": [
            {
              "line": 2,
              "segments": []
            },
            {
              "line": 3,
              "segments": [
                {
                  "text": "def "
                },
                {
                  "text": "foo",
                  "match": true
                },
                {
                  "text": "():"
                }
              ]
            },
            {
              "line": 4,
              "segments": [
                {
                  "text": "    print(\"snek\")"
                }
              ]
            },
            {
              "line": 5,
              "segments": []
            }
          ]
        }
      ],
      "path_matches": [
        {
          "text": "src/"
        },
        {
          "text": "foo",
          "match": true
        },
        {
          "text": ".py"
        }
      ],
      "file": {
        "path": "src/foo.py",
        "type": "commit_file",
        "links": {
          "self": {
            "href": "https://api.bitbucket.org/2.0/repositories/my-workspace/demo/src/ad6964b5fe2880dbd9ddcad1c89000f1dbcbc24b/src/foo.py"
          }
        }
      }
    }
  ]
}
```

Note that searches can match in the file's text (`content_matches`),
the path (`path_matches`), or both as in the example above.

You can use the same syntax for the search query as in the UI, e.g.
to only search within a specific repository:

```
curl 'https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}/search/code?search_query=foo+repo:demo'
# results from the "demo" repository
```

Similar to other APIs, you can request more fields using a
`fields` query parameter. E.g. to get some more information about
the repository of matched files (the `%2B` is a URL-encoded `+`):

```
curl 'https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}/search/code'\
     '?search_query=foo&fields=%2Bvalues.file.commit.repository'
{
  "size": 1,
  "page": 1,
  "pagelen": 10,
  "query_substituted": false,
  "values": [
    {
      "type": "code_search_result",
      "content_match_count": 1,
      "content_matches": [...],
      "path_matches": [...],
      "file": {
        "commit": {
          "type": "commit",
          "hash": "ad6964b5fe2880dbd9ddcad1c89000f1dbcbc24b",
          "links": {
            "self": {
              "href": "https://api.bitbucket.org/2.0/repositories/my-workspace/demo/commit/ad6964b5fe2880dbd9ddcad1c89000f1dbcbc24b"
            },
            "html": {
              "href": "https://bitbucket.org/my-workspace/demo/commits/ad6964b5fe2880dbd9ddcad1c89000f1dbcbc24b"
            }
          },
          "repository": {
            "name": "demo",
            "type": "repository",
            "full_name": "my-workspace/demo",
            "links": {
              "self": {
                "href": "https://api.bitbucket.org/2.0/repositories/my-workspace/demo"
              },
              "html": {
                "href": "https://bitbucket.org/my-workspace/demo"
              },
              "avatar": {
                "href": "https://bytebucket.org/ravatar/%7B850e1749-781a-4115-9316-df39d0600e7a%7D?ts=default"
              }
            },
            "uuid": "{850e1749-781a-4115-9316-df39d0600e7a}"
          }
        },
        "type": "commit_file",
        "links": {
          "self": {
            "href": "https://api.bitbucket.org/2.0/repositories/my-workspace/demo/src/ad6964b5fe2880dbd9ddcad1c89000f1dbcbc24b/src/foo.py"
          }
        },
        "path": "src/foo.py"
      }
    }
  ]
}
```

Try `fields=%2Bvalues.*.*.*.*` to get an idea what's possible.

  GetUsersSelectedUserSearchCode(
    req: operations.GetUsersSelectedUserSearchCodeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUsersSelectedUserSearchCodeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUsersSelectedUserSearchCodeRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/users/{selected_user}/search/code", req.pathParams);
    
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
        let res: operations.GetUsersSelectedUserSearchCodeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.searchResultPage = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetUsersSelectedUserSshKeys - Returns a paginated list of the user's SSH public keys.

Example:

```
$ curl https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}/ssh-keys
{
    "page": 1,
    "pagelen": 10,
    "size": 1,
    "values": [
        {
            "comment": "user@myhost",
            "created_on": "2018-03-14T13:17:05.196003+00:00",
            "key": "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIKqP3Cr632C2dNhhgKVcon4ldUSAeKiku2yP9O9/bDtY",
            "label": "",
            "last_used": "2018-03-20T13:18:05.196003+00:00",
            "links": {
                "self": {
                    "href": "https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}/ssh-keys/b15b6026-9c02-4626-b4ad-b905f99f763a"
                }
            },
            "owner": {
                "display_name": "Mark Adams",
                "links": {
                    "avatar": {
                        "href": "https://bitbucket.org/account/markadams-atl/avatar/32/"
                    },
                    "html": {
                        "href": "https://bitbucket.org/markadams-atl/"
                    },
                    "self": {
                        "href": "https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}"
                    }
                },
                "type": "user",
                "username": "markadams-atl",
                "nickname": "markadams-atl",
                "uuid": "{d7dd0e2d-3994-4a50-a9ee-d260b6cefdab}"
            },
            "type": "ssh_key",
            "uuid": "{b15b6026-9c02-4626-b4ad-b905f99f763a}"
        }
    ]
}
```
  GetUsersSelectedUserSshKeys(
    req: operations.GetUsersSelectedUserSshKeysRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUsersSelectedUserSshKeysResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUsersSelectedUserSshKeysRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/users/{selected_user}/ssh-keys", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetUsersSelectedUserSshKeysResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.paginatedSshUserKeys = httpRes?.data;
            }
            break;
          case 403:
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetUsersSelectedUserSshKeysKeyId - Returns a specific SSH public key belonging to a user.

Example:
```
$ curl https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}/ssh-keys/{fbe4bbab-f6f7-4dde-956b-5c58323c54b3}

{
    "comment": "user@myhost",
    "created_on": "2018-03-14T13:17:05.196003+00:00",
    "key": "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIKqP3Cr632C2dNhhgKVcon4ldUSAeKiku2yP9O9/bDtY",
    "label": "",
    "last_used": "2018-03-20T13:18:05.196003+00:00",
    "links": {
        "self": {
            "href": "https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}/ssh-keys/b15b6026-9c02-4626-b4ad-b905f99f763a"
        }
    },
    "owner": {
        "display_name": "Mark Adams",
        "links": {
            "avatar": {
                "href": "https://bitbucket.org/account/markadams-atl/avatar/32/"
            },
            "html": {
                "href": "https://bitbucket.org/markadams-atl/"
            },
            "self": {
                "href": "https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}"
            }
        },
        "type": "user",
        "username": "markadams-atl",
        "nickname": "markadams-atl",
        "uuid": "{d7dd0e2d-3994-4a50-a9ee-d260b6cefdab}"
    },
    "type": "ssh_key",
    "uuid": "{b15b6026-9c02-4626-b4ad-b905f99f763a}"
}
```
  GetUsersSelectedUserSshKeysKeyId(
    req: operations.GetUsersSelectedUserSshKeysKeyIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUsersSelectedUserSshKeysKeyIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUsersSelectedUserSshKeysKeyIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/users/{selected_user}/ssh-keys/{key_id}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetUsersSelectedUserSshKeysKeyIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.sshAccountKey = httpRes?.data;
            }
            break;
          case 403:
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetUsersUsernameMembers - **This endpoint has been deprecated,
and you should use the [workspaces](../../workspaces/%7Bworkspace%7D/members) endpoint.
For more information, see [this post](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
  GetUsersUsernameMembers(
    req: operations.GetUsersUsernameMembersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUsersUsernameMembersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUsersUsernameMembersRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/users/{username}/members", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetUsersUsernameMembersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.user = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetUsersWorkspaceRepositories - All repositories in the given workspace. This includes any private
repositories the calling user has access to.

**This endpoint has been deprecated,
and you should use the [repository list](../../repositories/%7Bworkspace%7D) endpoint.
For more information, see the [deprecation announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
  GetUsersWorkspaceRepositories(
    req: operations.GetUsersWorkspaceRepositoriesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUsersWorkspaceRepositoriesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUsersWorkspaceRepositoriesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/users/{workspace}/repositories", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetUsersWorkspaceRepositoriesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetWorkspaces - Returns a list of workspaces accessible by the authenticated user.

Example:

```
$ curl https://api.bitbucket.org/2.0/workspaces

{
  "pagelen": 10,
  "page": 1,
  "size": 1,
  "values": [
    {
        "uuid": "{a15fb181-db1f-48f7-b41f-e1eff06929d6}",
        "links": {
            "owners": {
                "href": "https://api.bitbucket.org/2.0/workspaces/bbworkspace1/members?q=permission%3D%22owner%22"
            },
            "self": {
                "href": "https://api.bitbucket.org/2.0/workspaces/bbworkspace1"
            },
            "repositories": {
                "href": "https://api.bitbucket.org/2.0/repositories/bbworkspace1"
            },
            "snippets": {
                "href": "https://api.bitbucket.org/2.0/snippets/bbworkspace1"
            },
            "html": {
                "href": "https://bitbucket.org/bbworkspace1/"
            },
            "avatar": {
                "href": "https://bitbucket.org/workspaces/bbworkspace1/avatar/?ts=1543465801"
            },
            "members": {
                "href": "https://api.bitbucket.org/2.0/workspaces/bbworkspace1/members"
            },
            "projects": {
                "href": "https://api.bitbucket.org/2.0/workspaces/bbworkspace1/projects"
            }
        },
        "created_on": "2018-11-14T19:15:05.058566+00:00",
        "type": "workspace",
        "slug": "bbworkspace1",
        "is_private": true,
        "name": "Atlassian Bitbucket"
    }
  ]
}
```

Results may be further [filtered or sorted](../meta/filtering) by
workspace or permission by adding the following query string parameters:

* `q=slug="bbworkspace1"` or `q=is_private=true`
* `sort=created_on`

Note that the query parameter values need to be URL escaped so that `=`
would become `%3D`.
  GetWorkspaces(
    req: operations.GetWorkspacesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetWorkspacesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetWorkspacesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/workspaces";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
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
        let res: operations.GetWorkspacesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.paginatedWorkspaces = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetWorkspacesWorkspace - Returns the requested workspace.
  GetWorkspacesWorkspace(
    req: operations.GetWorkspacesWorkspaceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetWorkspacesWorkspaceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetWorkspacesWorkspaceRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/workspaces/{workspace}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetWorkspacesWorkspaceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.workspace = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetWorkspacesWorkspaceHooks - Returns a paginated list of webhooks installed on this workspace.
  GetWorkspacesWorkspaceHooks(
    req: operations.GetWorkspacesWorkspaceHooksRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetWorkspacesWorkspaceHooksResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetWorkspacesWorkspaceHooksRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/workspaces/{workspace}/hooks", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetWorkspacesWorkspaceHooksResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.paginatedWebhookSubscriptions = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetWorkspacesWorkspaceHooksUid - Returns the webhook with the specified id installed on the given
workspace.
  GetWorkspacesWorkspaceHooksUid(
    req: operations.GetWorkspacesWorkspaceHooksUidRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetWorkspacesWorkspaceHooksUidResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetWorkspacesWorkspaceHooksUidRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/workspaces/{workspace}/hooks/{uid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetWorkspacesWorkspaceHooksUidResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.webhookSubscription = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetWorkspacesWorkspaceMembers - Returns all members of the requested workspace.
  GetWorkspacesWorkspaceMembers(
    req: operations.GetWorkspacesWorkspaceMembersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetWorkspacesWorkspaceMembersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetWorkspacesWorkspaceMembersRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/workspaces/{workspace}/members", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetWorkspacesWorkspaceMembersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.paginatedWorkspaceMemberships = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetWorkspacesWorkspaceMembersMember - Returns the workspace membership, which includes
a `User` object for the member and a `Workspace` object
for the requested workspace.
  GetWorkspacesWorkspaceMembersMember(
    req: operations.GetWorkspacesWorkspaceMembersMemberRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetWorkspacesWorkspaceMembersMemberResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetWorkspacesWorkspaceMembersMemberRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/workspaces/{workspace}/members/{member}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetWorkspacesWorkspaceMembersMemberResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.workspaceMembership = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetWorkspacesWorkspacePermissions - Returns the list of members in a workspace
and their permission levels.
Permission can be:
* `owner`
* `collaborator`
* `member`

Example:

```
$ curl -X https://api.bitbucket.org/2.0/workspaces/bbworkspace1/permissions

{
    "pagelen": 10,
    "values": [
        {
            "permission": "owner",
            "type": "workspace_membership",
            "user": {
                "type": "user",
                "uuid": "{470c176d-3574-44ea-bb41-89e8638bcca4}",
                "display_name": "Erik van Zijst",
            },
            "workspace": {
                "type": "workspace",
                "uuid": "{a15fb181-db1f-48f7-b41f-e1eff06929d6}",
                "slug": "bbworkspace1",
                "name": "Atlassian Bitbucket",
            }
        },
        {
            "permission": "member",
            "type": "workspace_membership",
            "user": {
                "type": "user",
                "nickname": "seanaty",
                "display_name": "Sean Conaty",
                "uuid": "{504c3b62-8120-4f0c-a7bc-87800b9d6f70}"
            },
            "workspace": {
                "type": "workspace",
                "uuid": "{a15fb181-db1f-48f7-b41f-e1eff06929d6}",
                "slug": "bbworkspace1",
                "name": "Atlassian Bitbucket",
            }
        }
    ],
    "page": 1,
    "size": 2
}
```

Results may be further [filtered](../../../meta/filtering) by
permission by adding the following query string parameters:

* `q=permission="owner"`
  GetWorkspacesWorkspacePermissions(
    req: operations.GetWorkspacesWorkspacePermissionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetWorkspacesWorkspacePermissionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetWorkspacesWorkspacePermissionsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/workspaces/{workspace}/permissions", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
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
        let res: operations.GetWorkspacesWorkspacePermissionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.paginatedWorkspaceMemberships = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetWorkspacesWorkspacePermissionsRepositories - Returns an object for each repository permission for all of a
workspace's repositories.

Permissions returned are effective permissions: the highest level of
permission the user has. This does not distinguish between direct and
indirect (group) privileges.

Only users with admin permission for the team may access this resource.

Permissions can be:

* `admin`
* `write`
* `read`

Example:

```
$ curl https://api.bitbucket.org/2.0/workspaces/atlassian_tutorial/permissions/repositories

{
  "pagelen": 10,
  "values": [
    {
      "type": "repository_permission",
      "user": {
        "type": "user",
        "display_name": "Erik van Zijst",
        "uuid": "{d301aafa-d676-4ee0-88be-962be7417567}"
      },
      "repository": {
        "type": "repository",
        "name": "geordi",
        "full_name": "atlassian_tutorial/geordi",
        "uuid": "{85d08b4e-571d-44e9-a507-fa476535aa98}"
      },
      "permission": "admin"
    },
    {
      "type": "repository_permission",
      "user": {
        "type": "user",
        "display_name": "Sean Conaty",
        "uuid": "{504c3b62-8120-4f0c-a7bc-87800b9d6f70}"
      },
      "repository": {
        "type": "repository",
        "name": "geordi",
        "full_name": "atlassian_tutorial/geordi",
        "uuid": "{85d08b4e-571d-44e9-a507-fa476535aa98}"
      },
      "permission": "write"
    },
    {
      "type": "repository_permission",
      "user": {
        "type": "user",
        "display_name": "Jeff Zeng",
        "uuid": "{47f92a9a-c3a3-4d0b-bc4e-782a969c5c72}"
      },
      "repository": {
        "type": "repository",
        "name": "whee",
        "full_name": "atlassian_tutorial/whee",
        "uuid": "{30ba25e9-51ff-4555-8dd0-fc7ee2fa0895}"
      },
      "permission": "admin"
    }
  ],
  "page": 1,
  "size": 3
}
```

Results may be further [filtered or sorted](../../../../meta/filtering)
by repository, user, or permission by adding the following query string
parameters:

* `q=repository.name="geordi"` or `q=permission>"read"`
* `sort=user.display_name`

Note that the query parameter values need to be URL escaped so that `=`
would become `%3D`.
  GetWorkspacesWorkspacePermissionsRepositories(
    req: operations.GetWorkspacesWorkspacePermissionsRepositoriesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetWorkspacesWorkspacePermissionsRepositoriesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetWorkspacesWorkspacePermissionsRepositoriesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/workspaces/{workspace}/permissions/repositories", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
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
        let res: operations.GetWorkspacesWorkspacePermissionsRepositoriesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.paginatedRepositoryPermissions = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetWorkspacesWorkspacePermissionsRepositoriesRepoSlug - Returns an object for the repository permission of each user in the
requested repository.

Permissions returned are effective permissions: the highest level of
permission the user has. This does not distinguish between direct and
indirect (group) privileges.

Only users with admin permission for the repository may access this resource.

Permissions can be:

* `admin`
* `write`
* `read`

Example:

```
$ curl https://api.bitbucket.org/2.0/workspaces/atlassian_tutorial/permissions/repositories/geordi

{
  "pagelen": 10,
  "values": [
    {
      "type": "repository_permission",
      "user": {
        "type": "user",
        "display_name": "Erik van Zijst",
        "uuid": "{d301aafa-d676-4ee0-88be-962be7417567}"
      },
      "repository": {
        "type": "repository",
        "name": "geordi",
        "full_name": "atlassian_tutorial/geordi",
        "uuid": "{85d08b4e-571d-44e9-a507-fa476535aa98}"
      },
      "permission": "admin"
    },
    {
      "type": "repository_permission",
      "user": {
        "type": "user",
        "display_name": "Sean Conaty",
        "uuid": "{504c3b62-8120-4f0c-a7bc-87800b9d6f70}"
      },
      "repository": {
        "type": "repository",
        "name": "geordi",
        "full_name": "atlassian_tutorial/geordi",
        "uuid": "{85d08b4e-571d-44e9-a507-fa476535aa98}"
      },
      "permission": "write"
    }
  ],
  "page": 1,
  "size": 2
}
```

Results may be further [filtered or sorted](../../../../meta/filtering)
by user, or permission by adding the following query string parameters:

* `q=permission>"read"`
* `sort=user.display_name`

Note that the query parameter values need to be URL escaped so that `=`
would become `%3D`.
  GetWorkspacesWorkspacePermissionsRepositoriesRepoSlug(
    req: operations.GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/workspaces/{workspace}/permissions/repositories/{repo_slug}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
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
        let res: operations.GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.paginatedRepositoryPermissions = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  GetWorkspacesWorkspacePipelinesConfigIdentityOidcKeysJson(
    req: operations.GetWorkspacesWorkspacePipelinesConfigIdentityOidcKeysJsonRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetWorkspacesWorkspacePipelinesConfigIdentityOidcKeysJsonResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetWorkspacesWorkspacePipelinesConfigIdentityOidcKeysJsonRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/workspaces/{workspace}/pipelines-config/identity/oidc/keys.json", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetWorkspacesWorkspacePipelinesConfigIdentityOidcKeysJsonResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  GetWorkspacesWorkspacePipelinesConfigIdentityOidcWellKnownOpenidConfiguration(
    req: operations.GetWorkspacesWorkspacePipelinesConfigIdentityOidcWellKnownOpenidConfigurationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetWorkspacesWorkspacePipelinesConfigIdentityOidcWellKnownOpenidConfigurationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetWorkspacesWorkspacePipelinesConfigIdentityOidcWellKnownOpenidConfigurationRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/workspaces/{workspace}/pipelines-config/identity/oidc/.well-known/openid-configuration", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetWorkspacesWorkspacePipelinesConfigIdentityOidcWellKnownOpenidConfigurationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetWorkspacesWorkspaceProjects - Returns the list of projects in this workspace.
  GetWorkspacesWorkspaceProjects(
    req: operations.GetWorkspacesWorkspaceProjectsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetWorkspacesWorkspaceProjectsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetWorkspacesWorkspaceProjectsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/workspaces/{workspace}/projects", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetWorkspacesWorkspaceProjectsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.paginatedProjects = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetWorkspacesWorkspaceProjectsProjectKey - Returns the requested project.
  GetWorkspacesWorkspaceProjectsProjectKey(
    req: operations.GetWorkspacesWorkspaceProjectsProjectKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetWorkspacesWorkspaceProjectsProjectKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetWorkspacesWorkspaceProjectsProjectKeyRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/workspaces/{workspace}/projects/{project_key}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetWorkspacesWorkspaceProjectsProjectKeyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.project = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetWorkspacesWorkspaceSearchCode - Search for code in the repositories of the specified workspace.

Searching across all repositories:

```
curl 'https://api.bitbucket.org/2.0/workspaces/workspace_slug_or_uuid/search/code?search_query=foo'
{
  "size": 1,
  "page": 1,
  "pagelen": 10,
  "query_substituted": false,
  "values": [
    {
      "type": "code_search_result",
      "content_match_count": 2,
      "content_matches": [
        {
          "lines": [
            {
              "line": 2,
              "segments": []
            },
            {
              "line": 3,
              "segments": [
                {
                  "text": "def "
                },
                {
                  "text": "foo",
                  "match": true
                },
                {
                  "text": "():"
                }
              ]
            },
            {
              "line": 4,
              "segments": [
                {
                  "text": "    print(\"snek\")"
                }
              ]
            },
            {
              "line": 5,
              "segments": []
            }
          ]
        }
      ],
      "path_matches": [
        {
          "text": "src/"
        },
        {
          "text": "foo",
          "match": true
        },
        {
          "text": ".py"
        }
      ],
      "file": {
        "path": "src/foo.py",
        "type": "commit_file",
        "links": {
          "self": {
            "href": "https://api.bitbucket.org/2.0/repositories/my-workspace/demo/src/ad6964b5fe2880dbd9ddcad1c89000f1dbcbc24b/src/foo.py"
          }
        }
      }
    }
  ]
}
```

Note that searches can match in the file's text (`content_matches`),
the path (`path_matches`), or both as in the example above.

You can use the same syntax for the search query as in the UI, e.g.
to only search within a specific repository:

```
curl 'https://api.bitbucket.org/2.0/workspaces/my-workspace/search/code?search_query=foo+repo:demo'
# results from the "demo" repository
```

Similar to other APIs, you can request more fields using a
`fields` query parameter. E.g. to get some more information about
the repository of matched files (the `%2B` is a URL-encoded `+`):

```
curl 'https://api.bitbucket.org/2.0/workspaces/my-workspace/search/code'\
     '?search_query=foo&fields=%2Bvalues.file.commit.repository'
{
  "size": 1,
  "page": 1,
  "pagelen": 10,
  "query_substituted": false,
  "values": [
    {
      "type": "code_search_result",
      "content_match_count": 1,
      "content_matches": [...],
      "path_matches": [...],
      "file": {
        "commit": {
          "type": "commit",
          "hash": "ad6964b5fe2880dbd9ddcad1c89000f1dbcbc24b",
          "links": {
            "self": {
              "href": "https://api.bitbucket.org/2.0/repositories/my-workspace/demo/commit/ad6964b5fe2880dbd9ddcad1c89000f1dbcbc24b"
            },
            "html": {
              "href": "https://bitbucket.org/my-workspace/demo/commits/ad6964b5fe2880dbd9ddcad1c89000f1dbcbc24b"
            }
          },
          "repository": {
            "name": "demo",
            "type": "repository",
            "full_name": "my-workspace/demo",
            "links": {
              "self": {
                "href": "https://api.bitbucket.org/2.0/repositories/my-workspace/demo"
              },
              "html": {
                "href": "https://bitbucket.org/my-workspace/demo"
              },
              "avatar": {
                "href": "https://bytebucket.org/ravatar/%7B850e1749-781a-4115-9316-df39d0600e7a%7D?ts=default"
              }
            },
            "uuid": "{850e1749-781a-4115-9316-df39d0600e7a}"
          }
        },
        "type": "commit_file",
        "links": {
          "self": {
            "href": "https://api.bitbucket.org/2.0/repositories/my-workspace/demo/src/ad6964b5fe2880dbd9ddcad1c89000f1dbcbc24b/src/foo.py"
          }
        },
        "path": "src/foo.py"
      }
    }
  ]
}
```

Try `fields=%2Bvalues.*.*.*.*` to get an idea what's possible.

  GetWorkspacesWorkspaceSearchCode(
    req: operations.GetWorkspacesWorkspaceSearchCodeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetWorkspacesWorkspaceSearchCodeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetWorkspacesWorkspaceSearchCodeRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/workspaces/{workspace}/search/code", req.pathParams);
    
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
        let res: operations.GetWorkspacesWorkspaceSearchCodeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.searchResultPage = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostAddonLinkersLinkerKeyValues - Creates a [linker](/cloud/bitbucket/modules/linker/) value for the specified
linker of authenticated application.

A linker value lets applications supply values to modify its regular expression.

The base regular expression must use a Bitbucket-specific match group `(?K)`
which will be translated to `([\w\-]+)`. A value must match this pattern.

[Read more about linker values](/cloud/bitbucket/modules/linker/#usingthebitbucketapitosupplyvalues)
  PostAddonLinkersLinkerKeyValues(
    req: operations.PostAddonLinkersLinkerKeyValuesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostAddonLinkersLinkerKeyValuesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostAddonLinkersLinkerKeyValuesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/addon/linkers/{linker_key}/values", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostAddonLinkersLinkerKeyValuesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 409:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostRepositoriesWorkspaceRepoSlug - Creates a new repository.

Note: In order to set the project for the newly created repository,
pass in either the project key or the project UUID as part of the
request body as shown in the examples below:

```
$ curl -X POST -H "Content-Type: application/json" -d '{
    "scm": "git",
    "project": {
        "key": "MARS"
    }
}' https://api.bitbucket.org/2.0/repositories/teamsinspace/hablanding
```

or

```
$ curl -X POST -H "Content-Type: application/json" -d '{
    "scm": "git",
    "project": {
        "key": "{ba516952-992a-4c2d-acbd-17d502922f96}"
    }
}' https://api.bitbucket.org/2.0/repositories/teamsinspace/hablanding
```

The project must be assigned for all repositories. If the project is not provided,
the repository is automatically assigned to the oldest project in the workspace.

Note: In the examples above, the workspace ID `teamsinspace`,
and/or the repository name `hablanding` can be replaced by UUIDs.
  PostRepositoriesWorkspaceRepoSlug(
    req: operations.PostRepositoriesWorkspaceRepoSlugRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRepositoriesWorkspaceRepoSlugResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRepositoriesWorkspaceRepoSlugRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.PostRepositoriesWorkspaceRepoSlugResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.repository = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostRepositoriesWorkspaceRepoSlugBranchRestrictions - Creates a new branch restriction rule for a repository.

`kind` describes what will be restricted. Allowed values include:
`push`, `force`, `delete` and `restrict_merges`.

Different kinds of branch restrictions have different requirements:

* `push` and `restrict_merges` require `users` and `groups` to be
  specified. Empty lists are allowed, in which case permission is
  denied for everybody.

The restriction applies to all branches that match. There are
two ways to match a branch. It is configured in `branch_match_kind`:

1. `glob`: Matches a branch against the `pattern`. A `'*'` in
   `pattern` will expand to match zero or more characters, and every
   other character matches itself. For example, `'foo*'` will match
   `'foo'` and `'foobar'`, but not `'barfoo'`. `'*'` will match all
   branches.
2. `branching_model`: Matches a branch against the repository's
   branching model. The `branch_type` controls the type of branch
   to match. Allowed values include: `production`, `development`,
   `bugfix`, `release`, `feature` and `hotfix`.

The combination of `kind` and match must be unique. This means that
two `glob` restrictions in a repository cannot have the same `kind` and
`pattern`. Additionally, two `branching_model` restrictions in a
repository cannot have the same `kind` and `branch_type`.

`users` and `groups` are lists of users and groups that are except from
the restriction. They can only be configured in `push` and
`restrict_merges` restrictions. The `push` restriction stops a user
pushing to matching branches unless that user is in `users` or is a
member of a group in `groups`. The `restrict_merges` stops a user
merging pull requests to matching branches unless that user is in
`users` or is a member of a group in `groups`. Adding new users or
groups to an existing restriction should be done via `PUT`.

Note that branch restrictions with overlapping matchers is allowed,
but the resulting behavior may be surprising.
  PostRepositoriesWorkspaceRepoSlugBranchRestrictions(
    req: operations.PostRepositoriesWorkspaceRepoSlugBranchRestrictionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRepositoriesWorkspaceRepoSlugBranchRestrictionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRepositoriesWorkspaceRepoSlugBranchRestrictionsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/branch-restrictions", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.PostRepositoriesWorkspaceRepoSlugBranchRestrictionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.branchrestriction = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostRepositoriesWorkspaceRepoSlugCommitCommitApprove - Approve the specified commit as the authenticated user.

This operation is only available to users that have explicit access to
the repository. In contrast, just the fact that a repository is
publicly accessible to users does not give them the ability to approve
commits.
  PostRepositoriesWorkspaceRepoSlugCommitCommitApprove(
    req: operations.PostRepositoriesWorkspaceRepoSlugCommitCommitApproveRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRepositoriesWorkspaceRepoSlugCommitCommitApproveResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRepositoriesWorkspaceRepoSlugCommitCommitApproveRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/commit/{commit}/approve", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostRepositoriesWorkspaceRepoSlugCommitCommitApproveResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.participant = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostRepositoriesWorkspaceRepoSlugCommitCommitComments - Creates new comment on the specified commit.

To post a reply to an existing comment, include the `parent.id` field:

```
$ curl https://api.bitbucket.org/2.0/repositories/atlassian/prlinks/commit/db9ba1e031d07a02603eae0e559a7adc010257fc/comments/ \
  -X POST -u evzijst \
  -H 'Content-Type: application/json' \
  -d '{"content": {"raw": "One more thing!"},
       "parent": {"id": 5728901}}'
```
  PostRepositoriesWorkspaceRepoSlugCommitCommitComments(
    req: operations.PostRepositoriesWorkspaceRepoSlugCommitCommitCommentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRepositoriesWorkspaceRepoSlugCommitCommitCommentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRepositoriesWorkspaceRepoSlugCommitCommitCommentsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/commit/{commit}/comments", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.PostRepositoriesWorkspaceRepoSlugCommitCommitCommentsResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 201:
            break;
          case 400:
            break;
          case 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuild - Creates a new build status against the specified commit.

If the specified key already exists, the existing status object will
be overwritten.

Example:

```
curl https://api.bitbucket.org/2.0/repositories/my-workspace/my-repo/commit/e10dae226959c2194f2b07b077c07762d93821cf/statuses/build/           -X POST -u jdoe -H 'Content-Type: application/json'           -d '{
    "key": "MY-BUILD",
    "state": "SUCCESSFUL",
    "description": "42 tests passed",
    "url": "https://www.example.org/my-build-result"
  }'
```

When creating a new commit status, you can use a URI template for the URL.
Templates are URLs that contain variable names that Bitbucket will
evaluate at runtime whenever the URL is displayed anywhere similar to
parameter substitution in
[Bitbucket Connect](https://developer.atlassian.com/bitbucket/concepts/context-parameters.html).
For example, one could use `https://foo.com/builds/{repository.full_name}`
which Bitbucket will turn into `https://foo.com/builds/foo/bar` at render time.
The context variables available are `repository` and `commit`.
  PostRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuild(
    req: operations.PostRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/commit/{commit}/statuses/build", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.PostRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.commitstatus = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostRepositoriesWorkspaceRepoSlugCommits - Identical to `GET /repositories/{workspace}/{repo_slug}/commits`,
except that POST allows clients to place the include and exclude
parameters in the request body to avoid URL length issues.

**Note that this resource does NOT support new commit creation.**
  PostRepositoriesWorkspaceRepoSlugCommits(
    req: operations.PostRepositoriesWorkspaceRepoSlugCommitsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRepositoriesWorkspaceRepoSlugCommitsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRepositoriesWorkspaceRepoSlugCommitsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/commits", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostRepositoriesWorkspaceRepoSlugCommitsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.paginatedChangeset = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostRepositoriesWorkspaceRepoSlugCommitsRevision - Identical to `GET /repositories/{workspace}/{repo_slug}/commits/{revision}`,
except that POST allows clients to place the include and exclude
parameters in the request body to avoid URL length issues.

**Note that this resource does NOT support new commit creation.**
  PostRepositoriesWorkspaceRepoSlugCommitsRevision(
    req: operations.PostRepositoriesWorkspaceRepoSlugCommitsRevisionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRepositoriesWorkspaceRepoSlugCommitsRevisionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRepositoriesWorkspaceRepoSlugCommitsRevisionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/commits/{revision}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostRepositoriesWorkspaceRepoSlugCommitsRevisionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.paginatedChangeset = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostRepositoriesWorkspaceRepoSlugDeployKeys - Create a new deploy key in a repository. Note: If authenticating a deploy key
with an OAuth consumer, any changes to the OAuth consumer will subsequently
invalidate the deploy key.


Example:
```
$ curl -XPOST \
-H "Authorization <auth header>" \
-H "Content-type: application/json" \
https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-keys -d \
'{
    "key": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDAK/b1cHHDr/TEV1JGQl+WjCwStKG6Bhrv0rFpEsYlyTBm1fzN0VOJJYn4ZOPCPJwqse6fGbXntEs+BbXiptR+++HycVgl65TMR0b5ul5AgwrVdZdT7qjCOCgaSV74/9xlHDK8oqgGnfA7ZoBBU+qpVyaloSjBdJfLtPY/xqj4yHnXKYzrtn/uFc4Kp9Tb7PUg9Io3qohSTGJGVHnsVblq/rToJG7L5xIo0OxK0SJSQ5vuId93ZuFZrCNMXj8JDHZeSEtjJzpRCBEXHxpOPhAcbm4MzULgkFHhAVgp4JbkrT99/wpvZ7r9AdkTg7HGqL3rlaDrEcWfL7Lu6TnhBdq5 mleu@C02W454JHTD8",
    "label": "mydeploykey"
}'

Output:
{
    "id": 123,
    "key": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDAK/b1cHHDr/TEV1JGQl+WjCwStKG6Bhrv0rFpEsYlyTBm1fzN0VOJJYn4ZOPCPJwqse6fGbXntEs+BbXiptR+++HycVgl65TMR0b5ul5AgwrVdZdT7qjCOCgaSV74/9xlHDK8oqgGnfA7ZoBBU+qpVyaloSjBdJfLtPY/xqj4yHnXKYzrtn/uFc4Kp9Tb7PUg9Io3qohSTGJGVHnsVblq/rToJG7L5xIo0OxK0SJSQ5vuId93ZuFZrCNMXj8JDHZeSEtjJzpRCBEXHxpOPhAcbm4MzULgkFHhAVgp4JbkrT99/wpvZ7r9AdkTg7HGqL3rlaDrEcWfL7Lu6TnhBdq5",
    "label": "mydeploykey",
    "type": "deploy_key",
    "created_on": "2018-08-15T23:50:59.993890+00:00",
    "repository": {
        "full_name": "mleu/test",
        "name": "test",
        "type": "repository",
        "uuid": "{85d08b4e-571d-44e9-a507-fa476535aa98}"
    },
    "links":{
        "self":{
            "href": "https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-keys/123"
        }
    }
    "last_used": null,
    "comment": "mleu@C02W454JHTD8"
}
```
  PostRepositoriesWorkspaceRepoSlugDeployKeys(
    req: operations.PostRepositoriesWorkspaceRepoSlugDeployKeysRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRepositoriesWorkspaceRepoSlugDeployKeysResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRepositoriesWorkspaceRepoSlugDeployKeysRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/deploy-keys", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostRepositoriesWorkspaceRepoSlugDeployKeysResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.deployKey = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 403:
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostRepositoriesWorkspaceRepoSlugDownloads - Upload new download artifacts.

To upload files, perform a `multipart/form-data` POST containing one
or more `files` fields:

    $ echo Hello World > hello.txt
    $ curl -s -u evzijst -X POST https://api.bitbucket.org/2.0/repositories/evzijst/git-tests/downloads -F files=@hello.txt

When a file is uploaded with the same name as an existing artifact,
then the existing file will be replaced.
  PostRepositoriesWorkspaceRepoSlugDownloads(
    req: operations.PostRepositoriesWorkspaceRepoSlugDownloadsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRepositoriesWorkspaceRepoSlugDownloadsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRepositoriesWorkspaceRepoSlugDownloadsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/downloads", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostRepositoriesWorkspaceRepoSlugDownloadsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostRepositoriesWorkspaceRepoSlugForks - Creates a new fork of the specified repository.

## Forking a repository

To create a fork, specify the workspace explicitly as part of the
request body:

```
$ curl -X POST -u jdoe https://api.bitbucket.org/2.0/repositories/atlassian/bbql/forks \
  -H 'Content-Type: application/json' -d '{
    "name": "bbql_fork",
    "workspace": {
      "slug": "atlassian"
    }
}'
```

To fork a repository into the same workspace, also specify a new `name`.

When you specify a value for `name`, it will also affect the `slug`.
The `slug` is reflected in the repository URL of the new fork. It is
derived from `name` by substituting non-ASCII characters, removes
whitespace, and changes characters to lower case. For example,
`My repo` would turn into `my_repo`.

You need contributor access to create new forks within a workspace.


## Change the properties of a new fork

By default the fork inherits most of its properties from the parent.
However, since the optional POST body document follows the normal
`repository` JSON schema and you can override the new fork's
properties.

Properties that can be overridden include:

* description
* fork_policy
* language
* mainbranch
* is_private (note that a private repo's fork_policy might prohibit
  the creation of public forks, in which `is_private=False` would fail)
* has_issues (to initialize or disable the new repo's issue tracker --
  note that the actual contents of the parent repository's issue
  tracker are not copied during forking)
* has_wiki (to initialize or disable the new repo's wiki --
  note that the actual contents of the parent repository's wiki are not
  copied during forking)
* project (when forking into a private project, the fork's `is_private`
  must be `true`)

Properties that cannot be modified include:

* scm
* parent
* full_name
  PostRepositoriesWorkspaceRepoSlugForks(
    req: operations.PostRepositoriesWorkspaceRepoSlugForksRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRepositoriesWorkspaceRepoSlugForksResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRepositoriesWorkspaceRepoSlugForksRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/forks", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.PostRepositoriesWorkspaceRepoSlugForksResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.repository = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostRepositoriesWorkspaceRepoSlugHooks - Creates a new webhook on the specified repository.

Example:

```
$ curl -X POST -u credentials -H 'Content-Type: application/json'
  https://api.bitbucket.org/2.0/repositories/my-workspace/my-repo-slug/hooks
  -d '
    {
      "description": "Webhook Description",
      "url": "https://example.com/",
      "active": true,
      "events": [
        "repo:push",
        "issue:created",
        "issue:updated"
      ]
    }'
```

Note that this call requires the webhook scope, as well as any scope
that applies to the events that the webhook subscribes to. In the
example above that means: `webhook`, `repository` and `issue`.

Also note that the `url` must properly resolve and cannot be an
internal, non-routed address.
  PostRepositoriesWorkspaceRepoSlugHooks(
    req: operations.PostRepositoriesWorkspaceRepoSlugHooksRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRepositoriesWorkspaceRepoSlugHooksResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRepositoriesWorkspaceRepoSlugHooksRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/hooks", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostRepositoriesWorkspaceRepoSlugHooksResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.webhookSubscription = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostRepositoriesWorkspaceRepoSlugIssues - Creates a new issue.

This call requires authentication. Private repositories or private
issue trackers require the caller to authenticate with an account that
has appropriate authorization.

The authenticated user is used for the issue's `reporter` field.
  PostRepositoriesWorkspaceRepoSlugIssues(
    req: operations.PostRepositoriesWorkspaceRepoSlugIssuesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRepositoriesWorkspaceRepoSlugIssuesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRepositoriesWorkspaceRepoSlugIssuesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/issues", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.PostRepositoriesWorkspaceRepoSlugIssuesResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.issue = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostRepositoriesWorkspaceRepoSlugIssuesExport - A POST request to this endpoint initiates a new background celery task that archives the repo's issues.

For example, you can run:

curl -u <username> -X POST http://api.bitbucket.org/2.0/repositories/<owner_username>/<repo_slug>/
issues/export

When the job has been accepted, it will return a 202 (Accepted) along with a unique url to this job in the
'Location' response header. This url is the endpoint for where the user can obtain their zip files."
  PostRepositoriesWorkspaceRepoSlugIssuesExport(
    req: operations.PostRepositoriesWorkspaceRepoSlugIssuesExportRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRepositoriesWorkspaceRepoSlugIssuesExportResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRepositoriesWorkspaceRepoSlugIssuesExportRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/issues/export", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.PostRepositoriesWorkspaceRepoSlugIssuesExportResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 202:
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostRepositoriesWorkspaceRepoSlugIssuesImport - A POST request to this endpoint will import the zip file given by the archive parameter into the repository. All
existing issues will be deleted and replaced by the contents of the imported zip file.

Imports are done through a multipart/form-data POST. There is one valid and required form field, with the name
"archive," which needs to be a file field:

```
$ curl -u <username> -X POST -F archive=@/path/to/file.zip https://api.bitbucket.org/2.0/repositories/<owner_username>/<repo_slug>/issues/import
```

When the import job is accepted, here is example output:

```
< HTTP/1.1 202 Accepted

{
    "type": "issue_job_status",
    "status": "ACCEPTED",
    "phase": "Attachments",
    "total": 15,
    "count": 0,
    "percent": 0
}
```
  PostRepositoriesWorkspaceRepoSlugIssuesImport(
    req: operations.PostRepositoriesWorkspaceRepoSlugIssuesImportRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRepositoriesWorkspaceRepoSlugIssuesImportResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRepositoriesWorkspaceRepoSlugIssuesImportRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/issues/import", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostRepositoriesWorkspaceRepoSlugIssuesImportResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 202:
            if (MatchContentType(contentType, `application/json`)) {
                res.issueJobStatus = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 409:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachments - Upload new issue attachments.

To upload files, perform a `multipart/form-data` POST containing one
or more file fields.

When a file is uploaded with the same name as an existing attachment,
then the existing file will be replaced.
  PostRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachments(
    req: operations.PostRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/issues/{issue_id}/attachments", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 201:
            break;
          case 400:
            break;
          case 401:
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostRepositoriesWorkspaceRepoSlugIssuesIssueIdChanges - Makes a change to the specified issue.

For example, to change an issue's state and assignee, create a new
change object that modifies these fields:

```
curl https://api.bitbucket.org/2.0/site/master/issues/1234/changes \
  -s -u evzijst -X POST -H "Content-Type: application/json" \
  -d '{
    "changes": {
      "assignee_account_id": {
        "new": "557058:c0b72ad0-1cb5-4018-9cdc-0cde8492c443"
      },
      "state": {
        "new": 'resolved"
      }
    }
    "message": {
      "raw": "This is now resolved."
    }
  }'
```

The above example also includes a custom comment to go alongside the
change. This comment will also be visible on the issue page in the UI.

The fields of the `changes` object are strings, not objects. This
allows for immutable change log records, even after user accounts,
milestones, or other objects recorded in a change entry, get renamed or
deleted.

The `assignee_account_id` field stores the account id. When POSTing a
new change and changing the assignee, the client should therefore use
the user's account_id in the `changes.assignee_account_id.new` field.

This call requires authentication. Private repositories or private
issue trackers require the caller to authenticate with an account that
has appropriate authorization.
  PostRepositoriesWorkspaceRepoSlugIssuesIssueIdChanges(
    req: operations.PostRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/issues/{issue_id}/changes", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.PostRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.issueChange = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostRepositoriesWorkspaceRepoSlugIssuesIssueIdComments - Creates a new issue comment.

```
$ curl https://api.bitbucket.org/2.0/repositories/atlassian/prlinks/issues/42/comments/ \
  -X POST -u evzijst \
  -H 'Content-Type: application/json' \
  -d '{"content": {"raw": "Lorem ipsum."}}'
```
  PostRepositoriesWorkspaceRepoSlugIssuesIssueIdComments(
    req: operations.PostRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/issues/{issue_id}/comments", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.PostRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 201:
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostRepositoriesWorkspaceRepoSlugPullrequests - Creates a new pull request where the destination repository is
this repository and the author is the authenticated user.

The minimum required fields to create a pull request are `title` and
`source`, specified by a branch name.

```
curl https://api.bitbucket.org/2.0/repositories/my-username/my-repository/pullrequests \
    -u my-username:my-password \
    --request POST \
    --header 'Content-Type: application/json' \
    --data '{
        "title": "My Title",
        "source": {
            "branch": {
                "name": "staging"
            }
        }
    }'
```

If the pull request's `destination` is not specified, it will default
to the `repository.mainbranch`. To open a pull request to a
different branch, say from a feature branch to a staging branch,
specify a `destination` (same format as the `source`):

```
{
    "title": "My Title",
    "source": {
        "branch": {
            "name": "my-feature-branch"
        }
    },
    "destination": {
        "branch": {
            "name": "staging"
        }
    }
}
```

Reviewers can be specified by adding an array of user objects as the
`reviewers` property.

```
{
    "title": "My Title",
    "source": {
        "branch": {
            "name": "my-feature-branch"
        }
    },
    "reviewers": [
        {
            "uuid": "{504c3b62-8120-4f0c-a7bc-87800b9d6f70}"
        }
    ]
}
```

Other fields:

* `description` - a string
* `close_source_branch` - boolean that specifies if the source branch should be closed upon merging
  PostRepositoriesWorkspaceRepoSlugPullrequests(
    req: operations.PostRepositoriesWorkspaceRepoSlugPullrequestsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRepositoriesWorkspaceRepoSlugPullrequestsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRepositoriesWorkspaceRepoSlugPullrequestsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/pullrequests", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.PostRepositoriesWorkspaceRepoSlugPullrequestsResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.pullrequest = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApprove - Approve the specified pull request as the authenticated user.
  PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApprove(
    req: operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApproveRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApproveResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApproveRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/approve", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApproveResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.participant = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdComments - Creates a new pull request comment.

Returns the newly created pull request comment.
  PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdComments(
    req: operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/comments", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.pullrequestComment = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDecline - Declines the pull request.
  PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDecline(
    req: operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDeclineRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDeclineResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDeclineRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/decline", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDeclineResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.pullrequest = httpRes?.data;
            }
            break;
          case 555:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMerge - Merges the pull request.
  PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMerge(
    req: operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/merge", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.pullrequest = httpRes?.data;
            }
            break;
          case 202:
            break;
          case 555:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChanges(
    req: operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChangesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChangesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChangesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/request-changes", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChangesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.participant = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostRepositoriesWorkspaceRepoSlugRefsBranches - Creates a new branch in the specified repository.

The payload of the POST should consist of a JSON document that
contains the name of the tag and the target hash.

```
curl https://api.bitbucket.org/2.0/repositories/seanfarley/hg/refs/branches \
-s -u seanfarley -X POST -H "Content-Type: application/json" \
-d '{
    "name" : "smf/create-feature",
    "target" : {
        "hash" : "default",
    }
}'
```

This call requires authentication. Private repositories require the
caller to authenticate with an account that has appropriate
authorization.

The branch name should not include any prefixes (e.g.
refs/heads). This endpoint does support using short hash prefixes for
the commit hash, but it may return a 400 response if the provided
prefix is ambiguous. Using a full commit hash is the preferred
approach.
  PostRepositoriesWorkspaceRepoSlugRefsBranches(
    req: operations.PostRepositoriesWorkspaceRepoSlugRefsBranchesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRepositoriesWorkspaceRepoSlugRefsBranchesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRepositoriesWorkspaceRepoSlugRefsBranchesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/refs/branches", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostRepositoriesWorkspaceRepoSlugRefsBranchesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.branch = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostRepositoriesWorkspaceRepoSlugRefsTags - Creates a new tag in the specified repository.

The payload of the POST should consist of a JSON document that
contains the name of the tag and the target hash.

```
curl https://api.bitbucket.org/2.0/repositories/jdoe/myrepo/refs/tags \
-s -u jdoe -X POST -H "Content-Type: application/json" \
-d '{
    "name" : "new-tag-name",
    "target" : {
        "hash" : "a1b2c3d4e5f6",
    }
}'
```

This endpoint does support using short hash prefixes for the commit
hash, but it may return a 400 response if the provided prefix is
ambiguous. Using a full commit hash is the preferred approach.
  PostRepositoriesWorkspaceRepoSlugRefsTags(
    req: operations.PostRepositoriesWorkspaceRepoSlugRefsTagsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRepositoriesWorkspaceRepoSlugRefsTagsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRepositoriesWorkspaceRepoSlugRefsTagsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/refs/tags", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.PostRepositoriesWorkspaceRepoSlugRefsTagsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.tag = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostRepositoriesWorkspaceRepoSlugSrc - This endpoint is used to create new commits in the repository by
uploading files.

To add a new file to a repository:

```
$ curl https://api.bitbucket.org/2.0/repositories/username/slug/src \
  -F /repo/path/to/image.png=@image.png
```

This will create a new commit on top of the main branch, inheriting the
contents of the main branch, but adding (or overwriting) the
`image.png` file to the repository in the `/repo/path/to` directory.

To create a commit that deletes files, use the `files` parameter:

```
$ curl https://api.bitbucket.org/2.0/repositories/username/slug/src \
  -F files=/file/to/delete/1.txt \
  -F files=/file/to/delete/2.txt
```

You can add/modify/delete multiple files in a request. Rename/move a
file by deleting the old path and adding the content at the new path.

This endpoint accepts `multipart/form-data` (as in the examples above),
as well as `application/x-www-form-urlencoded`.

## multipart/form-data

A `multipart/form-data` post contains a series of "form fields" that
identify both the individual files that are being uploaded, as well as
additional, optional meta data.

Files are uploaded in file form fields (those that have a
`Content-Disposition` parameter) whose field names point to the remote
path in the repository where the file should be stored. Path field
names are always interpreted to be absolute from the root of the
repository, regardless whether the client uses a leading slash (as the
above `curl` example did).

File contents are treated as bytes and are not decoded as text.

The commit message, as well as other non-file meta data for the
request, is sent along as normal form field elements. Meta data fields
share the same namespace as the file objects. For `multipart/form-data`
bodies that should not lead to any ambiguity, as the
`Content-Disposition` header will contain the `filename` parameter to
distinguish between a file named "message" and the commit message field.

## application/x-www-form-urlencoded

It is also possible to upload new files using a simple
`application/x-www-form-urlencoded` POST. This can be convenient when
uploading pure text files:

```
$ curl https://api.bitbucket.org/2.0/repositories/atlassian/bbql/src \
  --data-urlencode "/path/to/me.txt=Lorem ipsum." \
  --data-urlencode "message=Initial commit" \
  --data-urlencode "author=Erik van Zijst <erik.van.zijst@gmail.com>"
```

There could be a field name clash if a client were to upload a file
named "message", as this filename clashes with the meta data property
for the commit message. To avoid this and to upload files whose names
clash with the meta data properties, use a leading slash for the files,
e.g. `curl --data-urlencode "/message=file contents"`.

When an explicit slash is omitted for a file whose path matches that of
a meta data parameter, then it is interpreted as meta data, not as a
file.

## Executables and links

While this API aims to facilitate the most common use cases, it is
possible to perform some more advanced operations like creating a new
symlink in the repository, or creating an executable file.

Files can be supplied with a `x-attributes` value in the
`Content-Disposition` header. For example, to upload an executable
file, as well as create a symlink from `README.txt` to `README`:

```
--===============1438169132528273974==
Content-Type: text/plain; charset="us-ascii"
MIME-Version: 1.0
Content-Transfer-Encoding: 7bit
Content-ID: "bin/shutdown.sh"
Content-Disposition: attachment; filename="shutdown.sh"; x-attributes:"executable"

#!/bin/sh
halt

--===============1438169132528273974==
Content-Type: text/plain; charset="us-ascii"
MIME-Version: 1.0
Content-Transfer-Encoding: 7bit
Content-ID: "/README.txt"
Content-Disposition: attachment; filename="README.txt"; x-attributes:"link"

README
--===============1438169132528273974==--
```

Links are files that contain the target path and have
`x-attributes:"link"` set.

When overwriting links with files, or vice versa, the newly uploaded
file determines both the new contents, as well as the attributes. That
means uploading a file without specifying `x-attributes="link"` will
create a regular file, even if the parent commit hosted a symlink at
the same path.

The same applies to executables. When modifying an existing executable
file, the form-data file element must include
`x-attributes="executable"` in order to preserve the executable status
of the file.

Note that this API does not support the creation or manipulation of
subrepos / submodules.
  PostRepositoriesWorkspaceRepoSlugSrc(
    req: operations.PostRepositoriesWorkspaceRepoSlugSrcRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRepositoriesWorkspaceRepoSlugSrcResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRepositoriesWorkspaceRepoSlugSrcRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/src", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .post(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostRepositoriesWorkspaceRepoSlugSrcResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostSnippets - Creates a new snippet under the authenticated user's account.

Snippets can contain multiple files. Both text and binary files are
supported.

The simplest way to create a new snippet from a local file:

    $ curl -u username:password -X POST https://api.bitbucket.org/2.0/snippets               -F file=@image.png

Creating snippets through curl has a few limitations and so let's look
at a more complicated scenario.

Snippets are created with a multipart POST. Both `multipart/form-data`
and `multipart/related` are supported. Both allow the creation of
snippets with both meta data (title, etc), as well as multiple text
and binary files.

The main difference is that `multipart/related` can use rich encoding
for the meta data (currently JSON).


multipart/related (RFC-2387)
----------------------------

This is the most advanced and efficient way to create a paste.

    POST /2.0/snippets/evzijst HTTP/1.1
    Content-Length: 1188
    Content-Type: multipart/related; start="snippet"; boundary="===============1438169132528273974=="
    MIME-Version: 1.0

    --===============1438169132528273974==
    Content-Type: application/json; charset="utf-8"
    MIME-Version: 1.0
    Content-ID: snippet

    {
      "title": "My snippet",
      "is_private": true,
      "scm": "hg",
      "files": {
          "foo.txt": {},
          "image.png": {}
        }
    }

    --===============1438169132528273974==
    Content-Type: text/plain; charset="us-ascii"
    MIME-Version: 1.0
    Content-Transfer-Encoding: 7bit
    Content-ID: "foo.txt"
    Content-Disposition: attachment; filename="foo.txt"

    foo

    --===============1438169132528273974==
    Content-Type: image/png
    MIME-Version: 1.0
    Content-Transfer-Encoding: base64
    Content-ID: "image.png"
    Content-Disposition: attachment; filename="image.png"

    iVBORw0KGgoAAAANSUhEUgAAABQAAAAoCAYAAAD+MdrbAAABD0lEQVR4Ae3VMUoDQRTG8ccUaW2m
    TKONFxArJYJamCvkCnZTaa+VnQdJSBFl2SMsLFrEWNjZBZs0JgiL/+KrhhVmJRbCLPx4O+/DT2TB
    cbblJxf+UWFVVRNsEGAtgvJxnLm2H+A5RQ93uIl+3632PZyl/skjfOn9Gvdwmlcw5aPUwimG+NT5
    EnNN036IaZePUuIcK533NVfal7/5yjWeot2z9ta1cAczHEf7I+3J0ws9Cgx0fsOFpmlfwKcWPuBQ
    73Oc4FHzBaZ8llq4q1mr5B2mOUCt815qYR8eB1hG2VJ7j35q4RofaH7IG+Xrf/PfJhfmwtfFYoIN
    AqxFUD6OMxcvkO+UfKfkOyXfKdsv/AYCHMLVkHAFWgAAAABJRU5ErkJggg==
    --===============1438169132528273974==--

The request contains multiple parts and is structured as follows.

The first part is the JSON document that describes the snippet's
properties or meta data. It either has to be the first part, or the
request's `Content-Type` header must contain the `start` parameter to
point to it.

The remaining parts are the files of which there can be zero or more.
Each file part should contain the `Content-ID` MIME header through
which the JSON meta data's `files` element addresses it. The value
should be the name of the file.

`Content-Disposition` is an optional MIME header. The header's
optional `filename` parameter can be used to specify the file name
that Bitbucket should use when writing the file to disk. When present,
`filename` takes precedence over the value of `Content-ID`.

When the JSON body omits the `files` element, the remaining parts are
not ignored. Instead, each file is added to the new snippet as if its
name was explicitly linked (the use of the `files` elements is
mandatory for some operations like deleting or renaming files).


multipart/form-data
-------------------

The use of JSON for the snippet's meta data is optional. Meta data can
also be supplied as regular form fields in a more conventional
`multipart/form-data` request:

    $ curl -X POST -u credentials https://api.bitbucket.org/2.0/snippets               -F title="My snippet"               -F file=@foo.txt -F file=@image.png

    POST /2.0/snippets HTTP/1.1
    Content-Length: 951
    Content-Type: multipart/form-data; boundary=----------------------------63a4b224c59f

    ------------------------------63a4b224c59f
    Content-Disposition: form-data; name="file"; filename="foo.txt"
    Content-Type: text/plain

    foo

    ------------------------------63a4b224c59f
    Content-Disposition: form-data; name="file"; filename="image.png"
    Content-Type: application/octet-stream

    ?PNG

    IHDR?1??I.....
    ------------------------------63a4b224c59f
    Content-Disposition: form-data; name="title"

    My snippet
    ------------------------------63a4b224c59f--

Here the meta data properties are included as flat, top-level form
fields. The file attachments use the `file` field name. To attach
multiple files, simply repeat the field.

The advantage of `multipart/form-data` over `multipart/related` is
that it can be easier to build clients.

Essentially all properties are optional, `title` and `files` included.


Sharing and Visibility
----------------------

Snippets can be either public (visible to anyone on Bitbucket, as well
as anonymous users), or private (visible only to members of the workspace).
This is controlled through the snippet's `is_private` element:

* **is_private=false** -- everyone, including anonymous users can view
  the snippet
* **is_private=true** -- only workspace members can view the snippet

To create the snippet under a workspace, just append the workspace ID
to the URL. See [`/2.0/snippets/{workspace}`](./snippets/%7Bworkspace%7D#post).
  PostSnippets(
    req: operations.PostSnippetsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostSnippetsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostSnippetsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/snippets";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.PostSnippetsResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.snippet = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostSnippetsWorkspace - Identical to [`/snippets`](../snippets#post), except that the new snippet will be
created under the workspace specified in the path parameter
`{workspace}`.
  PostSnippetsWorkspace(
    req: operations.PostSnippetsWorkspaceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostSnippetsWorkspaceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostSnippetsWorkspaceRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/snippets/{workspace}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.PostSnippetsWorkspaceResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.snippet = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostSnippetsWorkspaceEncodedIdComments - Creates a new comment.

The only required field in the body is `content.raw`.

To create a threaded reply to an existing comment, include `parent.id`.
  PostSnippetsWorkspaceEncodedIdComments(
    req: operations.PostSnippetsWorkspaceEncodedIdCommentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostSnippetsWorkspaceEncodedIdCommentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostSnippetsWorkspaceEncodedIdCommentsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/snippets/{workspace}/{encoded_id}/comments", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.PostSnippetsWorkspaceEncodedIdCommentsResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.snippet = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostTeamsUsernameHooks - Creates a new webhook on the specified team.

Team webhooks are fired for events from all repositories belonging to
that team account.

Note that only admins can install webhooks on teams.

**This endpoint has been deprecated, and you should
use the new [workspace hooks](../../workspaces/%7Bworkspace%7D/hooks#post) endpoint.
For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
  PostTeamsUsernameHooks(
    req: operations.PostTeamsUsernameHooksRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostTeamsUsernameHooksResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostTeamsUsernameHooksRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/teams/{username}/hooks", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostTeamsUsernameHooksResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.webhookSubscription = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostTeamsUsernameProjects - Creates a new project.

**This endpoint has been deprecated,
and you should use the [workspace projects](../../../workspaces/%7Bworkspace%7D/projects#post) endpoint.
For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**

Note that the avatar has to be embedded as either a data-url
or a URL to an external image as shown in the examples below:

```
$ body=$(cat << EOF
{
    "name": "Mars Project",
    "key": "MARS",
    "description": "Software for colonizing mars.",
    "links": {
        "avatar": {
            "href": "data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/..."
        }
    },
    "is_private": false
}
EOF
)
$ curl -H "Content-Type: application/json" \
       -X POST \
       -d "$body" \
       https://api.bitbucket.org/2.0/teams/teams-in-space/projects/ | jq .
{
  // Serialized project document
}
```

or even:

```
$ body=$(cat << EOF
{
    "name": "Mars Project",
    "key": "MARS",
    "description": "Software for colonizing mars.",
    "links": {
        "avatar": {
            "href": "http://i.imgur.com/72tRx4w.gif"
        }
    },
    "is_private": false
}
EOF
)
$ curl -H "Content-Type: application/json" \
       -X POST \
       -d "$body" \
       https://api.bitbucket.org/2.0/teams/teams-in-space/projects/ | jq .
{
  // Serialized project document
}
```
  PostTeamsUsernameProjects(
    req: operations.PostTeamsUsernameProjectsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostTeamsUsernameProjectsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostTeamsUsernameProjectsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/teams/{username}/projects/", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.PostTeamsUsernameProjectsResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.project = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostUsersSelectedUserHooks - Creates a new webhook on the specified user account.

Account-level webhooks are fired for events from all repositories
belonging to that account.

Note that one can only register webhooks on one's own account, not that
of others.

Also, note that the username path parameter has been deprecated due to
[privacy changes](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-changes-gdpr/#removal-of-usernames-from-user-referencing-apis).
Use the account's UUID or account_id instead.

**This endpoint has been deprecated, and you should
use the new [workspace hooks](../../workspaces/%7Bworkspace%7D/hooks#post) endpoint.
For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
  PostUsersSelectedUserHooks(
    req: operations.PostUsersSelectedUserHooksRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostUsersSelectedUserHooksResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostUsersSelectedUserHooksRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/users/{selected_user}/hooks", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostUsersSelectedUserHooksResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.webhookSubscription = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostUsersSelectedUserSshKeys - Adds a new SSH public key to the specified user account and returns the resulting key.

Example:
```
$ curl -X POST -H "Content-Type: application/json" -d '{"key": "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIKqP3Cr632C2dNhhgKVcon4ldUSAeKiku2yP9O9/bDtY user@myhost"}' https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}/ssh-keys

{
    "comment": "user@myhost",
    "created_on": "2018-03-14T13:17:05.196003+00:00",
    "key": "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIKqP3Cr632C2dNhhgKVcon4ldUSAeKiku2yP9O9/bDtY",
    "label": "",
    "last_used": "2018-03-20T13:18:05.196003+00:00",
    "links": {
        "self": {
            "href": "https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}/ssh-keys/b15b6026-9c02-4626-b4ad-b905f99f763a"
        }
    },
    "owner": {
        "display_name": "Mark Adams",
        "links": {
            "avatar": {
                "href": "https://bitbucket.org/account/markadams-atl/avatar/32/"
            },
            "html": {
                "href": "https://bitbucket.org/markadams-atl/"
            },
            "self": {
                "href": "https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}"
            }
        },
        "type": "user",
        "username": "markadams-atl",
        "nickname": "markadams-atl",
        "uuid": "{d7dd0e2d-3994-4a50-a9ee-d260b6cefdab}"
    },
    "type": "ssh_key",
    "uuid": "{b15b6026-9c02-4626-b4ad-b905f99f763a}"
}
```
  PostUsersSelectedUserSshKeys(
    req: operations.PostUsersSelectedUserSshKeysRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostUsersSelectedUserSshKeysResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostUsersSelectedUserSshKeysRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/users/{selected_user}/ssh-keys", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.PostUsersSelectedUserSshKeysResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.sshAccountKey = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 403:
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostWorkspacesWorkspaceHooks - Creates a new webhook on the specified workspace.

Workspace webhooks are fired for events from all repositories contained
by that workspace.

Note that only owners can install webhooks on workspaces.
  PostWorkspacesWorkspaceHooks(
    req: operations.PostWorkspacesWorkspaceHooksRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostWorkspacesWorkspaceHooksResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostWorkspacesWorkspaceHooksRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/workspaces/{workspace}/hooks", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostWorkspacesWorkspaceHooksResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.webhookSubscription = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostWorkspacesWorkspaceProjects - Creates a new project.

Note that the avatar has to be embedded as either a data-url
or a URL to an external image as shown in the examples below:

```
$ body=$(cat << EOF
{
    "name": "Mars Project",
    "key": "MARS",
    "description": "Software for colonizing mars.",
    "links": {
        "avatar": {
            "href": "data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/..."
        }
    },
    "is_private": false
}
EOF
)
$ curl -H "Content-Type: application/json" \
       -X POST \
       -d "$body" \
       https://api.bitbucket.org/2.0/teams/teams-in-space/projects/ | jq .
{
  // Serialized project document
}
```

or even:

```
$ body=$(cat << EOF
{
    "name": "Mars Project",
    "key": "MARS",
    "description": "Software for colonizing mars.",
    "links": {
        "avatar": {
            "href": "http://i.imgur.com/72tRx4w.gif"
        }
    },
    "is_private": false
}
EOF
)
$ curl -H "Content-Type: application/json" \
       -X POST \
       -d "$body" \
       https://api.bitbucket.org/2.0/teams/teams-in-space/projects/ | jq .
{
  // Serialized project document
}
```
  PostWorkspacesWorkspaceProjects(
    req: operations.PostWorkspacesWorkspaceProjectsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostWorkspacesWorkspaceProjectsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostWorkspacesWorkspaceProjectsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/workspaces/{workspace}/projects", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.PostWorkspacesWorkspaceProjectsResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.project = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PutAddon - Updates the application installation for the user.

This endpoint is intended to be used by Bitbucket Connect apps
and only supports JWT authentication -- that is how Bitbucket
identifies the particular installation of the app. Developers
with applications registered in the "Develop Apps" section
of Bitbucket Marketplace need not use this endpoint as
updates for those applications can be sent out via the
UI of that section.

A new, valid descriptor must be provided in the body of the
PUT request.

```
$ curl -X PUT https://api.bitbucket.org/2.0/addon \
  -H "Authorization: JWT <JWT Token>" \
  --header "Content-Type: application/json" \
  --data '{"descriptor": $NEW_DESCRIPTOR}'
```

Note that the scopes of the application cannot be increased
in the new descriptor nor reduced to none.
  PutAddon(
    req: operations.PutAddonRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutAddonResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutAddonRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/addon";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PutAddonResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PutAddonLinkersLinkerKeyValues - Bulk update [linker](/cloud/bitbucket/modules/linker/) values for the specified
linker of the authenticated application.

A linker value lets applications supply values to modify its regular expression.

The base regular expression must use a Bitbucket-specific match group `(?K)`
which will be translated to `([\w\-]+)`. A value must match this pattern.

[Read more about linker values](/cloud/bitbucket/modules/linker/#usingthebitbucketapitosupplyvalues)
  PutAddonLinkersLinkerKeyValues(
    req: operations.PutAddonLinkersLinkerKeyValuesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutAddonLinkersLinkerKeyValuesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutAddonLinkersLinkerKeyValuesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/addon/linkers/{linker_key}/values", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PutAddonLinkersLinkerKeyValuesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PutRepositoriesWorkspaceRepoSlug - Since this endpoint can be used to both update and to create a
repository, the request body depends on the intent.

### Creation

See the POST documentation for the repository endpoint for an example
of the request body.

### Update

Note: Changing the `name` of the repository will cause the location to
be changed. This is because the URL of the repo is derived from the
name (a process called slugification). In such a scenario, it is
possible for the request to fail if the newly created slug conflicts
with an existing repository's slug. But if there is no conflict,
the new location will be returned in the `Location` header of the
response.
  PutRepositoriesWorkspaceRepoSlug(
    req: operations.PutRepositoriesWorkspaceRepoSlugRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutRepositoriesWorkspaceRepoSlugResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutRepositoriesWorkspaceRepoSlugRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PutRepositoriesWorkspaceRepoSlugResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.repository = httpRes?.data;
            }
            break;
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.repository = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PutRepositoriesWorkspaceRepoSlugBranchRestrictionsId - Updates an existing branch restriction rule.

Fields not present in the request body are ignored.

See [`POST`](../branch-restrictions#post) for details.
  PutRepositoriesWorkspaceRepoSlugBranchRestrictionsId(
    req: operations.PutRepositoriesWorkspaceRepoSlugBranchRestrictionsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutRepositoriesWorkspaceRepoSlugBranchRestrictionsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutRepositoriesWorkspaceRepoSlugBranchRestrictionsIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/branch-restrictions/{id}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.PutRepositoriesWorkspaceRepoSlugBranchRestrictionsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.branchrestriction = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PutRepositoriesWorkspaceRepoSlugBranchingModelSettings - Update the branching model configuration for a repository.

The `development` branch can be configured to a specific branch or to
track the main branch. When set to a specific branch it must
currently exist. Only the passed properties will be updated. The
properties not passed will be left unchanged. A request without a
`development` property will leave the development branch unchanged.

It is possible for the `development` branch to be invalid. This
happens when it points at a specific branch that has been
deleted. This is indicated in the `is_valid` field for the branch. It is
not possible to update the settings for `development` if that
would leave the branch in an invalid state. Such a request will be
rejected.

The `production` branch can be a specific branch, the main
branch or disabled. When set to a specific branch it must currently
exist. The `enabled` property can be used to enable (`true`) or
disable (`false`) it. Only the passed properties will be updated. The
properties not passed will be left unchanged. A request without a
`production` property will leave the production branch unchanged.

It is possible for the `production` branch to be invalid. This
happens when it points at a specific branch that has been
deleted. This is indicated in the `is_valid` field for the branch. A
request that would leave `production` enabled and invalid will be
rejected. It is possible to update `production` and make it invalid if
it would also be left disabled.

The `branch_types` property contains the branch types to be updated.
Only the branch types passed will be updated. All updates will be
rejected if it would leave the branching model in an invalid state.
For branch types this means that:

1. The prefixes for all enabled branch types are valid. For example,
   it is not possible to use '*' inside a Git prefix.
2. A prefix of an enabled branch type must not be a prefix of another
   enabled branch type. This is to ensure that a branch can be easily
   classified by its prefix unambiguously.

It is possible to store an invalid prefix if that branch type would be
left disabled. Only the passed properties will be updated. The
properties not passed will be left unchanged. Each branch type must
have a `kind` property to identify it.

Example Body:

```
    {
      "development": {
        "use_mainbranch": true
      },
      "production": {
        "enabled": true,
        "use_mainbranch": false,
        "name": "production"
      },
      "branch_types": [
        {
          "kind": "bugfix",
          "enabled": true,
          "prefix": "bugfix/"
        },
        {
          "kind": "feature",
          "enabled": true,
          "prefix": "feature/"
        },
        {
          "kind": "hotfix",
          "prefix": "hotfix/"
        },
        {
          "kind": "release",
          "enabled": false,
        }
      ]
    }
```
  PutRepositoriesWorkspaceRepoSlugBranchingModelSettings(
    req: operations.PutRepositoriesWorkspaceRepoSlugBranchingModelSettingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutRepositoriesWorkspaceRepoSlugBranchingModelSettingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutRepositoriesWorkspaceRepoSlugBranchingModelSettingsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/branching-model/settings", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PutRepositoriesWorkspaceRepoSlugBranchingModelSettingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.branchingModelSettings = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKey - Used to update the current status of a build status object on the
specific commit.

This operation can also be used to change other properties of the
build status:

* `state`
* `name`
* `description`
* `url`
* `refname`

The `key` cannot be changed.
  PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKey(
    req: operations.PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/commit/{commit}/statuses/build/{key}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.commitstatus = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PutRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsername - Adds the specified user to the repository's list of default
reviewers.

This method is idempotent. Adding a user a second time has no effect.
  PutRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsername(
    req: operations.PutRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/default-reviewers/{target_username}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PutRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PutRepositoriesWorkspaceRepoSlugDeployKeysKeyId - Create a new deploy key in a repository.

The same key needs to be passed in but the comment and label can change.

Example:
```
$ curl -XPUT \
-H "Authorization <auth header>" \
-H "Content-type: application/json" \
https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-keys/1234 -d \
'{
    "label": "newlabel",
    "key": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDAK/b1cHHDr/TEV1JGQl+WjCwStKG6Bhrv0rFpEsYlyTBm1fzN0VOJJYn4ZOPCPJwqse6fGbXntEs+BbXiptR+++HycVgl65TMR0b5ul5AgwrVdZdT7qjCOCgaSV74/9xlHDK8oqgGnfA7ZoBBU+qpVyaloSjBdJfLtPY/xqj4yHnXKYzrtn/uFc4Kp9Tb7PUg9Io3qohSTGJGVHnsVblq/rToJG7L5xIo0OxK0SJSQ5vuId93ZuFZrCNMXj8JDHZeSEtjJzpRCBEXHxpOPhAcbm4MzULgkFHhAVgp4JbkrT99/wpvZ7r9AdkTg7HGqL3rlaDrEcWfL7Lu6TnhBdq5 newcomment",
}'

Output:
{
    "comment": "newcomment",
    "last_used": null,
    "links": {
        "self": {
            "href": "https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-keys/1234"
        }
    },
    "repository": {
        "full_name": "mleu/test",
        "name": "test",
        "type": "repository",
        "uuid": "{85d08b4e-571d-44e9-a507-fa476535aa98}"
    },
    "label": "newlabel",
    "created_on": "2018-08-15T23:50:59.993890+00:00",
    "key": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDAK/b1cHHDr/TEV1JGQl+WjCwStKG6Bhrv0rFpEsYlyTBm1fzN0VOJJYn4ZOPCPJwqse6fGbXntEs+BbXiptR+++HycVgl65TMR0b5ul5AgwrVdZdT7qjCOCgaSV74/9xlHDK8oqgGnfA7ZoBBU+qpVyaloSjBdJfLtPY/xqj4yHnXKYzrtn/uFc4Kp9Tb7PUg9Io3qohSTGJGVHnsVblq/rToJG7L5xIo0OxK0SJSQ5vuId93ZuFZrCNMXj8JDHZeSEtjJzpRCBEXHxpOPhAcbm4MzULgkFHhAVgp4JbkrT99/wpvZ7r9AdkTg7HGqL3rlaDrEcWfL7Lu6TnhBdq5",
    "id": 1234,
    "type": "deploy_key"
}
```
  PutRepositoriesWorkspaceRepoSlugDeployKeysKeyId(
    req: operations.PutRepositoriesWorkspaceRepoSlugDeployKeysKeyIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutRepositoriesWorkspaceRepoSlugDeployKeysKeyIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutRepositoriesWorkspaceRepoSlugDeployKeysKeyIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/deploy-keys/{key_id}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PutRepositoriesWorkspaceRepoSlugDeployKeysKeyIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.deployKey = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 403:
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PutRepositoriesWorkspaceRepoSlugHooksUid - Updates the specified webhook subscription.

The following properties can be mutated:

* `description`
* `url`
* `active`
* `events`
  PutRepositoriesWorkspaceRepoSlugHooksUid(
    req: operations.PutRepositoriesWorkspaceRepoSlugHooksUidRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutRepositoriesWorkspaceRepoSlugHooksUidResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutRepositoriesWorkspaceRepoSlugHooksUidRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/hooks/{uid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PutRepositoriesWorkspaceRepoSlugHooksUidResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.webhookSubscription = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PutRepositoriesWorkspaceRepoSlugIssuesIssueId - Modifies the issue.

```
$ curl https://api.bitbucket.org/2.0/repostories/evzijst/dogslow/issues/123 \
  -u evzijst -s -X PUT -H 'Content-Type: application/json' \
  -d '{
  "title": "Updated title",
  "assignee": {
    "username": "evzijst"
  },
  "priority": "minor",
  "version": {
    "name": "1.0"
  },
  "component": null
}'
```

This example changes the `title`, `assignee`, `priority` and the
`version`. It also removes the value of the `component` from the issue
by setting the field to `null`. Any field not present keeps its existing
value.

Each time an issue is edited in the UI or through the API, an immutable
change record is created under the `/issues/123/changes` endpoint. It
also has a comment associated with the change.
  PutRepositoriesWorkspaceRepoSlugIssuesIssueId(
    req: operations.PutRepositoriesWorkspaceRepoSlugIssuesIssueIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutRepositoriesWorkspaceRepoSlugIssuesIssueIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutRepositoriesWorkspaceRepoSlugIssuesIssueIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/issues/{issue_id}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PutRepositoriesWorkspaceRepoSlugIssuesIssueIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.issue = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PutRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentId - Updates the content of the specified issue comment. Note that only
the `content.raw` field can be modified.

```
$ curl https://api.bitbucket.org/2.0/repositories/atlassian/prlinks/issues/42/comments/5728901 \
  -X PUT -u evzijst \
  -H 'Content-Type: application/json' \
  -d '{"content": {"raw": "Lorem ipsum."}'
```
  PutRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentId(
    req: operations.PutRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/issues/{issue_id}/comments/{comment_id}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.PutRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.issueComment = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PutRepositoriesWorkspaceRepoSlugIssuesIssueIdVote - Vote for this issue.

To cast your vote, do an empty PUT. The 204 status code indicates that
the operation was successful.
  PutRepositoriesWorkspaceRepoSlugIssuesIssueIdVote(
    req: operations.PutRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/issues/{issue_id}/vote", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PutRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PutRepositoriesWorkspaceRepoSlugIssuesIssueIdWatch - Start watching this issue.

To start watching this issue, do an empty PUT. The 204 status code
indicates that the operation was successful.
  PutRepositoriesWorkspaceRepoSlugIssuesIssueIdWatch(
    req: operations.PutRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/issues/{issue_id}/watch", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PutRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestId - Mutates the specified pull request.

This can be used to change the pull request's branches or description.

Only open pull requests can be mutated.
  PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestId(
    req: operations.PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.pullrequest = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentId - Updates a specific pull request comment.
  PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentId(
    req: operations.PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/comments/{comment_id}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.pullrequestComment = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PutSnippetsWorkspaceEncodedId - Used to update a snippet. Use this to add and delete files and to
change a snippet's title.

To update a snippet, one can either PUT a full snapshot, or only the
parts that need to be changed.

The contract for PUT on this API is that properties missing from the
request remain untouched so that snippets can be efficiently
manipulated with differential payloads.

To delete a property (e.g. the title, or a file), include its name in
the request, but omit its value (use `null`).

As in Git, explicit renaming of files is not supported. Instead, to
rename a file, delete it and add it again under another name. This can
be done atomically in a single request. Rename detection is left to
the SCM.

PUT supports three different content types for both request and
response bodies:

* `application/json`
* `multipart/related`
* `multipart/form-data`

The content type used for the request body can be different than that
used for the response. Content types are specified using standard HTTP
headers.

Use the `Content-Type` and `Accept` headers to select the desired
request and response format.


application/json
----------------

As with creation and retrieval, the content type determines what
properties can be manipulated. `application/json` does not support
file contents and is therefore limited to a snippet's meta data.

To update the title, without changing any of its files:

    $ curl -X POST -H "Content-Type: application/json" https://api.bitbucket.org/2.0/snippets/evzijst/kypj             -d '{"title": "Updated title"}'


To delete the title:

    $ curl -X POST -H "Content-Type: application/json" https://api.bitbucket.org/2.0/snippets/evzijst/kypj             -d '{"title": null}'

Not all parts of a snippet can be manipulated. The owner and creator
for instance are immutable.


multipart/related
-----------------

`multipart/related` can be used to manipulate all of a snippet's
properties. The body is identical to a POST. properties omitted from
the request are left unchanged. Since the `start` part contains JSON,
the mechanism for manipulating the snippet's meta data is identical
to `application/json` requests.

To update one of a snippet's file contents, while also changing its
title:

    PUT /2.0/snippets/evzijst/kypj HTTP/1.1
    Content-Length: 288
    Content-Type: multipart/related; start="snippet"; boundary="===============1438169132528273974=="
    MIME-Version: 1.0

    --===============1438169132528273974==
    Content-Type: application/json; charset="utf-8"
    MIME-Version: 1.0
    Content-ID: snippet

    {
      "title": "My updated snippet",
      "files": {
          "foo.txt": {}
        }
    }

    --===============1438169132528273974==
    Content-Type: text/plain; charset="us-ascii"
    MIME-Version: 1.0
    Content-Transfer-Encoding: 7bit
    Content-ID: "foo.txt"
    Content-Disposition: attachment; filename="foo.txt"

    Updated file contents.

    --===============1438169132528273974==--

Here only the parts that are changed are included in the body. The
other files remain untouched.

Note the use of the `files` list in the JSON part. This list contains
the files that are being manipulated. This list should have
corresponding multiparts in the request that contain the new contents
of these files.

If a filename in the `files` list does not have a corresponding part,
it will be deleted from the snippet, as shown below:

    PUT /2.0/snippets/evzijst/kypj HTTP/1.1
    Content-Length: 188
    Content-Type: multipart/related; start="snippet"; boundary="===============1438169132528273974=="
    MIME-Version: 1.0

    --===============1438169132528273974==
    Content-Type: application/json; charset="utf-8"
    MIME-Version: 1.0
    Content-ID: snippet

    {
      "files": {
        "image.png": {}
      }
    }

    --===============1438169132528273974==--

To simulate a rename, delete a file and add the same file under
another name:

    PUT /2.0/snippets/evzijst/kypj HTTP/1.1
    Content-Length: 212
    Content-Type: multipart/related; start="snippet"; boundary="===============1438169132528273974=="
    MIME-Version: 1.0

    --===============1438169132528273974==
    Content-Type: application/json; charset="utf-8"
    MIME-Version: 1.0
    Content-ID: snippet

    {
        "files": {
          "foo.txt": {},
          "bar.txt": {}
        }
    }

    --===============1438169132528273974==
    Content-Type: text/plain; charset="us-ascii"
    MIME-Version: 1.0
    Content-Transfer-Encoding: 7bit
    Content-ID: "bar.txt"
    Content-Disposition: attachment; filename="bar.txt"

    foo

    --===============1438169132528273974==--


multipart/form-data
-----------------

Again, one can also use `multipart/form-data` to manipulate file
contents and meta data atomically.

    $ curl -X PUT http://localhost:12345/2.0/snippets/evzijst/kypj             -F title="My updated snippet" -F file=@foo.txt

    PUT /2.0/snippets/evzijst/kypj HTTP/1.1
    Content-Length: 351
    Content-Type: multipart/form-data; boundary=----------------------------63a4b224c59f

    ------------------------------63a4b224c59f
    Content-Disposition: form-data; name="file"; filename="foo.txt"
    Content-Type: text/plain

    foo

    ------------------------------63a4b224c59f
    Content-Disposition: form-data; name="title"

    My updated snippet
    ------------------------------63a4b224c59f

To delete a file, omit its contents while including its name in the
`files` field:

    $ curl -X PUT https://api.bitbucket.org/2.0/snippets/evzijst/kypj -F files=image.png

    PUT /2.0/snippets/evzijst/kypj HTTP/1.1
    Content-Length: 149
    Content-Type: multipart/form-data; boundary=----------------------------ef8871065a86

    ------------------------------ef8871065a86
    Content-Disposition: form-data; name="files"

    image.png
    ------------------------------ef8871065a86--

The explicit use of the `files` element in `multipart/related` and
`multipart/form-data` is only required when deleting files.
The default mode of operation is for file parts to be processed,
regardless of whether or not they are listed in `files`, as a
convenience to the client.
  PutSnippetsWorkspaceEncodedId(
    req: operations.PutSnippetsWorkspaceEncodedIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutSnippetsWorkspaceEncodedIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutSnippetsWorkspaceEncodedIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/snippets/{workspace}/{encoded_id}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PutSnippetsWorkspaceEncodedIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.snippet = httpRes?.data;
            }
            if (MatchContentType(contentType, `multipart/form-data`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `multipart/related`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `multipart/form-data`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `multipart/related`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `multipart/form-data`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `multipart/related`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `multipart/form-data`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `multipart/related`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PutSnippetsWorkspaceEncodedIdCommentsCommentId - Updates a comment.

Comments can only be updated by their author.
  PutSnippetsWorkspaceEncodedIdCommentsCommentId(
    req: operations.PutSnippetsWorkspaceEncodedIdCommentsCommentIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutSnippetsWorkspaceEncodedIdCommentsCommentIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutSnippetsWorkspaceEncodedIdCommentsCommentIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/snippets/{workspace}/{encoded_id}/comments/{comment_id}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PutSnippetsWorkspaceEncodedIdCommentsCommentIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PutSnippetsWorkspaceEncodedIdNodeId - Identical to `UPDATE /snippets/encoded_id`, except that this endpoint
takes an explicit commit revision. Only the snippet's "HEAD"/"tip"
(most recent) version can be updated and requests on all other,
older revisions fail by returning a 405 status.

Usage of this endpoint over the unrestricted `/snippets/encoded_id`
could be desired if the caller wants to be sure no concurrent
modifications have taken place between the moment of the UPDATE
request and the original GET.

This can be considered a so-called "Compare And Swap", or CAS
operation.

Other than that, the two endpoints are identical in behavior.
  PutSnippetsWorkspaceEncodedIdNodeId(
    req: operations.PutSnippetsWorkspaceEncodedIdNodeIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutSnippetsWorkspaceEncodedIdNodeIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutSnippetsWorkspaceEncodedIdNodeIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/snippets/{workspace}/{encoded_id}/{node_id}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PutSnippetsWorkspaceEncodedIdNodeIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.snippet = httpRes?.data;
            }
            if (MatchContentType(contentType, `multipart/form-data`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `multipart/related`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `multipart/form-data`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `multipart/related`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `multipart/form-data`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `multipart/related`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `multipart/form-data`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `multipart/related`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 405:
            if (MatchContentType(contentType, `multipart/form-data`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `multipart/related`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PutSnippetsWorkspaceEncodedIdWatch - Used to start watching a specific snippet. Returns 204 (No Content).
  PutSnippetsWorkspaceEncodedIdWatch(
    req: operations.PutSnippetsWorkspaceEncodedIdWatchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutSnippetsWorkspaceEncodedIdWatchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutSnippetsWorkspaceEncodedIdWatchRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/snippets/{workspace}/{encoded_id}/watch", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PutSnippetsWorkspaceEncodedIdWatchResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            if (MatchContentType(contentType, `application/json`)) {
                res.paginatedUsers = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PutTeamsUsernameHooksUid - Updates the specified webhook subscription.

The following properties can be mutated:

* `description`
* `url`
* `active`
* `events`

**This endpoint has been deprecated, and you should
use the new [workspace hooks](../../../workspaces/%7Bworkspace%7D/hooks/%7Buid%7D#put) endpoint.
For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
  PutTeamsUsernameHooksUid(
    req: operations.PutTeamsUsernameHooksUidRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutTeamsUsernameHooksUidResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutTeamsUsernameHooksUidRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/teams/{username}/hooks/{uid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PutTeamsUsernameHooksUidResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.webhookSubscription = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PutTeamsUsernameProjectsProjectKey - Since this endpoint can be used to both update and to create a
project, the request body depends on the intent.

**This endpoint has been deprecated,
and you should use the [workspace project](../../../workspaces/%7Bworkspace%7D/projects/%7Bproject_key%7D#put) endpoint.
For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**

### Creation

See the POST documentation for the project collection for an
example of the request body.

Note: The `key` should not be specified in the body of request
(since it is already present in the URL). The `name` is required,
everything else is optional.

### Update

See the POST documentation for the project collection for an
example of the request body.

Note: The key is not required in the body (since it is already in
the URL). The key may be specified in the body, if the intent is
to change the key itself. In such a scenario, the location of the
project is changed and is returned in the `Location` header of the
response.
  PutTeamsUsernameProjectsProjectKey(
    req: operations.PutTeamsUsernameProjectsProjectKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutTeamsUsernameProjectsProjectKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutTeamsUsernameProjectsProjectKeyRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/teams/{username}/projects/{project_key}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.PutTeamsUsernameProjectsProjectKeyResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.project = httpRes?.data;
            }
            break;
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.project = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PutUsersSelectedUserHooksUid - Updates the specified webhook subscription.

The following properties can be mutated:

* `description`
* `url`
* `active`
* `events`

Note that the username path parameter has been deprecated due to
[privacy changes](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-changes-gdpr/#removal-of-usernames-from-user-referencing-apis).
Use the account's UUID or account_id instead.

**This endpoint has been deprecated, and you should
use the new [workspace hook details](../../../workspaces/%7Bworkspace%7D/hooks/%7Buid%7D#put) endpoint.
For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
  PutUsersSelectedUserHooksUid(
    req: operations.PutUsersSelectedUserHooksUidRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutUsersSelectedUserHooksUidResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutUsersSelectedUserHooksUidRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/users/{selected_user}/hooks/{uid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PutUsersSelectedUserHooksUidResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.webhookSubscription = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PutUsersSelectedUserSshKeysKeyId - Updates a specific SSH public key on a user's account

Note: Only the 'comment' field can be updated using this API. To modify the key or comment values, you must delete and add the key again.

Example:
```
$ curl -X PUT -H "Content-Type: application/json" -d '{"label": "Work key"}' https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}/ssh-keys/{b15b6026-9c02-4626-b4ad-b905f99f763a}

{
    "comment": "",
    "created_on": "2018-03-14T13:17:05.196003+00:00",
    "key": "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIKqP3Cr632C2dNhhgKVcon4ldUSAeKiku2yP9O9/bDtY",
    "label": "Work key",
    "last_used": "2018-03-20T13:18:05.196003+00:00",
    "links": {
        "self": {
            "href": "https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}/ssh-keys/b15b6026-9c02-4626-b4ad-b905f99f763a"
        }
    },
    "owner": {
        "display_name": "Mark Adams",
        "links": {
            "avatar": {
                "href": "https://bitbucket.org/account/markadams-atl/avatar/32/"
            },
            "html": {
                "href": "https://bitbucket.org/markadams-atl/"
            },
            "self": {
                "href": "https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}"
            }
        },
        "type": "user",
        "username": "markadams-atl",
        "nickname": "markadams-atl",
        "uuid": "{d7dd0e2d-3994-4a50-a9ee-d260b6cefdab}"
    },
    "type": "ssh_key",
    "uuid": "{b15b6026-9c02-4626-b4ad-b905f99f763a}"
}
```
  PutUsersSelectedUserSshKeysKeyId(
    req: operations.PutUsersSelectedUserSshKeysKeyIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutUsersSelectedUserSshKeysKeyIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutUsersSelectedUserSshKeysKeyIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/users/{selected_user}/ssh-keys/{key_id}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PutUsersSelectedUserSshKeysKeyIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.sshAccountKey = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 403:
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PutWorkspacesWorkspaceHooksUid - Updates the specified webhook subscription.

The following properties can be mutated:

* `description`
* `url`
* `active`
* `events`
  PutWorkspacesWorkspaceHooksUid(
    req: operations.PutWorkspacesWorkspaceHooksUidRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutWorkspacesWorkspaceHooksUidResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutWorkspacesWorkspaceHooksUidRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/workspaces/{workspace}/hooks/{uid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PutWorkspacesWorkspaceHooksUidResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.webhookSubscription = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PutWorkspacesWorkspaceProjectsProjectKey - Since this endpoint can be used to both update and to create a
project, the request body depends on the intent.

### Creation

See the POST documentation for the project collection for an
example of the request body.

Note: The `key` should not be specified in the body of request
(since it is already present in the URL). The `name` is required,
everything else is optional.

### Update

See the POST documentation for the project collection for an
example of the request body.

Note: The key is not required in the body (since it is already in
the URL). The key may be specified in the body, if the intent is
to change the key itself. In such a scenario, the location of the
project is changed and is returned in the `Location` header of the
response.
  PutWorkspacesWorkspaceProjectsProjectKey(
    req: operations.PutWorkspacesWorkspaceProjectsProjectKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutWorkspacesWorkspaceProjectsProjectKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutWorkspacesWorkspaceProjectsProjectKeyRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/workspaces/{workspace}/projects/{project_key}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.PutWorkspacesWorkspaceProjectsProjectKeyResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.project = httpRes?.data;
            }
            break;
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.project = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // BulkCreateOrUpdateAnnotations - Bulk upload of annotations.
Annotations are individual findings that have been identified as part of a report, for example, a line of code that represents a vulnerability. These annotations can be attached to a specific file and even a specific line in that file, however, that is optional. Annotations are not mandatory and a report can contain up to 1000 annotations.

Add the annotations you want to upload as objects in a JSON array and make sure each annotation has the external_id field set to a unique value. If you want to use an existing id from your own system, we recommend prefixing it with your system's name to avoid collisions, for example, mySystem-annotation001. The external id can later be used to identify the report as an alternative to the generated [UUID](https://developer.atlassian.com/bitbucket/api/2/reference/meta/uri-uuid#uuid). You can upload up to 100 annotations per POST request.

### Sample cURL request:
```
curl --location 'https://api.bitbucket.org/2.0/repositories/<username>/<reposity-name>/commit/<commit-hash>/reports/mysystem-001/annotations' \
--header 'Content-Type: application/json' \
--data-raw '[
  {
        "external_id": "mysystem-annotation001",
        "title": "Security scan report",
        "annotation_type": "VULNERABILITY",
        "summary": "This line represents a security threat.",
        "severity": "HIGH",
      "path": "my-service/src/main/java/com/myCompany/mysystem/logic/Main.java",
        "line": 42
  },
  {
        "external_id": "mySystem-annotation002",
        "title": "Bug report",
        "annotation_type": "BUG",
        "result": "FAILED",
        "summary": "This line might introduce a bug.",
        "severity": "MEDIUM",
      "path": "my-service/src/main/java/com/myCompany/mysystem/logic/Helper.java",
        "line": 13
  }
]'
```

### Possible field values:
annotation_type: VULNERABILITY, CODE_SMELL, BUG
result: PASSED, FAILED, IGNORED, SKIPPED
severity: HIGH, MEDIUM, LOW, CRITICAL

Please refer to the [Code Insights documentation](https://confluence.atlassian.com/bitbucket/code-insights-994316785.html) for more information.

  BulkCreateOrUpdateAnnotations(
    req: operations.BulkCreateOrUpdateAnnotationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.BulkCreateOrUpdateAnnotationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.BulkCreateOrUpdateAnnotationsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations", req.pathParams);
    
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
        let res: operations.BulkCreateOrUpdateAnnotationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.reportAnnotations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateDeploymentVariable - Create a deployment environment level variable.
  CreateDeploymentVariable(
    req: operations.CreateDeploymentVariableRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateDeploymentVariableResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateDeploymentVariableRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/deployments_config/environments/{environment_uuid}/variables", req.pathParams);
    
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
      .post(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CreateDeploymentVariableResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.deploymentVariable = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 409:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateEnvironment - Create an environment.
  CreateEnvironment(
    req: operations.CreateEnvironmentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateEnvironmentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateEnvironmentRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/environments/", req.pathParams);
    
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
        let res: operations.CreateEnvironmentResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.deploymentEnvironment = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 409:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateOrUpdateAnnotation - Creates or updates an individual annotation for the specified report.
Annotations are individual findings that have been identified as part of a report, for example, a line of code that represents a vulnerability. These annotations can be attached to a specific file and even a specific line in that file, however, that is optional. Annotations are not mandatory and a report can contain up to 1000 annotations.

Just as reports, annotation needs to be uploaded with a unique ID that can later be used to identify the report as an alternative to the generated [UUID](https://developer.atlassian.com/bitbucket/api/2/reference/meta/uri-uuid#uuid). If you want to use an existing id from your own system, we recommend prefixing it with your system's name to avoid collisions, for example, mySystem-annotation001.

### Sample cURL request:
```
curl --request PUT 'https://api.bitbucket.org/2.0/repositories/<username>/<reposity-name>/commit/<commit-hash>/reports/mySystem-001/annotations/mysystem-annotation001' \
--header 'Content-Type: application/json' \
--data-raw '{
    "title": "Security scan report",
    "annotation_type": "VULNERABILITY",
    "summary": "This line represents a security thread.",
    "severity": "HIGH",
    "path": "my-service/src/main/java/com/myCompany/mysystem/logic/Main.java",
    "line": 42
}'
```

### Possible field values:
annotation_type: VULNERABILITY, CODE_SMELL, BUG
result: PASSED, FAILED, IGNORED, SKIPPED
severity: HIGH, MEDIUM, LOW, CRITICAL

Please refer to the [Code Insights documentation](https://confluence.atlassian.com/bitbucket/code-insights-994316785.html) for more information.

  CreateOrUpdateAnnotation(
    req: operations.CreateOrUpdateAnnotationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateOrUpdateAnnotationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateOrUpdateAnnotationRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations/{annotationId}", req.pathParams);
    
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
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CreateOrUpdateAnnotationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.reportAnnotation = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateOrUpdateReport - Creates or updates a report for the specified commit.
To upload a report, make sure to generate an ID that is unique across all reports for that commit. If you want to use an existing id from your own system, we recommend prefixing it with your system's name to avoid collisions, for example, mySystem-001.

### Sample cURL request:
```
curl --request PUT 'https://api.bitbucket.org/2.0/repositories/<username>/<reposity-name>/commit/<commit-hash>/reports/mysystem-001' \
--header 'Content-Type: application/json' \
--data-raw '{
    "title": "Security scan report",
    "details": "This pull request introduces 10 new dependency vulnerabilities.",
    "report_type": "SECURITY",
    "reporter": "mySystem",
    "link": "http://www.mysystem.com/reports/001",
    "result": "FAILED",
    "data": [
        {
            "title": "Duration (seconds)",
            "type": "DURATION",
            "value": 14
        },
        {
            "title": "Safe to merge?",
            "type": "BOOLEAN",
            "value": false
        }
    ]
}'
```

### Possible field values:
report_type: SECURITY, COVERAGE, TEST, BUG
result: PASSED, FAILED, PENDING
data.type: BOOLEAN, DATE, DURATION, LINK, NUMBER, PERCENTAGE, TEXT

#### Data field formats
| Type  Field   | Value Field Type  | Value Field Display |
|:--------------|:------------------|:--------------------|
| None/ Omitted | Number, String or Boolean (not an array or object) | Plain text |
| BOOLEAN	| Boolean | The value will be read as a JSON boolean and displayed as 'Yes' or 'No'. |
| DATE  | Number | The value will be read as a JSON number in the form of a Unix timestamp (milliseconds) and will be displayed as a relative date if the date is less than one week ago, otherwise  it will be displayed as an absolute date. |
| DURATION | Number | The value will be read as a JSON number in milliseconds and will be displayed in a human readable duration format. |
| LINK | Object: `{"text": "Link text here", "href": "https://link.to.annotation/in/external/tool"}` | The value will be read as a JSON object containing the fields "text" and "href" and will be displayed as a clickable link on the report. |
| NUMBER | Number | The value will be read as a JSON number and large numbers will be  displayed in a human readable format (e.g. 14.3k). |
| PERCENTAGE | Number (between 0 and 100) | The value will be read as a JSON number between 0 and 100 and will be displayed with a percentage sign. |
| TEXT | String | The value will be read as a JSON string and will be displayed as-is |

Please refer to the [Code Insights documentation](https://confluence.atlassian.com/bitbucket/code-insights-994316785.html) for more information.

  CreateOrUpdateReport(
    req: operations.CreateOrUpdateReportRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateOrUpdateReportResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateOrUpdateReportRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}", req.pathParams);
    
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
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CreateOrUpdateReportResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.report = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreatePipelineForRepository - Endpoint to create and initiate a pipeline.
There are a couple of different options to initiate a pipeline, where the payload of the request will determine which type of pipeline will be instantiated.
# Trigger a Pipeline for a branch
One way to trigger pipelines is by specifying the branch for which you want to trigger a pipeline.
The specified branch will be used to determine which pipeline definition from the `bitbucket-pipelines.yml` file will be applied to initiate the pipeline. The pipeline will then do a clone of the repository and checkout the latest revision of the specified branch.

### Example

```
$ curl -X POST -is -u username:password \
  -H 'Content-Type: application/json' \
 https://api.bitbucket.org/2.0/repositories/jeroendr/meat-demo2/pipelines/ \
  -d '
  {
    "target": {
      "ref_type": "branch",
      "type": "pipeline_ref_target",
      "ref_name": "master"
    }
  }'
```
# Trigger a Pipeline for a commit on a branch or tag
You can initiate a pipeline for a specific commit and in the context of a specified reference (e.g. a branch, tag or bookmark).
The specified reference will be used to determine which pipeline definition from the bitbucket-pipelines.yml file will be applied to initiate the pipeline. The pipeline will clone the repository and then do a checkout the specified reference.

The following reference types are supported:

* `branch`
* `named_branch`
* `bookmark`
 * `tag`

### Example

```
$ curl -X POST -is -u username:password \
  -H 'Content-Type: application/json' \
  https://api.bitbucket.org/2.0/repositories/jeroendr/meat-demo2/pipelines/ \
  -d '
  {
    "target": {
      "commit": {
        "type": "commit",
        "hash": "ce5b7431602f7cbba007062eeb55225c6e18e956"
      },
      "ref_type": "branch",
      "type": "pipeline_ref_target",
      "ref_name": "master"
    }
  }'
```
# Trigger a specific pipeline definition for a commit
You can trigger a specific pipeline that is defined in your `bitbucket-pipelines.yml` file for a specific commit.
In addition to the commit revision, you specify the type and pattern of the selector that identifies the pipeline definition. The resulting pipeline will then clone the repository and checkout the specified revision.

### Example

```
$ curl -X POST -is -u username:password \
  -H 'Content-Type: application/json' \
 https://api.bitbucket.org/2.0/repositories/jeroendr/meat-demo2/pipelines/ \
 -d '
  {
     "target": {
      "commit": {
         "hash":"a3c4e02c9a3755eccdc3764e6ea13facdf30f923",
         "type":"commit"
       },
        "selector": {
           "type":"custom",
              "pattern":"Deploy to production"
          },
        "type":"pipeline_commit_target"
   }
  }'
```
# Trigger a specific pipeline definition for a commit on a branch or tag
You can trigger a specific pipeline that is defined in your `bitbucket-pipelines.yml` file for a specific commit in the context of a specified reference.
In addition to the commit revision, you specify the type and pattern of the selector that identifies the pipeline definition, as well as the reference information. The resulting pipeline will then clone the repository a checkout the specified reference.

### Example

```
$ curl -X POST -is -u username:password \
  -H 'Content-Type: application/json' \
 https://api.bitbucket.org/2.0/repositories/jeroendr/meat-demo2/pipelines/ \
 -d '
  {
     "target": {
      "commit": {
         "hash":"a3c4e02c9a3755eccdc3764e6ea13facdf30f923",
         "type":"commit"
       },
       "selector": {
          "type": "custom",
          "pattern": "Deploy to production"
       },
       "type": "pipeline_ref_target",
       "ref_name": "master",
       "ref_type": "branch"
     }
  }'
```


# Trigger a custom pipeline with variables
In addition to triggering a custom pipeline that is defined in your `bitbucket-pipelines.yml` file as shown in the examples above, you can specify variables that will be available for your build. In the request, provide a list of variables, specifying the following for each variable: key, value, and whether it should be secured or not (this field is optional and defaults to not secured).

### Example

```
$ curl -X POST -is -u username:password \
  -H 'Content-Type: application/json' \
 https://api.bitbucket.org/2.0/repositories/{workspace}/{repo_slug}/pipelines/ \
 -d '
  {
    "target": {
      "type": "pipeline_ref_target",
      "ref_type": "branch",
      "ref_name": "master",
      "selector": {
        "type": "custom",
        "pattern": "Deploy to production"
      }
    },
    "variables": [
      {
        "key": "var1key",
        "value": "var1value",
        "secured": true
      },
      {
        "key": "var2key",
        "value": "var2value"
      }
    ]
  }'
```

# Trigger a pull request pipeline

You can also initiate a pipeline for a specific pull request.

### Example

```
$ curl -X POST -is -u username:password \
  -H 'Content-Type: application/json' \
 https://api.bitbucket.org/2.0/repositories/{workspace}/{repo_slug}/pipelines/ \
 -d '
  {
	"target": {
      "type": "pipeline_pullrequest_target",
	  "source": "pull-request-branch",
      "destination": "master",
      "destination_commit": {
      	 "hash" : "9f848b7"
      },
      "commit": {
      	"hash" : "1a372fc"
      },
      "pullrequest" : {
      	"id" : "3"
      },
	  "selector": {
        "type": "pull-requests",
        "pattern": "**"
      }
    }
  }'
```

  CreatePipelineForRepository(
    req: operations.CreatePipelineForRepositoryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreatePipelineForRepositoryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreatePipelineForRepositoryRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/pipelines/", req.pathParams);
    
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
        let res: operations.CreatePipelineForRepositoryResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.pipeline = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreatePipelineVariableForTeam - Create an account level variable.
This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).
  CreatePipelineVariableForTeam(
    req: operations.CreatePipelineVariableForTeamRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreatePipelineVariableForTeamResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreatePipelineVariableForTeamRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/teams/{username}/pipelines_config/variables/", req.pathParams);
    
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
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CreatePipelineVariableForTeamResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.pipelineVariable = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 409:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreatePipelineVariableForUser - Create a user level variable.
This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).
  CreatePipelineVariableForUser(
    req: operations.CreatePipelineVariableForUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreatePipelineVariableForUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreatePipelineVariableForUserRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/users/{selected_user}/pipelines_config/variables/", req.pathParams);
    
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
        let res: operations.CreatePipelineVariableForUserResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.pipelineVariable = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 409:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreatePipelineVariableForWorkspace - Create a workspace level variable.
  CreatePipelineVariableForWorkspace(
    req: operations.CreatePipelineVariableForWorkspaceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreatePipelineVariableForWorkspaceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreatePipelineVariableForWorkspaceRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/workspaces/{workspace}/pipelines-config/variables", req.pathParams);
    
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
        let res: operations.CreatePipelineVariableForWorkspaceResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.pipelineVariable = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 409:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateRepositoryPipelineKnownHost - Create a repository level known host.
  CreateRepositoryPipelineKnownHost(
    req: operations.CreateRepositoryPipelineKnownHostRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateRepositoryPipelineKnownHostResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateRepositoryPipelineKnownHostRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/known_hosts/", req.pathParams);
    
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
        let res: operations.CreateRepositoryPipelineKnownHostResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.pipelineKnownHost = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 409:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateRepositoryPipelineSchedule - Create a schedule for the given repository.
  CreateRepositoryPipelineSchedule(
    req: operations.CreateRepositoryPipelineScheduleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateRepositoryPipelineScheduleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateRepositoryPipelineScheduleRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/pipelines_config/schedules/", req.pathParams);
    
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
        let res: operations.CreateRepositoryPipelineScheduleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.pipelineSchedule = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateRepositoryPipelineVariable - Create a repository level variable.
  CreateRepositoryPipelineVariable(
    req: operations.CreateRepositoryPipelineVariableRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateRepositoryPipelineVariableResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateRepositoryPipelineVariableRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/pipelines_config/variables/", req.pathParams);
    
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
        let res: operations.CreateRepositoryPipelineVariableResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.pipelineVariable = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 409:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteAnnotation - Deletes a single Annotation matching the provided ID.
  DeleteAnnotation(
    req: operations.DeleteAnnotationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteAnnotationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteAnnotationRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations/{annotationId}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteAnnotationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteCommitHostedPropertyValue - Delete an [application property](/cloud/bitbucket/application-properties/) value stored against a commit.
  DeleteCommitHostedPropertyValue(
    req: operations.DeleteCommitHostedPropertyValueRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteCommitHostedPropertyValueResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteCommitHostedPropertyValueRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/commit/{commit}/properties/{app_key}/{property_name}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteCommitHostedPropertyValueResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteDeploymentVariable - Delete a deployment environment level variable.
  DeleteDeploymentVariable(
    req: operations.DeleteDeploymentVariableRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteDeploymentVariableResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteDeploymentVariableRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/deployments_config/environments/{environment_uuid}/variables/{variable_uuid}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteDeploymentVariableResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteEnvironmentForRepository - Delete an environment
  DeleteEnvironmentForRepository(
    req: operations.DeleteEnvironmentForRepositoryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteEnvironmentForRepositoryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteEnvironmentForRepositoryRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/environments/{environment_uuid}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteEnvironmentForRepositoryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeletePipelineVariableForTeam - Delete a team level variable.
This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).
  DeletePipelineVariableForTeam(
    req: operations.DeletePipelineVariableForTeamRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeletePipelineVariableForTeamResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeletePipelineVariableForTeamRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/teams/{username}/pipelines_config/variables/{variable_uuid}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeletePipelineVariableForTeamResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeletePipelineVariableForUser - Delete an account level variable.
This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).
  DeletePipelineVariableForUser(
    req: operations.DeletePipelineVariableForUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeletePipelineVariableForUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeletePipelineVariableForUserRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/users/{selected_user}/pipelines_config/variables/{variable_uuid}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeletePipelineVariableForUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeletePipelineVariableForWorkspace - Delete a workspace level variable.
  DeletePipelineVariableForWorkspace(
    req: operations.DeletePipelineVariableForWorkspaceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeletePipelineVariableForWorkspaceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeletePipelineVariableForWorkspaceRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/workspaces/{workspace}/pipelines-config/variables/{variable_uuid}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeletePipelineVariableForWorkspaceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeletePullRequestHostedPropertyValue - Delete an [application property](/cloud/bitbucket/application-properties/) value stored against a pull request.
  DeletePullRequestHostedPropertyValue(
    req: operations.DeletePullRequestHostedPropertyValueRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeletePullRequestHostedPropertyValueResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeletePullRequestHostedPropertyValueRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/pullrequests/{pullrequest_id}/properties/{app_key}/{property_name}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeletePullRequestHostedPropertyValueResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteReport - Deletes a single Report matching the provided ID.
  DeleteReport(
    req: operations.DeleteReportRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteReportResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteReportRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteReportResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteRepositoryHostedPropertyValue - Delete an [application property](/cloud/bitbucket/application-properties/) value stored against a repository.
  DeleteRepositoryHostedPropertyValue(
    req: operations.DeleteRepositoryHostedPropertyValueRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRepositoryHostedPropertyValueResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRepositoryHostedPropertyValueRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/properties/{app_key}/{property_name}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteRepositoryHostedPropertyValueResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteRepositoryPipelineCache - Delete a repository cache.
  DeleteRepositoryPipelineCache(
    req: operations.DeleteRepositoryPipelineCacheRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRepositoryPipelineCacheResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRepositoryPipelineCacheRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/pipelines-config/caches/{cache_uuid}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteRepositoryPipelineCacheResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteRepositoryPipelineKeyPair - Delete the repository SSH key pair.
  DeleteRepositoryPipelineKeyPair(
    req: operations.DeleteRepositoryPipelineKeyPairRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRepositoryPipelineKeyPairResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRepositoryPipelineKeyPairRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/key_pair", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteRepositoryPipelineKeyPairResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteRepositoryPipelineKnownHost - Delete a repository level known host.
  DeleteRepositoryPipelineKnownHost(
    req: operations.DeleteRepositoryPipelineKnownHostRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRepositoryPipelineKnownHostResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRepositoryPipelineKnownHostRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/known_hosts/{known_host_uuid}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteRepositoryPipelineKnownHostResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteRepositoryPipelineSchedule - Delete a schedule.
  DeleteRepositoryPipelineSchedule(
    req: operations.DeleteRepositoryPipelineScheduleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRepositoryPipelineScheduleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRepositoryPipelineScheduleRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/pipelines_config/schedules/{schedule_uuid}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteRepositoryPipelineScheduleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteRepositoryPipelineVariable - Delete a repository level variable.
  DeleteRepositoryPipelineVariable(
    req: operations.DeleteRepositoryPipelineVariableRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRepositoryPipelineVariableResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRepositoryPipelineVariableRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/pipelines_config/variables/{variable_uuid}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteRepositoryPipelineVariableResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteUserHostedPropertyValue - Delete an [application property](/cloud/bitbucket/application-properties/) value stored against a user.
  DeleteUserHostedPropertyValue(
    req: operations.DeleteUserHostedPropertyValueRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteUserHostedPropertyValueResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteUserHostedPropertyValueRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/users/{selected_user}/properties/{app_key}/{property_name}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteUserHostedPropertyValueResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetAnnotation - Returns a single Annotation matching the provided ID.
  GetAnnotation(
    req: operations.GetAnnotationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAnnotationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAnnotationRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations/{annotationId}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetAnnotationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.reportAnnotation = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetAnnotationsForReport - Returns a paginated list of Annotations for a specified report.
  GetAnnotationsForReport(
    req: operations.GetAnnotationsForReportRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAnnotationsForReportResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAnnotationsForReportRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetAnnotationsForReportResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.paginatedAnnotations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetCommitHostedPropertyValue - Retrieve an [application property](/cloud/bitbucket/application-properties/) value stored against a commit.
  GetCommitHostedPropertyValue(
    req: operations.GetCommitHostedPropertyValueRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCommitHostedPropertyValueResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCommitHostedPropertyValueRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/commit/{commit}/properties/{app_key}/{property_name}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetCommitHostedPropertyValueResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetDeploymentForRepository - Retrieve a deployment
  GetDeploymentForRepository(
    req: operations.GetDeploymentForRepositoryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDeploymentForRepositoryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDeploymentForRepositoryRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/deployments/{deployment_uuid}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetDeploymentForRepositoryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.deployment = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetDeploymentVariables - Find deployment environment level variables.
  GetDeploymentVariables(
    req: operations.GetDeploymentVariablesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDeploymentVariablesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDeploymentVariablesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/deployments_config/environments/{environment_uuid}/variables", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetDeploymentVariablesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.paginatedDeploymentVariable = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetDeploymentsForRepository - Find deployments
  GetDeploymentsForRepository(
    req: operations.GetDeploymentsForRepositoryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDeploymentsForRepositoryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDeploymentsForRepositoryRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/deployments/", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetDeploymentsForRepositoryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.paginatedDeployments = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetEnvironmentForRepository - Retrieve an environment
  GetEnvironmentForRepository(
    req: operations.GetEnvironmentForRepositoryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetEnvironmentForRepositoryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetEnvironmentForRepositoryRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/environments/{environment_uuid}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetEnvironmentForRepositoryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.deploymentEnvironment = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetEnvironmentsForRepository - Find environments
  GetEnvironmentsForRepository(
    req: operations.GetEnvironmentsForRepositoryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetEnvironmentsForRepositoryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetEnvironmentsForRepositoryRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/environments/", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetEnvironmentsForRepositoryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.paginatedEnvironments = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetPipelineForRepository - Retrieve a specified pipeline
  GetPipelineForRepository(
    req: operations.GetPipelineForRepositoryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPipelineForRepositoryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPipelineForRepositoryRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetPipelineForRepositoryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.pipeline = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetPipelineStepForRepository - Retrieve a given step of a pipeline.
  GetPipelineStepForRepository(
    req: operations.GetPipelineStepForRepositoryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPipelineStepForRepositoryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPipelineStepForRepositoryRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetPipelineStepForRepositoryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.pipelineStep = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetPipelineStepLogForRepository - Retrieve the log file for a given step of a pipeline.

This endpoint supports (and encourages!) the use of [HTTP Range requests](https://tools.ietf.org/html/rfc7233) to deal with potentially very large log files.
  GetPipelineStepLogForRepository(
    req: operations.GetPipelineStepLogForRepositoryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPipelineStepLogForRepositoryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPipelineStepLogForRepositoryRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}/log", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetPipelineStepLogForRepositoryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          case 304:
            if (MatchContentType(contentType, `application/octet-stream`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/octet-stream`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 416:
            if (MatchContentType(contentType, `application/octet-stream`)) {
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

  
  // GetPipelineStepsForRepository - Find steps for the given pipeline.
  GetPipelineStepsForRepository(
    req: operations.GetPipelineStepsForRepositoryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPipelineStepsForRepositoryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPipelineStepsForRepositoryRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetPipelineStepsForRepositoryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.paginatedPipelineSteps = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetPipelineVariableForTeam - Retrieve a team level variable.
This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).
  GetPipelineVariableForTeam(
    req: operations.GetPipelineVariableForTeamRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPipelineVariableForTeamResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPipelineVariableForTeamRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/teams/{username}/pipelines_config/variables/{variable_uuid}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetPipelineVariableForTeamResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.pipelineVariable = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetPipelineVariableForUser - Retrieve a user level variable.
This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).
  GetPipelineVariableForUser(
    req: operations.GetPipelineVariableForUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPipelineVariableForUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPipelineVariableForUserRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/users/{selected_user}/pipelines_config/variables/{variable_uuid}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetPipelineVariableForUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.pipelineVariable = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetPipelineVariableForWorkspace - Retrieve a workspace level variable.
  GetPipelineVariableForWorkspace(
    req: operations.GetPipelineVariableForWorkspaceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPipelineVariableForWorkspaceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPipelineVariableForWorkspaceRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/workspaces/{workspace}/pipelines-config/variables/{variable_uuid}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetPipelineVariableForWorkspaceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.pipelineVariable = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetPipelineVariablesForTeam - Find account level variables.
This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).
  GetPipelineVariablesForTeam(
    req: operations.GetPipelineVariablesForTeamRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPipelineVariablesForTeamResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPipelineVariablesForTeamRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/teams/{username}/pipelines_config/variables/", req.pathParams);
    
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
        let res: operations.GetPipelineVariablesForTeamResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.paginatedPipelineVariables = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetPipelineVariablesForUser - Find user level variables.
This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).
  GetPipelineVariablesForUser(
    req: operations.GetPipelineVariablesForUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPipelineVariablesForUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPipelineVariablesForUserRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/users/{selected_user}/pipelines_config/variables/", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetPipelineVariablesForUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.paginatedPipelineVariables = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetPipelineVariablesForWorkspace - Find workspace level variables.
  GetPipelineVariablesForWorkspace(
    req: operations.GetPipelineVariablesForWorkspaceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPipelineVariablesForWorkspaceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPipelineVariablesForWorkspaceRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/workspaces/{workspace}/pipelines-config/variables", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetPipelineVariablesForWorkspaceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.paginatedPipelineVariables = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetPipelinesForRepository - Find pipelines
  GetPipelinesForRepository(
    req: operations.GetPipelinesForRepositoryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPipelinesForRepositoryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPipelinesForRepositoryRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/pipelines/", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetPipelinesForRepositoryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.paginatedPipelines = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetPullRequestHostedPropertyValue - Retrieve an [application property](/cloud/bitbucket/application-properties/) value stored against a pull request.
  GetPullRequestHostedPropertyValue(
    req: operations.GetPullRequestHostedPropertyValueRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPullRequestHostedPropertyValueResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPullRequestHostedPropertyValueRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/pullrequests/{pullrequest_id}/properties/{app_key}/{property_name}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetPullRequestHostedPropertyValueResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetPullrequestsForCommit - Returns a paginated list of all pull requests as part of which this commit was reviewed. Pull Request Commit Links app must be installed first before using this API; installation automatically occurs when 'Go to pull request' is clicked from the web interface for a commit's details.
  GetPullrequestsForCommit(
    req: operations.GetPullrequestsForCommitRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPullrequestsForCommitResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPullrequestsForCommitRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/commit/{commit}/pullrequests", req.pathParams);
    
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
        let res: operations.GetPullrequestsForCommitResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.paginatedPullrequests = httpRes?.data;
            }
            break;
          case 202:
            if (MatchContentType(contentType, `application/json`)) {
                res.paginatedPullrequests = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetReport - Returns a single Report matching the provided ID.
  GetReport(
    req: operations.GetReportRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetReportResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetReportRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetReportResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.report = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetReportsForCommit - Returns a paginated list of Reports linked to this commit.
  GetReportsForCommit(
    req: operations.GetReportsForCommitRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetReportsForCommitResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetReportsForCommitRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetReportsForCommitResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.paginatedReports = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRepositoryHostedPropertyValue - Retrieve an [application property](/cloud/bitbucket/application-properties/) value stored against a repository.
  GetRepositoryHostedPropertyValue(
    req: operations.GetRepositoryHostedPropertyValueRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRepositoryHostedPropertyValueResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRepositoryHostedPropertyValueRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/properties/{app_key}/{property_name}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRepositoryHostedPropertyValueResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRepositoryPipelineCacheContentUri - Retrieve the URI of the content of the specified cache.
  GetRepositoryPipelineCacheContentUri(
    req: operations.GetRepositoryPipelineCacheContentUriRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRepositoryPipelineCacheContentUriResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRepositoryPipelineCacheContentUriRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/pipelines-config/caches/{cache_uuid}/content-uri", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRepositoryPipelineCacheContentUriResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.pipelineCacheContentUri = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRepositoryPipelineCaches - Retrieve the repository pipelines caches.
  GetRepositoryPipelineCaches(
    req: operations.GetRepositoryPipelineCachesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRepositoryPipelineCachesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRepositoryPipelineCachesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/pipelines-config/caches/", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRepositoryPipelineCachesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.paginatedPipelineCaches = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRepositoryPipelineConfig - Retrieve the repository pipelines configuration.
  GetRepositoryPipelineConfig(
    req: operations.GetRepositoryPipelineConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRepositoryPipelineConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRepositoryPipelineConfigRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/pipelines_config", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRepositoryPipelineConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.pipelinesConfig = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRepositoryPipelineKnownHost - Retrieve a repository level known host.
  GetRepositoryPipelineKnownHost(
    req: operations.GetRepositoryPipelineKnownHostRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRepositoryPipelineKnownHostResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRepositoryPipelineKnownHostRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/known_hosts/{known_host_uuid}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRepositoryPipelineKnownHostResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.pipelineKnownHost = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRepositoryPipelineKnownHosts - Find repository level known hosts.
  GetRepositoryPipelineKnownHosts(
    req: operations.GetRepositoryPipelineKnownHostsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRepositoryPipelineKnownHostsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRepositoryPipelineKnownHostsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/known_hosts/", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRepositoryPipelineKnownHostsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.paginatedPipelineKnownHosts = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRepositoryPipelineSchedule - Retrieve a schedule by its UUID.
  GetRepositoryPipelineSchedule(
    req: operations.GetRepositoryPipelineScheduleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRepositoryPipelineScheduleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRepositoryPipelineScheduleRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/pipelines_config/schedules/{schedule_uuid}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRepositoryPipelineScheduleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.pipelineSchedule = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRepositoryPipelineScheduleExecutions - Retrieve the executions of a given schedule.
  GetRepositoryPipelineScheduleExecutions(
    req: operations.GetRepositoryPipelineScheduleExecutionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRepositoryPipelineScheduleExecutionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRepositoryPipelineScheduleExecutionsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/pipelines_config/schedules/{schedule_uuid}/executions/", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRepositoryPipelineScheduleExecutionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.paginatedPipelineScheduleExecutions = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRepositoryPipelineSchedules - Retrieve the configured schedules for the given repository.
  GetRepositoryPipelineSchedules(
    req: operations.GetRepositoryPipelineSchedulesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRepositoryPipelineSchedulesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRepositoryPipelineSchedulesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/pipelines_config/schedules/", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRepositoryPipelineSchedulesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.paginatedPipelineSchedules = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRepositoryPipelineSshKeyPair - Retrieve the repository SSH key pair excluding the SSH private key. The private key is a write only field and will never be exposed in the logs or the REST API.
  GetRepositoryPipelineSshKeyPair(
    req: operations.GetRepositoryPipelineSshKeyPairRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRepositoryPipelineSshKeyPairResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRepositoryPipelineSshKeyPairRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/key_pair", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRepositoryPipelineSshKeyPairResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.pipelineSshKeyPair = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRepositoryPipelineVariable - Retrieve a repository level variable.
  GetRepositoryPipelineVariable(
    req: operations.GetRepositoryPipelineVariableRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRepositoryPipelineVariableResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRepositoryPipelineVariableRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/pipelines_config/variables/{variable_uuid}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRepositoryPipelineVariableResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.pipelineVariable = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRepositoryPipelineVariables - Find repository level variables.
  GetRepositoryPipelineVariables(
    req: operations.GetRepositoryPipelineVariablesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRepositoryPipelineVariablesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRepositoryPipelineVariablesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/pipelines_config/variables/", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRepositoryPipelineVariablesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.paginatedPipelineVariables = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // RetrieveUserHostedPropertyValue - Retrieve an [application property](/cloud/bitbucket/application-properties/) value stored against a user.
  RetrieveUserHostedPropertyValue(
    req: operations.RetrieveUserHostedPropertyValueRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RetrieveUserHostedPropertyValueResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RetrieveUserHostedPropertyValueRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/users/{selected_user}/properties/{app_key}/{property_name}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.RetrieveUserHostedPropertyValueResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchAccount - Search for code in the repositories of the specified team.

Searching across all repositories:

```
curl 'https://api.bitbucket.org/2.0/teams/team_name/search/code?search_query=foo'
{
  "size": 1,
  "page": 1,
  "pagelen": 10,
  "query_substituted": false,
  "values": [
    {
      "type": "code_search_result",
      "content_match_count": 2,
      "content_matches": [
        {
          "lines": [
            {
              "line": 2,
              "segments": []
            },
            {
              "line": 3,
              "segments": [
                {
                  "text": "def "
                },
                {
                  "text": "foo",
                  "match": true
                },
                {
                  "text": "():"
                }
              ]
            },
            {
              "line": 4,
              "segments": [
                {
                  "text": "    print(\"snek\")"
                }
              ]
            },
            {
              "line": 5,
              "segments": []
            }
          ]
        }
      ],
      "path_matches": [
        {
          "text": "src/"
        },
        {
          "text": "foo",
          "match": true
        },
        {
          "text": ".py"
        }
      ],
      "file": {
        "path": "src/foo.py",
        "type": "commit_file",
        "links": {
          "self": {
            "href": "https://api.bitbucket.org/2.0/repositories/my-workspace/demo/src/ad6964b5fe2880dbd9ddcad1c89000f1dbcbc24b/src/foo.py"
          }
        }
      }
    }
  ]
}
```

Note that searches can match in the file's text (`content_matches`),
the path (`path_matches`), or both as in the example above.

You can use the same syntax for the search query as in the UI, e.g.
to only search within a specific repository:

```
curl 'https://api.bitbucket.org/2.0/teams/team_name/search/code?search_query=foo+repo:demo'
# results from the "demo" repository
```

Similar to other APIs, you can request more fields using a
`fields` query parameter. E.g. to get some more information about
the repository of matched files (the `%2B` is a URL-encoded `+`):

```
curl 'https://api.bitbucket.org/2.0/teams/team_name/search/code'\
     '?search_query=foo&fields=%2Bvalues.file.commit.repository'
{
  "size": 1,
  "page": 1,
  "pagelen": 10,
  "query_substituted": false,
  "values": [
    {
      "type": "code_search_result",
      "content_match_count": 1,
      "content_matches": [...],
      "path_matches": [...],
      "file": {
        "commit": {
          "type": "commit",
          "hash": "ad6964b5fe2880dbd9ddcad1c89000f1dbcbc24b",
          "links": {
            "self": {
              "href": "https://api.bitbucket.org/2.0/repositories/my-workspace/demo/commit/ad6964b5fe2880dbd9ddcad1c89000f1dbcbc24b"
            },
            "html": {
              "href": "https://bitbucket.org/my-workspace/demo/commits/ad6964b5fe2880dbd9ddcad1c89000f1dbcbc24b"
            }
          },
          "repository": {
            "name": "demo",
            "type": "repository",
            "full_name": "my-workspace/demo",
            "links": {
              "self": {
                "href": "https://api.bitbucket.org/2.0/repositories/my-workspace/demo"
              },
              "html": {
                "href": "https://bitbucket.org/my-workspace/demo"
              },
              "avatar": {
                "href": "https://bytebucket.org/ravatar/%7B850e1749-781a-4115-9316-df39d0600e7a%7D?ts=default"
              }
            },
            "uuid": "{850e1749-781a-4115-9316-df39d0600e7a}"
          }
        },
        "type": "commit_file",
        "links": {
          "self": {
            "href": "https://api.bitbucket.org/2.0/repositories/my-workspace/demo/src/ad6964b5fe2880dbd9ddcad1c89000f1dbcbc24b/src/foo.py"
          }
        },
        "path": "src/foo.py"
      }
    }
  ]
}
```

Try `fields=%2Bvalues.*.*.*.*` to get an idea what's possible.

  SearchAccount(
    req: operations.SearchAccountRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchAccountResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchAccountRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/teams/{username}/search/code", req.pathParams);
    
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
        let res: operations.SearchAccountResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.searchResultPage = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // StopPipeline - Signal the stop of a pipeline and all of its steps that not have completed yet.
  StopPipeline(
    req: operations.StopPipelineRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.StopPipelineResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.StopPipelineRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/stopPipeline", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.StopPipelineResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateCommitHostedPropertyValue - Update an [application property](/cloud/bitbucket/application-properties/) value stored against a commit.
  UpdateCommitHostedPropertyValue(
    req: operations.UpdateCommitHostedPropertyValueRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateCommitHostedPropertyValueResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateCommitHostedPropertyValueRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/commit/{commit}/properties/{app_key}/{property_name}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdateCommitHostedPropertyValueResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateDeploymentVariable - Update a deployment environment level variable.
  UpdateDeploymentVariable(
    req: operations.UpdateDeploymentVariableRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateDeploymentVariableResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateDeploymentVariableRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/deployments_config/environments/{environment_uuid}/variables/{variable_uuid}", req.pathParams);
    
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
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdateDeploymentVariableResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.deploymentVariable = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateEnvironmentForRepository - Update an environment
  UpdateEnvironmentForRepository(
    req: operations.UpdateEnvironmentForRepositoryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateEnvironmentForRepositoryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateEnvironmentForRepositoryRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/environments/{environment_uuid}/changes/", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdateEnvironmentForRepositoryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 202:
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdatePipelineVariableForTeam - Update a team level variable.
This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).
  UpdatePipelineVariableForTeam(
    req: operations.UpdatePipelineVariableForTeamRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdatePipelineVariableForTeamResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdatePipelineVariableForTeamRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/teams/{username}/pipelines_config/variables/{variable_uuid}", req.pathParams);
    
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
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdatePipelineVariableForTeamResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.pipelineVariable = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdatePipelineVariableForUser - Update a user level variable.
This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).
  UpdatePipelineVariableForUser(
    req: operations.UpdatePipelineVariableForUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdatePipelineVariableForUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdatePipelineVariableForUserRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/users/{selected_user}/pipelines_config/variables/{variable_uuid}", req.pathParams);
    
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
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdatePipelineVariableForUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.pipelineVariable = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdatePipelineVariableForWorkspace - Update a workspace level variable.
  UpdatePipelineVariableForWorkspace(
    req: operations.UpdatePipelineVariableForWorkspaceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdatePipelineVariableForWorkspaceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdatePipelineVariableForWorkspaceRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/workspaces/{workspace}/pipelines-config/variables/{variable_uuid}", req.pathParams);
    
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
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdatePipelineVariableForWorkspaceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.pipelineVariable = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdatePullRequestHostedPropertyValue - Update an [application property](/cloud/bitbucket/application-properties/) value stored against a pull request.
  UpdatePullRequestHostedPropertyValue(
    req: operations.UpdatePullRequestHostedPropertyValueRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdatePullRequestHostedPropertyValueResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdatePullRequestHostedPropertyValueRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/pullrequests/{pullrequest_id}/properties/{app_key}/{property_name}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdatePullRequestHostedPropertyValueResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateRepositoryBuildNumber - Update the next build number that should be assigned to a pipeline. The next build number that will be configured has to be strictly higher than the current latest build number for this repository.
  UpdateRepositoryBuildNumber(
    req: operations.UpdateRepositoryBuildNumberRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateRepositoryBuildNumberResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateRepositoryBuildNumberRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/pipelines_config/build_number", req.pathParams);
    
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
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdateRepositoryBuildNumberResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.pipelineBuildNumber = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateRepositoryHostedPropertyValue - Update an [application property](/cloud/bitbucket/application-properties/) value stored against a repository.
  UpdateRepositoryHostedPropertyValue(
    req: operations.UpdateRepositoryHostedPropertyValueRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateRepositoryHostedPropertyValueResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateRepositoryHostedPropertyValueRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/properties/{app_key}/{property_name}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdateRepositoryHostedPropertyValueResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateRepositoryPipelineConfig - Update the pipelines configuration for a repository.
  UpdateRepositoryPipelineConfig(
    req: operations.UpdateRepositoryPipelineConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateRepositoryPipelineConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateRepositoryPipelineConfigRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/pipelines_config", req.pathParams);
    
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
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdateRepositoryPipelineConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.pipelinesConfig = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateRepositoryPipelineKeyPair - Create or update the repository SSH key pair. The private key will be set as a default SSH identity in your build container.
  UpdateRepositoryPipelineKeyPair(
    req: operations.UpdateRepositoryPipelineKeyPairRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateRepositoryPipelineKeyPairResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateRepositoryPipelineKeyPairRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/key_pair", req.pathParams);
    
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
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdateRepositoryPipelineKeyPairResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.pipelineSshKeyPair = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateRepositoryPipelineKnownHost - Update a repository level known host.
  UpdateRepositoryPipelineKnownHost(
    req: operations.UpdateRepositoryPipelineKnownHostRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateRepositoryPipelineKnownHostResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateRepositoryPipelineKnownHostRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/known_hosts/{known_host_uuid}", req.pathParams);
    
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
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdateRepositoryPipelineKnownHostResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.pipelineKnownHost = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateRepositoryPipelineSchedule - Update a schedule.
  UpdateRepositoryPipelineSchedule(
    req: operations.UpdateRepositoryPipelineScheduleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateRepositoryPipelineScheduleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateRepositoryPipelineScheduleRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/pipelines_config/schedules/{schedule_uuid}", req.pathParams);
    
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
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdateRepositoryPipelineScheduleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.pipelineSchedule = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateRepositoryPipelineVariable - Update a repository level variable.
  UpdateRepositoryPipelineVariable(
    req: operations.UpdateRepositoryPipelineVariableRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateRepositoryPipelineVariableResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateRepositoryPipelineVariableRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repositories/{workspace}/{repo_slug}/pipelines_config/variables/{variable_uuid}", req.pathParams);
    
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
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdateRepositoryPipelineVariableResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.pipelineVariable = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateUserHostedPropertyValue - Update an [application property](/cloud/bitbucket/application-properties/) value stored against a user.
  UpdateUserHostedPropertyValue(
    req: operations.UpdateUserHostedPropertyValueRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateUserHostedPropertyValueResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateUserHostedPropertyValueRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/users/{selected_user}/properties/{app_key}/{property_name}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdateUserHostedPropertyValueResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
