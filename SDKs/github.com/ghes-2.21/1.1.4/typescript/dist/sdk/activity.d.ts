import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Activity {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * activityCheckRepoIsStarredByAuthenticatedUser - Check if a repository is starred by the authenticated user
     *
     * https://docs.github.com/enterprise-server@2.21/rest/reference/activity#check-if-a-repository-is-starred-by-the-authenticated-user - API method documentation
    **/
    activityCheckRepoIsStarredByAuthenticatedUser(req: operations.ActivityCheckRepoIsStarredByAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.ActivityCheckRepoIsStarredByAuthenticatedUserResponse>;
    /**
     * activityDeleteRepoSubscription - Delete a repository subscription
     *
     * This endpoint should only be used to stop watching a repository. To control whether or not you wish to receive notifications from a repository, [set the repository's subscription manually](https://docs.github.com/enterprise-server@2.21/rest/reference/activity#set-a-repository-subscription).
     *
     * https://docs.github.com/enterprise-server@2.21/rest/reference/activity#delete-a-repository-subscription - API method documentation
    **/
    activityDeleteRepoSubscription(req: operations.ActivityDeleteRepoSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.ActivityDeleteRepoSubscriptionResponse>;
    /**
     * activityDeleteThreadSubscription - Delete a thread subscription
     *
     * Mutes all future notifications for a conversation until you comment on the thread or get an **@mention**. If you are watching the repository of the thread, you will still receive notifications. To ignore future notifications for a repository you are watching, use the [Set a thread subscription](https://docs.github.com/enterprise-server@2.21/rest/reference/activity#set-a-thread-subscription) endpoint and set `ignore` to `true`.
     *
     * https://docs.github.com/enterprise-server@2.21/rest/reference/activity#delete-a-thread-subscription - API method documentation
    **/
    activityDeleteThreadSubscription(req: operations.ActivityDeleteThreadSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.ActivityDeleteThreadSubscriptionResponse>;
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
    activityGetFeeds(config?: AxiosRequestConfig): Promise<operations.ActivityGetFeedsResponse>;
    /**
     * activityGetRepoSubscription - Get a repository subscription
     *
     * https://docs.github.com/enterprise-server@2.21/rest/reference/activity#get-a-repository-subscription - API method documentation
    **/
    activityGetRepoSubscription(req: operations.ActivityGetRepoSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.ActivityGetRepoSubscriptionResponse>;
    /**
     * activityGetThread - Get a thread
     *
     * https://docs.github.com/enterprise-server@2.21/rest/reference/activity#get-a-thread - API method documentation
    **/
    activityGetThread(req: operations.ActivityGetThreadRequest, config?: AxiosRequestConfig): Promise<operations.ActivityGetThreadResponse>;
    /**
     * activityGetThreadSubscriptionForAuthenticatedUser - Get a thread subscription for the authenticated user
     *
     * This checks to see if the current user is subscribed to a thread. You can also [get a repository subscription](https://docs.github.com/enterprise-server@2.21/rest/reference/activity#get-a-repository-subscription).
     *
     * Note that subscriptions are only generated if a user is participating in a conversation--for example, they've replied to the thread, were **@mentioned**, or manually subscribe to a thread.
     *
     * https://docs.github.com/enterprise-server@2.21/rest/reference/activity#get-a-thread-subscription-for-the-authenticated-user - API method documentation
    **/
    activityGetThreadSubscriptionForAuthenticatedUser(req: operations.ActivityGetThreadSubscriptionForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.ActivityGetThreadSubscriptionForAuthenticatedUserResponse>;
    /**
     * activityListEventsForAuthenticatedUser - List events for the authenticated user
     *
     * If you are authenticated as the given user, you will see your private events. Otherwise, you'll only see public events.
     *
     * https://docs.github.com/enterprise-server@2.21/rest/reference/activity#list-events-for-the-authenticated-user - API method documentation
    **/
    activityListEventsForAuthenticatedUser(req: operations.ActivityListEventsForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.ActivityListEventsForAuthenticatedUserResponse>;
    /**
     * activityListNotificationsForAuthenticatedUser - List notifications for the authenticated user
     *
     * List all notifications for the current user, sorted by most recently updated.
     *
     * https://docs.github.com/enterprise-server@2.21/rest/reference/activity#list-notifications-for-the-authenticated-user - API method documentation
    **/
    activityListNotificationsForAuthenticatedUser(req: operations.ActivityListNotificationsForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.ActivityListNotificationsForAuthenticatedUserResponse>;
    /**
     * activityListOrgEventsForAuthenticatedUser - List organization events for the authenticated user
     *
     * This is the user's organization dashboard. You must be authenticated as the user to view this.
     *
     * https://docs.github.com/enterprise-server@2.21/rest/reference/activity#list-organization-events-for-the-authenticated-user - API method documentation
    **/
    activityListOrgEventsForAuthenticatedUser(req: operations.ActivityListOrgEventsForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.ActivityListOrgEventsForAuthenticatedUserResponse>;
    /**
     * activityListPublicEvents - List public events
     *
     * We delay the public events feed by five minutes, which means the most recent event returned by the public events API actually occurred at least five minutes ago.
     *
     * https://docs.github.com/enterprise-server@2.21/rest/reference/activity#list-public-events - API method documentation
    **/
    activityListPublicEvents(req: operations.ActivityListPublicEventsRequest, config?: AxiosRequestConfig): Promise<operations.ActivityListPublicEventsResponse>;
    /**
     * activityListPublicEventsForRepoNetwork - List public events for a network of repositories
     *
     * https://docs.github.com/enterprise-server@2.21/rest/reference/activity#list-public-events-for-a-network-of-repositories - API method documentation
    **/
    activityListPublicEventsForRepoNetwork(req: operations.ActivityListPublicEventsForRepoNetworkRequest, config?: AxiosRequestConfig): Promise<operations.ActivityListPublicEventsForRepoNetworkResponse>;
    /**
     * activityListPublicEventsForUser - List public events for a user
     *
     * https://docs.github.com/enterprise-server@2.21/rest/reference/activity#list-public-events-for-a-user - API method documentation
    **/
    activityListPublicEventsForUser(req: operations.ActivityListPublicEventsForUserRequest, config?: AxiosRequestConfig): Promise<operations.ActivityListPublicEventsForUserResponse>;
    /**
     * activityListPublicOrgEvents - List public organization events
     *
     * https://docs.github.com/enterprise-server@2.21/rest/reference/activity#list-public-organization-events - API method documentation
    **/
    activityListPublicOrgEvents(req: operations.ActivityListPublicOrgEventsRequest, config?: AxiosRequestConfig): Promise<operations.ActivityListPublicOrgEventsResponse>;
    /**
     * activityListReceivedEventsForUser - List events received by the authenticated user
     *
     * These are events that you've received by watching repos and following users. If you are authenticated as the given user, you will see private events. Otherwise, you'll only see public events.
     *
     * https://docs.github.com/enterprise-server@2.21/rest/reference/activity#list-events-received-by-the-authenticated-user - API method documentation
    **/
    activityListReceivedEventsForUser(req: operations.ActivityListReceivedEventsForUserRequest, config?: AxiosRequestConfig): Promise<operations.ActivityListReceivedEventsForUserResponse>;
    /**
     * activityListReceivedPublicEventsForUser - List public events received by a user
     *
     * https://docs.github.com/enterprise-server@2.21/rest/reference/activity#list-public-events-received-by-a-user - API method documentation
    **/
    activityListReceivedPublicEventsForUser(req: operations.ActivityListReceivedPublicEventsForUserRequest, config?: AxiosRequestConfig): Promise<operations.ActivityListReceivedPublicEventsForUserResponse>;
    /**
     * activityListRepoEvents - List repository events
     *
     * https://docs.github.com/enterprise-server@2.21/rest/reference/activity#list-repository-events - API method documentation
    **/
    activityListRepoEvents(req: operations.ActivityListRepoEventsRequest, config?: AxiosRequestConfig): Promise<operations.ActivityListRepoEventsResponse>;
    /**
     * activityListRepoNotificationsForAuthenticatedUser - List repository notifications for the authenticated user
     *
     * List all notifications for the current user.
     *
     * https://docs.github.com/enterprise-server@2.21/rest/reference/activity#list-repository-notifications-for-the-authenticated-user - API method documentation
    **/
    activityListRepoNotificationsForAuthenticatedUser(req: operations.ActivityListRepoNotificationsForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.ActivityListRepoNotificationsForAuthenticatedUserResponse>;
    /**
     * activityListReposStarredByAuthenticatedUser - List repositories starred by the authenticated user
     *
     * Lists repositories the authenticated user has starred.
     *
     * You can also find out _when_ stars were created by passing the following custom [media type](https://docs.github.com/enterprise-server@2.21/rest/overview/media-types/) via the `Accept` header:
     *
     * https://docs.github.com/enterprise-server@2.21/rest/reference/activity#list-repositories-starred-by-the-authenticated-user - API method documentation
    **/
    activityListReposStarredByAuthenticatedUser(req: operations.ActivityListReposStarredByAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.ActivityListReposStarredByAuthenticatedUserResponse>;
    /**
     * activityListReposStarredByUser - List repositories starred by a user
     *
     * Lists repositories a user has starred.
     *
     * You can also find out _when_ stars were created by passing the following custom [media type](https://docs.github.com/enterprise-server@2.21/rest/overview/media-types/) via the `Accept` header:
     *
     * https://docs.github.com/enterprise-server@2.21/rest/reference/activity#list-repositories-starred-by-a-user - API method documentation
    **/
    activityListReposStarredByUser(req: operations.ActivityListReposStarredByUserRequest, config?: AxiosRequestConfig): Promise<operations.ActivityListReposStarredByUserResponse>;
    /**
     * activityListReposWatchedByUser - List repositories watched by a user
     *
     * Lists repositories a user is watching.
     *
     * https://docs.github.com/enterprise-server@2.21/rest/reference/activity#list-repositories-watched-by-a-user - API method documentation
    **/
    activityListReposWatchedByUser(req: operations.ActivityListReposWatchedByUserRequest, config?: AxiosRequestConfig): Promise<operations.ActivityListReposWatchedByUserResponse>;
    /**
     * activityListStargazersForRepo - List stargazers
     *
     * Lists the people that have starred the repository.
     *
     * You can also find out _when_ stars were created by passing the following custom [media type](https://docs.github.com/enterprise-server@2.21/rest/overview/media-types/) via the `Accept` header:
     *
     * https://docs.github.com/enterprise-server@2.21/rest/reference/activity#list-stargazers - API method documentation
    **/
    activityListStargazersForRepo(req: operations.ActivityListStargazersForRepoRequest, config?: AxiosRequestConfig): Promise<operations.ActivityListStargazersForRepoResponse>;
    /**
     * activityListWatchedReposForAuthenticatedUser - List repositories watched by the authenticated user
     *
     * Lists repositories the authenticated user is watching.
     *
     * https://docs.github.com/enterprise-server@2.21/rest/reference/activity#list-repositories-watched-by-the-authenticated-user - API method documentation
    **/
    activityListWatchedReposForAuthenticatedUser(req: operations.ActivityListWatchedReposForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.ActivityListWatchedReposForAuthenticatedUserResponse>;
    /**
     * activityListWatchersForRepo - List watchers
     *
     * Lists the people watching the specified repository.
     *
     * https://docs.github.com/enterprise-server@2.21/rest/reference/activity#list-watchers - API method documentation
    **/
    activityListWatchersForRepo(req: operations.ActivityListWatchersForRepoRequest, config?: AxiosRequestConfig): Promise<operations.ActivityListWatchersForRepoResponse>;
    /**
     * activityMarkNotificationsAsRead - Mark notifications as read
     *
     * Marks all notifications as "read" removes it from the [default view on GitHub Enterprise Server](https://github.com/notifications). If the number of notifications is too large to complete in one request, you will receive a `202 Accepted` status and GitHub Enterprise Server will run an asynchronous process to mark notifications as "read." To check whether any "unread" notifications remain, you can use the [List notifications for the authenticated user](https://docs.github.com/enterprise-server@2.21/rest/reference/activity#list-notifications-for-the-authenticated-user) endpoint and pass the query parameter `all=false`.
     *
     * https://docs.github.com/enterprise-server@2.21/rest/reference/activity#mark-notifications-as-read - API method documentation
    **/
    activityMarkNotificationsAsRead(req: operations.ActivityMarkNotificationsAsReadRequest, config?: AxiosRequestConfig): Promise<operations.ActivityMarkNotificationsAsReadResponse>;
    /**
     * activityMarkRepoNotificationsAsRead - Mark repository notifications as read
     *
     * Marks all notifications in a repository as "read" removes them from the [default view on GitHub Enterprise Server](https://github.com/notifications). If the number of notifications is too large to complete in one request, you will receive a `202 Accepted` status and GitHub Enterprise Server will run an asynchronous process to mark notifications as "read." To check whether any "unread" notifications remain, you can use the [List repository notifications for the authenticated user](https://docs.github.com/enterprise-server@2.21/rest/reference/activity#list-repository-notifications-for-the-authenticated-user) endpoint and pass the query parameter `all=false`.
     *
     * https://docs.github.com/enterprise-server@2.21/rest/reference/activity#mark-repository-notifications-as-read - API method documentation
    **/
    activityMarkRepoNotificationsAsRead(req: operations.ActivityMarkRepoNotificationsAsReadRequest, config?: AxiosRequestConfig): Promise<operations.ActivityMarkRepoNotificationsAsReadResponse>;
    /**
     * activityMarkThreadAsRead - Mark a thread as read
     *
     * https://docs.github.com/enterprise-server@2.21/rest/reference/activity#mark-a-thread-as-read - API method documentation
    **/
    activityMarkThreadAsRead(req: operations.ActivityMarkThreadAsReadRequest, config?: AxiosRequestConfig): Promise<operations.ActivityMarkThreadAsReadResponse>;
    /**
     * activitySetRepoSubscription - Set a repository subscription
     *
     * If you would like to watch a repository, set `subscribed` to `true`. If you would like to ignore notifications made within a repository, set `ignored` to `true`. If you would like to stop watching a repository, [delete the repository's subscription](https://docs.github.com/enterprise-server@2.21/rest/reference/activity#delete-a-repository-subscription) completely.
     *
     * https://docs.github.com/enterprise-server@2.21/rest/reference/activity#set-a-repository-subscription - API method documentation
    **/
    activitySetRepoSubscription(req: operations.ActivitySetRepoSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.ActivitySetRepoSubscriptionResponse>;
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
    activitySetThreadSubscription(req: operations.ActivitySetThreadSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.ActivitySetThreadSubscriptionResponse>;
    /**
     * activityStarRepoForAuthenticatedUser - Star a repository for the authenticated user
     *
     * Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-server@2.21/rest/overview/resources-in-the-rest-api#http-verbs)."
     *
     * https://docs.github.com/enterprise-server@2.21/rest/reference/activity#star-a-repository-for-the-authenticated-user - API method documentation
    **/
    activityStarRepoForAuthenticatedUser(req: operations.ActivityStarRepoForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.ActivityStarRepoForAuthenticatedUserResponse>;
    /**
     * activityUnstarRepoForAuthenticatedUser - Unstar a repository for the authenticated user
     *
     * https://docs.github.com/enterprise-server@2.21/rest/reference/activity#unstar-a-repository-for-the-authenticated-user - API method documentation
    **/
    activityUnstarRepoForAuthenticatedUser(req: operations.ActivityUnstarRepoForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.ActivityUnstarRepoForAuthenticatedUserResponse>;
}
