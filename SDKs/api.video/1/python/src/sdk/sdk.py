

import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://ws.api.video",
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
        
    
    
    
    def delete_video(self, request: operations.DeleteVideoRequest) -> operations.DeleteVideoResponse:
        r"""Delete a video
        If you do not need a video any longer, you can send a request to delete it. All you need is the videoId. Tutorials using [video deletion](https://api.video/blog/endpoints/video-delete).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/videos/{videoId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteVideoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotFound])
                res.not_found = out

        return res

    
    def delete_webhook(self, request: operations.DeleteWebhookRequest) -> operations.DeleteWebhookResponse:
        r"""Delete a Webhook
        This endpoint will delete the indicated webhook.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/webhooks/{webhookId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteWebhookResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotFound])
                res.not_found = out

        return res

    
    def delete_live_streams_live_stream_id(self, request: operations.DeleteLiveStreamsLiveStreamIDRequest) -> operations.DeleteLiveStreamsLiveStreamIDResponse:
        r"""Delete a live stream
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/live-streams/{liveStreamId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteLiveStreamsLiveStreamIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_live_streams_live_stream_id_thumbnail(self, request: operations.DeleteLiveStreamsLiveStreamIDThumbnailRequest) -> operations.DeleteLiveStreamsLiveStreamIDThumbnailResponse:
        r"""Delete a thumbnail
        Send the unique identifier for a live stream to delete it from the system.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/live-streams/{liveStreamId}/thumbnail", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteLiveStreamsLiveStreamIDThumbnailResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LiveStream])
                res.live_stream = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotFound])
                res.not_found = out

        return res

    
    def delete_players_player_id(self, request: operations.DeletePlayersPlayerIDRequest) -> operations.DeletePlayersPlayerIDResponse:
        r"""Delete a player
        Delete a player if you no longer need it. You can delete any player that you have the player ID for.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/players/{playerId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeletePlayersPlayerIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotFound])
                res.not_found = out

        return res

    
    def delete_players_player_id_logo(self, request: operations.DeletePlayersPlayerIDLogoRequest) -> operations.DeletePlayersPlayerIDLogoResponse:
        r"""Delete logo
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/players/{playerId}/logo", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeletePlayersPlayerIDLogoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.delete_players_player_id_logo_204_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotFound])
                res.not_found = out

        return res

    
    def delete_upload_tokens_upload_token(self, request: operations.DeleteUploadTokensUploadTokenRequest) -> operations.DeleteUploadTokensUploadTokenResponse:
        r"""Delete an upload token
        Delete an existing upload token. This is especially useful for tokens you may have created that do not expire.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/upload-tokens/{uploadToken}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteUploadTokensUploadTokenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotFound])
                res.not_found = out

        return res

    
    def delete_videos_video_id_captions_language(self, request: operations.DeleteVideosVideoIDCaptionsLanguageRequest) -> operations.DeleteVideosVideoIDCaptionsLanguageResponse:
        r"""Delete a caption
        Delete a caption in a specific language by providing the video ID for the video you want to delete the caption from and the language the caption is in.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/videos/{videoId}/captions/{language}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteVideosVideoIDCaptionsLanguageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotFound])
                res.not_found = out

        return res

    
    def delete_videos_video_id_chapters_language(self, request: operations.DeleteVideosVideoIDChaptersLanguageRequest) -> operations.DeleteVideosVideoIDChaptersLanguageResponse:
        r"""Delete a chapter
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/videos/{videoId}/chapters/{language}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteVideosVideoIDChaptersLanguageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotFound])
                res.not_found = out

        return res

    
    def get_webhook(self, request: operations.GetWebhookRequest) -> operations.GetWebhookResponse:
        r"""Show Webhook details
        This call provides the same JSON information provided on Webjhook creation.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/webhooks/{webhookId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetWebhookResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Webhook])
                res.webhook = out

        return res

    
    def get_video(self, request: operations.GetVideoRequest) -> operations.GetVideoResponse:
        r"""Show a video
        This call provides the same JSON information provided on video creation. For private videos, it will generate a unique token url. Use this to retrieve any details you need about a video, or set up a private viewing URL. Tutorials using [video GET](https://api.video/blog/endpoints/video-get).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/videos/{videoId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVideoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Video])
                res.video = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotFound])
                res.not_found = out

        return res

    
    def get_video_status(self, request: operations.GetVideoStatusRequest) -> operations.GetVideoStatusResponse:
        r"""Show video status
        This API provides upload status & encoding status to determine when the video is uploaded or ready to playback. Once encoding is completed, the response also lists the available stream qualities. Tutorials using [video status](https://api.video/blog/endpoints/video-status).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/videos/{videoId}/status", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVideoStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Videostatus])
                res.videostatus = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotFound])
                res.not_found = out

        return res

    
    def get_account(self, request: operations.GetAccountRequest) -> operations.GetAccountResponse:
        r"""Show account
        Deprecated. Authenticate and get a token, then you can use the bearer token here to retrieve details about your account.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAccountResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Account])
                res.account = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotFound])
                res.not_found = out

        return res

    
    def get_analytics_live_streams_live_stream_id(self, request: operations.GetAnalyticsLiveStreamsLiveStreamIDRequest) -> operations.GetAnalyticsLiveStreamsLiveStreamIDResponse:
        r"""List live stream player sessions
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/analytics/live-streams/{liveStreamId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAnalyticsLiveStreamsLiveStreamIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RawStatisticsListLiveStreamAnalyticsResponse])
                res.raw_statistics_list_live_stream_analytics_response = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotFound])
                res.not_found = out

        return res

    
    def get_analytics_sessions_session_id_events(self, request: operations.GetAnalyticsSessionsSessionIDEventsRequest) -> operations.GetAnalyticsSessionsSessionIDEventsResponse:
        r"""List player session events
        Useful to track and measure video's engagement.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/analytics/sessions/{sessionId}/events", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAnalyticsSessionsSessionIDEventsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RawStatisticsListPlayerSessionEventsResponse])
                res.raw_statistics_list_player_session_events_response = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotFound])
                res.not_found = out

        return res

    
    def get_analytics_videos_video_id(self, request: operations.GetAnalyticsVideosVideoIDRequest) -> operations.GetAnalyticsVideosVideoIDResponse:
        r"""List video player sessions
        Retrieve all available user sessions for a specific video. Tutorials that use the [analytics endpoint](https://api.video/blog/endpoints/analytics).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/analytics/videos/{videoId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAnalyticsVideosVideoIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RawStatisticsListSessionsResponse])
                res.raw_statistics_list_sessions_response = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotFound])
                res.not_found = out

        return res

    
    def get_live_streams(self, request: operations.GetLiveStreamsRequest) -> operations.GetLiveStreamsResponse:
        r"""List all live streams
        With no parameters added to the url, this will return all livestreams. Query by name or key to limit the list.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/live-streams"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLiveStreamsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LiveStreamListResponse])
                res.live_stream_list_response = out

        return res

    
    def get_live_streams_live_stream_id(self, request: operations.GetLiveStreamsLiveStreamIDRequest) -> operations.GetLiveStreamsLiveStreamIDResponse:
        r"""Show live stream
        Supply a LivestreamId, and you'll get all the details for streaming into, and watching the livestream. Tutorials that use the [show livestream endpoint](https://api.video/blog/endpoints/live-stream-status).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/live-streams/{liveStreamId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLiveStreamsLiveStreamIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LiveStream])
                res.live_stream = out

        return res

    
    def get_players(self, request: operations.GetPlayersRequest) -> operations.GetPlayersResponse:
        r"""List all players
        Retrieve a list of all the players you created, as well as details about each one.
        Tutorials that use the [player endpoint](https://api.video/blog/endpoints/player).
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/players"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPlayersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PlayersListResponse])
                res.players_list_response = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BadRequest])
                res.bad_request = out

        return res

    
    def get_players_player_id(self, request: operations.GetPlayersPlayerIDRequest) -> operations.GetPlayersPlayerIDResponse:
        r"""Show a player
        Use a player ID to retrieve details about the player and display it for viewers.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/players/{playerId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPlayersPlayerIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Player])
                res.player = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotFound])
                res.not_found = out

        return res

    
    def get_upload_tokens(self, request: operations.GetUploadTokensRequest) -> operations.GetUploadTokensResponse:
        r"""List all active upload tokens.
        A delegated token is used to allow secure uploads without exposing your API key. Use this endpoint to retrieve a list of all currently active delegated tokens.
        Tutorials using [delegated upload](https://api.video/blog/endpoints/delegated-upload).
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/upload-tokens"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUploadTokensResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TokenListResponse])
                res.token_list_response = out

        return res

    
    def get_upload_tokens_upload_token(self, request: operations.GetUploadTokensUploadTokenRequest) -> operations.GetUploadTokensUploadTokenResponse:
        r"""Show upload token
        You can retrieve details about a specific upload token if you have the unique identifier for the upload token. Add it in the path of the endpoint. Details include time-to-live (ttl), when the token was created, and when it will expire.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/upload-tokens/{uploadToken}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUploadTokensUploadTokenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UploadToken])
                res.upload_token = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotFound])
                res.not_found = out

        return res

    
    def get_videos_video_id_captions(self, request: operations.GetVideosVideoIDCaptionsRequest) -> operations.GetVideosVideoIDCaptionsResponse:
        r"""List video captions
        Retrieve a list of available captions for the videoId you provide.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/videos/{videoId}/captions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVideosVideoIDCaptionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CaptionsListResponse])
                res.captions_list_response = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotFound])
                res.not_found = out

        return res

    
    def get_videos_video_id_captions_language(self, request: operations.GetVideosVideoIDCaptionsLanguageRequest) -> operations.GetVideosVideoIDCaptionsLanguageResponse:
        r"""Show a caption
        Display a caption for a video in a specific language. If the language is available, the caption is returned. Otherwise, you will get a response indicating the caption was not found.
        Tutorials that use the [captions endpoint](https://api.video/blog/endpoints/captions).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/videos/{videoId}/captions/{language}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVideosVideoIDCaptionsLanguageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Subtitle])
                res.subtitle = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotFound])
                res.not_found = out

        return res

    
    def get_videos_video_id_chapters(self, request: operations.GetVideosVideoIDChaptersRequest) -> operations.GetVideosVideoIDChaptersResponse:
        r"""List video chapters
        Retrieve a list of all chapters for a specified video.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/videos/{videoId}/chapters", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVideosVideoIDChaptersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ChaptersListResponse])
                res.chapters_list_response = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotFound])
                res.not_found = out

        return res

    
    def get_videos_video_id_chapters_language(self, request: operations.GetVideosVideoIDChaptersLanguageRequest) -> operations.GetVideosVideoIDChaptersLanguageResponse:
        r"""Show a chapter
        Chapters help your viewers find the sections of the video they are most interested in viewing. Tutorials that use the [chapters endpoint](https://api.video/blog/endpoints/chapters).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/videos/{videoId}/chapters/{language}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVideosVideoIDChaptersLanguageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Chapter])
                res.chapter = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotFound])
                res.not_found = out

        return res

    
    def list_videos(self, request: operations.ListVideosRequest) -> operations.ListVideosResponse:
        r"""List all videos
        Requests to this endpoint return a list of your videos (with all their details). With no parameters added to this query, the API returns all videos. You can filter what videos the API returns using the parameters described below.  We have [several tutorials](https://api.video/blog/endpoints/video-list) that demonstrate this endpoint.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/videos"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListVideosResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VideosListResponse])
                res.videos_list_response = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BadRequest])
                res.bad_request = out

        return res

    
    def list_webhooks(self, request: operations.ListWebhooksRequest) -> operations.ListWebhooksResponse:
        r"""List all webhooks
        Requests to this endpoint return a list of your webhooks (with all their details). You can filter what the webhook list that the API returns using the parameters described below.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/webhooks"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListWebhooksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.WebhooksListResponse])
                res.webhooks_list_response = out

        return res

    
    def patch_video(self, request: operations.PatchVideoRequest) -> operations.PatchVideoResponse:
        r"""Update a video
        Use this endpoint to update the parameters associated with your video. The video you are updating is determined by the video ID you provide in the path. For each parameter you want to update, include the update in the request body. NOTE: If you are updating an array, you must provide the entire array as what you provide here overwrites what is in the system rather than appending to it. Tutorials using [video update](https://api.video/blog/endpoints/video-update).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/videos/{videoId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PatchVideoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Video])
                res.video = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BadRequest])
                res.bad_request = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotFound])
                res.not_found = out

        return res

    
    def patch_live_streams_live_stream_id(self, request: operations.PatchLiveStreamsLiveStreamIDRequest) -> operations.PatchLiveStreamsLiveStreamIDResponse:
        r"""Update a live stream
        Use this endpoint to update the player, or to turn recording on/off (saving a copy of the livestream). NOTE: If the livestream is actively streaming, changing the recording status will only affect the NEXT stream.    The public=false 'private livestream' is available as a BETA feature, and should be limited to livestreams of 3,000 viewers or fewer.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/live-streams/{liveStreamId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PatchLiveStreamsLiveStreamIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LiveStream])
                res.live_stream = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BadRequest])
                res.bad_request = out

        return res

    
    def patch_players_player_id(self, request: operations.PatchPlayersPlayerIDRequest) -> operations.PatchPlayersPlayerIDResponse:
        r"""Update a player
        Use a player ID to update specific details for a player. NOTE: It may take up to 10 min before the new player configuration is available from our CDN.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/players/{playerId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PatchPlayersPlayerIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Player])
                res.player = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotFound])
                res.not_found = out

        return res

    
    def patch_videos_video_id_captions_language(self, request: operations.PatchVideosVideoIDCaptionsLanguageRequest) -> operations.PatchVideosVideoIDCaptionsLanguageResponse:
        r"""Update caption
        To have the captions on automatically, use this PATCH to set default: true.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/videos/{videoId}/captions/{language}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PatchVideosVideoIDCaptionsLanguageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Subtitle])
                res.subtitle = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BadRequest])
                res.bad_request = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotFound])
                res.not_found = out

        return res

    
    def patch_videos_video_id_thumbnail(self, request: operations.PatchVideosVideoIDThumbnailRequest) -> operations.PatchVideosVideoIDThumbnailResponse:
        r"""Pick a thumbnail
        Pick a thumbnail from the given time code. If you'd like to upload an image for your thumbnail, use the [Upload a Thumbnail](https://docs.api.video/reference#post_videos-videoid-thumbnail) endpoint. There may be a short delay for the thumbnail to update.
        Tutorials using [Thumbnail picking](https://api.video/blog/endpoints/video-pick-a-thumbnail).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/videos/{videoId}/thumbnail", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PatchVideosVideoIDThumbnailResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Video])
                res.video = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotFound])
                res.not_found = out

        return res

    
    def post_video(self, request: operations.PostVideoRequest) -> operations.PostVideoResponse:
        r"""Create a video
        To create a video, you create its container&parameters first, before adding the video file (exception - when using an existing HTTP source).
        * Videos are public by default. [Learn about Private videos](https://api.video/blog/tutorials/tutorial-private-videos)
        * Up to 6 responsive video streams will be created (from 240p to 4k)
        * Mp4 encoded versions are created at the highest quality (max 1080p) by default.
        * Panoramic videos are for videos recorded in 360 degrees.  You can toggle this after your 360 video upload.
        * Searchable parameters: title, description, tags and metadata
        
         ```shell
        $ curl https://ws.api.video/videos \ -H 'Authorization: Bearer {access_token} \ -d '{\"title\":\"My video\", 
             \"description\":\"so many details\",
             \"mp4Support\":true
        }'
        ```  
        
        ## add an URL to upload on creation
        You can also create a video directly from a video hosted on a third-party server by giving its URI in `source` parameter:
        ```shell
        $ curl https://ws.api.video/videos \
        -H 'Authorization: Bearer {access_token} \
        -d '{\"source\":\"http://uri/to/video.mp4\", \"title\":\"My video\"}'
        ```
        
        In this case, the service will respond `202 Accepted` and ingest the video asynchronously.
        ## Track users with Dynamic Metadata
        Metadata values can be a key:value where the values are predefined, but Dynamic metadata allows you to enter *any* value for a defined key.  To defined a dynamic metadata pair use:
        ``` \"metadata\":[{\"dynamicKey\": \"__dynamicKey__\"}] ```
        
        The double underscore on both sides of the value allows any variable to be added for a given video session. Added the the url you might have:
        ``` <iframe type=\"text/html\" src=\"https://embed.api.video/vod/vi6QvU9dhYCzW3BpPvPsZUa8?metadata[classUserName]=Doug\" width=\"960\" height=\"320\" frameborder=\"0\" scrollling=\"no\"></iframe> ```
        
        
        This video session will be tagged as watched by Doug - allowing for in-depth analysis on how each viewer interacts with the videos.
        ### We have tutorials on:
        * [Creating and uploading videos](https://api.video/blog/tutorials/video-upload-tutorial)
        * [Uploading large videos](https://api.video/blog/tutorials/video-upload-tutorial-large-videos)
        
        
        * [Using tags with videos](https://api.video/blog/tutorials/video-tagging-best-practices)
        * [Private videos](https://api.video/blog/tutorials/tutorial-private-videos)
        * [Using Dynamic Metadata](https://api.video/blog/tutorials/dynamic-metadata)
        
        * Full list of [tutorials](https://api.video/blog/endpoints/video-create) that demonstrate this endpoint.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/videos"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostVideoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Video])
                res.video = out
        elif r.status_code == 202:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Video])
                res.video = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BadRequest])
                res.bad_request = out

        return res

    
    def post_webhooks(self, request: operations.PostWebhooksRequest) -> operations.PostWebhooksResponse:
        r"""Create Webhook
        Webhooks can push notifications to your server, rather than polling api.video for changes. We currently offer four events: 
        * ```video.encoding.quality.completed```  When a new video is uploaded into your account, it will be encoded into several different HLS sizes/bitrates.  When each version is encoded, your webhook will get a notification.  It will look like ```{ \\"type\\": \\"video.encoding.quality.completed\\", \\"emittedAt\\": \\"2021-01-29T16:46:25.217+01:00\\", \\"videoId\\": \\"viXXXXXXXX\\", \\"encoding\\": \\"hls\\", \\"quality\\": \\"720p\\"} ```. This request says that the 720p HLS encoding was completed.
        * ```live-stream.broadcast.started```  When a livestream begins broadcasting, the broadcasting parameter changes from false to true, and this webhook fires.
        * ```live-stream.broadcast.ended```  This event fores when the livestream has finished broadcasting, and the broadcasting parameter flips from false to true.
        * ```video.source.recorded```  This event is similar to ```video.encoding.quality.completed```, but tells you if a livestream has been recorded as a VOD.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/webhooks"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostWebhooksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Webhook])
                res.webhook = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BadRequest])
                res.bad_request = out

        return res

    
    def post_auth_api_key(self, request: operations.PostAuthAPIKeyRequest) -> operations.PostAuthAPIKeyResponse:
        r"""Authenticate
        To get started, submit your API key in the body of your request. api.video returns an access token that is valid for one hour (3600 seconds). A refresh token is also returned. View a [tutorial](https://api.video/blog/tutorials/authentication-tutorial) on authentication.
        All tutorials using the [authentication endpoint](https://api.video/blog/endpoints/authenticate)
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/auth/api-key"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAuthAPIKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AccessToken])
                res.access_token = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BadRequest])
                res.bad_request = out

        return res

    
    def post_auth_refresh(self, request: operations.PostAuthRefreshRequest) -> operations.PostAuthRefreshResponse:
        r"""Refresh token
        Use the refresh endpoint with the refresh token you received when you first authenticated using the api-key endpoint. Send the refresh token in the body of your request. The api.video API returns a new access token that is valid for one hour (3600 seconds) and a new refresh token. 
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/auth/refresh"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAuthRefreshResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AccessToken])
                res.access_token = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BadRequest])
                res.bad_request = out

        return res

    
    def post_live_streams(self, request: operations.PostLiveStreamsRequest) -> operations.PostLiveStreamsResponse:
        r"""Create live stream
        A live stream will give you the 'connection point' to RTMP your video stream to api.video. It will also give you the details for viewers to watch the same livestream.  The public=false 'private livestream' is available as a BETA feature, and should be limited to livestreams of 3,000 viewers or fewer. See our [Live Stream Tutorial](https://api.video/blog/tutorials/live-stream-tutorial) for a walkthrough of this API with OBS. Your RTMP endpoint for the livestream is rtmp://broadcast.api.video/s/{streamKey}
        Tutorials that [create live streams](https://api.video/blog/endpoints/live-create).
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/live-streams"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostLiveStreamsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LiveStream])
                res.live_stream = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BadRequest])
                res.bad_request = out

        return res

    
    def post_live_streams_live_stream_id_thumbnail(self, request: operations.PostLiveStreamsLiveStreamIDThumbnailRequest) -> operations.PostLiveStreamsLiveStreamIDThumbnailResponse:
        r"""Upload a thumbnail
        Upload an image to use as a backdrop for your livestream. Tutorials that [update live stream thumbnails](https://api.video/blog/endpoints/live-upload-a-thumbnail).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/live-streams/{liveStreamId}/thumbnail", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostLiveStreamsLiveStreamIDThumbnailResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LiveStream])
                res.live_stream = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BadRequest])
                res.bad_request = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotFound])
                res.not_found = out

        return res

    
    def post_players(self, request: operations.PostPlayersRequest) -> operations.PostPlayersResponse:
        r"""Create a player
        Create a player for your video, and customise it.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/players"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPlayersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Player])
                res.player = out

        return res

    
    def post_players_player_id_logo(self, request: operations.PostPlayersPlayerIDLogoRequest) -> operations.PostPlayersPlayerIDLogoResponse:
        r"""Upload a logo
        The uploaded image maximum size should be 200x100 and its weight should be 200KB.  It will be scaled down to 30px height and converted to PNG to be displayed in the player.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/players/{playerId}/logo", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPlayersPlayerIDLogoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Player])
                res.player = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BadRequest])
                res.bad_request = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotFound])
                res.not_found = out

        return res

    
    def post_upload(self, request: operations.PostUploadRequest) -> operations.PostUploadResponse:
        r"""Upload with an upload token
        When given a token, anyone can upload a file to the URI `https://ws.api.video/upload?token=<tokenId>`.
        
        Example with cURL:
        
        ```curl
        $ curl  --request POST --url 'https://ws.api.video/upload?token=toXXX'
         --header 'content-type: multipart/form-data'
         -F file=@video.mp4
        ```
        
        Or in an HTML form, with a little JavaScript to convert the form into JSON:
        ```html
        <!--form for user interaction-->
        <form name=\"videoUploadForm\" >
          <label for=video>Video:</label>
          <input type=file name=source/><br/>
          <input value=\"Submit\" type=\"submit\">
        </form>
        <div></div>
        <!--JS takes the form data 
            uses FormData to turn the response into JSON.
            then uses POST to upload the video file.
            Update the token parameter in the url to your upload token.
            -->
        <script>
           var form = document.forms.namedItem(\"videoUploadForm\");	
           form.addEventListener('submit', function(ev) {
        	 ev.preventDefault();
             var oOutput = document.querySelector(\"div\"),
                 oData = new FormData(form);
             var oReq = new XMLHttpRequest();
        	 
             oReq.open(\"POST\", \"https://ws.api.video/upload?token=toXXX\", true);
             oReq.send(oData);
        	 oReq.onload = function(oEvent) {
               if (oReq.status ==201) {
                 oOutput.innerHTML = \"Your video is uploaded!<br/>\"  + oReq.response;
               } else {
                 oOutput.innerHTML = \"Error \" + oReq.status + \" occurred when trying to upload your file.<br \/>\";
               }
             };
           }, false);	
        </script>
        ```
        
        
        ### Dealing with large files
        
        We have created a <a href='https://api.video/blog/tutorials/uploading-large-files-with-javascript'>tutorial</a> to walk through the steps required.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/upload"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostUploadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Video])
                res.video = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BadRequest])
                res.bad_request = out

        return res

    
    def post_upload_tokens(self, request: operations.PostUploadTokensRequest) -> operations.PostUploadTokensResponse:
        r"""Generate an upload token
        Use this endpoint to generate an upload token. You can use this token to authenticate video uploads while keeping your API key safe. Tutorials using [delegated upload](https://api.video/blog/endpoints/delegated-upload).
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/upload-tokens"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostUploadTokensResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UploadToken])
                res.upload_token = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BadRequest])
                res.bad_request = out

        return res

    
    def post_videos_video_id_captions_language(self, request: operations.PostVideosVideoIDCaptionsLanguageRequest) -> operations.PostVideosVideoIDCaptionsLanguageResponse:
        r"""Upload a caption
        Upload a VTT file to add captions to your video.
         Read our [captioning tutorial](https://api.video/blog/tutorials/adding-captions) for more details.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/videos/{videoId}/captions/{language}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostVideosVideoIDCaptionsLanguageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Subtitle])
                res.subtitle = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BadRequest])
                res.bad_request = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotFound])
                res.not_found = out

        return res

    
    def post_videos_video_id_chapters_language(self, request: operations.PostVideosVideoIDChaptersLanguageRequest) -> operations.PostVideosVideoIDChaptersLanguageResponse:
        r"""Upload a chapter
        Chapters help break the video into sections. Read our [tutorial](https://api.video/blog/tutorials/adding-chapters-to-your-videos) for more details.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/videos/{videoId}/chapters/{language}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostVideosVideoIDChaptersLanguageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Chapter])
                res.chapter = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BadRequest])
                res.bad_request = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotFound])
                res.not_found = out

        return res

    
    def post_videos_video_id_source(self, request: operations.PostVideosVideoIDSourceRequest) -> operations.PostVideosVideoIDSourceResponse:
        r"""Upload a video
        To upload a video to the videoId you created. Replace {videoId} with the id you'd like to use, {access_token} with your token, and /path/to/video.mp4 with the path to the video you'd like to upload. You can only upload your video to the videoId once.
        ```bash
        curl https://ws.api.video/videos/{videoId}/source \
          -H 'Authorization: Bearer {access_token}' \
          -F file=@/path/to/video.mp4
        
          ```
        Tutorials using [video upload](https://api.video/blog/endpoints/video-upload).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/videos/{videoId}/source", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostVideosVideoIDSourceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Video])
                res.video = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BadRequest])
                res.bad_request = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotFound])
                res.not_found = out

        return res

    
    def post_videos_video_id_thumbnail(self, request: operations.PostVideosVideoIDThumbnailRequest) -> operations.PostVideosVideoIDThumbnailResponse:
        r"""Upload a thumbnail
        The thumbnail is the poster that appears in the player window before video playback begins.
        This endpoint allows you to upload an image for the thumbnail.
        To select a still frame from the video using a time stamp, use [Pick a Thumbnail](https://docs.api.video/reference#patch_videos-videoid-thumbnail) to pick a time in the video. 
        Note: There may be a short delay before the new thumbnail is delivered to our CDN.
        Tutorials using [Thumbnail upload](https://api.video/blog/endpoints/videos-upload-a-thumbnail).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/videos/{videoId}/thumbnail", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostVideosVideoIDThumbnailResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Video])
                res.video = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BadRequest])
                res.bad_request = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotFound])
                res.not_found = out

        return res

    