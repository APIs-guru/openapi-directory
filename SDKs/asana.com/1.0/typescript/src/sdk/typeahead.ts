import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Typeahead {
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
   * typeaheadForWorkspace - Get objects via typeahead
   *
   * Retrieves objects in the workspace based via an auto-completion/typeahead
   * search algorithm. This feature is meant to provide results quickly, so do
   * not rely on this API to provide extremely accurate search results. The
   * result set is limited to a single page of results with a maximum size, so
   * you won’t be able to fetch large numbers of results.
   * 
   * The typeahead search API provides search for objects from a single
   * workspace. This endpoint should be used to query for objects when
   * creating an auto-completion/typeahead search feature. This API is meant
   * to provide results quickly and should not be relied upon for accurate or
   * exhaustive search results. The results sets are limited in size and
   * cannot be paginated.
   * 
   * Queries return a compact representation of each object which is typically
   * the gid and name fields. Interested in a specific set of fields or all of
   * the fields?! Of course you are. Use field selectors to manipulate what
   * data is included in a response.
   * 
   * Resources with type `user` are returned in order of most contacted to
   * least contacted. This is determined by task assignments, adding the user
   * to projects, and adding the user as a follower to tasks, messages,
   * etc.
   * 
   * Resources with type `project` are returned in order of recency. This is
   * determined when the user visits the project, is added to the project, and
   * completes tasks in the project.
   * 
   * Resources with type `task` are returned with priority placed on tasks
   * the user is following, but no guarantee on the order of those tasks.
   * 
   * Leaving the `query` string empty or omitted will give you results, still
   * following the resource ordering above. This could be used to list users or
   * projects that are relevant for the requesting user's api token.
  **/
  typeaheadForWorkspace(
    req: operations.TypeaheadForWorkspaceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TypeaheadForWorkspaceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TypeaheadForWorkspaceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/workspaces/{workspace_gid}/typeahead", req.pathParams);
    
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
        const res: operations.TypeaheadForWorkspaceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.typeaheadForWorkspace200ApplicationJsonObject = httpRes?.data;
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
          case httpRes?.status == 500:
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
