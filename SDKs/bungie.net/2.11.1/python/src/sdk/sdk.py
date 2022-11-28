
__doc__ = """ SDK Documentation: https://github.com/Bungie-net/api/wiki/OAuth-Documentation - Our Wiki page about OAuth through Bungie.net."""
import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils




SERVERS = [
	"https://www.bungie.net/Platform",
]


class SDK:
    r"""SDK Documentation: https://github.com/Bungie-net/api/wiki/OAuth-Documentation - Our Wiki page about OAuth through Bungie.net."""

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
        
    
    
    
    def dot_get_available_locales(self) -> operations.DotGetAvailableLocalesResponse:
        r"""List of available localization cultures
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/GetAvailableLocales/"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DotGetAvailableLocalesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def dot_get_common_settings(self) -> operations.DotGetCommonSettingsResponse:
        r"""Get the common settings used by the Bungie.Net environment.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Settings/"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DotGetCommonSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def dot_get_global_alerts(self, request: operations.DotGetGlobalAlertsRequest) -> operations.DotGetGlobalAlertsResponse:
        r"""Gets any active global alert for display in the forum banners, help pages, etc. Usually used for DOC alerts.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/GlobalAlerts/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DotGetGlobalAlertsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def dot_get_user_system_overrides(self) -> operations.DotGetUserSystemOverridesResponse:
        r"""Get the user-specific system overrides that should be respected alongside common systems.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/UserSystemOverrides/"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DotGetUserSystemOverridesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def app_get_application_api_usage(self, request: operations.AppGetApplicationAPIUsageRequest) -> operations.AppGetApplicationAPIUsageResponse:
        r"""Get API usage by application for time frame specified. You can go as far back as 30 days ago, and can ask for up to a 48 hour window of time in a single request. You must be authenticated with at least the ReadUserData permission to access this endpoint.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/App/ApiUsage/{applicationId}/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AppGetApplicationAPIUsageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def app_get_bungie_applications(self) -> operations.AppGetBungieApplicationsResponse:
        r"""Get list of applications created by Bungie.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/App/FirstParty/"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AppGetBungieApplicationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def community_content_get_community_content(self, request: operations.CommunityContentGetCommunityContentRequest) -> operations.CommunityContentGetCommunityContentResponse:
        r"""Returns community content.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/CommunityContent/Get/{sort}/{mediaFilter}/{page}/", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CommunityContentGetCommunityContentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def content_get_content_by_id(self, request: operations.ContentGetContentByIDRequest) -> operations.ContentGetContentByIDResponse:
        r"""Returns a content item referenced by id
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Content/GetContentById/{id}/{locale}/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentGetContentByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def content_get_content_by_tag_and_type(self, request: operations.ContentGetContentByTagAndTypeRequest) -> operations.ContentGetContentByTagAndTypeResponse:
        r"""Returns the newest item that matches a given tag and Content Type.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Content/GetContentByTagAndType/{tag}/{type}/{locale}/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentGetContentByTagAndTypeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def content_get_content_type(self, request: operations.ContentGetContentTypeRequest) -> operations.ContentGetContentTypeResponse:
        r"""Gets an object describing a particular variant of content.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Content/GetContentType/{type}/", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentGetContentTypeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def content_search_content_by_tag_and_type(self, request: operations.ContentSearchContentByTagAndTypeRequest) -> operations.ContentSearchContentByTagAndTypeResponse:
        r"""Searches for Content Items that match the given Tag and Content Type.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Content/SearchContentByTagAndType/{tag}/{type}/{locale}/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentSearchContentByTagAndTypeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def content_search_content_with_text(self, request: operations.ContentSearchContentWithTextRequest) -> operations.ContentSearchContentWithTextResponse:
        r"""Gets content based on querystring information passed in. Provides basic search and text search capabilities.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Content/Search/{locale}/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentSearchContentWithTextResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def content_search_help_articles(self, request: operations.ContentSearchHelpArticlesRequest) -> operations.ContentSearchHelpArticlesResponse:
        r"""Search for Help Articles.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Content/SearchHelpArticles/{searchtext}/{size}/", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentSearchHelpArticlesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def destiny2_awa_get_action_token(self, request: operations.Destiny2AwaGetActionTokenRequest) -> operations.Destiny2AwaGetActionTokenResponse:
        r"""Returns the action token if user approves the request.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Destiny2/Awa/GetActionToken/{correlationId}/", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.Destiny2AwaGetActionTokenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def destiny2_awa_initialize_request(self, request: operations.Destiny2AwaInitializeRequestRequest) -> operations.Destiny2AwaInitializeRequestResponse:
        r"""Initialize a request to perform an advanced write action.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Destiny2/Awa/Initialize/"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.Destiny2AwaInitializeRequestResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def destiny2_awa_provide_authorization_result(self) -> operations.Destiny2AwaProvideAuthorizationResultResponse:
        r"""Provide the result of the user interaction. Called by the Bungie Destiny App to approve or reject a request.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Destiny2/Awa/AwaProvideAuthorizationResult/"
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.Destiny2AwaProvideAuthorizationResultResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def destiny2_equip_item(self, request: operations.Destiny2EquipItemRequest) -> operations.Destiny2EquipItemResponse:
        r"""Equip an item. You must have a valid Destiny Account, and either be in a social space, in orbit, or offline.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Destiny2/Actions/Items/EquipItem/"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.Destiny2EquipItemResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def destiny2_equip_items(self, request: operations.Destiny2EquipItemsRequest) -> operations.Destiny2EquipItemsResponse:
        r"""Equip a list of items by itemInstanceIds. You must have a valid Destiny Account, and either be in a social space, in orbit, or offline. Any items not found on your character will be ignored.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Destiny2/Actions/Items/EquipItems/"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.Destiny2EquipItemsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def destiny2_get_activity_history(self, request: operations.Destiny2GetActivityHistoryRequest) -> operations.Destiny2GetActivityHistoryResponse:
        r"""Gets activity history stats for indicated character.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Destiny2/{membershipType}/Account/{destinyMembershipId}/Character/{characterId}/Stats/Activities/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.Destiny2GetActivityHistoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def destiny2_get_character(self, request: operations.Destiny2GetCharacterRequest) -> operations.Destiny2GetCharacterResponse:
        r"""Returns character information for the supplied character.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Destiny2/{membershipType}/Profile/{destinyMembershipId}/Character/{characterId}/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.Destiny2GetCharacterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def destiny2_get_clan_aggregate_stats(self, request: operations.Destiny2GetClanAggregateStatsRequest) -> operations.Destiny2GetClanAggregateStatsResponse:
        r"""Gets aggregated stats for a clan using the same categories as the clan leaderboards. PREVIEW: This endpoint is still in beta, and may experience rough edges. The schema is in final form, but there may be bugs that prevent desirable operation.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Destiny2/Stats/AggregateClanStats/{groupId}/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.Destiny2GetClanAggregateStatsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def destiny2_get_clan_leaderboards(self, request: operations.Destiny2GetClanLeaderboardsRequest) -> operations.Destiny2GetClanLeaderboardsResponse:
        r"""Gets leaderboards with the signed in user's friends and the supplied destinyMembershipId as the focus. PREVIEW: This endpoint is still in beta, and may experience rough edges. The schema is in final form, but there may be bugs that prevent desirable operation.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Destiny2/Stats/Leaderboards/Clans/{groupId}/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.Destiny2GetClanLeaderboardsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def destiny2_get_clan_weekly_reward_state(self, request: operations.Destiny2GetClanWeeklyRewardStateRequest) -> operations.Destiny2GetClanWeeklyRewardStateResponse:
        r"""Returns information on the weekly clan rewards and if the clan has earned them or not. Note that this will always report rewards as not redeemed.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Destiny2/Clan/{groupId}/WeeklyRewardState/", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.Destiny2GetClanWeeklyRewardStateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def destiny2_get_collectible_node_details(self, request: operations.Destiny2GetCollectibleNodeDetailsRequest) -> operations.Destiny2GetCollectibleNodeDetailsResponse:
        r"""Given a Presentation Node that has Collectibles as direct descendants, this will return item details about those descendants in the context of the requesting character.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Destiny2/{membershipType}/Profile/{destinyMembershipId}/Character/{characterId}/Collectibles/{collectiblePresentationNodeHash}/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.Destiny2GetCollectibleNodeDetailsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def destiny2_get_destiny_aggregate_activity_stats(self, request: operations.Destiny2GetDestinyAggregateActivityStatsRequest) -> operations.Destiny2GetDestinyAggregateActivityStatsResponse:
        r"""Gets all activities the character has participated in together with aggregate statistics for those activities.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Destiny2/{membershipType}/Account/{destinyMembershipId}/Character/{characterId}/Stats/AggregateActivityStats/", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.Destiny2GetDestinyAggregateActivityStatsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def destiny2_get_destiny_entity_definition(self, request: operations.Destiny2GetDestinyEntityDefinitionRequest) -> operations.Destiny2GetDestinyEntityDefinitionResponse:
        r"""Returns the static definition of an entity of the given Type and hash identifier. Examine the API Documentation for the Type Names of entities that have their own definitions. Note that the return type will always *inherit from* DestinyDefinition, but the specific type returned will be the requested entity type if it can be found. Please don't use this as a chatty alternative to the Manifest database if you require large sets of data, but for simple and one-off accesses this should be handy.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Destiny2/Manifest/{entityType}/{hashIdentifier}/", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.Destiny2GetDestinyEntityDefinitionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def destiny2_get_destiny_manifest(self) -> operations.Destiny2GetDestinyManifestResponse:
        r"""Returns the current version of the manifest as a json object.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Destiny2/Manifest/"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.Destiny2GetDestinyManifestResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def destiny2_get_historical_stats(self, request: operations.Destiny2GetHistoricalStatsRequest) -> operations.Destiny2GetHistoricalStatsResponse:
        r"""Gets historical stats for indicated character.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Destiny2/{membershipType}/Account/{destinyMembershipId}/Character/{characterId}/Stats/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.Destiny2GetHistoricalStatsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def destiny2_get_historical_stats_definition(self) -> operations.Destiny2GetHistoricalStatsDefinitionResponse:
        r"""Gets historical stats definitions.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Destiny2/Stats/Definition/"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.Destiny2GetHistoricalStatsDefinitionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def destiny2_get_historical_stats_for_account(self, request: operations.Destiny2GetHistoricalStatsForAccountRequest) -> operations.Destiny2GetHistoricalStatsForAccountResponse:
        r"""Gets aggregate historical stats organized around each character for a given account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Destiny2/{membershipType}/Account/{destinyMembershipId}/Stats/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.Destiny2GetHistoricalStatsForAccountResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def destiny2_get_item(self, request: operations.Destiny2GetItemRequest) -> operations.Destiny2GetItemResponse:
        r"""Retrieve the details of an instanced Destiny Item. An instanced Destiny item is one with an ItemInstanceId. Non-instanced items, such as materials, have no useful instance-specific details and thus are not queryable here.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Destiny2/{membershipType}/Profile/{destinyMembershipId}/Item/{itemInstanceId}/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.Destiny2GetItemResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def destiny2_get_leaderboards(self, request: operations.Destiny2GetLeaderboardsRequest) -> operations.Destiny2GetLeaderboardsResponse:
        r"""Gets leaderboards with the signed in user's friends and the supplied destinyMembershipId as the focus. PREVIEW: This endpoint has not yet been implemented. It is being returned for a preview of future functionality, and for public comment/suggestion/preparation.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Destiny2/{membershipType}/Account/{destinyMembershipId}/Stats/Leaderboards/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.Destiny2GetLeaderboardsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def destiny2_get_leaderboards_for_character(self, request: operations.Destiny2GetLeaderboardsForCharacterRequest) -> operations.Destiny2GetLeaderboardsForCharacterResponse:
        r"""Gets leaderboards with the signed in user's friends and the supplied destinyMembershipId as the focus. PREVIEW: This endpoint is still in beta, and may experience rough edges. The schema is in final form, but there may be bugs that prevent desirable operation.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Destiny2/Stats/Leaderboards/{membershipType}/{destinyMembershipId}/{characterId}/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.Destiny2GetLeaderboardsForCharacterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def destiny2_get_linked_profiles(self, request: operations.Destiny2GetLinkedProfilesRequest) -> operations.Destiny2GetLinkedProfilesResponse:
        r"""Returns a summary information about all profiles linked to the requesting membership type/membership ID that have valid Destiny information. The passed-in Membership Type/Membership ID may be a Bungie.Net membership or a Destiny membership. It only returns the minimal amount of data to begin making more substantive requests, but will hopefully serve as a useful alternative to UserServices for people who just care about Destiny data. Note that it will only return linked accounts whose linkages you are allowed to view.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Destiny2/{membershipType}/Profile/{membershipId}/LinkedProfiles/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.Destiny2GetLinkedProfilesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def destiny2_get_post_game_carnage_report(self, request: operations.Destiny2GetPostGameCarnageReportRequest) -> operations.Destiny2GetPostGameCarnageReportResponse:
        r"""Gets the available post game carnage report for the activity ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Destiny2/Stats/PostGameCarnageReport/{activityId}/", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.Destiny2GetPostGameCarnageReportResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def destiny2_get_profile(self, request: operations.Destiny2GetProfileRequest) -> operations.Destiny2GetProfileResponse:
        r"""Returns Destiny Profile information for the supplied membership.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Destiny2/{membershipType}/Profile/{destinyMembershipId}/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.Destiny2GetProfileResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def destiny2_get_public_milestone_content(self, request: operations.Destiny2GetPublicMilestoneContentRequest) -> operations.Destiny2GetPublicMilestoneContentResponse:
        r"""Gets custom localized content for the milestone of the given hash, if it exists.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Destiny2/Milestones/{milestoneHash}/Content/", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.Destiny2GetPublicMilestoneContentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def destiny2_get_public_milestones(self) -> operations.Destiny2GetPublicMilestonesResponse:
        r"""Gets public information about currently available Milestones.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Destiny2/Milestones/"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.Destiny2GetPublicMilestonesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def destiny2_get_public_vendors(self, request: operations.Destiny2GetPublicVendorsRequest) -> operations.Destiny2GetPublicVendorsResponse:
        r"""Get items available from vendors where the vendors have items for sale that are common for everyone. If any portion of the Vendor's available inventory is character or account specific, we will be unable to return their data from this endpoint due to the way that available inventory is computed. As I am often guilty of saying: 'It's a long story...'
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Destiny2/Vendors/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.Destiny2GetPublicVendorsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def destiny2_get_unique_weapon_history(self, request: operations.Destiny2GetUniqueWeaponHistoryRequest) -> operations.Destiny2GetUniqueWeaponHistoryResponse:
        r"""Gets details about unique weapon usage, including all exotic weapons.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Destiny2/{membershipType}/Account/{destinyMembershipId}/Character/{characterId}/Stats/UniqueWeapons/", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.Destiny2GetUniqueWeaponHistoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def destiny2_get_vendor(self, request: operations.Destiny2GetVendorRequest) -> operations.Destiny2GetVendorResponse:
        r"""Get the details of a specific Vendor.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Destiny2/{membershipType}/Profile/{destinyMembershipId}/Character/{characterId}/Vendors/{vendorHash}/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.Destiny2GetVendorResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def destiny2_get_vendors(self, request: operations.Destiny2GetVendorsRequest) -> operations.Destiny2GetVendorsResponse:
        r"""Get currently available vendors from the list of vendors that can possibly have rotating inventory. Note that this does not include things like preview vendors and vendors-as-kiosks, neither of whom have rotating/dynamic inventories. Use their definitions as-is for those.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Destiny2/{membershipType}/Profile/{destinyMembershipId}/Character/{characterId}/Vendors/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.Destiny2GetVendorsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def destiny2_insert_socket_plug(self, request: operations.Destiny2InsertSocketPlugRequest) -> operations.Destiny2InsertSocketPlugResponse:
        r"""Insert a plug into a socketed item. I know how it sounds, but I assure you it's much more G-rated than you might be guessing. We haven't decided yet whether this will be able to insert plugs that have side effects, but if we do it will require special scope permission for an application attempting to do so. You must have a valid Destiny Account, and either be in a social space, in orbit, or offline. Request must include proof of permission for 'InsertPlugs' from the account owner.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Destiny2/Actions/Items/InsertSocketPlug/"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.Destiny2InsertSocketPlugResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def destiny2_pull_from_postmaster(self, request: operations.Destiny2PullFromPostmasterRequest) -> operations.Destiny2PullFromPostmasterResponse:
        r"""Extract an item from the Postmaster, with whatever implications that may entail. You must have a valid Destiny account. You must also pass BOTH a reference AND an instance ID if it's an instanced item.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Destiny2/Actions/Items/PullFromPostmaster/"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.Destiny2PullFromPostmasterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def destiny2_report_offensive_post_game_carnage_report_player(self, request: operations.Destiny2ReportOffensivePostGameCarnageReportPlayerRequest) -> operations.Destiny2ReportOffensivePostGameCarnageReportPlayerResponse:
        r"""Report a player that you met in an activity that was engaging in ToS-violating activities. Both you and the offending player must have played in the activityId passed in. Please use this judiciously and only when you have strong suspicions of violation, pretty please.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Destiny2/Stats/PostGameCarnageReport/{activityId}/Report/", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.Destiny2ReportOffensivePostGameCarnageReportPlayerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def destiny2_search_destiny_entities(self, request: operations.Destiny2SearchDestinyEntitiesRequest) -> operations.Destiny2SearchDestinyEntitiesResponse:
        r"""Gets a page list of Destiny items.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Destiny2/Armory/Search/{type}/{searchTerm}/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.Destiny2SearchDestinyEntitiesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def destiny2_search_destiny_player(self, request: operations.Destiny2SearchDestinyPlayerRequest) -> operations.Destiny2SearchDestinyPlayerResponse:
        r"""Returns a list of Destiny memberships given a full Gamertag or PSN ID. Unless you pass returnOriginalProfile=true, this will return membership information for the users' Primary Cross Save Profile if they are engaged in cross save rather than any original Destiny profile that is now being overridden.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Destiny2/SearchDestinyPlayer/{membershipType}/{displayName}/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.Destiny2SearchDestinyPlayerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def destiny2_set_item_lock_state(self, request: operations.Destiny2SetItemLockStateRequest) -> operations.Destiny2SetItemLockStateResponse:
        r"""Set the Lock State for an instanced item. You must have a valid Destiny Account.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Destiny2/Actions/Items/SetLockState/"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.Destiny2SetItemLockStateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def destiny2_set_quest_tracked_state(self, request: operations.Destiny2SetQuestTrackedStateRequest) -> operations.Destiny2SetQuestTrackedStateResponse:
        r"""Set the Tracking State for an instanced item, if that item is a Quest or Bounty. You must have a valid Destiny Account. Yeah, it's an item.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Destiny2/Actions/Items/SetTrackedState/"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.Destiny2SetQuestTrackedStateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def destiny2_transfer_item(self, request: operations.Destiny2TransferItemRequest) -> operations.Destiny2TransferItemResponse:
        r"""Transfer an item to/from your vault. You must have a valid Destiny account. You must also pass BOTH a reference AND an instance ID if it's an instanced item. itshappening.gif
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Destiny2/Actions/Items/TransferItem/"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.Destiny2TransferItemResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def fireteam_get_active_private_clan_fireteam_count(self, request: operations.FireteamGetActivePrivateClanFireteamCountRequest) -> operations.FireteamGetActivePrivateClanFireteamCountResponse:
        r"""Gets a count of all active non-public fireteams for the specified clan. Maximum value returned is 25.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Fireteam/Clan/{groupId}/ActiveCount/", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FireteamGetActivePrivateClanFireteamCountResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def fireteam_get_available_clan_fireteams(self, request: operations.FireteamGetAvailableClanFireteamsRequest) -> operations.FireteamGetAvailableClanFireteamsResponse:
        r"""Gets a listing of all of this clan's fireteams that are have available slots. Caller is not checked for join criteria so caching is maximized.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Fireteam/Clan/{groupId}/Available/{platform}/{activityType}/{dateRange}/{slotFilter}/{publicOnly}/{page}/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.FireteamGetAvailableClanFireteamsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def fireteam_get_clan_fireteam(self, request: operations.FireteamGetClanFireteamRequest) -> operations.FireteamGetClanFireteamResponse:
        r"""Gets a specific fireteam.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Fireteam/Clan/{groupId}/Summary/{fireteamId}/", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FireteamGetClanFireteamResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def fireteam_get_my_clan_fireteams(self, request: operations.FireteamGetMyClanFireteamsRequest) -> operations.FireteamGetMyClanFireteamsResponse:
        r"""Gets a listing of all fireteams that caller is an applicant, a member, or an alternate of.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Fireteam/Clan/{groupId}/My/{platform}/{includeClosed}/{page}/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.FireteamGetMyClanFireteamsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def fireteam_search_public_available_clan_fireteams(self, request: operations.FireteamSearchPublicAvailableClanFireteamsRequest) -> operations.FireteamSearchPublicAvailableClanFireteamsResponse:
        r"""Gets a listing of all public fireteams starting now with open slots. Caller is not checked for join criteria so caching is maximized.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Fireteam/Search/Available/{platform}/{activityType}/{dateRange}/{slotFilter}/{page}/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.FireteamSearchPublicAvailableClanFireteamsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def forum_get_core_topics_paged(self, request: operations.ForumGetCoreTopicsPagedRequest) -> operations.ForumGetCoreTopicsPagedResponse:
        r"""Gets a listing of all topics marked as part of the core group.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Forum/GetCoreTopicsPaged/{page}/{sort}/{quickDate}/{categoryFilter}/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ForumGetCoreTopicsPagedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def forum_get_forum_tag_suggestions(self, request: operations.ForumGetForumTagSuggestionsRequest) -> operations.ForumGetForumTagSuggestionsResponse:
        r"""Gets tag suggestions based on partial text entry, matching them with other tags previously used in the forums.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Forum/GetForumTagSuggestions/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ForumGetForumTagSuggestionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def forum_get_poll(self, request: operations.ForumGetPollRequest) -> operations.ForumGetPollResponse:
        r"""Gets the specified forum poll.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Forum/Poll/{topicId}/", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ForumGetPollResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def forum_get_post_and_parent(self, request: operations.ForumGetPostAndParentRequest) -> operations.ForumGetPostAndParentResponse:
        r"""Returns the post specified and its immediate parent.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Forum/GetPostAndParent/{childPostId}/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ForumGetPostAndParentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def forum_get_post_and_parent_awaiting_approval(self, request: operations.ForumGetPostAndParentAwaitingApprovalRequest) -> operations.ForumGetPostAndParentAwaitingApprovalResponse:
        r"""Returns the post specified and its immediate parent of posts that are awaiting approval.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Forum/GetPostAndParentAwaitingApproval/{childPostId}/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ForumGetPostAndParentAwaitingApprovalResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def forum_get_posts_threaded_paged(self, request: operations.ForumGetPostsThreadedPagedRequest) -> operations.ForumGetPostsThreadedPagedResponse:
        r"""Returns a thread of posts at the given parent, optionally returning replies to those posts as well as the original parent.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Forum/GetPostsThreadedPaged/{parentPostId}/{page}/{pageSize}/{replySize}/{getParentPost}/{rootThreadMode}/{sortMode}/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ForumGetPostsThreadedPagedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def forum_get_posts_threaded_paged_from_child(self, request: operations.ForumGetPostsThreadedPagedFromChildRequest) -> operations.ForumGetPostsThreadedPagedFromChildResponse:
        r"""Returns a thread of posts starting at the topicId of the input childPostId, optionally returning replies to those posts as well as the original parent.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Forum/GetPostsThreadedPagedFromChild/{childPostId}/{page}/{pageSize}/{replySize}/{rootThreadMode}/{sortMode}/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ForumGetPostsThreadedPagedFromChildResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def forum_get_recruitment_thread_summaries(self) -> operations.ForumGetRecruitmentThreadSummariesResponse:
        r"""Allows the caller to get a list of to 25 recruitment thread summary information objects.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Forum/Recruit/Summaries/"
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ForumGetRecruitmentThreadSummariesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def forum_get_topic_for_content(self, request: operations.ForumGetTopicForContentRequest) -> operations.ForumGetTopicForContentResponse:
        r"""Gets the post Id for the given content item's comments, if it exists.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Forum/GetTopicForContent/{contentId}/", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ForumGetTopicForContentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def forum_get_topics_paged(self, request: operations.ForumGetTopicsPagedRequest) -> operations.ForumGetTopicsPagedResponse:
        r"""Get topics from any forum.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Forum/GetTopicsPaged/{page}/{pageSize}/{group}/{sort}/{quickDate}/{categoryFilter}/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ForumGetTopicsPagedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def group_v2_abdicate_foundership(self, request: operations.GroupV2AbdicateFoundershipRequest) -> operations.GroupV2AbdicateFoundershipResponse:
        r"""An administrative method to allow the founder of a group or clan to give up their position to another admin permanently.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/GroupV2/{groupId}/Admin/AbdicateFoundership/{membershipType}/{founderIdNew}/", request.path_params)
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GroupV2AbdicateFoundershipResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def group_v2_add_optional_conversation(self, request: operations.GroupV2AddOptionalConversationRequest) -> operations.GroupV2AddOptionalConversationResponse:
        r"""Add a new optional conversation/chat channel. Requires admin permissions to the group.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/GroupV2/{groupId}/OptionalConversations/Add/", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GroupV2AddOptionalConversationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def group_v2_approve_all_pending(self, request: operations.GroupV2ApproveAllPendingRequest) -> operations.GroupV2ApproveAllPendingResponse:
        r"""Approve all of the pending users for the given group.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/GroupV2/{groupId}/Members/ApproveAll/", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GroupV2ApproveAllPendingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def group_v2_approve_pending(self, request: operations.GroupV2ApprovePendingRequest) -> operations.GroupV2ApprovePendingResponse:
        r"""Approve the given membershipId to join the group/clan as long as they have applied.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/GroupV2/{groupId}/Members/Approve/{membershipType}/{membershipId}/", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GroupV2ApprovePendingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def group_v2_approve_pending_for_list(self, request: operations.GroupV2ApprovePendingForListRequest) -> operations.GroupV2ApprovePendingForListResponse:
        r"""Approve all of the pending users for the given group.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/GroupV2/{groupId}/Members/ApproveList/", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GroupV2ApprovePendingForListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def group_v2_ban_member(self, request: operations.GroupV2BanMemberRequest) -> operations.GroupV2BanMemberResponse:
        r"""Bans the requested member from the requested group for the specified period of time.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/GroupV2/{groupId}/Members/{membershipType}/{membershipId}/Ban/", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GroupV2BanMemberResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def group_v2_deny_all_pending(self, request: operations.GroupV2DenyAllPendingRequest) -> operations.GroupV2DenyAllPendingResponse:
        r"""Deny all of the pending users for the given group.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/GroupV2/{groupId}/Members/DenyAll/", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GroupV2DenyAllPendingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def group_v2_deny_pending_for_list(self, request: operations.GroupV2DenyPendingForListRequest) -> operations.GroupV2DenyPendingForListResponse:
        r"""Deny all of the pending users for the given group that match the passed-in .
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/GroupV2/{groupId}/Members/DenyList/", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GroupV2DenyPendingForListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def group_v2_edit_clan_banner(self, request: operations.GroupV2EditClanBannerRequest) -> operations.GroupV2EditClanBannerResponse:
        r"""Edit an existing group's clan banner. You must have suitable permissions in the group to perform this operation. All fields are required.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/GroupV2/{groupId}/EditClanBanner/", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GroupV2EditClanBannerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def group_v2_edit_founder_options(self, request: operations.GroupV2EditFounderOptionsRequest) -> operations.GroupV2EditFounderOptionsResponse:
        r"""Edit group options only available to a founder. You must have suitable permissions in the group to perform this operation.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/GroupV2/{groupId}/EditFounderOptions/", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GroupV2EditFounderOptionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def group_v2_edit_group(self, request: operations.GroupV2EditGroupRequest) -> operations.GroupV2EditGroupResponse:
        r"""Edit an existing group. You must have suitable permissions in the group to perform this operation. This latest revision will only edit the fields you pass in - pass null for properties you want to leave unaltered.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/GroupV2/{groupId}/Edit/", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GroupV2EditGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def group_v2_edit_group_membership(self, request: operations.GroupV2EditGroupMembershipRequest) -> operations.GroupV2EditGroupMembershipResponse:
        r"""Edit the membership type of a given member. You must have suitable permissions in the group to perform this operation.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/GroupV2/{groupId}/Members/{membershipType}/{membershipId}/SetMembershipType/{memberType}/", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GroupV2EditGroupMembershipResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def group_v2_edit_optional_conversation(self, request: operations.GroupV2EditOptionalConversationRequest) -> operations.GroupV2EditOptionalConversationResponse:
        r"""Edit the settings of an optional conversation/chat channel. Requires admin permissions to the group.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/GroupV2/{groupId}/OptionalConversations/Edit/{conversationId}/", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GroupV2EditOptionalConversationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def group_v2_get_admins_and_founder_of_group(self, request: operations.GroupV2GetAdminsAndFounderOfGroupRequest) -> operations.GroupV2GetAdminsAndFounderOfGroupResponse:
        r"""Get the list of members in a given group who are of admin level or higher.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/GroupV2/{groupId}/AdminsAndFounder/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GroupV2GetAdminsAndFounderOfGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def group_v2_get_available_avatars(self) -> operations.GroupV2GetAvailableAvatarsResponse:
        r"""Returns a list of all available group avatars for the signed-in user.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/GroupV2/GetAvailableAvatars/"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GroupV2GetAvailableAvatarsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def group_v2_get_available_themes(self) -> operations.GroupV2GetAvailableThemesResponse:
        r"""Returns a list of all available group themes.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/GroupV2/GetAvailableThemes/"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GroupV2GetAvailableThemesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def group_v2_get_banned_members_of_group(self, request: operations.GroupV2GetBannedMembersOfGroupRequest) -> operations.GroupV2GetBannedMembersOfGroupResponse:
        r"""Get the list of banned members in a given group. Only accessible to group Admins and above. Not applicable to all groups. Check group features.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/GroupV2/{groupId}/Banned/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GroupV2GetBannedMembersOfGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def group_v2_get_group(self, request: operations.GroupV2GetGroupRequest) -> operations.GroupV2GetGroupResponse:
        r"""Get information about a specific group of the given ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/GroupV2/{groupId}/", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GroupV2GetGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def group_v2_get_group_by_name(self, request: operations.GroupV2GetGroupByNameRequest) -> operations.GroupV2GetGroupByNameResponse:
        r"""Get information about a specific group with the given name and type.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/GroupV2/Name/{groupName}/{groupType}/", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GroupV2GetGroupByNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def group_v2_get_group_by_name_v2(self) -> operations.GroupV2GetGroupByNameV2Response:
        r"""Get information about a specific group with the given name and type. The POST version.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/GroupV2/NameV2/"
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GroupV2GetGroupByNameV2Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def group_v2_get_group_optional_conversations(self, request: operations.GroupV2GetGroupOptionalConversationsRequest) -> operations.GroupV2GetGroupOptionalConversationsResponse:
        r"""Gets a list of available optional conversation channels and their settings.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/GroupV2/{groupId}/OptionalConversations/", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GroupV2GetGroupOptionalConversationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def group_v2_get_groups_for_member(self, request: operations.GroupV2GetGroupsForMemberRequest) -> operations.GroupV2GetGroupsForMemberResponse:
        r"""Get information about the groups that a given member has joined.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/GroupV2/User/{membershipType}/{membershipId}/{filter}/{groupType}/", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GroupV2GetGroupsForMemberResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def group_v2_get_invited_individuals(self, request: operations.GroupV2GetInvitedIndividualsRequest) -> operations.GroupV2GetInvitedIndividualsResponse:
        r"""Get the list of users who have been invited into the group.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/GroupV2/{groupId}/Members/InvitedIndividuals/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GroupV2GetInvitedIndividualsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def group_v2_get_members_of_group(self, request: operations.GroupV2GetMembersOfGroupRequest) -> operations.GroupV2GetMembersOfGroupResponse:
        r"""Get the list of members in a given group.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/GroupV2/{groupId}/Members/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GroupV2GetMembersOfGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def group_v2_get_pending_memberships(self, request: operations.GroupV2GetPendingMembershipsRequest) -> operations.GroupV2GetPendingMembershipsResponse:
        r"""Get the list of users who are awaiting a decision on their application to join a given group. Modified to include application info.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/GroupV2/{groupId}/Members/Pending/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GroupV2GetPendingMembershipsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def group_v2_get_potential_groups_for_member(self, request: operations.GroupV2GetPotentialGroupsForMemberRequest) -> operations.GroupV2GetPotentialGroupsForMemberResponse:
        r"""Get information about the groups that a given member has applied to or been invited to.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/GroupV2/User/Potential/{membershipType}/{membershipId}/{filter}/{groupType}/", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GroupV2GetPotentialGroupsForMemberResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def group_v2_get_recommended_groups(self, request: operations.GroupV2GetRecommendedGroupsRequest) -> operations.GroupV2GetRecommendedGroupsResponse:
        r"""Gets groups recommended for you based on the groups to whom those you follow belong.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/GroupV2/Recommended/{groupType}/{createDateRange}/", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GroupV2GetRecommendedGroupsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def group_v2_get_user_clan_invite_setting(self, request: operations.GroupV2GetUserClanInviteSettingRequest) -> operations.GroupV2GetUserClanInviteSettingResponse:
        r"""Gets the state of the user's clan invite preferences for a particular membership type - true if they wish to be invited to clans, false otherwise.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/GroupV2/GetUserClanInviteSetting/{mType}/", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GroupV2GetUserClanInviteSettingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def group_v2_group_search(self) -> operations.GroupV2GroupSearchResponse:
        r"""Search for Groups.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/GroupV2/Search/"
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GroupV2GroupSearchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def group_v2_individual_group_invite(self, request: operations.GroupV2IndividualGroupInviteRequest) -> operations.GroupV2IndividualGroupInviteResponse:
        r"""Invite a user to join this group.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/GroupV2/{groupId}/Members/IndividualInvite/{membershipType}/{membershipId}/", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GroupV2IndividualGroupInviteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def group_v2_individual_group_invite_cancel(self, request: operations.GroupV2IndividualGroupInviteCancelRequest) -> operations.GroupV2IndividualGroupInviteCancelResponse:
        r"""Cancels a pending invitation to join a group.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/GroupV2/{groupId}/Members/IndividualInviteCancel/{membershipType}/{membershipId}/", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GroupV2IndividualGroupInviteCancelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def group_v2_kick_member(self, request: operations.GroupV2KickMemberRequest) -> operations.GroupV2KickMemberResponse:
        r"""Kick a member from the given group, forcing them to reapply if they wish to re-join the group. You must have suitable permissions in the group to perform this operation.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/GroupV2/{groupId}/Members/{membershipType}/{membershipId}/Kick/", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GroupV2KickMemberResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def group_v2_recover_group_for_founder(self, request: operations.GroupV2RecoverGroupForFounderRequest) -> operations.GroupV2RecoverGroupForFounderResponse:
        r"""Allows a founder to manually recover a group they can see in game but not on bungie.net
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/GroupV2/Recover/{membershipType}/{membershipId}/{groupType}/", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GroupV2RecoverGroupForFounderResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def group_v2_unban_member(self, request: operations.GroupV2UnbanMemberRequest) -> operations.GroupV2UnbanMemberResponse:
        r"""Unbans the requested member, allowing them to re-apply for membership.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/GroupV2/{groupId}/Members/{membershipType}/{membershipId}/Unban/", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GroupV2UnbanMemberResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def tokens_apply_missing_partner_offers_without_claim(self, request: operations.TokensApplyMissingPartnerOffersWithoutClaimRequest) -> operations.TokensApplyMissingPartnerOffersWithoutClaimResponse:
        r"""Apply a partner offer to the targeted user. This endpoint does not claim a new offer, but any already claimed offers will be applied to the game if not already.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Tokens/Partner/ApplyMissingOffers/{partnerApplicationId}/{targetBnetMembershipId}/", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TokensApplyMissingPartnerOffersWithoutClaimResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def tokens_claim_partner_offer(self, request: operations.TokensClaimPartnerOfferRequest) -> operations.TokensClaimPartnerOfferResponse:
        r"""Claim a partner offer as the authenticated user.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Tokens/Partner/ClaimOffer/"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TokensClaimPartnerOfferResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def tokens_get_partner_offer_sku_history(self, request: operations.TokensGetPartnerOfferSkuHistoryRequest) -> operations.TokensGetPartnerOfferSkuHistoryResponse:
        r"""Returns the partner sku and offer history of the targeted user. Elevated permissions are required to see users that are not yourself.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Tokens/Partner/History/{partnerApplicationId}/{targetBnetMembershipId}/", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TokensGetPartnerOfferSkuHistoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def trending_get_trending_categories(self) -> operations.TrendingGetTrendingCategoriesResponse:
        r"""Returns trending items for Bungie.net, collapsed into the first page of items per category. For pagination within a category, call GetTrendingCategory.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Trending/Categories/"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TrendingGetTrendingCategoriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def trending_get_trending_category(self, request: operations.TrendingGetTrendingCategoryRequest) -> operations.TrendingGetTrendingCategoryResponse:
        r"""Returns paginated lists of trending items for a category.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Trending/Categories/{categoryId}/{pageNumber}/", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TrendingGetTrendingCategoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def trending_get_trending_entry_detail(self, request: operations.TrendingGetTrendingEntryDetailRequest) -> operations.TrendingGetTrendingEntryDetailResponse:
        r"""Returns the detailed results for a specific trending entry. Note that trending entries are uniquely identified by a combination of *both* the TrendingEntryType *and* the identifier: the identifier alone is not guaranteed to be globally unique.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Trending/Details/{trendingEntryType}/{identifier}/", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TrendingGetTrendingEntryDetailResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def user_get_available_themes(self) -> operations.UserGetAvailableThemesResponse:
        r"""Returns a list of all available user themes.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/User/GetAvailableThemes/"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UserGetAvailableThemesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def user_get_bungie_net_user_by_id(self, request: operations.UserGetBungieNetUserByIDRequest) -> operations.UserGetBungieNetUserByIDResponse:
        r"""Loads a bungienet user by membership id.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/User/GetBungieNetUserById/{id}/", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UserGetBungieNetUserByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def user_get_credential_types_for_target_account(self, request: operations.UserGetCredentialTypesForTargetAccountRequest) -> operations.UserGetCredentialTypesForTargetAccountResponse:
        r"""Returns a list of credential types attached to the requested account
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/User/GetCredentialTypesForTargetAccount/{membershipId}/", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UserGetCredentialTypesForTargetAccountResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def user_get_membership_data_by_id(self, request: operations.UserGetMembershipDataByIDRequest) -> operations.UserGetMembershipDataByIDResponse:
        r"""Returns a list of accounts associated with the supplied membership ID and membership type. This will include all linked accounts (even when hidden) if supplied credentials permit it.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/User/GetMembershipsById/{membershipId}/{membershipType}/", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UserGetMembershipDataByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def user_get_membership_data_for_current_user(self, request: operations.UserGetMembershipDataForCurrentUserRequest) -> operations.UserGetMembershipDataForCurrentUserResponse:
        r"""Returns a list of accounts associated with signed in user. This is useful for OAuth implementations that do not give you access to the token response.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/User/GetMembershipsForCurrentUser/"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UserGetMembershipDataForCurrentUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def user_get_membership_from_hard_linked_credential(self, request: operations.UserGetMembershipFromHardLinkedCredentialRequest) -> operations.UserGetMembershipFromHardLinkedCredentialResponse:
        r"""Gets any hard linked membership given a credential. Only works for credentials that are public (just SteamID64 right now). Cross Save aware.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/User/GetMembershipFromHardLinkedCredential/{crType}/{credential}/", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UserGetMembershipFromHardLinkedCredentialResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def user_search_users(self, request: operations.UserSearchUsersRequest) -> operations.UserSearchUsersResponse:
        r"""Returns a list of possible users based on the search string
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/User/SearchUsers/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.UserSearchUsersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    