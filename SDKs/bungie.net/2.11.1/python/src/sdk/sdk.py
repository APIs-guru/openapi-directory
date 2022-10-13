import warnings
import requests
from typing import List,Optional
from sdk.models import operations
from . import utils


SERVERS = [
	"https://www.bungie.net/Platform",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
    
    
    def dot_get_available_locales(self) -> operations.DotGetAvailableLocalesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/GetAvailableLocales/"
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DotGetAvailableLocalesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def dot_get_common_settings(self) -> operations.DotGetCommonSettingsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/Settings/"
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DotGetCommonSettingsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def dot_get_global_alerts(self, request: operations.DotGetGlobalAlertsRequest) -> operations.DotGetGlobalAlertsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/GlobalAlerts/"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DotGetGlobalAlertsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def dot_get_user_system_overrides(self) -> operations.DotGetUserSystemOverridesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/UserSystemOverrides/"
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DotGetUserSystemOverridesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def app_get_application_api_usage(self, request: operations.AppGetApplicationAPIUsageRequest) -> operations.AppGetApplicationAPIUsageResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/App/ApiUsage/{applicationId}/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AppGetApplicationAPIUsageResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def app_get_bungie_applications(self) -> operations.AppGetBungieApplicationsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/App/FirstParty/"
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AppGetBungieApplicationsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def community_content_get_community_content(self, request: operations.CommunityContentGetCommunityContentRequest) -> operations.CommunityContentGetCommunityContentResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/CommunityContent/Get/{sort}/{mediaFilter}/{page}/", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CommunityContentGetCommunityContentResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def content_get_content_by_id(self, request: operations.ContentGetContentByIDRequest) -> operations.ContentGetContentByIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/Content/GetContentById/{id}/{locale}/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentGetContentByIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def content_get_content_by_tag_and_type(self, request: operations.ContentGetContentByTagAndTypeRequest) -> operations.ContentGetContentByTagAndTypeResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/Content/GetContentByTagAndType/{tag}/{type}/{locale}/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentGetContentByTagAndTypeResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def content_get_content_type(self, request: operations.ContentGetContentTypeRequest) -> operations.ContentGetContentTypeResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/Content/GetContentType/{type}/", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentGetContentTypeResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def content_search_content_by_tag_and_type(self, request: operations.ContentSearchContentByTagAndTypeRequest) -> operations.ContentSearchContentByTagAndTypeResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/Content/SearchContentByTagAndType/{tag}/{type}/{locale}/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentSearchContentByTagAndTypeResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def content_search_content_with_text(self, request: operations.ContentSearchContentWithTextRequest) -> operations.ContentSearchContentWithTextResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/Content/Search/{locale}/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentSearchContentWithTextResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def content_search_help_articles(self, request: operations.ContentSearchHelpArticlesRequest) -> operations.ContentSearchHelpArticlesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/Content/SearchHelpArticles/{searchtext}/{size}/", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentSearchHelpArticlesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def destiny2_awa_get_action_token(self, request: operations.Destiny2AwaGetActionTokenRequest) -> operations.Destiny2AwaGetActionTokenResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/Destiny2/Awa/GetActionToken/{correlationId}/", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.Destiny2AwaGetActionTokenResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def destiny2_awa_initialize_request(self, request: operations.Destiny2AwaInitializeRequestRequest) -> operations.Destiny2AwaInitializeRequestResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/Destiny2/Awa/Initialize/"
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.Destiny2AwaInitializeRequestResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def destiny2_awa_provide_authorization_result(self) -> operations.Destiny2AwaProvideAuthorizationResultResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/Destiny2/Awa/AwaProvideAuthorizationResult/"
        
        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.Destiny2AwaProvideAuthorizationResultResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def destiny2_equip_item(self, request: operations.Destiny2EquipItemRequest) -> operations.Destiny2EquipItemResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/Destiny2/Actions/Items/EquipItem/"
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.Destiny2EquipItemResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def destiny2_equip_items(self, request: operations.Destiny2EquipItemsRequest) -> operations.Destiny2EquipItemsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/Destiny2/Actions/Items/EquipItems/"
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.Destiny2EquipItemsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def destiny2_get_activity_history(self, request: operations.Destiny2GetActivityHistoryRequest) -> operations.Destiny2GetActivityHistoryResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/Destiny2/{membershipType}/Account/{destinyMembershipId}/Character/{characterId}/Stats/Activities/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.Destiny2GetActivityHistoryResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def destiny2_get_character(self, request: operations.Destiny2GetCharacterRequest) -> operations.Destiny2GetCharacterResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/Destiny2/{membershipType}/Profile/{destinyMembershipId}/Character/{characterId}/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.Destiny2GetCharacterResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def destiny2_get_clan_aggregate_stats(self, request: operations.Destiny2GetClanAggregateStatsRequest) -> operations.Destiny2GetClanAggregateStatsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/Destiny2/Stats/AggregateClanStats/{groupId}/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.Destiny2GetClanAggregateStatsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def destiny2_get_clan_leaderboards(self, request: operations.Destiny2GetClanLeaderboardsRequest) -> operations.Destiny2GetClanLeaderboardsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/Destiny2/Stats/Leaderboards/Clans/{groupId}/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.Destiny2GetClanLeaderboardsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def destiny2_get_clan_weekly_reward_state(self, request: operations.Destiny2GetClanWeeklyRewardStateRequest) -> operations.Destiny2GetClanWeeklyRewardStateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/Destiny2/Clan/{groupId}/WeeklyRewardState/", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.Destiny2GetClanWeeklyRewardStateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def destiny2_get_collectible_node_details(self, request: operations.Destiny2GetCollectibleNodeDetailsRequest) -> operations.Destiny2GetCollectibleNodeDetailsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/Destiny2/{membershipType}/Profile/{destinyMembershipId}/Character/{characterId}/Collectibles/{collectiblePresentationNodeHash}/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.Destiny2GetCollectibleNodeDetailsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def destiny2_get_destiny_aggregate_activity_stats(self, request: operations.Destiny2GetDestinyAggregateActivityStatsRequest) -> operations.Destiny2GetDestinyAggregateActivityStatsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/Destiny2/{membershipType}/Account/{destinyMembershipId}/Character/{characterId}/Stats/AggregateActivityStats/", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.Destiny2GetDestinyAggregateActivityStatsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def destiny2_get_destiny_entity_definition(self, request: operations.Destiny2GetDestinyEntityDefinitionRequest) -> operations.Destiny2GetDestinyEntityDefinitionResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/Destiny2/Manifest/{entityType}/{hashIdentifier}/", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.Destiny2GetDestinyEntityDefinitionResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def destiny2_get_destiny_manifest(self) -> operations.Destiny2GetDestinyManifestResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/Destiny2/Manifest/"
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.Destiny2GetDestinyManifestResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def destiny2_get_historical_stats(self, request: operations.Destiny2GetHistoricalStatsRequest) -> operations.Destiny2GetHistoricalStatsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/Destiny2/{membershipType}/Account/{destinyMembershipId}/Character/{characterId}/Stats/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.Destiny2GetHistoricalStatsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def destiny2_get_historical_stats_definition(self) -> operations.Destiny2GetHistoricalStatsDefinitionResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/Destiny2/Stats/Definition/"
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.Destiny2GetHistoricalStatsDefinitionResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def destiny2_get_historical_stats_for_account(self, request: operations.Destiny2GetHistoricalStatsForAccountRequest) -> operations.Destiny2GetHistoricalStatsForAccountResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/Destiny2/{membershipType}/Account/{destinyMembershipId}/Stats/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.Destiny2GetHistoricalStatsForAccountResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def destiny2_get_item(self, request: operations.Destiny2GetItemRequest) -> operations.Destiny2GetItemResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/Destiny2/{membershipType}/Profile/{destinyMembershipId}/Item/{itemInstanceId}/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.Destiny2GetItemResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def destiny2_get_leaderboards(self, request: operations.Destiny2GetLeaderboardsRequest) -> operations.Destiny2GetLeaderboardsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/Destiny2/{membershipType}/Account/{destinyMembershipId}/Stats/Leaderboards/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.Destiny2GetLeaderboardsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def destiny2_get_leaderboards_for_character(self, request: operations.Destiny2GetLeaderboardsForCharacterRequest) -> operations.Destiny2GetLeaderboardsForCharacterResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/Destiny2/Stats/Leaderboards/{membershipType}/{destinyMembershipId}/{characterId}/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.Destiny2GetLeaderboardsForCharacterResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def destiny2_get_linked_profiles(self, request: operations.Destiny2GetLinkedProfilesRequest) -> operations.Destiny2GetLinkedProfilesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/Destiny2/{membershipType}/Profile/{membershipId}/LinkedProfiles/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.Destiny2GetLinkedProfilesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def destiny2_get_post_game_carnage_report(self, request: operations.Destiny2GetPostGameCarnageReportRequest) -> operations.Destiny2GetPostGameCarnageReportResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/Destiny2/Stats/PostGameCarnageReport/{activityId}/", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.Destiny2GetPostGameCarnageReportResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def destiny2_get_profile(self, request: operations.Destiny2GetProfileRequest) -> operations.Destiny2GetProfileResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/Destiny2/{membershipType}/Profile/{destinyMembershipId}/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.Destiny2GetProfileResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def destiny2_get_public_milestone_content(self, request: operations.Destiny2GetPublicMilestoneContentRequest) -> operations.Destiny2GetPublicMilestoneContentResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/Destiny2/Milestones/{milestoneHash}/Content/", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.Destiny2GetPublicMilestoneContentResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def destiny2_get_public_milestones(self) -> operations.Destiny2GetPublicMilestonesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/Destiny2/Milestones/"
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.Destiny2GetPublicMilestonesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def destiny2_get_public_vendors(self, request: operations.Destiny2GetPublicVendorsRequest) -> operations.Destiny2GetPublicVendorsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/Destiny2/Vendors/"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.Destiny2GetPublicVendorsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def destiny2_get_unique_weapon_history(self, request: operations.Destiny2GetUniqueWeaponHistoryRequest) -> operations.Destiny2GetUniqueWeaponHistoryResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/Destiny2/{membershipType}/Account/{destinyMembershipId}/Character/{characterId}/Stats/UniqueWeapons/", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.Destiny2GetUniqueWeaponHistoryResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def destiny2_get_vendor(self, request: operations.Destiny2GetVendorRequest) -> operations.Destiny2GetVendorResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/Destiny2/{membershipType}/Profile/{destinyMembershipId}/Character/{characterId}/Vendors/{vendorHash}/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.Destiny2GetVendorResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def destiny2_get_vendors(self, request: operations.Destiny2GetVendorsRequest) -> operations.Destiny2GetVendorsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/Destiny2/{membershipType}/Profile/{destinyMembershipId}/Character/{characterId}/Vendors/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.Destiny2GetVendorsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def destiny2_insert_socket_plug(self, request: operations.Destiny2InsertSocketPlugRequest) -> operations.Destiny2InsertSocketPlugResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/Destiny2/Actions/Items/InsertSocketPlug/"
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.Destiny2InsertSocketPlugResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def destiny2_pull_from_postmaster(self, request: operations.Destiny2PullFromPostmasterRequest) -> operations.Destiny2PullFromPostmasterResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/Destiny2/Actions/Items/PullFromPostmaster/"
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.Destiny2PullFromPostmasterResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def destiny2_report_offensive_post_game_carnage_report_player(self, request: operations.Destiny2ReportOffensivePostGameCarnageReportPlayerRequest) -> operations.Destiny2ReportOffensivePostGameCarnageReportPlayerResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/Destiny2/Stats/PostGameCarnageReport/{activityId}/Report/", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.Destiny2ReportOffensivePostGameCarnageReportPlayerResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def destiny2_search_destiny_entities(self, request: operations.Destiny2SearchDestinyEntitiesRequest) -> operations.Destiny2SearchDestinyEntitiesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/Destiny2/Armory/Search/{type}/{searchTerm}/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.Destiny2SearchDestinyEntitiesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def destiny2_search_destiny_player(self, request: operations.Destiny2SearchDestinyPlayerRequest) -> operations.Destiny2SearchDestinyPlayerResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/Destiny2/SearchDestinyPlayer/{membershipType}/{displayName}/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.Destiny2SearchDestinyPlayerResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def destiny2_set_item_lock_state(self, request: operations.Destiny2SetItemLockStateRequest) -> operations.Destiny2SetItemLockStateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/Destiny2/Actions/Items/SetLockState/"
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.Destiny2SetItemLockStateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def destiny2_set_quest_tracked_state(self, request: operations.Destiny2SetQuestTrackedStateRequest) -> operations.Destiny2SetQuestTrackedStateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/Destiny2/Actions/Items/SetTrackedState/"
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.Destiny2SetQuestTrackedStateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def destiny2_transfer_item(self, request: operations.Destiny2TransferItemRequest) -> operations.Destiny2TransferItemResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/Destiny2/Actions/Items/TransferItem/"
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.Destiny2TransferItemResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def fireteam_get_active_private_clan_fireteam_count(self, request: operations.FireteamGetActivePrivateClanFireteamCountRequest) -> operations.FireteamGetActivePrivateClanFireteamCountResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/Fireteam/Clan/{groupId}/ActiveCount/", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FireteamGetActivePrivateClanFireteamCountResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def fireteam_get_available_clan_fireteams(self, request: operations.FireteamGetAvailableClanFireteamsRequest) -> operations.FireteamGetAvailableClanFireteamsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/Fireteam/Clan/{groupId}/Available/{platform}/{activityType}/{dateRange}/{slotFilter}/{publicOnly}/{page}/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.FireteamGetAvailableClanFireteamsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def fireteam_get_clan_fireteam(self, request: operations.FireteamGetClanFireteamRequest) -> operations.FireteamGetClanFireteamResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/Fireteam/Clan/{groupId}/Summary/{fireteamId}/", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FireteamGetClanFireteamResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def fireteam_get_my_clan_fireteams(self, request: operations.FireteamGetMyClanFireteamsRequest) -> operations.FireteamGetMyClanFireteamsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/Fireteam/Clan/{groupId}/My/{platform}/{includeClosed}/{page}/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.FireteamGetMyClanFireteamsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def fireteam_search_public_available_clan_fireteams(self, request: operations.FireteamSearchPublicAvailableClanFireteamsRequest) -> operations.FireteamSearchPublicAvailableClanFireteamsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/Fireteam/Search/Available/{platform}/{activityType}/{dateRange}/{slotFilter}/{page}/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.FireteamSearchPublicAvailableClanFireteamsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def forum_get_core_topics_paged(self, request: operations.ForumGetCoreTopicsPagedRequest) -> operations.ForumGetCoreTopicsPagedResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/Forum/GetCoreTopicsPaged/{page}/{sort}/{quickDate}/{categoryFilter}/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ForumGetCoreTopicsPagedResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def forum_get_forum_tag_suggestions(self, request: operations.ForumGetForumTagSuggestionsRequest) -> operations.ForumGetForumTagSuggestionsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/Forum/GetForumTagSuggestions/"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ForumGetForumTagSuggestionsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def forum_get_poll(self, request: operations.ForumGetPollRequest) -> operations.ForumGetPollResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/Forum/Poll/{topicId}/", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ForumGetPollResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def forum_get_post_and_parent(self, request: operations.ForumGetPostAndParentRequest) -> operations.ForumGetPostAndParentResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/Forum/GetPostAndParent/{childPostId}/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ForumGetPostAndParentResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def forum_get_post_and_parent_awaiting_approval(self, request: operations.ForumGetPostAndParentAwaitingApprovalRequest) -> operations.ForumGetPostAndParentAwaitingApprovalResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/Forum/GetPostAndParentAwaitingApproval/{childPostId}/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ForumGetPostAndParentAwaitingApprovalResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def forum_get_posts_threaded_paged(self, request: operations.ForumGetPostsThreadedPagedRequest) -> operations.ForumGetPostsThreadedPagedResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/Forum/GetPostsThreadedPaged/{parentPostId}/{page}/{pageSize}/{replySize}/{getParentPost}/{rootThreadMode}/{sortMode}/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ForumGetPostsThreadedPagedResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def forum_get_posts_threaded_paged_from_child(self, request: operations.ForumGetPostsThreadedPagedFromChildRequest) -> operations.ForumGetPostsThreadedPagedFromChildResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/Forum/GetPostsThreadedPagedFromChild/{childPostId}/{page}/{pageSize}/{replySize}/{rootThreadMode}/{sortMode}/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ForumGetPostsThreadedPagedFromChildResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def forum_get_recruitment_thread_summaries(self) -> operations.ForumGetRecruitmentThreadSummariesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/Forum/Recruit/Summaries/"
        
        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ForumGetRecruitmentThreadSummariesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def forum_get_topic_for_content(self, request: operations.ForumGetTopicForContentRequest) -> operations.ForumGetTopicForContentResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/Forum/GetTopicForContent/{contentId}/", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ForumGetTopicForContentResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def forum_get_topics_paged(self, request: operations.ForumGetTopicsPagedRequest) -> operations.ForumGetTopicsPagedResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/Forum/GetTopicsPaged/{page}/{pageSize}/{group}/{sort}/{quickDate}/{categoryFilter}/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ForumGetTopicsPagedResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def group_v2_abdicate_foundership(self, request: operations.GroupV2AbdicateFoundershipRequest) -> operations.GroupV2AbdicateFoundershipResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/GroupV2/{groupId}/Admin/AbdicateFoundership/{membershipType}/{founderIdNew}/", request.path_params)
        
        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GroupV2AbdicateFoundershipResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def group_v2_add_optional_conversation(self, request: operations.GroupV2AddOptionalConversationRequest) -> operations.GroupV2AddOptionalConversationResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/GroupV2/{groupId}/OptionalConversations/Add/", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GroupV2AddOptionalConversationResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def group_v2_approve_all_pending(self, request: operations.GroupV2ApproveAllPendingRequest) -> operations.GroupV2ApproveAllPendingResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/GroupV2/{groupId}/Members/ApproveAll/", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GroupV2ApproveAllPendingResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def group_v2_approve_pending(self, request: operations.GroupV2ApprovePendingRequest) -> operations.GroupV2ApprovePendingResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/GroupV2/{groupId}/Members/Approve/{membershipType}/{membershipId}/", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GroupV2ApprovePendingResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def group_v2_approve_pending_for_list(self, request: operations.GroupV2ApprovePendingForListRequest) -> operations.GroupV2ApprovePendingForListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/GroupV2/{groupId}/Members/ApproveList/", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GroupV2ApprovePendingForListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def group_v2_ban_member(self, request: operations.GroupV2BanMemberRequest) -> operations.GroupV2BanMemberResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/GroupV2/{groupId}/Members/{membershipType}/{membershipId}/Ban/", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GroupV2BanMemberResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def group_v2_deny_all_pending(self, request: operations.GroupV2DenyAllPendingRequest) -> operations.GroupV2DenyAllPendingResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/GroupV2/{groupId}/Members/DenyAll/", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GroupV2DenyAllPendingResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def group_v2_deny_pending_for_list(self, request: operations.GroupV2DenyPendingForListRequest) -> operations.GroupV2DenyPendingForListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/GroupV2/{groupId}/Members/DenyList/", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GroupV2DenyPendingForListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def group_v2_edit_clan_banner(self, request: operations.GroupV2EditClanBannerRequest) -> operations.GroupV2EditClanBannerResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/GroupV2/{groupId}/EditClanBanner/", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GroupV2EditClanBannerResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def group_v2_edit_founder_options(self, request: operations.GroupV2EditFounderOptionsRequest) -> operations.GroupV2EditFounderOptionsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/GroupV2/{groupId}/EditFounderOptions/", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GroupV2EditFounderOptionsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def group_v2_edit_group(self, request: operations.GroupV2EditGroupRequest) -> operations.GroupV2EditGroupResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/GroupV2/{groupId}/Edit/", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GroupV2EditGroupResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def group_v2_edit_group_membership(self, request: operations.GroupV2EditGroupMembershipRequest) -> operations.GroupV2EditGroupMembershipResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/GroupV2/{groupId}/Members/{membershipType}/{membershipId}/SetMembershipType/{memberType}/", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GroupV2EditGroupMembershipResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def group_v2_edit_optional_conversation(self, request: operations.GroupV2EditOptionalConversationRequest) -> operations.GroupV2EditOptionalConversationResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/GroupV2/{groupId}/OptionalConversations/Edit/{conversationId}/", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GroupV2EditOptionalConversationResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def group_v2_get_admins_and_founder_of_group(self, request: operations.GroupV2GetAdminsAndFounderOfGroupRequest) -> operations.GroupV2GetAdminsAndFounderOfGroupResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/GroupV2/{groupId}/AdminsAndFounder/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GroupV2GetAdminsAndFounderOfGroupResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def group_v2_get_available_avatars(self) -> operations.GroupV2GetAvailableAvatarsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/GroupV2/GetAvailableAvatars/"
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GroupV2GetAvailableAvatarsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def group_v2_get_available_themes(self) -> operations.GroupV2GetAvailableThemesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/GroupV2/GetAvailableThemes/"
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GroupV2GetAvailableThemesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def group_v2_get_banned_members_of_group(self, request: operations.GroupV2GetBannedMembersOfGroupRequest) -> operations.GroupV2GetBannedMembersOfGroupResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/GroupV2/{groupId}/Banned/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GroupV2GetBannedMembersOfGroupResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def group_v2_get_group(self, request: operations.GroupV2GetGroupRequest) -> operations.GroupV2GetGroupResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/GroupV2/{groupId}/", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GroupV2GetGroupResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def group_v2_get_group_by_name(self, request: operations.GroupV2GetGroupByNameRequest) -> operations.GroupV2GetGroupByNameResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/GroupV2/Name/{groupName}/{groupType}/", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GroupV2GetGroupByNameResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def group_v2_get_group_by_name_v2(self) -> operations.GroupV2GetGroupByNameV2Response:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/GroupV2/NameV2/"
        
        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GroupV2GetGroupByNameV2Response(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def group_v2_get_group_optional_conversations(self, request: operations.GroupV2GetGroupOptionalConversationsRequest) -> operations.GroupV2GetGroupOptionalConversationsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/GroupV2/{groupId}/OptionalConversations/", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GroupV2GetGroupOptionalConversationsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def group_v2_get_groups_for_member(self, request: operations.GroupV2GetGroupsForMemberRequest) -> operations.GroupV2GetGroupsForMemberResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/GroupV2/User/{membershipType}/{membershipId}/{filter}/{groupType}/", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GroupV2GetGroupsForMemberResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def group_v2_get_invited_individuals(self, request: operations.GroupV2GetInvitedIndividualsRequest) -> operations.GroupV2GetInvitedIndividualsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/GroupV2/{groupId}/Members/InvitedIndividuals/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GroupV2GetInvitedIndividualsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def group_v2_get_members_of_group(self, request: operations.GroupV2GetMembersOfGroupRequest) -> operations.GroupV2GetMembersOfGroupResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/GroupV2/{groupId}/Members/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GroupV2GetMembersOfGroupResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def group_v2_get_pending_memberships(self, request: operations.GroupV2GetPendingMembershipsRequest) -> operations.GroupV2GetPendingMembershipsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/GroupV2/{groupId}/Members/Pending/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GroupV2GetPendingMembershipsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def group_v2_get_potential_groups_for_member(self, request: operations.GroupV2GetPotentialGroupsForMemberRequest) -> operations.GroupV2GetPotentialGroupsForMemberResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/GroupV2/User/Potential/{membershipType}/{membershipId}/{filter}/{groupType}/", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GroupV2GetPotentialGroupsForMemberResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def group_v2_get_recommended_groups(self, request: operations.GroupV2GetRecommendedGroupsRequest) -> operations.GroupV2GetRecommendedGroupsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/GroupV2/Recommended/{groupType}/{createDateRange}/", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GroupV2GetRecommendedGroupsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def group_v2_get_user_clan_invite_setting(self, request: operations.GroupV2GetUserClanInviteSettingRequest) -> operations.GroupV2GetUserClanInviteSettingResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/GroupV2/GetUserClanInviteSetting/{mType}/", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GroupV2GetUserClanInviteSettingResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def group_v2_group_search(self) -> operations.GroupV2GroupSearchResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/GroupV2/Search/"
        
        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GroupV2GroupSearchResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def group_v2_individual_group_invite(self, request: operations.GroupV2IndividualGroupInviteRequest) -> operations.GroupV2IndividualGroupInviteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/GroupV2/{groupId}/Members/IndividualInvite/{membershipType}/{membershipId}/", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GroupV2IndividualGroupInviteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def group_v2_individual_group_invite_cancel(self, request: operations.GroupV2IndividualGroupInviteCancelRequest) -> operations.GroupV2IndividualGroupInviteCancelResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/GroupV2/{groupId}/Members/IndividualInviteCancel/{membershipType}/{membershipId}/", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GroupV2IndividualGroupInviteCancelResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def group_v2_kick_member(self, request: operations.GroupV2KickMemberRequest) -> operations.GroupV2KickMemberResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/GroupV2/{groupId}/Members/{membershipType}/{membershipId}/Kick/", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GroupV2KickMemberResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def group_v2_recover_group_for_founder(self, request: operations.GroupV2RecoverGroupForFounderRequest) -> operations.GroupV2RecoverGroupForFounderResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/GroupV2/Recover/{membershipType}/{membershipId}/{groupType}/", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GroupV2RecoverGroupForFounderResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def group_v2_unban_member(self, request: operations.GroupV2UnbanMemberRequest) -> operations.GroupV2UnbanMemberResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/GroupV2/{groupId}/Members/{membershipType}/{membershipId}/Unban/", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GroupV2UnbanMemberResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def tokens_apply_missing_partner_offers_without_claim(self, request: operations.TokensApplyMissingPartnerOffersWithoutClaimRequest) -> operations.TokensApplyMissingPartnerOffersWithoutClaimResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/Tokens/Partner/ApplyMissingOffers/{partnerApplicationId}/{targetBnetMembershipId}/", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TokensApplyMissingPartnerOffersWithoutClaimResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def tokens_claim_partner_offer(self, request: operations.TokensClaimPartnerOfferRequest) -> operations.TokensClaimPartnerOfferResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/Tokens/Partner/ClaimOffer/"
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TokensClaimPartnerOfferResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def tokens_get_partner_offer_sku_history(self, request: operations.TokensGetPartnerOfferSkuHistoryRequest) -> operations.TokensGetPartnerOfferSkuHistoryResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/Tokens/Partner/History/{partnerApplicationId}/{targetBnetMembershipId}/", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TokensGetPartnerOfferSkuHistoryResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def trending_get_trending_categories(self) -> operations.TrendingGetTrendingCategoriesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/Trending/Categories/"
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TrendingGetTrendingCategoriesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def trending_get_trending_category(self, request: operations.TrendingGetTrendingCategoryRequest) -> operations.TrendingGetTrendingCategoryResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/Trending/Categories/{categoryId}/{pageNumber}/", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TrendingGetTrendingCategoryResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def trending_get_trending_entry_detail(self, request: operations.TrendingGetTrendingEntryDetailRequest) -> operations.TrendingGetTrendingEntryDetailResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/Trending/Details/{trendingEntryType}/{identifier}/", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TrendingGetTrendingEntryDetailResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def user_get_available_themes(self) -> operations.UserGetAvailableThemesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/User/GetAvailableThemes/"
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UserGetAvailableThemesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def user_get_bungie_net_user_by_id(self, request: operations.UserGetBungieNetUserByIDRequest) -> operations.UserGetBungieNetUserByIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/User/GetBungieNetUserById/{id}/", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UserGetBungieNetUserByIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def user_get_credential_types_for_target_account(self, request: operations.UserGetCredentialTypesForTargetAccountRequest) -> operations.UserGetCredentialTypesForTargetAccountResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/User/GetCredentialTypesForTargetAccount/{membershipId}/", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UserGetCredentialTypesForTargetAccountResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def user_get_membership_data_by_id(self, request: operations.UserGetMembershipDataByIDRequest) -> operations.UserGetMembershipDataByIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/User/GetMembershipsById/{membershipId}/{membershipType}/", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UserGetMembershipDataByIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def user_get_membership_data_for_current_user(self, request: operations.UserGetMembershipDataForCurrentUserRequest) -> operations.UserGetMembershipDataForCurrentUserResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/User/GetMembershipsForCurrentUser/"
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UserGetMembershipDataForCurrentUserResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def user_get_membership_from_hard_linked_credential(self, request: operations.UserGetMembershipFromHardLinkedCredentialRequest) -> operations.UserGetMembershipFromHardLinkedCredentialResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/User/GetMembershipFromHardLinkedCredential/{crType}/{credential}/", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UserGetMembershipFromHardLinkedCredentialResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def user_search_users(self, request: operations.UserSearchUsersRequest) -> operations.UserSearchUsersResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/User/SearchUsers/"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.UserSearchUsersResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    