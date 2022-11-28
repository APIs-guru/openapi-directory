
__doc__ = """ SDK Documentation: http://smethur.st/posts/176135860 - BBC iPlayer documentation"""
import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://ibl.api.bbci.co.uk/ibl/v1",
	"http://ibl.api.bbci.co.uk/ibl/v1",
]


class SDK:
    r"""SDK Documentation: http://smethur.st/posts/176135860 - BBC iPlayer documentation"""

    _client: requests.Session
    _security_client: requests.Session
    _security: shared.Security
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
        
        if self._security is not None:
            self._security_client = utils.configure_security_client(self._client, self._security)
        
    

    def config_security(self, security: shared.Security):
        self._security = security
        self._security_client = utils.configure_security_client(self._client, security)
        
    
    
    
    def get_broadcasts_by_channel_(self, request: operations.GetBroadcastsByChannelRequest) -> operations.GetBroadcastsByChannelResponse:
        r"""Get broadcasts by channel
        Get broadcasts by channel
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/channels/{channel}/broadcasts", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBroadcastsByChannelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.ibl = out

        return res

    
    def get_categories_(self, request: operations.GetCategoriesRequest) -> operations.GetCategoriesResponse:
        r"""Get categories
        Get the list of all the categories in TV & iPlayer.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/categories"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCategoriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.ibl = out

        return res

    
    def get_channels_(self, request: operations.GetChannelsRequest) -> operations.GetChannelsResponse:
        r"""List all the channels.
        Get the list of all the channels TV & iPlayer.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/channels"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetChannelsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.ibl = out

        return res

    
    def get_clips_(self, request: operations.GetClipsRequest) -> operations.GetClipsResponse:
        r"""Get Clips
        Get Clips
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/clips/{pid}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetClipsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.ibl = out

        return res

    
    def get_episodes_by_category_(self, request: operations.GetEpisodesByCategoryRequest) -> operations.GetEpisodesByCategoryResponse:
        r"""List all the episodes for a category.
        Get the list of all the episodes for a given category in TV & iPlayer.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/categories/{category}/episodes", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEpisodesByCategoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.ibl = out

        return res

    
    def get_episodes_by_group_(self, request: operations.GetEpisodesByGroupRequest) -> operations.GetEpisodesByGroupResponse:
        r"""Get episodes by group, brand or series
        Get episodes by group, brand or series
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/groups/{pid}/episodes", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEpisodesByGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.ibl = out

        return res

    
    def get_episodes_by_parent_pid_(self, request: operations.GetEpisodesByParentPidRequest) -> operations.GetEpisodesByParentPidResponse:
        r"""Child episodes for a given programme pid.
        Get the child episodes belonging to a given programme identifier.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/programmes/{pid}/episodes", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEpisodesByParentPidResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.ibl = out

        return res

    
    def get_highlights_by_category_(self, request: operations.GetHighlightsByCategoryRequest) -> operations.GetHighlightsByCategoryResponse:
        r"""List the highlights for a category.
        Get the editorial highlights of a given category in TV & iPlayer.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/categories/{category}/highlights", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetHighlightsByCategoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.ibl = out

        return res

    
    def get_highlights_by_channel_(self, request: operations.GetHighlightsByChannelRequest) -> operations.GetHighlightsByChannelResponse:
        r"""List the highlights for a channel.
        Get the editorial highlights of a given channel in TV & iPlayer.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/channels/{channel}/highlights", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetHighlightsByChannelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.ibl = out

        return res

    
    def get_onward_journey(self, request: operations.GetOnwardJourneyRequest) -> operations.GetOnwardJourneyResponse:
        r"""Get Onward Journey
        Get Onward Journey (next programme)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/episodes/{pid}/next", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOnwardJourneyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.ibl = out

        return res

    
    def get_programme_by_pid_(self, request: operations.GetProgrammeByPidRequest) -> operations.GetProgrammeByPidResponse:
        r"""Episode for a given pid.
        Get the episode for a given episode identifier.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/episodes/{pid}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProgrammeByPidResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.ibl = out

        return res

    
    def get_programme_highlights_(self, request: operations.GetProgrammeHighlightsRequest) -> operations.GetProgrammeHighlightsResponse:
        r"""Get programme highlights
        Get programme highlights
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/home/highlights"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProgrammeHighlightsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.ibl = out

        return res

    
    def get_programme_recommendations_(self, request: operations.GetProgrammeRecommendationsRequest) -> operations.GetProgrammeRecommendationsResponse:
        r"""Get programme recommendations
        Get programme recommendations
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/episodes/{pid}/recommendations", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProgrammeRecommendationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.ibl = out

        return res

    
    def get_programmes_ato_z_search_(self, request: operations.GetProgrammesAtoZSearchRequest) -> operations.GetProgrammesAtoZSearchResponse:
        r"""Programmes by initial title character
        Get the Programmes whose title begins with the given initial character.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/atoz/{letter}/programmes", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProgrammesAtoZSearchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.ibl = out

        return res

    
    def get_programmes_by_category_(self, request: operations.GetProgrammesByCategoryRequest) -> operations.GetProgrammesByCategoryResponse:
        r"""List all the programmes for a category.
        Get the list of all the Programmes (TLEOs) for a given category in TV & iPlayer.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/categories/{category}/programmes", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProgrammesByCategoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.ibl = out

        return res

    
    def get_programmes_by_channel_(self, request: operations.GetProgrammesByChannelRequest) -> operations.GetProgrammesByChannelResponse:
        r"""Get programmes by channel
        Get programmes by channel
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/channels/{channel}/programmes", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProgrammesByChannelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.ibl = out

        return res

    
    def get_programmes_by_parent_pid_(self, request: operations.GetProgrammesByParentPidRequest) -> operations.GetProgrammesByParentPidResponse:
        r"""Programme for a given pid.
        Get the programme for a given programme identifier.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/programmes/{pid}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProgrammesByParentPidResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.ibl = out

        return res

    
    def get_programmes_popular_(self, request: operations.GetProgrammesPopularRequest) -> operations.GetProgrammesPopularResponse:
        r"""Get programmes popular
        Get programmes popular
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/groups/popular/episodes"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProgrammesPopularResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.ibl = out

        return res

    
    def get_regions_(self, request: operations.GetRegionsRequest) -> operations.GetRegionsResponse:
        r"""List all regions
        Get the list of all the regions TV & iPlayer.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/regions"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRegionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.ibl = out

        return res

    
    def get_schedule_by_channel_(self, request: operations.GetScheduleByChannelRequest) -> operations.GetScheduleByChannelResponse:
        r"""Get schedule by channel
        Get schedule by channel
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/channels/{channel}/schedule/{date}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetScheduleByChannelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.ibl = out

        return res

    
    def get_schema_(self) -> operations.GetSchemaResponse:
        r"""Get schema
        Get schema
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/schema/ibl.json"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSchemaResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.ibl = out

        return res

    
    def get_status_(self) -> operations.GetStatusResponse:
        r"""Get status
        Get the current iPlayer business layer status. This tells the caller the status of the iPlayer data, but not necessarily the overall status of the website. In the future it might include the status of the dependent data services within the BBC.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/status"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.ibl = out

        return res

    
    def get_sub_categories_(self, request: operations.GetSubCategoriesRequest) -> operations.GetSubCategoriesResponse:
        r"""Get sub-categories
        Get sub-categories
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/categories/{category}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSubCategoriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.ibl = out

        return res

    
    def get_trailers_pre_rolls_(self, request: operations.GetTrailersPreRollsRequest) -> operations.GetTrailersPreRollsResponse:
        r"""Get Trailers (pre-rolls)
        Get Trailers (pre-rolls)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/episodes/{pid}/prerolls", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTrailersPreRollsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.ibl = out

        return res

    
    def get_user_store_purchases_(self, request: operations.GetUserStorePurchasesRequest) -> operations.GetUserStorePurchasesResponse:
        r"""Get user store purchases
        Get user store purchases
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/user/purchases"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUserStorePurchasesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.ibl = out

        return res

    
    def get_user_store_recommendations_(self, request: operations.GetUserStoreRecommendationsRequest) -> operations.GetUserStoreRecommendationsResponse:
        r"""Get user store recommendations
        Get user store recommendations
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/user/recommendations"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUserStoreRecommendationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.ibl = out

        return res

    
    def get_user_watching_(self, request: operations.GetUserWatchingRequest) -> operations.GetUserWatchingResponse:
        r"""Get user watching
        Get user watching
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/user/watching"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUserWatchingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.ibl = out

        return res

    
    def search_suggest_(self, request: operations.SearchSuggestRequest) -> operations.SearchSuggestResponse:
        r"""Search-suggest
        Search-suggest
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/search-suggest"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchSuggestResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.ibl = out

        return res

    
    def search_(self, request: operations.SearchRequest) -> operations.SearchResponse:
        r"""Search
        Search
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/search"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.ibl = out

        return res

    
    def get_post_rolls(self, request: operations.GetPostRollsRequest) -> operations.GetPostRollsResponse:
        r"""Get Follow-ups (post-rolls)
        Get Follow-ups (post-rolls)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/episodes/{pid}/postrolls", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPostRollsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.ibl = out

        return res

    