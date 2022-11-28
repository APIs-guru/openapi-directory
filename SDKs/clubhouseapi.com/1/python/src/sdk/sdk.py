

import requests
from sdk.models import operations
from . import utils




SERVERS = [
	"https://www.clubhouseapi.com/api/",
]


class SDK:
    

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
        
    
    
    
    def get_check_for_update(self, request: operations.GetCheckForUpdateRequest) -> operations.GetCheckForUpdateResponse:
        r"""Clubhouse uses this to check for updates when app is not installed from App Store (eg TestFlight)
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/check_for_update"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCheckForUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_get_actionable_notifications(self) -> operations.GetGetActionableNotificationsResponse:
        r"""get actionable notifications (the bell again)
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/get_actionable_notifications"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGetActionableNotificationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_get_all_topics(self) -> operations.GetGetAllTopicsResponse:
        r"""gets all topics.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/get_all_topics"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGetAllTopicsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_get_channels(self) -> operations.GetGetChannelsResponse:
        r"""get all channels
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/get_channels"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGetChannelsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_get_events(self, request: operations.GetGetEventsRequest) -> operations.GetGetEventsResponse:
        r"""the Upcoming for You page
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/get_events"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGetEventsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_get_notifications(self, request: operations.GetGetNotificationsRequest) -> operations.GetGetNotificationsResponse:
        r"""get notifications (the bell icon)
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/get_notifications"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGetNotificationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_get_settings(self) -> operations.GetGetSettingsResponse:
        r"""get notification settings
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/get_settings"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGetSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_get_suggested_follows_all(self, request: operations.GetGetSuggestedFollowsAllRequest) -> operations.GetGetSuggestedFollowsAllResponse:
        r"""gets suggested follows during signup
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/get_suggested_follows_all"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGetSuggestedFollowsAllResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_get_users_for_topic(self, request: operations.GetGetUsersForTopicRequest) -> operations.GetGetUsersForTopicResponse:
        r"""looks up users by topic.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/get_users_for_topic"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGetUsersForTopicResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_get_welcome_channel(self) -> operations.GetGetWelcomeChannelResponse:
        r"""called during signup
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/get_welcome_channel"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGetWelcomeChannelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_call_phone_number_auth(self, request: operations.PostCallPhoneNumberAuthRequest) -> operations.PostCallPhoneNumberAuthResponse:
        r"""Call phone number auth.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/call_phone_number_auth"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCallPhoneNumberAuthResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_check_waitlist_status(self) -> operations.PostCheckWaitlistStatusResponse:
        r"""checks waitlist status.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/check_waitlist_status"
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCheckWaitlistStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def post_complete_phone_number_auth(self, request: operations.PostCompletePhoneNumberAuthRequest) -> operations.PostCompletePhoneNumberAuthResponse:
        r"""Call phone number auth.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/complete_phone_number_auth"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCompletePhoneNumberAuthResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_create_channel(self, request: operations.PostCreateChannelRequest) -> operations.PostCreateChannelResponse:
        r"""creates a channel
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/create_channel"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCreateChannelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass

        return res

    
    def post_follow(self, request: operations.PostFollowRequest) -> operations.PostFollowResponse:
        r"""follows a user
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/follow"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostFollowResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 401:
            pass

        return res

    
    def post_get_club(self, request: operations.PostGetClubRequest) -> operations.PostGetClubResponse:
        r"""gets club by id
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/get_club"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostGetClubResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_get_clubs_for_topic(self, request: operations.PostGetClubsForTopicRequest) -> operations.PostGetClubsForTopicResponse:
        r"""looks up clubs by topic.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/get_clubs_for_topic"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostGetClubsForTopicResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_get_create_channel_targets(self, request: operations.PostGetCreateChannelTargetsRequest) -> operations.PostGetCreateChannelTargetsResponse:
        r"""is fetched when you tap Create Room
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/get_create_channel_targets"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostGetCreateChannelTargetsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass

        return res

    
    def post_get_following(self, request: operations.PostGetFollowingRequest) -> operations.PostGetFollowingResponse:
        r"""get a list of the users and clubs that this user is following. Returned users have bios truncated to ~80 characters.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/get_following"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostGetFollowingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_get_online_friends(self, request: operations.PostGetOnlineFriendsRequest) -> operations.PostGetOnlineFriendsResponse:
        r"""gets online friends on the app homepage.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/get_online_friends"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostGetOnlineFriendsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_get_profile(self, request: operations.PostGetProfileRequest) -> operations.PostGetProfileResponse:
        r"""looks up user profile by ID.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/get_profile"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostGetProfileResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_get_release_notes(self) -> operations.PostGetReleaseNotesResponse:
        r"""gets release notes.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/get_release_notes"
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostGetReleaseNotesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_get_suggested_club_invites(self, request: operations.PostGetSuggestedClubInvitesRequest) -> operations.PostGetSuggestedClubInvitesResponse:
        r"""find users to invite to clubs based on phone number
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/get_suggested_club_invites"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostGetSuggestedClubInvitesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_get_suggested_follows_friends_only(self, request: operations.PostGetSuggestedFollowsFriendsOnlyRequest) -> operations.PostGetSuggestedFollowsFriendsOnlyResponse:
        r"""find people to follow by uploading contacts during signup
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/get_suggested_follows_friends_only"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostGetSuggestedFollowsFriendsOnlyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_get_suggested_follows_similar(self, request: operations.PostGetSuggestedFollowsSimilarRequest) -> operations.PostGetSuggestedFollowsSimilarResponse:
        r"""find similar users. (The Sparkles button on Clubhouse's profile page)
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/get_suggested_follows_similar"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostGetSuggestedFollowsSimilarResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_get_suggested_invites(self, request: operations.PostGetSuggestedInvitesRequest) -> operations.PostGetSuggestedInvitesResponse:
        r"""find users to invite based on phone number.
        (also see https://zerforschung.org/posts/clubhouse-telefonnummern-en/ for @zerforschung's analysis of the privacy implications of this API)
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/get_suggested_invites"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostGetSuggestedInvitesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_get_suggested_speakers(self, request: operations.PostGetSuggestedSpeakersRequest) -> operations.PostGetSuggestedSpeakersResponse:
        r"""gets suggested users when you start a private room
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/get_suggested_speakers"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostGetSuggestedSpeakersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_get_topic(self, request: operations.PostGetTopicRequest) -> operations.PostGetTopicResponse:
        r"""looks up topic by ID.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/get_topic"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostGetTopicResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_invite_from_waitlist(self, request: operations.PostInviteFromWaitlistRequest) -> operations.PostInviteFromWaitlistResponse:
        r"""wave to another user on the waitlist to give them access
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/invite_from_waitlist"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostInviteFromWaitlistResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass

        return res

    
    def post_invite_to_app(self, request: operations.PostInviteToAppRequest) -> operations.PostInviteToAppResponse:
        r"""invite a user to the app, using one of your invites
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/invite_to_app"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostInviteToAppResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass

        return res

    
    def post_join_channel(self, request: operations.PostJoinChannelRequest) -> operations.PostJoinChannelResponse:
        r"""join a channel.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/join_channel"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostJoinChannelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass

        return res

    
    def post_leave_channel(self, request: operations.PostLeaveChannelRequest) -> operations.PostLeaveChannelResponse:
        r"""leave a channel.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/leave_channel"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostLeaveChannelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_me(self, request: operations.PostMeRequest) -> operations.PostMeResponse:
        r"""gets user
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/me"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostMeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def post_record_action_trails(self, request: operations.PostRecordActionTrailsRequest) -> operations.PostRecordActionTrailsResponse:
        r"""analytics
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/record_action_trails"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRecordActionTrailsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_refresh_token(self, request: operations.PostRefreshTokenRequest) -> operations.PostRefreshTokenResponse:
        r"""gets an access_token from a refresh_token.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/refresh_token"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRefreshTokenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def post_resend_phone_number_auth(self, request: operations.PostResendPhoneNumberAuthRequest) -> operations.PostResendPhoneNumberAuthResponse:
        r"""Resend phone number auth.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/resend_phone_number_auth"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostResendPhoneNumberAuthResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_search_clubs(self, request: operations.PostSearchClubsRequest) -> operations.PostSearchClubsResponse:
        r"""search clubs.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/search_clubs"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSearchClubsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_search_users(self, request: operations.PostSearchUsersRequest) -> operations.PostSearchUsersResponse:
        r"""search for users
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/search_users"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSearchUsersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_start_phone_number_auth(self, request: operations.PostStartPhoneNumberAuthRequest) -> operations.PostStartPhoneNumberAuthResponse:
        r"""Starts phone number auth.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/start_phone_number_auth"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostStartPhoneNumberAuthResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_update_notifications(self, request: operations.PostUpdateNotificationsRequest) -> operations.PostUpdateNotificationsResponse:
        r"""updates notification during signup.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/update_notifications"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostUpdateNotificationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass

        return res

    
    def post_update_username(self, request: operations.PostUpdateUsernameRequest) -> operations.PostUpdateUsernameResponse:
        r"""edits username.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/update_username"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostUpdateUsernameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass

        return res

    