import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Search {
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
   * searchCode - Search code
   *
   * Searches for query terms inside of a file. This method returns up to 100 results [per page](https://docs.github.com/enterprise-server@3.1/rest/overview/resources-in-the-rest-api#pagination).
   * 
   * When searching for code, you can get text match metadata for the file **content** and file **path** fields when you pass the `text-match` media type. For more details about how to receive highlighted search results, see [Text match metadata](https://docs.github.com/enterprise-server@3.1/rest/reference/search#text-match-metadata).
   * 
   * For example, if you want to find the definition of the `addClass` function inside [jQuery](https://github.com/jquery/jquery) repository, your query would look something like this:
   * 
   * `q=addClass+in:file+language:js+repo:jquery/jquery`
   * 
   * This query searches for the keyword `addClass` within a file's contents. The query limits the search to files where the language is JavaScript in the `jquery/jquery` repository.
   * 
   * #### Considerations for code search
   * 
   * Due to the complexity of searching code, there are a few restrictions on how searches are performed:
   * 
   * *   Only the _default branch_ is considered. In most cases, this will be the `master` branch.
   * *   Only files smaller than 384 KB are searchable.
   * *   You must always include at least one search term when searching source code. For example, searching for [`language:go`](https://github.com/search?utf8=%E2%9C%93&q=language%3Ago&type=Code) is not valid, while [`amazing
   * language:go`](https://github.com/search?utf8=%E2%9C%93&q=amazing+language%3Ago&type=Code) is.
   *
   * https://docs.github.com/enterprise-server@3.1/rest/reference/search#search-code - API method documentation
  **/
  searchCode(
    req: operations.SearchCodeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchCodeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchCodeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/search/code";
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.SearchCodeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.searchCode200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.validationError = httpRes?.data;
            }
            break;
          case httpRes?.status == 503:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.searchCode503ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * searchCommits - Search commits
   *
   * Find commits via various criteria on the default branch (usually `master`). This method returns up to 100 results [per page](https://docs.github.com/enterprise-server@3.1/rest/overview/resources-in-the-rest-api#pagination).
   * 
   * When searching for commits, you can get text match metadata for the **message** field when you provide the `text-match` media type. For more details about how to receive highlighted search results, see [Text match
   * metadata](https://docs.github.com/enterprise-server@3.1/rest/reference/search#text-match-metadata).
   * 
   * For example, if you want to find commits related to CSS in the [octocat/Spoon-Knife](https://github.com/octocat/Spoon-Knife) repository. Your query would look something like this:
   * 
   * `q=repo:octocat/Spoon-Knife+css`
   *
   * https://docs.github.com/enterprise-server@3.1/rest/reference/search#search-commits - API method documentation
  **/
  searchCommits(
    req: operations.SearchCommitsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchCommitsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchCommitsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/search/commits";
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.SearchCommitsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.searchCommits200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 415:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.searchCommits415ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * searchIssuesAndPullRequests - Search issues and pull requests
   *
   * Find issues by state and keyword. This method returns up to 100 results [per page](https://docs.github.com/enterprise-server@3.1/rest/overview/resources-in-the-rest-api#pagination).
   * 
   * When searching for issues, you can get text match metadata for the issue **title**, issue **body**, and issue **comment body** fields when you pass the `text-match` media type. For more details about how to receive highlighted
   * search results, see [Text match metadata](https://docs.github.com/enterprise-server@3.1/rest/reference/search#text-match-metadata).
   * 
   * For example, if you want to find the oldest unresolved Python bugs on Windows. Your query might look something like this.
   * 
   * `q=windows+label:bug+language:python+state:open&sort=created&order=asc`
   * 
   * This query searches for the keyword `windows`, within any open issue that is labeled as `bug`. The search runs across repositories whose primary language is Python. The results are sorted by creation date in ascending order, which means the oldest issues appear first in the search results.
   * 
   * **Note:** For [user-to-server](https://docs.github.com/developers/apps/identifying-and-authorizing-users-for-github-apps#user-to-server-requests) GitHub App requests, you can't retrieve a combination of issues and pull requests in a single query. Requests that don't include the `is:issue` or `is:pull-request` qualifier will receive an HTTP `422 Unprocessable Entity` response. To get results for both issues and pull requests, you must send separate queries for issues and pull requests. For more information about the `is` qualifier, see "[Searching only issues or pull requests](https://docs.github.com/github/searching-for-information-on-github/searching-issues-and-pull-requests#search-only-issues-or-pull-requests)."
   *
   * https://docs.github.com/enterprise-server@3.1/rest/reference/search#search-issues-and-pull-requests - API method documentation
  **/
  searchIssuesAndPullRequests(
    req: operations.SearchIssuesAndPullRequestsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchIssuesAndPullRequestsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchIssuesAndPullRequestsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/search/issues";
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.SearchIssuesAndPullRequestsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.searchIssuesAndPullRequests200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.validationError = httpRes?.data;
            }
            break;
          case httpRes?.status == 503:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.searchIssuesAndPullRequests503ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * searchLabels - Search labels
   *
   * Find labels in a repository with names or descriptions that match search keywords. Returns up to 100 results [per page](https://docs.github.com/enterprise-server@3.1/rest/overview/resources-in-the-rest-api#pagination).
   * 
   * When searching for labels, you can get text match metadata for the label **name** and **description** fields when you pass the `text-match` media type. For more details about how to receive highlighted search results, see [Text match metadata](https://docs.github.com/enterprise-server@3.1/rest/reference/search#text-match-metadata).
   * 
   * For example, if you want to find labels in the `linguist` repository that match `bug`, `defect`, or `enhancement`. Your query might look like this:
   * 
   * `q=bug+defect+enhancement&repository_id=64778136`
   * 
   * The labels that best match the query appear first in the search results.
   *
   * https://docs.github.com/enterprise-server@3.1/rest/reference/search#search-labels - API method documentation
  **/
  searchLabels(
    req: operations.SearchLabelsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchLabelsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchLabelsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/search/labels";
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.SearchLabelsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.searchLabels200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.validationError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * searchRepos - Search repositories
   *
   * Find repositories via various criteria. This method returns up to 100 results [per page](https://docs.github.com/enterprise-server@3.1/rest/overview/resources-in-the-rest-api#pagination).
   * 
   * When searching for repositories, you can get text match metadata for the **name** and **description** fields when you pass the `text-match` media type. For more details about how to receive highlighted search results, see [Text match metadata](https://docs.github.com/enterprise-server@3.1/rest/reference/search#text-match-metadata).
   * 
   * For example, if you want to search for popular Tetris repositories written in assembly code, your query might look like this:
   * 
   * `q=tetris+language:assembly&sort=stars&order=desc`
   * 
   * This query searches for repositories with the word `tetris` in the name, the description, or the README. The results are limited to repositories where the primary language is assembly. The results are sorted by stars in descending order, so that the most popular repositories appear first in the search results.
   * 
   * When you include the `mercy` preview header, you can also search for multiple topics by adding more `topic:` instances. For example, your query might look like this:
   * 
   * `q=topic:ruby+topic:rails`
   *
   * https://docs.github.com/enterprise-server@3.1/rest/reference/search#search-repositories - API method documentation
  **/
  searchRepos(
    req: operations.SearchReposRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchReposResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchReposRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/search/repositories";
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.SearchReposResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.searchRepos200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 422:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.validationError = httpRes?.data;
            }
            break;
          case httpRes?.status == 503:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.searchRepos503ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * searchTopics - Search topics
   *
   * Find topics via various criteria. Results are sorted by best match. This method returns up to 100 results [per page](https://docs.github.com/enterprise-server@3.1/rest/overview/resources-in-the-rest-api#pagination). See "[Searching topics](https://help.github.com/articles/searching-topics/)" for a detailed list of qualifiers.
   * 
   * When searching for topics, you can get text match metadata for the topic's **short\_description**, **description**, **name**, or **display\_name** field when you pass the `text-match` media type. For more details about how to receive highlighted search results, see [Text match metadata](https://docs.github.com/enterprise-server@3.1/rest/reference/search#text-match-metadata).
   * 
   * For example, if you want to search for topics related to Ruby that are featured on https://github.com/topics. Your query might look like this:
   * 
   * `q=ruby+is:featured`
   * 
   * This query searches for topics with the keyword `ruby` and limits the results to find only topics that are featured. The topics that are the best match for the query appear first in the search results.
   *
   * https://docs.github.com/enterprise-server@3.1/rest/reference/search#search-topics - API method documentation
  **/
  searchTopics(
    req: operations.SearchTopicsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchTopicsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchTopicsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/search/topics";
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.SearchTopicsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.searchTopics200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 415:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.searchTopics415ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * searchUsers - Search users
   *
   * Find users via various criteria. This method returns up to 100 results [per page](https://docs.github.com/enterprise-server@3.1/rest/overview/resources-in-the-rest-api#pagination).
   * 
   * When searching for users, you can get text match metadata for the issue **login**, **email**, and **name** fields when you pass the `text-match` media type. For more details about highlighting search results, see [Text match metadata](https://docs.github.com/enterprise-server@3.1/rest/reference/search#text-match-metadata). For more details about how to receive highlighted search results, see [Text match metadata](https://docs.github.com/enterprise-server@3.1/rest/reference/search#text-match-metadata).
   * 
   * For example, if you're looking for a list of popular users, you might try this query:
   * 
   * `q=tom+repos:%3E42+followers:%3E1000`
   * 
   * This query searches for users with the name `tom`. The results are restricted to users with more than 42 repositories and over 1,000 followers.
   *
   * https://docs.github.com/enterprise-server@3.1/rest/reference/search#search-users - API method documentation
  **/
  searchUsers(
    req: operations.SearchUsersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchUsersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchUsersRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/search/users";
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.SearchUsersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.searchUsers200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 422:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.validationError = httpRes?.data;
            }
            break;
          case httpRes?.status == 503:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.searchUsers503ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
