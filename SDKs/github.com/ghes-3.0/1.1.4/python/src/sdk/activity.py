import requests
from typing import Any,List,Optional
from sdk.models import shared, operations
from . import utils

class Activity:
    _client: requests.Session
    _security_client: requests.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests.Session, security_client: requests.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version

    
    def activity_check_repo_is_starred_by_authenticated_user(self, request: operations.ActivityCheckRepoIsStarredByAuthenticatedUserRequest) -> operations.ActivityCheckRepoIsStarredByAuthenticatedUserResponse:
        r"""Check if a repository is starred by the authenticated user
        https://docs.github.com/enterprise-server@3.0/rest/reference/activity#check-if-a-repository-is-starred-by-the-authenticated-user - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/user/starred/{owner}/{repo}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ActivityCheckRepoIsStarredByAuthenticatedUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 304:
            pass
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def activity_delete_repo_subscription(self, request: operations.ActivityDeleteRepoSubscriptionRequest) -> operations.ActivityDeleteRepoSubscriptionResponse:
        r"""Delete a repository subscription
        This endpoint should only be used to stop watching a repository. To control whether or not you wish to receive notifications from a repository, [set the repository's subscription manually](https://docs.github.com/enterprise-server@3.0/rest/reference/activity#set-a-repository-subscription).
        https://docs.github.com/enterprise-server@3.0/rest/reference/activity#delete-a-repository-subscription - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/subscription", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ActivityDeleteRepoSubscriptionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def activity_delete_thread_subscription(self, request: operations.ActivityDeleteThreadSubscriptionRequest) -> operations.ActivityDeleteThreadSubscriptionResponse:
        r"""Delete a thread subscription
        Mutes all future notifications for a conversation until you comment on the thread or get an **@mention**. If you are watching the repository of the thread, you will still receive notifications. To ignore future notifications for a repository you are watching, use the [Set a thread subscription](https://docs.github.com/enterprise-server@3.0/rest/reference/activity#set-a-thread-subscription) endpoint and set `ignore` to `true`.
        https://docs.github.com/enterprise-server@3.0/rest/reference/activity#delete-a-thread-subscription - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/notifications/threads/{thread_id}/subscription", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ActivityDeleteThreadSubscriptionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 304:
            pass
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def activity_get_feeds(self) -> operations.ActivityGetFeedsResponse:
        r"""Get feeds
        GitHub Enterprise Server provides several timeline resources in [Atom](http://en.wikipedia.org/wiki/Atom_(standard)) format. The Feeds API lists all the feeds available to the authenticated user:
        
        *   **Timeline**: The GitHub Enterprise Server global public timeline
        *   **User**: The public timeline for any user, using [URI template](https://docs.github.com/enterprise-server@3.0/rest/overview/resources-in-the-rest-api#hypermedia)
        *   **Current user public**: The public timeline for the authenticated user
        *   **Current user**: The private timeline for the authenticated user
        *   **Current user actor**: The private timeline for activity created by the authenticated user
        *   **Current user organizations**: The private timeline for the organizations the authenticated user is a member of.
        *   **Security advisories**: A collection of public announcements that provide information about security-related vulnerabilities in software on GitHub Enterprise Server.
        
        **Note**: Private feeds are only returned when [authenticating via Basic Auth](https://docs.github.com/enterprise-server@3.0/rest/overview/other-authentication-methods#basic-authentication) since current feed URIs use the older, non revocable auth tokens.
        https://docs.github.com/enterprise-server@3.0/rest/reference/activity#get-feeds - API method documentation
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/feeds"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ActivityGetFeedsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Feed])
                res.feed = out

        return res

    
    def activity_get_repo_subscription(self, request: operations.ActivityGetRepoSubscriptionRequest) -> operations.ActivityGetRepoSubscriptionResponse:
        r"""Get a repository subscription
        https://docs.github.com/enterprise-server@3.0/rest/reference/activity#get-a-repository-subscription - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/subscription", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ActivityGetRepoSubscriptionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RepositorySubscription])
                res.repository_subscription = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 404:
            pass

        return res

    
    def activity_get_thread(self, request: operations.ActivityGetThreadRequest) -> operations.ActivityGetThreadResponse:
        r"""Get a thread
        https://docs.github.com/enterprise-server@3.0/rest/reference/activity#get-a-thread - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/notifications/threads/{thread_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ActivityGetThreadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Thread])
                res.thread = out
        elif r.status_code == 304:
            pass
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def activity_get_thread_subscription_for_authenticated_user(self, request: operations.ActivityGetThreadSubscriptionForAuthenticatedUserRequest) -> operations.ActivityGetThreadSubscriptionForAuthenticatedUserResponse:
        r"""Get a thread subscription for the authenticated user
        This checks to see if the current user is subscribed to a thread. You can also [get a repository subscription](https://docs.github.com/enterprise-server@3.0/rest/reference/activity#get-a-repository-subscription).
        
        Note that subscriptions are only generated if a user is participating in a conversation--for example, they've replied to the thread, were **@mentioned**, or manually subscribe to a thread.
        https://docs.github.com/enterprise-server@3.0/rest/reference/activity#get-a-thread-subscription-for-the-authenticated-user - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/notifications/threads/{thread_id}/subscription", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ActivityGetThreadSubscriptionForAuthenticatedUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ThreadSubscription])
                res.thread_subscription = out
        elif r.status_code == 304:
            pass
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def activity_list_events_for_authenticated_user(self, request: operations.ActivityListEventsForAuthenticatedUserRequest) -> operations.ActivityListEventsForAuthenticatedUserResponse:
        r"""List events for the authenticated user
        If you are authenticated as the given user, you will see your private events. Otherwise, you'll only see public events.
        https://docs.github.com/enterprise-server@3.0/rest/reference/activity#list-events-for-the-authenticated-user - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{username}/events", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ActivityListEventsForAuthenticatedUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Event]])
                res.events = out

        return res

    
    def activity_list_notifications_for_authenticated_user(self, request: operations.ActivityListNotificationsForAuthenticatedUserRequest) -> operations.ActivityListNotificationsForAuthenticatedUserResponse:
        r"""List notifications for the authenticated user
        List all notifications for the current user, sorted by most recently updated.
        https://docs.github.com/enterprise-server@3.0/rest/reference/activity#list-notifications-for-the-authenticated-user - API method documentation
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/notifications"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ActivityListNotificationsForAuthenticatedUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Thread]])
                res.threads = out
        elif r.status_code == 304:
            pass
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out

        return res

    
    def activity_list_org_events_for_authenticated_user(self, request: operations.ActivityListOrgEventsForAuthenticatedUserRequest) -> operations.ActivityListOrgEventsForAuthenticatedUserResponse:
        r"""List organization events for the authenticated user
        This is the user's organization dashboard. You must be authenticated as the user to view this.
        https://docs.github.com/enterprise-server@3.0/rest/reference/activity#list-organization-events-for-the-authenticated-user - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{username}/events/orgs/{org}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ActivityListOrgEventsForAuthenticatedUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Event]])
                res.events = out

        return res

    
    def activity_list_public_events(self, request: operations.ActivityListPublicEventsRequest) -> operations.ActivityListPublicEventsResponse:
        r"""List public events
        We delay the public events feed by five minutes, which means the most recent event returned by the public events API actually occurred at least five minutes ago.
        https://docs.github.com/enterprise-server@3.0/rest/reference/activity#list-public-events - API method documentation
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/events"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ActivityListPublicEventsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Event]])
                res.events = out
        elif r.status_code == 304:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 503:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ActivityListPublicEvents503ApplicationJSON])
                res.activity_list_public_events_503_application_json_object = out

        return res

    
    def activity_list_public_events_for_repo_network(self, request: operations.ActivityListPublicEventsForRepoNetworkRequest) -> operations.ActivityListPublicEventsForRepoNetworkResponse:
        r"""List public events for a network of repositories
        https://docs.github.com/enterprise-server@3.0/rest/reference/activity#list-public-events-for-a-network-of-repositories - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{owner}/{repo}/events", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ActivityListPublicEventsForRepoNetworkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Event]])
                res.events = out
        elif r.status_code == 301:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 304:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def activity_list_public_events_for_user(self, request: operations.ActivityListPublicEventsForUserRequest) -> operations.ActivityListPublicEventsForUserResponse:
        r"""List public events for a user
        https://docs.github.com/enterprise-server@3.0/rest/reference/activity#list-public-events-for-a-user - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{username}/events/public", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ActivityListPublicEventsForUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Event]])
                res.events = out

        return res

    
    def activity_list_public_org_events(self, request: operations.ActivityListPublicOrgEventsRequest) -> operations.ActivityListPublicOrgEventsResponse:
        r"""List public organization events
        https://docs.github.com/enterprise-server@3.0/rest/reference/activity#list-public-organization-events - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/events", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ActivityListPublicOrgEventsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Event]])
                res.events = out

        return res

    
    def activity_list_received_events_for_user(self, request: operations.ActivityListReceivedEventsForUserRequest) -> operations.ActivityListReceivedEventsForUserResponse:
        r"""List events received by the authenticated user
        These are events that you've received by watching repos and following users. If you are authenticated as the given user, you will see private events. Otherwise, you'll only see public events.
        https://docs.github.com/enterprise-server@3.0/rest/reference/activity#list-events-received-by-the-authenticated-user - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{username}/received_events", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ActivityListReceivedEventsForUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Event]])
                res.events = out

        return res

    
    def activity_list_received_public_events_for_user(self, request: operations.ActivityListReceivedPublicEventsForUserRequest) -> operations.ActivityListReceivedPublicEventsForUserResponse:
        r"""List public events received by a user
        https://docs.github.com/enterprise-server@3.0/rest/reference/activity#list-public-events-received-by-a-user - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{username}/received_events/public", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ActivityListReceivedPublicEventsForUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Event]])
                res.events = out

        return res

    
    def activity_list_repo_events(self, request: operations.ActivityListRepoEventsRequest) -> operations.ActivityListRepoEventsResponse:
        r"""List repository events
        https://docs.github.com/enterprise-server@3.0/rest/reference/activity#list-repository-events - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/events", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ActivityListRepoEventsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Event]])
                res.events = out

        return res

    
    def activity_list_repo_notifications_for_authenticated_user(self, request: operations.ActivityListRepoNotificationsForAuthenticatedUserRequest) -> operations.ActivityListRepoNotificationsForAuthenticatedUserResponse:
        r"""List repository notifications for the authenticated user
        List all notifications for the current user.
        https://docs.github.com/enterprise-server@3.0/rest/reference/activity#list-repository-notifications-for-the-authenticated-user - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/notifications", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ActivityListRepoNotificationsForAuthenticatedUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Thread]])
                res.threads = out

        return res

    
    def activity_list_repos_starred_by_authenticated_user(self, request: operations.ActivityListReposStarredByAuthenticatedUserRequest) -> operations.ActivityListReposStarredByAuthenticatedUserResponse:
        r"""List repositories starred by the authenticated user
        Lists repositories the authenticated user has starred.
        
        You can also find out _when_ stars were created by passing the following custom [media type](https://docs.github.com/enterprise-server@3.0/rest/overview/media-types/) via the `Accept` header:
        https://docs.github.com/enterprise-server@3.0/rest/reference/activity#list-repositories-starred-by-the-authenticated-user - API method documentation
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/user/starred"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ActivityListReposStarredByAuthenticatedUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Repository]])
                res.repositories = out
            if utils.match_content_type(content_type, "application/vnd.github.v3.star+json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.StarredRepository]])
                res.starred_repositories = out
        elif r.status_code == 304:
            pass
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def activity_list_repos_starred_by_user(self, request: operations.ActivityListReposStarredByUserRequest) -> operations.ActivityListReposStarredByUserResponse:
        r"""List repositories starred by a user
        Lists repositories a user has starred.
        
        You can also find out _when_ stars were created by passing the following custom [media type](https://docs.github.com/enterprise-server@3.0/rest/overview/media-types/) via the `Accept` header:
        https://docs.github.com/enterprise-server@3.0/rest/reference/activity#list-repositories-starred-by-a-user - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{username}/starred", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ActivityListReposStarredByUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.activity_list_repos_starred_by_user_200_application_json_any_of = out

        return res

    
    def activity_list_repos_watched_by_user(self, request: operations.ActivityListReposWatchedByUserRequest) -> operations.ActivityListReposWatchedByUserResponse:
        r"""List repositories watched by a user
        Lists repositories a user is watching.
        https://docs.github.com/enterprise-server@3.0/rest/reference/activity#list-repositories-watched-by-a-user - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{username}/subscriptions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ActivityListReposWatchedByUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.MinimalRepository]])
                res.minimal_repositories = out

        return res

    
    def activity_list_stargazers_for_repo(self, request: operations.ActivityListStargazersForRepoRequest) -> operations.ActivityListStargazersForRepoResponse:
        r"""List stargazers
        Lists the people that have starred the repository.
        
        You can also find out _when_ stars were created by passing the following custom [media type](https://docs.github.com/enterprise-server@3.0/rest/overview/media-types/) via the `Accept` header:
        https://docs.github.com/enterprise-server@3.0/rest/reference/activity#list-stargazers - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/stargazers", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ActivityListStargazersForRepoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.activity_list_stargazers_for_repo_200_application_json_any_of = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out

        return res

    
    def activity_list_watched_repos_for_authenticated_user(self, request: operations.ActivityListWatchedReposForAuthenticatedUserRequest) -> operations.ActivityListWatchedReposForAuthenticatedUserResponse:
        r"""List repositories watched by the authenticated user
        Lists repositories the authenticated user is watching.
        https://docs.github.com/enterprise-server@3.0/rest/reference/activity#list-repositories-watched-by-the-authenticated-user - API method documentation
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/user/subscriptions"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ActivityListWatchedReposForAuthenticatedUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.MinimalRepository]])
                res.minimal_repositories = out
        elif r.status_code == 304:
            pass
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def activity_list_watchers_for_repo(self, request: operations.ActivityListWatchersForRepoRequest) -> operations.ActivityListWatchersForRepoResponse:
        r"""List watchers
        Lists the people watching the specified repository.
        https://docs.github.com/enterprise-server@3.0/rest/reference/activity#list-watchers - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/subscribers", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ActivityListWatchersForRepoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.SimpleUser]])
                res.simple_users = out

        return res

    
    def activity_mark_notifications_as_read(self, request: operations.ActivityMarkNotificationsAsReadRequest) -> operations.ActivityMarkNotificationsAsReadResponse:
        r"""Mark notifications as read
        Marks all notifications as \"read\" removes it from the [default view on GitHub Enterprise Server](https://github.com/notifications). If the number of notifications is too large to complete in one request, you will receive a `202 Accepted` status and GitHub Enterprise Server will run an asynchronous process to mark notifications as \"read.\" To check whether any \"unread\" notifications remain, you can use the [List notifications for the authenticated user](https://docs.github.com/enterprise-server@3.0/rest/reference/activity#list-notifications-for-the-authenticated-user) endpoint and pass the query parameter `all=false`.
        https://docs.github.com/enterprise-server@3.0/rest/reference/activity#mark-notifications-as-read - API method documentation
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/notifications"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ActivityMarkNotificationsAsReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ActivityMarkNotificationsAsRead202ApplicationJSON])
                res.activity_mark_notifications_as_read_202_application_json_object = out
        elif r.status_code == 205:
            pass
        elif r.status_code == 304:
            pass
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def activity_mark_repo_notifications_as_read(self, request: operations.ActivityMarkRepoNotificationsAsReadRequest) -> operations.ActivityMarkRepoNotificationsAsReadResponse:
        r"""Mark repository notifications as read
        Marks all notifications in a repository as \"read\" removes them from the [default view on GitHub Enterprise Server](https://github.com/notifications). If the number of notifications is too large to complete in one request, you will receive a `202 Accepted` status and GitHub Enterprise Server will run an asynchronous process to mark notifications as \"read.\" To check whether any \"unread\" notifications remain, you can use the [List repository notifications for the authenticated user](https://docs.github.com/enterprise-server@3.0/rest/reference/activity#list-repository-notifications-for-the-authenticated-user) endpoint and pass the query parameter `all=false`.
        https://docs.github.com/enterprise-server@3.0/rest/reference/activity#mark-repository-notifications-as-read - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/notifications", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ActivityMarkRepoNotificationsAsReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ActivityMarkRepoNotificationsAsRead202ApplicationJSON])
                res.activity_mark_repo_notifications_as_read_202_application_json_object = out
        elif r.status_code == 205:
            pass

        return res

    
    def activity_mark_thread_as_read(self, request: operations.ActivityMarkThreadAsReadRequest) -> operations.ActivityMarkThreadAsReadResponse:
        r"""Mark a thread as read
        https://docs.github.com/enterprise-server@3.0/rest/reference/activity#mark-a-thread-as-read - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/notifications/threads/{thread_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("PATCH", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ActivityMarkThreadAsReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 205:
            pass
        elif r.status_code == 304:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def activity_set_repo_subscription(self, request: operations.ActivitySetRepoSubscriptionRequest) -> operations.ActivitySetRepoSubscriptionResponse:
        r"""Set a repository subscription
        If you would like to watch a repository, set `subscribed` to `true`. If you would like to ignore notifications made within a repository, set `ignored` to `true`. If you would like to stop watching a repository, [delete the repository's subscription](https://docs.github.com/enterprise-server@3.0/rest/reference/activity#delete-a-repository-subscription) completely.
        https://docs.github.com/enterprise-server@3.0/rest/reference/activity#set-a-repository-subscription - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/subscription", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ActivitySetRepoSubscriptionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RepositorySubscription])
                res.repository_subscription = out

        return res

    
    def activity_set_thread_subscription(self, request: operations.ActivitySetThreadSubscriptionRequest) -> operations.ActivitySetThreadSubscriptionResponse:
        r"""Set a thread subscription
        If you are watching a repository, you receive notifications for all threads by default. Use this endpoint to ignore future notifications for threads until you comment on the thread or get an **@mention**.
        
        You can also use this endpoint to subscribe to threads that you are currently not receiving notifications for or to subscribed to threads that you have previously ignored.
        
        Unsubscribing from a conversation in a repository that you are not watching is functionally equivalent to the [Delete a thread subscription](https://docs.github.com/enterprise-server@3.0/rest/reference/activity#delete-a-thread-subscription) endpoint.
        https://docs.github.com/enterprise-server@3.0/rest/reference/activity#set-a-thread-subscription - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/notifications/threads/{thread_id}/subscription", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ActivitySetThreadSubscriptionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ThreadSubscription])
                res.thread_subscription = out
        elif r.status_code == 304:
            pass
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def activity_star_repo_for_authenticated_user(self, request: operations.ActivityStarRepoForAuthenticatedUserRequest) -> operations.ActivityStarRepoForAuthenticatedUserResponse:
        r"""Star a repository for the authenticated user
        Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see \"[HTTP verbs](https://docs.github.com/enterprise-server@3.0/rest/overview/resources-in-the-rest-api#http-verbs).\"
        https://docs.github.com/enterprise-server@3.0/rest/reference/activity#star-a-repository-for-the-authenticated-user - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/user/starred/{owner}/{repo}", request.path_params)
        
        
        client = self._client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ActivityStarRepoForAuthenticatedUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 304:
            pass
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def activity_unstar_repo_for_authenticated_user(self, request: operations.ActivityUnstarRepoForAuthenticatedUserRequest) -> operations.ActivityUnstarRepoForAuthenticatedUserResponse:
        r"""Unstar a repository for the authenticated user
        https://docs.github.com/enterprise-server@3.0/rest/reference/activity#unstar-a-repository-for-the-authenticated-user - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/user/starred/{owner}/{repo}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ActivityUnstarRepoForAuthenticatedUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 304:
            pass
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    