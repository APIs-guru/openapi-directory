
__doc__ = """ SDK Documentation: https://docs.joinpeertube.org/api-rest-reference.html"""
import requests
from typing import Any,List,Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://peertube2.cpy.re/api/v1",
	"https://peertube3.cpy.re/api/v1",
	"https://peertube.cpy.re/api/v1",
]


class SDK:
    r"""SDK Documentation: https://docs.joinpeertube.org/api-rest-reference.html"""

    _client: requests.Session
    _security_client: requests.Session
    
    _server_url: str = SERVERS[0]
    _language: str = "python"
    _sdk_version: str = "0.0.1"
    _gen_version: str = "internal"

    def __init__(self) -> None:
        self._client = requests.Session()
        self._security_client = requests.Session()
        


    def config_server_url(self, server_url: str, params: dict[str, str]):
        if params is not None:
            self._server_url = utils.replace_parameters(server_url, params)
        else:
            self._server_url = server_url

        
    

    def config_client(self, client: requests.Session):
        self._client = client
        
    
    
    
    def delete_abuses_abuse_id_(self, request: operations.DeleteAbusesAbuseIDRequest) -> operations.DeleteAbusesAbuseIDResponse:
        r"""Delete an abuse
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/abuses/{abuseId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteAbusesAbuseIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def delete_abuses_abuse_id_messages_abuse_message_id_(self, request: operations.DeleteAbusesAbuseIDMessagesAbuseMessageIDRequest) -> operations.DeleteAbusesAbuseIDMessagesAbuseMessageIDResponse:
        r"""Delete an abuse message
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/abuses/{abuseId}/messages/{abuseMessageId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteAbusesAbuseIDMessagesAbuseMessageIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_server_blocklist_accounts_account_name_(self, request: operations.DeleteServerBlocklistAccountsAccountNameRequest) -> operations.DeleteServerBlocklistAccountsAccountNameResponse:
        r"""Unblock an account by its handle
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/server/blocklist/accounts/{accountName}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteServerBlocklistAccountsAccountNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def delete_server_blocklist_servers_host_(self, request: operations.DeleteServerBlocklistServersHostRequest) -> operations.DeleteServerBlocklistServersHostResponse:
        r"""Unblock a server by its domain
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/server/blocklist/servers/{host}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteServerBlocklistServersHostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def delete_server_followers_name_with_host_(self, request: operations.DeleteServerFollowersNameWithHostRequest) -> operations.DeleteServerFollowersNameWithHostResponse:
        r"""Remove or reject a follower to your server
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/server/followers/{nameWithHost}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteServerFollowersNameWithHostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def delete_server_following_host_or_handle_(self, request: operations.DeleteServerFollowingHostOrHandleRequest) -> operations.DeleteServerFollowingHostOrHandleResponse:
        r"""Unfollow an actor (PeerTube instance, channel or account)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/server/following/{hostOrHandle}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteServerFollowingHostOrHandleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def delete_users_me_avatar(self, request: operations.DeleteUsersMeAvatarRequest) -> operations.DeleteUsersMeAvatarResponse:
        r"""Delete my avatar
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/users/me/avatar"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteUsersMeAvatarResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_users_me_subscriptions_subscription_handle_(self, request: operations.DeleteUsersMeSubscriptionsSubscriptionHandleRequest) -> operations.DeleteUsersMeSubscriptionsSubscriptionHandleResponse:
        r"""Delete subscription of my user
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/me/subscriptions/{subscriptionHandle}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteUsersMeSubscriptionsSubscriptionHandleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def delete_video_channels_channel_handle_avatar(self, request: operations.DeleteVideoChannelsChannelHandleAvatarRequest) -> operations.DeleteVideoChannelsChannelHandleAvatarResponse:
        r"""Delete channel avatar
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/video-channels/{channelHandle}/avatar", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteVideoChannelsChannelHandleAvatarResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_video_channels_channel_handle_banner(self, request: operations.DeleteVideoChannelsChannelHandleBannerRequest) -> operations.DeleteVideoChannelsChannelHandleBannerResponse:
        r"""Delete channel banner
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/video-channels/{channelHandle}/banner", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteVideoChannelsChannelHandleBannerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_video_playlists_playlist_id_(self, request: operations.DeleteVideoPlaylistsPlaylistIDRequest) -> operations.DeleteVideoPlaylistsPlaylistIDResponse:
        r"""Delete a video playlist
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/video-playlists/{playlistId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteVideoPlaylistsPlaylistIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_videos_id_comments_comment_id_(self, request: operations.DeleteVideosIDCommentsCommentIDRequest) -> operations.DeleteVideosIDCommentsCommentIDResponse:
        r"""Delete a comment or a reply
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/videos/{id}/comments/{commentId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteVideosIDCommentsCommentIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 409:
            pass

        return res

    
    def get_abuses_abuse_id_messages(self, request: operations.GetAbusesAbuseIDMessagesRequest) -> operations.GetAbusesAbuseIDMessagesResponse:
        r"""List messages of an abuse
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/abuses/{abuseId}/messages", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAbusesAbuseIDMessagesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAbusesAbuseIDMessages200ApplicationJSON])
                res.get_abuses_abuse_id_messages_200_application_json_object = out

        return res

    
    def get_accounts_name_ratings(self, request: operations.GetAccountsNameRatingsRequest) -> operations.GetAccountsNameRatingsResponse:
        r"""List ratings of an account
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/accounts/{name}/ratings", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAccountsNameRatingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.video_ratings = out

        return res

    
    def get_accounts_name_video_channels(self, request: operations.GetAccountsNameVideoChannelsRequest) -> operations.GetAccountsNameVideoChannelsResponse:
        r"""List video channels of an account
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/accounts/{name}/video-channels", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAccountsNameVideoChannelsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.video_channel_list = out

        return res

    
    def get_custom_pages_homepage_instance(self) -> operations.GetCustomPagesHomepageInstanceResponse:
        r"""Get instance custom homepage
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/custom-pages/homepage/instance"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCustomPagesHomepageInstanceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.custom_homepage = out
        elif r.status_code == 404:
            pass

        return res

    
    def get_plugins_npm_name_public_settings(self, request: operations.GetPluginsNpmNamePublicSettingsRequest) -> operations.GetPluginsNpmNamePublicSettingsResponse:
        r"""Get a plugin's public settings
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/plugins/{npmName}/public-settings", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPluginsNpmNamePublicSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_plugins_npm_name_public_settings_200_application_json_object = out
        elif r.status_code == 404:
            pass

        return res

    
    def get_plugins_npm_name_registered_settings(self, request: operations.GetPluginsNpmNameRegisteredSettingsRequest) -> operations.GetPluginsNpmNameRegisteredSettingsResponse:
        r"""Get a plugin's registered settings
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/plugins/{npmName}/registered-settings", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPluginsNpmNameRegisteredSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_plugins_npm_name_registered_settings_200_application_json_object = out
        elif r.status_code == 404:
            pass

        return res

    
    def get_server_blocklist_accounts(self, request: operations.GetServerBlocklistAccountsRequest) -> operations.GetServerBlocklistAccountsResponse:
        r"""List account blocks
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/server/blocklist/accounts"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetServerBlocklistAccountsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_server_blocklist_servers(self, request: operations.GetServerBlocklistServersRequest) -> operations.GetServerBlocklistServersResponse:
        r"""List server blocks
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/server/blocklist/servers"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetServerBlocklistServersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_server_followers(self, request: operations.GetServerFollowersRequest) -> operations.GetServerFollowersResponse:
        r"""List instances following the server
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/server/followers"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetServerFollowersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetServerFollowers200ApplicationJSON])
                res.get_server_followers_200_application_json_object = out

        return res

    
    def get_server_following(self, request: operations.GetServerFollowingRequest) -> operations.GetServerFollowingResponse:
        r"""List instances followed by the server
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/server/following"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetServerFollowingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetServerFollowing200ApplicationJSON])
                res.get_server_following_200_application_json_object = out

        return res

    
    def get_users_me_history_videos(self, request: operations.GetUsersMeHistoryVideosRequest) -> operations.GetUsersMeHistoryVideosResponse:
        r"""List watched videos history
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/users/me/history/videos"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUsersMeHistoryVideosResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.video_list_response = out

        return res

    
    def get_users_me_notifications(self, request: operations.GetUsersMeNotificationsRequest) -> operations.GetUsersMeNotificationsResponse:
        r"""List my notifications
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/users/me/notifications"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUsersMeNotificationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.notification_list_response = out

        return res

    
    def get_users_me_subscriptions(self, request: operations.GetUsersMeSubscriptionsRequest) -> operations.GetUsersMeSubscriptionsResponse:
        r"""Get my user subscriptions
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/users/me/subscriptions"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUsersMeSubscriptionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.video_channel_list = out

        return res

    
    def get_users_me_subscriptions_exist(self, request: operations.GetUsersMeSubscriptionsExistRequest) -> operations.GetUsersMeSubscriptionsExistResponse:
        r"""Get if subscriptions exist for my user
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/users/me/subscriptions/exist"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUsersMeSubscriptionsExistResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_users_me_subscriptions_exist_200_application_json_object = out

        return res

    
    def get_users_me_subscriptions_subscription_handle_(self, request: operations.GetUsersMeSubscriptionsSubscriptionHandleRequest) -> operations.GetUsersMeSubscriptionsSubscriptionHandleResponse:
        r"""Get subscription of my user
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/me/subscriptions/{subscriptionHandle}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUsersMeSubscriptionsSubscriptionHandleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.video_channel = out

        return res

    
    def get_users_me_subscriptions_videos(self, request: operations.GetUsersMeSubscriptionsVideosRequest) -> operations.GetUsersMeSubscriptionsVideosResponse:
        r"""List videos of subscriptions of my user
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/users/me/subscriptions/videos"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUsersMeSubscriptionsVideosResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.video_list_response = out

        return res

    
    def get_users_me_video_playlists_videos_exist(self, request: operations.GetUsersMeVideoPlaylistsVideosExistRequest) -> operations.GetUsersMeVideoPlaylistsVideosExistResponse:
        r"""Check video exists in my playlists
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/users/me/video-playlists/videos-exist"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUsersMeVideoPlaylistsVideosExistResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetUsersMeVideoPlaylistsVideosExist200ApplicationJSON])
                res.get_users_me_video_playlists_videos_exist_200_application_json_object = out

        return res

    
    def get_users_me_video_quota_used(self, request: operations.GetUsersMeVideoQuotaUsedRequest) -> operations.GetUsersMeVideoQuotaUsedResponse:
        r"""Get my user used quota
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/users/me/video-quota-used"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUsersMeVideoQuotaUsedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetUsersMeVideoQuotaUsed200ApplicationJSON])
                res.get_users_me_video_quota_used_200_application_json_object = out

        return res

    
    def get_users_me_videos(self, request: operations.GetUsersMeVideosRequest) -> operations.GetUsersMeVideosResponse:
        r"""Get videos of my user
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/users/me/videos"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUsersMeVideosResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.video_list_response = out

        return res

    
    def get_users_me_videos_imports(self, request: operations.GetUsersMeVideosImportsRequest) -> operations.GetUsersMeVideosImportsResponse:
        r"""Get video imports of my user
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/users/me/videos/imports"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUsersMeVideosImportsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.video_imports_list = out

        return res

    
    def get_users_me_videos_video_id_rating(self, request: operations.GetUsersMeVideosVideoIDRatingRequest) -> operations.GetUsersMeVideosVideoIDRatingResponse:
        r"""Get rate of my user for a video
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/me/videos/{videoId}/rating", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUsersMeVideosVideoIDRatingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_me_video_rating = out

        return res

    
    def get_video_playlists_playlist_id_(self, request: operations.GetVideoPlaylistsPlaylistIDRequest) -> operations.GetVideoPlaylistsPlaylistIDResponse:
        r"""Get a video playlist
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/video-playlists/{playlistId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVideoPlaylistsPlaylistIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.video_playlist = out

        return res

    
    def get_videos_id_comment_threads(self, request: operations.GetVideosIDCommentThreadsRequest) -> operations.GetVideosIDCommentThreadsResponse:
        r"""List threads of a video
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/videos/{id}/comment-threads", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVideosIDCommentThreadsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.comment_thread_response = out

        return res

    
    def get_videos_id_comment_threads_thread_id_(self, request: operations.GetVideosIDCommentThreadsThreadIDRequest) -> operations.GetVideosIDCommentThreadsThreadIDResponse:
        r"""Get a thread
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/videos/{id}/comment-threads/{threadId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVideosIDCommentThreadsThreadIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.video_comment_thread_tree = out

        return res

    
    def get_videos_ownership(self, request: operations.GetVideosOwnershipRequest) -> operations.GetVideosOwnershipResponse:
        r"""List video ownership changes
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/videos/ownership"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVideosOwnershipResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_abuses(self, request: operations.PostAbusesRequest) -> operations.PostAbusesResponse:
        r"""Report an abuse
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/abuses"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAbusesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostAbuses200ApplicationJSON])
                res.post_abuses_200_application_json_object = out
        elif r.status_code == 400:
            pass

        return res

    
    def post_abuses_abuse_id_messages(self, request: operations.PostAbusesAbuseIDMessagesRequest) -> operations.PostAbusesAbuseIDMessagesResponse:
        r"""Add message to an abuse
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/abuses/{abuseId}/messages", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAbusesAbuseIDMessagesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass

        return res

    
    def post_server_blocklist_accounts(self, request: operations.PostServerBlocklistAccountsRequest) -> operations.PostServerBlocklistAccountsResponse:
        r"""Block an account
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/server/blocklist/accounts"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostServerBlocklistAccountsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 409:
            pass

        return res

    
    def post_server_blocklist_servers(self, request: operations.PostServerBlocklistServersRequest) -> operations.PostServerBlocklistServersResponse:
        r"""Block a server
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/server/blocklist/servers"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostServerBlocklistServersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 409:
            pass

        return res

    
    def post_server_followers_name_with_host_accept(self, request: operations.PostServerFollowersNameWithHostAcceptRequest) -> operations.PostServerFollowersNameWithHostAcceptResponse:
        r"""Accept a pending follower to your server
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/server/followers/{nameWithHost}/accept", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostServerFollowersNameWithHostAcceptResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def post_server_followers_name_with_host_reject(self, request: operations.PostServerFollowersNameWithHostRejectRequest) -> operations.PostServerFollowersNameWithHostRejectResponse:
        r"""Reject a pending follower to your server
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/server/followers/{nameWithHost}/reject", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostServerFollowersNameWithHostRejectResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def post_server_following(self, request: operations.PostServerFollowingRequest) -> operations.PostServerFollowingResponse:
        r"""Follow a list of actors (PeerTube instance, channel or account)
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/server/following"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostServerFollowingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def post_users_me_history_videos_remove(self, request: operations.PostUsersMeHistoryVideosRemoveRequest) -> operations.PostUsersMeHistoryVideosRemoveResponse:
        r"""Clear video history
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/users/me/history/videos/remove"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostUsersMeHistoryVideosRemoveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def post_users_me_notifications_read(self, request: operations.PostUsersMeNotificationsReadRequest) -> operations.PostUsersMeNotificationsReadResponse:
        r"""Mark notifications as read by their id
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/users/me/notifications/read"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostUsersMeNotificationsReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def post_users_me_notifications_read_all(self, request: operations.PostUsersMeNotificationsReadAllRequest) -> operations.PostUsersMeNotificationsReadAllResponse:
        r"""Mark all my notification as read
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/users/me/notifications/read-all"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostUsersMeNotificationsReadAllResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def post_users_me_subscriptions(self, request: operations.PostUsersMeSubscriptionsRequest) -> operations.PostUsersMeSubscriptionsResponse:
        r"""Add subscription to my user
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/users/me/subscriptions"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostUsersMeSubscriptionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_videos_id_comment_threads(self, request: operations.PostVideosIDCommentThreadsRequest) -> operations.PostVideosIDCommentThreadsResponse:
        r"""Create a thread
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/videos/{id}/comment-threads", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostVideosIDCommentThreadsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.comment_thread_post_response = out
        elif r.status_code == 404:
            pass

        return res

    
    def post_videos_id_comments_comment_id_(self, request: operations.PostVideosIDCommentsCommentIDRequest) -> operations.PostVideosIDCommentsCommentIDResponse:
        r"""Reply to a thread of a video
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/videos/{id}/comments/{commentId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostVideosIDCommentsCommentIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.comment_thread_post_response = out
        elif r.status_code == 404:
            pass

        return res

    
    def post_videos_id_give_ownership(self, request: operations.PostVideosIDGiveOwnershipRequest) -> operations.PostVideosIDGiveOwnershipResponse:
        r"""Request ownership change
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/videos/{id}/give-ownership", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostVideosIDGiveOwnershipResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def post_videos_ownership_id_accept(self, request: operations.PostVideosOwnershipIDAcceptRequest) -> operations.PostVideosOwnershipIDAcceptResponse:
        r"""Accept ownership change request
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/videos/ownership/{id}/accept", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostVideosOwnershipIDAcceptResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def post_videos_ownership_id_refuse(self, request: operations.PostVideosOwnershipIDRefuseRequest) -> operations.PostVideosOwnershipIDRefuseResponse:
        r"""Refuse ownership change request
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/videos/ownership/{id}/refuse", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostVideosOwnershipIDRefuseResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def put_abuses_abuse_id_(self, request: operations.PutAbusesAbuseIDRequest) -> operations.PutAbusesAbuseIDResponse:
        r"""Update an abuse
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/abuses/{abuseId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutAbusesAbuseIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def put_custom_pages_homepage_instance(self, request: operations.PutCustomPagesHomepageInstanceRequest) -> operations.PutCustomPagesHomepageInstanceResponse:
        r"""Set instance custom homepage
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/custom-pages/homepage/instance"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutCustomPagesHomepageInstanceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def put_plugins_npm_name_settings(self, request: operations.PutPluginsNpmNameSettingsRequest) -> operations.PutPluginsNpmNameSettingsResponse:
        r"""Set a plugin's settings
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/plugins/{npmName}/settings", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutPluginsNpmNameSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def put_server_redundancy_host_(self, request: operations.PutServerRedundancyHostRequest) -> operations.PutServerRedundancyHostResponse:
        r"""Update a server redundancy policy
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/server/redundancy/{host}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutServerRedundancyHostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def put_users_me_notification_settings(self, request: operations.PutUsersMeNotificationSettingsRequest) -> operations.PutUsersMeNotificationSettingsResponse:
        r"""Update my notification settings
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/users/me/notification-settings"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutUsersMeNotificationSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def put_videos_id_rate(self, request: operations.PutVideosIDRateRequest) -> operations.PutVideosIDRateResponse:
        r"""Like/dislike a video
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/videos/{id}/rate", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutVideosIDRateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def add_plugin(self, request: operations.AddPluginRequest) -> operations.AddPluginResponse:
        r"""Install a plugin
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/plugins/install"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AddPluginResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass

        return res

    
    def add_user(self, request: operations.AddUserRequest) -> operations.AddUserResponse:
        r"""Create a user
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/users"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AddUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.add_user_response = out
        elif r.status_code == 403:
            pass

        return res

    
    def add_video_block(self, request: operations.AddVideoBlockRequest) -> operations.AddVideoBlockResponse:
        r"""Block a video
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/videos/{id}/blacklist", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AddVideoBlockResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def add_video_channel(self, request: operations.AddVideoChannelRequest) -> operations.AddVideoChannelResponse:
        r"""Create a video channel
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/video-channels"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AddVideoChannelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.AddVideoChannel204ApplicationJSON])
                res.add_video_channel_204_application_json_object = out

        return res

    
    def add_video_playlist_video(self, request: operations.AddVideoPlaylistVideoRequest) -> operations.AddVideoPlaylistVideoResponse:
        r"""Add a video in a playlist
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/video-playlists/{playlistId}/videos", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AddVideoPlaylistVideoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.AddVideoPlaylistVideo200ApplicationJSON])
                res.add_video_playlist_video_200_application_json_object = out

        return res

    
    def add_view(self, request: operations.AddViewRequest) -> operations.AddViewResponse:
        r"""Add a view to a video
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/videos/{id}/views", request.path_params)
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AddViewResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def del_custom_config(self, request: operations.DelCustomConfigRequest) -> operations.DelCustomConfigResponse:
        r"""Delete instance runtime configuration
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/config/custom"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DelCustomConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def del_mirrored_video(self, request: operations.DelMirroredVideoRequest) -> operations.DelMirroredVideoResponse:
        r"""Delete a mirror done on a video
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/server/redundancy/videos/{redundancyId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DelMirroredVideoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def del_user(self, request: operations.DelUserRequest) -> operations.DelUserResponse:
        r"""Delete a user
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DelUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def del_video(self, request: operations.DelVideoRequest) -> operations.DelVideoResponse:
        r"""Delete a video
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/videos/{id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DelVideoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def del_video_block(self, request: operations.DelVideoBlockRequest) -> operations.DelVideoBlockResponse:
        r"""Unblock a video by its id
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/videos/{id}/blacklist", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DelVideoBlockResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def del_video_caption(self, request: operations.DelVideoCaptionRequest) -> operations.DelVideoCaptionResponse:
        r"""Delete a video caption
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/videos/{id}/captions/{captionLanguage}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DelVideoCaptionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def del_video_channel(self, request: operations.DelVideoChannelRequest) -> operations.DelVideoChannelResponse:
        r"""Delete a video channel
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/video-channels/{channelHandle}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DelVideoChannelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def del_video_playlist_video(self, request: operations.DelVideoPlaylistVideoRequest) -> operations.DelVideoPlaylistVideoResponse:
        r"""Delete an element from a playlist
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/video-playlists/{playlistId}/videos/{playlistElementId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DelVideoPlaylistVideoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def get_about(self) -> operations.GetAboutResponse:
        r"""Get instance \"About\" information
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/config/about"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAboutResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.server_config_about = out

        return res

    
    def get_abuses(self, request: operations.GetAbusesRequest) -> operations.GetAbusesResponse:
        r"""List abuses
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/abuses"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAbusesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAbuses200ApplicationJSON])
                res.get_abuses_200_application_json_object = out

        return res

    
    def get_account(self, request: operations.GetAccountRequest) -> operations.GetAccountResponse:
        r"""Get an account
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/accounts/{name}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAccountResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Account])
                res.account = out
        elif r.status_code == 404:
            pass

        return res

    
    def get_account_videos(self, request: operations.GetAccountVideosRequest) -> operations.GetAccountVideosResponse:
        r"""List videos of an account
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/accounts/{name}/videos", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAccountVideosResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.video_list_response = out

        return res

    
    def get_accounts(self, request: operations.GetAccountsRequest) -> operations.GetAccountsResponse:
        r"""List accounts
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/accounts"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAccountsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Account]])
                res.accounts = out

        return res

    
    def get_available_plugins(self, request: operations.GetAvailablePluginsRequest) -> operations.GetAvailablePluginsResponse:
        r"""List available plugins
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/plugins/available"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAvailablePluginsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.plugin_response = out
        elif r.status_code == 503:
            pass

        return res

    
    def get_categories(self) -> operations.GetCategoriesResponse:
        r"""List available video categories
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/videos/categories"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCategoriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.get_categories_200_application_json_strings = out

        return res

    
    def get_config(self) -> operations.GetConfigResponse:
        r"""Get instance public configuration
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/config"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.server_config = out

        return res

    
    def get_custom_config(self, request: operations.GetCustomConfigRequest) -> operations.GetCustomConfigResponse:
        r"""Get instance runtime configuration
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/config/custom"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCustomConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.server_config_custom = out

        return res

    
    def get_jobs(self, request: operations.GetJobsRequest) -> operations.GetJobsResponse:
        r"""List instance jobs
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/jobs/{state}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetJobsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetJobs200ApplicationJSON])
                res.get_jobs_200_application_json_object = out

        return res

    
    def get_languages(self) -> operations.GetLanguagesResponse:
        r"""List available video languages
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/videos/languages"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLanguagesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.get_languages_200_application_json_strings = out

        return res

    
    def get_licences(self) -> operations.GetLicencesResponse:
        r"""List available video licences
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/videos/licences"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLicencesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.get_licences_200_application_json_strings = out

        return res

    
    def get_live_id(self, request: operations.GetLiveIDRequest) -> operations.GetLiveIDResponse:
        r"""Get information about a live
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/videos/live/{id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLiveIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.live_video_response = out

        return res

    
    def get_mirrored_videos(self, request: operations.GetMirroredVideosRequest) -> operations.GetMirroredVideosResponse:
        r"""List videos being mirrored
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/server/redundancy/videos"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMirroredVideosResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.video_redundancies = out

        return res

    
    def get_my_abuses(self, request: operations.GetMyAbusesRequest) -> operations.GetMyAbusesResponse:
        r"""List my abuses
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/users/me/abuses"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMyAbusesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetMyAbuses200ApplicationJSON])
                res.get_my_abuses_200_application_json_object = out

        return res

    
    def get_o_auth_client(self) -> operations.GetOAuthClientResponse:
        r"""Login prerequisite
        You need to retrieve a client id and secret before [logging in](#operation/getOAuthToken).
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/oauth-clients/local"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOAuthClientResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.o_auth_client = out

        return res

    
    def get_o_auth_token(self, request: operations.GetOAuthTokenRequest) -> operations.GetOAuthTokenResponse:
        r"""Login
        With your [client id and secret](#operation/getOAuthClient), you can retrieve an access and refresh tokens.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/users/token"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOAuthTokenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetOAuthToken200ApplicationJSON])
                res.get_o_auth_token_200_application_json_object = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def get_playlist_privacy_policies(self) -> operations.GetPlaylistPrivacyPoliciesResponse:
        r"""List available playlist privacy policies
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/video-playlists/privacies"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPlaylistPrivacyPoliciesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.get_playlist_privacy_policies_200_application_json_strings = out

        return res

    
    def get_playlists(self, request: operations.GetPlaylistsRequest) -> operations.GetPlaylistsResponse:
        r"""List video playlists
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/video-playlists"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPlaylistsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetPlaylists200ApplicationJSON])
                res.get_playlists_200_application_json_object = out

        return res

    
    def get_plugin(self, request: operations.GetPluginRequest) -> operations.GetPluginResponse:
        r"""Get a plugin
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/plugins/{npmName}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPluginResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.plugin = out
        elif r.status_code == 404:
            pass

        return res

    
    def get_plugins(self, request: operations.GetPluginsRequest) -> operations.GetPluginsResponse:
        r"""List plugins
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/plugins"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPluginsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.plugin_response = out

        return res

    
    def get_privacy_policies(self) -> operations.GetPrivacyPoliciesResponse:
        r"""List available video privacy policies
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/videos/privacies"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPrivacyPoliciesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.get_privacy_policies_200_application_json_strings = out

        return res

    
    def get_syndicated_comments(self, request: operations.GetSyndicatedCommentsRequest) -> operations.GetSyndicatedCommentsResponse:
        r"""List comments on videos
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/feeds/video-comments.{format}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSyndicatedCommentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/atom+xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/rss+xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_syndicated_comments_204_application_json_object = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 406:
            pass

        return res

    
    def get_syndicated_subscription_videos(self, request: operations.GetSyndicatedSubscriptionVideosRequest) -> operations.GetSyndicatedSubscriptionVideosResponse:
        r"""List videos of subscriptions tied to a token
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/feeds/subscriptions.{format}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSyndicatedSubscriptionVideosResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/atom+xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/rss+xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_syndicated_subscription_videos_204_application_json_object = out
        elif r.status_code == 406:
            pass

        return res

    
    def get_syndicated_videos(self, request: operations.GetSyndicatedVideosRequest) -> operations.GetSyndicatedVideosResponse:
        r"""List videos
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/feeds/videos.{format}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSyndicatedVideosResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/atom+xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/rss+xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_syndicated_videos_204_application_json_object = out
        elif r.status_code == 404:
            pass
        elif r.status_code == 406:
            pass

        return res

    
    def get_user(self, request: operations.GetUserRequest) -> operations.GetUserResponse:
        r"""Get a user
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_user_200_application_json_one_of = out

        return res

    
    def get_user_info(self, request: operations.GetUserInfoRequest) -> operations.GetUserInfoResponse:
        r"""Get my user information
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/users/me"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUserInfoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.users = out

        return res

    
    def get_users(self, request: operations.GetUsersRequest) -> operations.GetUsersResponse:
        r"""List users
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/users"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUsersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.users = out

        return res

    
    def get_video(self, request: operations.GetVideoRequest) -> operations.GetVideoResponse:
        r"""Get a video
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/videos/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVideoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VideoDetails])
                res.video_details = out

        return res

    
    def get_video_blocks(self, request: operations.GetVideoBlocksRequest) -> operations.GetVideoBlocksResponse:
        r"""List video blocks
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/videos/blacklist"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVideoBlocksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetVideoBlocks200ApplicationJSON])
                res.get_video_blocks_200_application_json_object = out

        return res

    
    def get_video_captions(self, request: operations.GetVideoCaptionsRequest) -> operations.GetVideoCaptionsResponse:
        r"""List captions of a video
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/videos/{id}/captions", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVideoCaptionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetVideoCaptions200ApplicationJSON])
                res.get_video_captions_200_application_json_object = out

        return res

    
    def get_video_channel(self, request: operations.GetVideoChannelRequest) -> operations.GetVideoChannelResponse:
        r"""Get a video channel
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/video-channels/{channelHandle}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVideoChannelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.video_channel = out

        return res

    
    def get_video_channel_videos(self, request: operations.GetVideoChannelVideosRequest) -> operations.GetVideoChannelVideosResponse:
        r"""List videos of a video channel
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/video-channels/{channelHandle}/videos", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVideoChannelVideosResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.video_list_response = out

        return res

    
    def get_video_channels(self, request: operations.GetVideoChannelsRequest) -> operations.GetVideoChannelsResponse:
        r"""List video channels
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/video-channels"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVideoChannelsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.video_channel_list = out

        return res

    
    def get_video_desc(self, request: operations.GetVideoDescRequest) -> operations.GetVideoDescResponse:
        r"""Get complete video description
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/videos/{id}/description", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVideoDescResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.get_video_desc_200_application_json_string = r.content

        return res

    
    def get_video_playlist_videos(self, request: operations.GetVideoPlaylistVideosRequest) -> operations.GetVideoPlaylistVideosResponse:
        r"""List videos of a playlist
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/video-playlists/{playlistId}/videos", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVideoPlaylistVideosResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.video_list_response = out

        return res

    
    def get_videos(self, request: operations.GetVideosRequest) -> operations.GetVideosResponse:
        r"""List videos
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/videos"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVideosResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.video_list_response = out

        return res

    
    def put_custom_config(self, request: operations.PutCustomConfigRequest) -> operations.PutCustomConfigResponse:
        r"""Set instance runtime configuration
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/config/custom"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PutCustomConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass

        return res

    
    def put_mirrored_video(self, request: operations.PutMirroredVideoRequest) -> operations.PutMirroredVideoResponse:
        r"""Mirror a video
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/server/redundancy/videos"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutMirroredVideoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 409:
            pass

        return res

    
    def put_user(self, request: operations.PutUserRequest) -> operations.PutUserResponse:
        r"""Update a user
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def put_user_info(self, request: operations.PutUserInfoRequest) -> operations.PutUserInfoResponse:
        r"""Update my user information
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/users/me"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutUserInfoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def put_video_channel(self, request: operations.PutVideoChannelRequest) -> operations.PutVideoChannelResponse:
        r"""Update a video channel
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/video-channels/{channelHandle}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutVideoChannelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def put_video_playlist_video(self, request: operations.PutVideoPlaylistVideoRequest) -> operations.PutVideoPlaylistVideoResponse:
        r"""Update a playlist element
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/video-playlists/{playlistId}/videos/{playlistElementId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutVideoPlaylistVideoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def register_user(self, request: operations.RegisterUserRequest) -> operations.RegisterUserResponse:
        r"""Register a user
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/users/register"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RegisterUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def reorder_video_playlist(self, request: operations.ReorderVideoPlaylistRequest) -> operations.ReorderVideoPlaylistResponse:
        r"""Reorder a playlist
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/video-playlists/{playlistId}/videos/reorder", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ReorderVideoPlaylistResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def resend_email_to_verify_user(self) -> operations.ResendEmailToVerifyUserResponse:
        r"""Resend user verification link
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/users/ask-send-verify-email"
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ResendEmailToVerifyUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def revoke_o_auth_token(self, request: operations.RevokeOAuthTokenRequest) -> operations.RevokeOAuthTokenResponse:
        r"""Logout
        Revokes your access token and its associated refresh token, destroying your current session.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/users/revoke-token"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RevokeOAuthTokenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def set_progress(self, request: operations.SetProgressRequest) -> operations.SetProgressResponse:
        r"""Set watching progress of a video
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/videos/{id}/watching", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SetProgressResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def uninstall_plugin(self, request: operations.UninstallPluginRequest) -> operations.UninstallPluginResponse:
        r"""Uninstall a plugin
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/plugins/uninstall"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UninstallPluginResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def update_live_id(self, request: operations.UpdateLiveIDRequest) -> operations.UpdateLiveIDResponse:
        r"""Update information about a live
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/videos/live/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateLiveIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def update_plugin(self, request: operations.UpdatePluginRequest) -> operations.UpdatePluginResponse:
        r"""Update a plugin
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/plugins/update"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdatePluginResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def upload_resumable(self, request: operations.UploadResumableRequest) -> operations.UploadResumableResponse:
        r"""Send chunk for the resumable upload of a video
        Uses [a resumable protocol](https://github.com/kukhariev/node-uploadx/blob/master/proto.md) to continue, pause or resume the upload of a video
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/videos/upload-resumable"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UploadResumableResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.video_upload_response = out
        elif r.status_code == 308:
            res.headers = r.headers
            
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 409:
            pass
        elif r.status_code == 422:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def upload_resumable_cancel(self, request: operations.UploadResumableCancelRequest) -> operations.UploadResumableCancelResponse:
        r"""Cancel the resumable upload of a video, deleting any data uploaded so far
        Uses [a resumable protocol](https://github.com/kukhariev/node-uploadx/blob/master/proto.md) to cancel the upload of a video
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/videos/upload-resumable"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UploadResumableCancelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            res.headers = r.headers
            
        elif r.status_code == 404:
            pass

        return res

    
    def upload_resumable_init(self, request: operations.UploadResumableInitRequest) -> operations.UploadResumableInitResponse:
        r"""Initialize the resumable upload of a video
        Uses [a resumable protocol](https://github.com/kukhariev/node-uploadx/blob/master/proto.md) to initialize the upload of a video
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/videos/upload-resumable"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UploadResumableInitResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 201:
            res.headers = r.headers
            
        elif r.status_code == 413:
            pass
        elif r.status_code == 415:
            pass

        return res

    
    def verify_user(self, request: operations.VerifyUserRequest) -> operations.VerifyUserResponse:
        r"""Verify a user
        Following a user registration, the new user will receive an email asking to click a link
        containing a secret.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{id}/verify-email", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.VerifyUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    