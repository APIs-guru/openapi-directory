import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Activity {
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
   * activityCheckRepoIsStarredByAuthenticatedUser - Check if a repository is starred by the authenticated user
   *
   * https://docs.github.com/enterprise-server@2.21/rest/reference/activity#check-if-a-repository-is-starred-by-the-authenticated-user - API method documentation
  **/
  activityCheckRepoIsStarredByAuthenticatedUser(
    req: operations.ActivityCheckRepoIsStarredByAuthenticatedUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActivityCheckRepoIsStarredByAuthenticatedUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActivityCheckRepoIsStarredByAuthenticatedUserRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/user/starred/{owner}/{repo}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ActivityCheckRepoIsStarredByAuthenticatedUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
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
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * activityDeleteRepoSubscription - Delete a repository subscription
   *
   * This endpoint should only be used to stop watching a repository. To control whether or not you wish to receive notifications from a repository, [set the repository's subscription manually](https://docs.github.com/enterprise-server@2.21/rest/reference/activity#set-a-repository-subscription).
   *
   * https://docs.github.com/enterprise-server@2.21/rest/reference/activity#delete-a-repository-subscription - API method documentation
  **/
  activityDeleteRepoSubscription(
    req: operations.ActivityDeleteRepoSubscriptionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActivityDeleteRepoSubscriptionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActivityDeleteRepoSubscriptionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/subscription", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ActivityDeleteRepoSubscriptionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * activityDeleteThreadSubscription - Delete a thread subscription
   *
   * Mutes all future notifications for a conversation until you comment on the thread or get an **@mention**. If you are watching the repository of the thread, you will still receive notifications. To ignore future notifications for a repository you are watching, use the [Set a thread subscription](https://docs.github.com/enterprise-server@2.21/rest/reference/activity#set-a-thread-subscription) endpoint and set `ignore` to `true`.
   *
   * https://docs.github.com/enterprise-server@2.21/rest/reference/activity#delete-a-thread-subscription - API method documentation
  **/
  activityDeleteThreadSubscription(
    req: operations.ActivityDeleteThreadSubscriptionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActivityDeleteThreadSubscriptionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActivityDeleteThreadSubscriptionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/notifications/threads/{thread_id}/subscription", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ActivityDeleteThreadSubscriptionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * activityGetFeeds - Get feeds
   *
   * GitHub Enterprise Server provides several timeline resources in [Atom](http://en.wikipedia.org/wiki/Atom_(standard)) format. The Feeds API lists all the feeds available to the authenticated user:
   * 
   * *   **Timeline**: The GitHub Enterprise Server global public timeline
   * *   **User**: The public timeline for any user, using [URI template](https://docs.github.com/enterprise-server@2.21/rest/overview/resources-in-the-rest-api#hypermedia)
   * *   **Current user public**: The public timeline for the authenticated user
   * *   **Current user**: The private timeline for the authenticated user
   * *   **Current user actor**: The private timeline for activity created by the authenticated user
   * *   **Current user organizations**: The private timeline for the organizations the authenticated user is a member of.
   * *   **Security advisories**: A collection of public announcements that provide information about security-related vulnerabilities in software on GitHub Enterprise Server.
   * 
   * **Note**: Private feeds are only returned when [authenticating via Basic Auth](https://docs.github.com/enterprise-server@2.21/rest/overview/other-authentication-methods#basic-authentication) since current feed URIs use the older, non revocable auth tokens.
   *
   * https://docs.github.com/enterprise-server@2.21/rest/reference/activity#get-feeds - API method documentation
  **/
  activityGetFeeds(
    config?: AxiosRequestConfig
  ): Promise<operations.ActivityGetFeedsResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/feeds";
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ActivityGetFeedsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.feed = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * activityGetRepoSubscription - Get a repository subscription
   *
   * https://docs.github.com/enterprise-server@2.21/rest/reference/activity#get-a-repository-subscription - API method documentation
  **/
  activityGetRepoSubscription(
    req: operations.ActivityGetRepoSubscriptionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActivityGetRepoSubscriptionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActivityGetRepoSubscriptionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/subscription", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ActivityGetRepoSubscriptionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositorySubscription = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * activityGetThread - Get a thread
   *
   * https://docs.github.com/enterprise-server@2.21/rest/reference/activity#get-a-thread - API method documentation
  **/
  activityGetThread(
    req: operations.ActivityGetThreadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActivityGetThreadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActivityGetThreadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/notifications/threads/{thread_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ActivityGetThreadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.thread = httpRes?.data;
            }
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * activityGetThreadSubscriptionForAuthenticatedUser - Get a thread subscription for the authenticated user
   *
   * This checks to see if the current user is subscribed to a thread. You can also [get a repository subscription](https://docs.github.com/enterprise-server@2.21/rest/reference/activity#get-a-repository-subscription).
   * 
   * Note that subscriptions are only generated if a user is participating in a conversation--for example, they've replied to the thread, were **@mentioned**, or manually subscribe to a thread.
   *
   * https://docs.github.com/enterprise-server@2.21/rest/reference/activity#get-a-thread-subscription-for-the-authenticated-user - API method documentation
  **/
  activityGetThreadSubscriptionForAuthenticatedUser(
    req: operations.ActivityGetThreadSubscriptionForAuthenticatedUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActivityGetThreadSubscriptionForAuthenticatedUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActivityGetThreadSubscriptionForAuthenticatedUserRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/notifications/threads/{thread_id}/subscription", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ActivityGetThreadSubscriptionForAuthenticatedUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.threadSubscription = httpRes?.data;
            }
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * activityListEventsForAuthenticatedUser - List events for the authenticated user
   *
   * If you are authenticated as the given user, you will see your private events. Otherwise, you'll only see public events.
   *
   * https://docs.github.com/enterprise-server@2.21/rest/reference/activity#list-events-for-the-authenticated-user - API method documentation
  **/
  activityListEventsForAuthenticatedUser(
    req: operations.ActivityListEventsForAuthenticatedUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActivityListEventsForAuthenticatedUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActivityListEventsForAuthenticatedUserRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/users/{username}/events", req.pathParams);
    
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
        const res: operations.ActivityListEventsForAuthenticatedUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.events = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * activityListNotificationsForAuthenticatedUser - List notifications for the authenticated user
   *
   * List all notifications for the current user, sorted by most recently updated.
   *
   * https://docs.github.com/enterprise-server@2.21/rest/reference/activity#list-notifications-for-the-authenticated-user - API method documentation
  **/
  activityListNotificationsForAuthenticatedUser(
    req: operations.ActivityListNotificationsForAuthenticatedUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActivityListNotificationsForAuthenticatedUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActivityListNotificationsForAuthenticatedUserRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/notifications";
    
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
        const res: operations.ActivityListNotificationsForAuthenticatedUserResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.threads = httpRes?.data;
            }
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
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
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * activityListOrgEventsForAuthenticatedUser - List organization events for the authenticated user
   *
   * This is the user's organization dashboard. You must be authenticated as the user to view this.
   *
   * https://docs.github.com/enterprise-server@2.21/rest/reference/activity#list-organization-events-for-the-authenticated-user - API method documentation
  **/
  activityListOrgEventsForAuthenticatedUser(
    req: operations.ActivityListOrgEventsForAuthenticatedUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActivityListOrgEventsForAuthenticatedUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActivityListOrgEventsForAuthenticatedUserRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/users/{username}/events/orgs/{org}", req.pathParams);
    
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
        const res: operations.ActivityListOrgEventsForAuthenticatedUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.events = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * activityListPublicEvents - List public events
   *
   * We delay the public events feed by five minutes, which means the most recent event returned by the public events API actually occurred at least five minutes ago.
   *
   * https://docs.github.com/enterprise-server@2.21/rest/reference/activity#list-public-events - API method documentation
  **/
  activityListPublicEvents(
    req: operations.ActivityListPublicEventsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActivityListPublicEventsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActivityListPublicEventsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/events";
    
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
        const res: operations.ActivityListPublicEventsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.events = httpRes?.data;
            }
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
          case httpRes?.status == 503:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.activityListPublicEvents503ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * activityListPublicEventsForRepoNetwork - List public events for a network of repositories
   *
   * https://docs.github.com/enterprise-server@2.21/rest/reference/activity#list-public-events-for-a-network-of-repositories - API method documentation
  **/
  activityListPublicEventsForRepoNetwork(
    req: operations.ActivityListPublicEventsForRepoNetworkRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActivityListPublicEventsForRepoNetworkResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActivityListPublicEventsForRepoNetworkRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{owner}/{repo}/events", req.pathParams);
    
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
        const res: operations.ActivityListPublicEventsForRepoNetworkResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.events = httpRes?.data;
            }
            break;
          case httpRes?.status == 301:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
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
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * activityListPublicEventsForUser - List public events for a user
   *
   * https://docs.github.com/enterprise-server@2.21/rest/reference/activity#list-public-events-for-a-user - API method documentation
  **/
  activityListPublicEventsForUser(
    req: operations.ActivityListPublicEventsForUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActivityListPublicEventsForUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActivityListPublicEventsForUserRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/users/{username}/events/public", req.pathParams);
    
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
        const res: operations.ActivityListPublicEventsForUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.events = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * activityListPublicOrgEvents - List public organization events
   *
   * https://docs.github.com/enterprise-server@2.21/rest/reference/activity#list-public-organization-events - API method documentation
  **/
  activityListPublicOrgEvents(
    req: operations.ActivityListPublicOrgEventsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActivityListPublicOrgEventsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActivityListPublicOrgEventsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/orgs/{org}/events", req.pathParams);
    
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
        const res: operations.ActivityListPublicOrgEventsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.events = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * activityListReceivedEventsForUser - List events received by the authenticated user
   *
   * These are events that you've received by watching repos and following users. If you are authenticated as the given user, you will see private events. Otherwise, you'll only see public events.
   *
   * https://docs.github.com/enterprise-server@2.21/rest/reference/activity#list-events-received-by-the-authenticated-user - API method documentation
  **/
  activityListReceivedEventsForUser(
    req: operations.ActivityListReceivedEventsForUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActivityListReceivedEventsForUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActivityListReceivedEventsForUserRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/users/{username}/received_events", req.pathParams);
    
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
        const res: operations.ActivityListReceivedEventsForUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.events = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * activityListReceivedPublicEventsForUser - List public events received by a user
   *
   * https://docs.github.com/enterprise-server@2.21/rest/reference/activity#list-public-events-received-by-a-user - API method documentation
  **/
  activityListReceivedPublicEventsForUser(
    req: operations.ActivityListReceivedPublicEventsForUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActivityListReceivedPublicEventsForUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActivityListReceivedPublicEventsForUserRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/users/{username}/received_events/public", req.pathParams);
    
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
        const res: operations.ActivityListReceivedPublicEventsForUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.events = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * activityListRepoEvents - List repository events
   *
   * https://docs.github.com/enterprise-server@2.21/rest/reference/activity#list-repository-events - API method documentation
  **/
  activityListRepoEvents(
    req: operations.ActivityListRepoEventsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActivityListRepoEventsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActivityListRepoEventsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/events", req.pathParams);
    
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
        const res: operations.ActivityListRepoEventsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.events = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * activityListRepoNotificationsForAuthenticatedUser - List repository notifications for the authenticated user
   *
   * List all notifications for the current user.
   *
   * https://docs.github.com/enterprise-server@2.21/rest/reference/activity#list-repository-notifications-for-the-authenticated-user - API method documentation
  **/
  activityListRepoNotificationsForAuthenticatedUser(
    req: operations.ActivityListRepoNotificationsForAuthenticatedUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActivityListRepoNotificationsForAuthenticatedUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActivityListRepoNotificationsForAuthenticatedUserRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/notifications", req.pathParams);
    
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
        const res: operations.ActivityListRepoNotificationsForAuthenticatedUserResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.threads = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * activityListReposStarredByAuthenticatedUser - List repositories starred by the authenticated user
   *
   * Lists repositories the authenticated user has starred.
   * 
   * You can also find out _when_ stars were created by passing the following custom [media type](https://docs.github.com/enterprise-server@2.21/rest/overview/media-types/) via the `Accept` header:
   *
   * https://docs.github.com/enterprise-server@2.21/rest/reference/activity#list-repositories-starred-by-the-authenticated-user - API method documentation
  **/
  activityListReposStarredByAuthenticatedUser(
    req: operations.ActivityListReposStarredByAuthenticatedUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActivityListReposStarredByAuthenticatedUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActivityListReposStarredByAuthenticatedUserRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/user/starred";
    
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
        const res: operations.ActivityListReposStarredByAuthenticatedUserResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositories = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/vnd.github.v3.star+json`)) {
                res.starredRepositories = httpRes?.data;
            }
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * activityListReposStarredByUser - List repositories starred by a user
   *
   * Lists repositories a user has starred.
   * 
   * You can also find out _when_ stars were created by passing the following custom [media type](https://docs.github.com/enterprise-server@2.21/rest/overview/media-types/) via the `Accept` header:
   *
   * https://docs.github.com/enterprise-server@2.21/rest/reference/activity#list-repositories-starred-by-a-user - API method documentation
  **/
  activityListReposStarredByUser(
    req: operations.ActivityListReposStarredByUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActivityListReposStarredByUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActivityListReposStarredByUserRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/users/{username}/starred", req.pathParams);
    
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
        const res: operations.ActivityListReposStarredByUserResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.activityListReposStarredByUser200ApplicationJsonAnyOf = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * activityListReposWatchedByUser - List repositories watched by a user
   *
   * Lists repositories a user is watching.
   *
   * https://docs.github.com/enterprise-server@2.21/rest/reference/activity#list-repositories-watched-by-a-user - API method documentation
  **/
  activityListReposWatchedByUser(
    req: operations.ActivityListReposWatchedByUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActivityListReposWatchedByUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActivityListReposWatchedByUserRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/users/{username}/subscriptions", req.pathParams);
    
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
        const res: operations.ActivityListReposWatchedByUserResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.minimalRepositories = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * activityListStargazersForRepo - List stargazers
   *
   * Lists the people that have starred the repository.
   * 
   * You can also find out _when_ stars were created by passing the following custom [media type](https://docs.github.com/enterprise-server@2.21/rest/overview/media-types/) via the `Accept` header:
   *
   * https://docs.github.com/enterprise-server@2.21/rest/reference/activity#list-stargazers - API method documentation
  **/
  activityListStargazersForRepo(
    req: operations.ActivityListStargazersForRepoRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActivityListStargazersForRepoResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActivityListStargazersForRepoRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/stargazers", req.pathParams);
    
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
        const res: operations.ActivityListStargazersForRepoResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.activityListStargazersForRepo200ApplicationJsonAnyOf = httpRes?.data;
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
   * activityListWatchedReposForAuthenticatedUser - List repositories watched by the authenticated user
   *
   * Lists repositories the authenticated user is watching.
   *
   * https://docs.github.com/enterprise-server@2.21/rest/reference/activity#list-repositories-watched-by-the-authenticated-user - API method documentation
  **/
  activityListWatchedReposForAuthenticatedUser(
    req: operations.ActivityListWatchedReposForAuthenticatedUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActivityListWatchedReposForAuthenticatedUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActivityListWatchedReposForAuthenticatedUserRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/user/subscriptions";
    
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
        const res: operations.ActivityListWatchedReposForAuthenticatedUserResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.minimalRepositories = httpRes?.data;
            }
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * activityListWatchersForRepo - List watchers
   *
   * Lists the people watching the specified repository.
   *
   * https://docs.github.com/enterprise-server@2.21/rest/reference/activity#list-watchers - API method documentation
  **/
  activityListWatchersForRepo(
    req: operations.ActivityListWatchersForRepoRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActivityListWatchersForRepoResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActivityListWatchersForRepoRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/subscribers", req.pathParams);
    
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
        const res: operations.ActivityListWatchersForRepoResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.simpleUsers = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * activityMarkNotificationsAsRead - Mark notifications as read
   *
   * Marks all notifications as "read" removes it from the [default view on GitHub Enterprise Server](https://github.com/notifications). If the number of notifications is too large to complete in one request, you will receive a `202 Accepted` status and GitHub Enterprise Server will run an asynchronous process to mark notifications as "read." To check whether any "unread" notifications remain, you can use the [List notifications for the authenticated user](https://docs.github.com/enterprise-server@2.21/rest/reference/activity#list-notifications-for-the-authenticated-user) endpoint and pass the query parameter `all=false`.
   *
   * https://docs.github.com/enterprise-server@2.21/rest/reference/activity#mark-notifications-as-read - API method documentation
  **/
  activityMarkNotificationsAsRead(
    req: operations.ActivityMarkNotificationsAsReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActivityMarkNotificationsAsReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActivityMarkNotificationsAsReadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/notifications";

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
        const res: operations.ActivityMarkNotificationsAsReadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 202:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.activityMarkNotificationsAsRead202ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 205:
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * activityMarkRepoNotificationsAsRead - Mark repository notifications as read
   *
   * Marks all notifications in a repository as "read" removes them from the [default view on GitHub Enterprise Server](https://github.com/notifications). If the number of notifications is too large to complete in one request, you will receive a `202 Accepted` status and GitHub Enterprise Server will run an asynchronous process to mark notifications as "read." To check whether any "unread" notifications remain, you can use the [List repository notifications for the authenticated user](https://docs.github.com/enterprise-server@2.21/rest/reference/activity#list-repository-notifications-for-the-authenticated-user) endpoint and pass the query parameter `all=false`.
   *
   * https://docs.github.com/enterprise-server@2.21/rest/reference/activity#mark-repository-notifications-as-read - API method documentation
  **/
  activityMarkRepoNotificationsAsRead(
    req: operations.ActivityMarkRepoNotificationsAsReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActivityMarkRepoNotificationsAsReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActivityMarkRepoNotificationsAsReadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/notifications", req.pathParams);

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
        const res: operations.ActivityMarkRepoNotificationsAsReadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 202:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.activityMarkRepoNotificationsAsRead202ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 205:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * activityMarkThreadAsRead - Mark a thread as read
   *
   * https://docs.github.com/enterprise-server@2.21/rest/reference/activity#mark-a-thread-as-read - API method documentation
  **/
  activityMarkThreadAsRead(
    req: operations.ActivityMarkThreadAsReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActivityMarkThreadAsReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActivityMarkThreadAsReadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/notifications/threads/{thread_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "patch",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ActivityMarkThreadAsReadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 205:
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * activitySetRepoSubscription - Set a repository subscription
   *
   * If you would like to watch a repository, set `subscribed` to `true`. If you would like to ignore notifications made within a repository, set `ignored` to `true`. If you would like to stop watching a repository, [delete the repository's subscription](https://docs.github.com/enterprise-server@2.21/rest/reference/activity#delete-a-repository-subscription) completely.
   *
   * https://docs.github.com/enterprise-server@2.21/rest/reference/activity#set-a-repository-subscription - API method documentation
  **/
  activitySetRepoSubscription(
    req: operations.ActivitySetRepoSubscriptionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActivitySetRepoSubscriptionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActivitySetRepoSubscriptionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/subscription", req.pathParams);

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
        const res: operations.ActivitySetRepoSubscriptionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositorySubscription = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * activitySetThreadSubscription - Set a thread subscription
   *
   * If you are watching a repository, you receive notifications for all threads by default. Use this endpoint to ignore future notifications for threads until you comment on the thread or get an **@mention**.
   * 
   * You can also use this endpoint to subscribe to threads that you are currently not receiving notifications for or to subscribed to threads that you have previously ignored.
   * 
   * Unsubscribing from a conversation in a repository that you are not watching is functionally equivalent to the [Delete a thread subscription](https://docs.github.com/enterprise-server@2.21/rest/reference/activity#delete-a-thread-subscription) endpoint.
   *
   * https://docs.github.com/enterprise-server@2.21/rest/reference/activity#set-a-thread-subscription - API method documentation
  **/
  activitySetThreadSubscription(
    req: operations.ActivitySetThreadSubscriptionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActivitySetThreadSubscriptionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActivitySetThreadSubscriptionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/notifications/threads/{thread_id}/subscription", req.pathParams);

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
        const res: operations.ActivitySetThreadSubscriptionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.threadSubscription = httpRes?.data;
            }
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * activityStarRepoForAuthenticatedUser - Star a repository for the authenticated user
   *
   * Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-server@2.21/rest/overview/resources-in-the-rest-api#http-verbs)."
   *
   * https://docs.github.com/enterprise-server@2.21/rest/reference/activity#star-a-repository-for-the-authenticated-user - API method documentation
  **/
  activityStarRepoForAuthenticatedUser(
    req: operations.ActivityStarRepoForAuthenticatedUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActivityStarRepoForAuthenticatedUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActivityStarRepoForAuthenticatedUserRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/user/starred/{owner}/{repo}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ActivityStarRepoForAuthenticatedUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
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
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * activityUnstarRepoForAuthenticatedUser - Unstar a repository for the authenticated user
   *
   * https://docs.github.com/enterprise-server@2.21/rest/reference/activity#unstar-a-repository-for-the-authenticated-user - API method documentation
  **/
  activityUnstarRepoForAuthenticatedUser(
    req: operations.ActivityUnstarRepoForAuthenticatedUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActivityUnstarRepoForAuthenticatedUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActivityUnstarRepoForAuthenticatedUserRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/user/starred/{owner}/{repo}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ActivityUnstarRepoForAuthenticatedUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
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
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
