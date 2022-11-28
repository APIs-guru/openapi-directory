import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://ibl.api.bbci.co.uk/ibl/v1", "http://ibl.api.bbci.co.uk/ibl/v1"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _security?: Security;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * getBroadcastsByChannel - Get broadcasts by channel
     *
     * Get broadcasts by channel
    **/
    getBroadcastsByChannel(req: operations.GetBroadcastsByChannelRequest, config?: AxiosRequestConfig): Promise<operations.GetBroadcastsByChannelResponse>;
    /**
     * getCategories - Get categories
     *
     * Get the list of all the categories in TV & iPlayer.
    **/
    getCategories(req: operations.GetCategoriesRequest, config?: AxiosRequestConfig): Promise<operations.GetCategoriesResponse>;
    /**
     * getChannels - List all the channels.
     *
     * Get the list of all the channels TV & iPlayer.
    **/
    getChannels(req: operations.GetChannelsRequest, config?: AxiosRequestConfig): Promise<operations.GetChannelsResponse>;
    /**
     * getClips - Get Clips
     *
     * Get Clips
    **/
    getClips(req: operations.GetClipsRequest, config?: AxiosRequestConfig): Promise<operations.GetClipsResponse>;
    /**
     * getEpisodesByCategory - List all the episodes for a category.
     *
     * Get the list of all the episodes for a given category in TV & iPlayer.
    **/
    getEpisodesByCategory(req: operations.GetEpisodesByCategoryRequest, config?: AxiosRequestConfig): Promise<operations.GetEpisodesByCategoryResponse>;
    /**
     * getEpisodesByGroup - Get episodes by group, brand or series
     *
     * Get episodes by group, brand or series
    **/
    getEpisodesByGroup(req: operations.GetEpisodesByGroupRequest, config?: AxiosRequestConfig): Promise<operations.GetEpisodesByGroupResponse>;
    /**
     * getEpisodesByParentPid - Child episodes for a given programme pid.
     *
     * Get the child episodes belonging to a given programme identifier.
    **/
    getEpisodesByParentPid(req: operations.GetEpisodesByParentPidRequest, config?: AxiosRequestConfig): Promise<operations.GetEpisodesByParentPidResponse>;
    /**
     * getHighlightsByCategory - List the highlights for a category.
     *
     * Get the editorial highlights of a given category in TV & iPlayer.
    **/
    getHighlightsByCategory(req: operations.GetHighlightsByCategoryRequest, config?: AxiosRequestConfig): Promise<operations.GetHighlightsByCategoryResponse>;
    /**
     * getHighlightsByChannel - List the highlights for a channel.
     *
     * Get the editorial highlights of a given channel in TV & iPlayer.
    **/
    getHighlightsByChannel(req: operations.GetHighlightsByChannelRequest, config?: AxiosRequestConfig): Promise<operations.GetHighlightsByChannelResponse>;
    /**
     * getOnwardJourney - Get Onward Journey
     *
     * Get Onward Journey (next programme)
    **/
    getOnwardJourney(req: operations.GetOnwardJourneyRequest, config?: AxiosRequestConfig): Promise<operations.GetOnwardJourneyResponse>;
    /**
     * getProgrammeByPid - Episode for a given pid.
     *
     * Get the episode for a given episode identifier.
    **/
    getProgrammeByPid(req: operations.GetProgrammeByPidRequest, config?: AxiosRequestConfig): Promise<operations.GetProgrammeByPidResponse>;
    /**
     * getProgrammeHighlights - Get programme highlights
     *
     * Get programme highlights
    **/
    getProgrammeHighlights(req: operations.GetProgrammeHighlightsRequest, config?: AxiosRequestConfig): Promise<operations.GetProgrammeHighlightsResponse>;
    /**
     * getProgrammeRecommendations - Get programme recommendations
     *
     * Get programme recommendations
    **/
    getProgrammeRecommendations(req: operations.GetProgrammeRecommendationsRequest, config?: AxiosRequestConfig): Promise<operations.GetProgrammeRecommendationsResponse>;
    /**
     * getProgrammesAtoZSearch - Programmes by initial title character
     *
     * Get the Programmes whose title begins with the given initial character.
    **/
    getProgrammesAtoZSearch(req: operations.GetProgrammesAtoZSearchRequest, config?: AxiosRequestConfig): Promise<operations.GetProgrammesAtoZSearchResponse>;
    /**
     * getProgrammesByCategory - List all the programmes for a category.
     *
     * Get the list of all the Programmes (TLEOs) for a given category in TV & iPlayer.
    **/
    getProgrammesByCategory(req: operations.GetProgrammesByCategoryRequest, config?: AxiosRequestConfig): Promise<operations.GetProgrammesByCategoryResponse>;
    /**
     * getProgrammesByChannel - Get programmes by channel
     *
     * Get programmes by channel
    **/
    getProgrammesByChannel(req: operations.GetProgrammesByChannelRequest, config?: AxiosRequestConfig): Promise<operations.GetProgrammesByChannelResponse>;
    /**
     * getProgrammesByParentPid - Programme for a given pid.
     *
     * Get the programme for a given programme identifier.
    **/
    getProgrammesByParentPid(req: operations.GetProgrammesByParentPidRequest, config?: AxiosRequestConfig): Promise<operations.GetProgrammesByParentPidResponse>;
    /**
     * getProgrammesPopular - Get programmes popular
     *
     * Get programmes popular
    **/
    getProgrammesPopular(req: operations.GetProgrammesPopularRequest, config?: AxiosRequestConfig): Promise<operations.GetProgrammesPopularResponse>;
    /**
     * getRegions - List all regions
     *
     * Get the list of all the regions TV & iPlayer.
    **/
    getRegions(req: operations.GetRegionsRequest, config?: AxiosRequestConfig): Promise<operations.GetRegionsResponse>;
    /**
     * getScheduleByChannel - Get schedule by channel
     *
     * Get schedule by channel
    **/
    getScheduleByChannel(req: operations.GetScheduleByChannelRequest, config?: AxiosRequestConfig): Promise<operations.GetScheduleByChannelResponse>;
    /**
     * getSchema - Get schema
     *
     * Get schema
    **/
    getSchema(config?: AxiosRequestConfig): Promise<operations.GetSchemaResponse>;
    /**
     * getStatus - Get status
     *
     * Get the current iPlayer business layer status. This tells the caller the status of the iPlayer data, but not necessarily the overall status of the website. In the future it might include the status of the dependent data services within the BBC.
    **/
    getStatus(config?: AxiosRequestConfig): Promise<operations.GetStatusResponse>;
    /**
     * getSubCategories - Get sub-categories
     *
     * Get sub-categories
    **/
    getSubCategories(req: operations.GetSubCategoriesRequest, config?: AxiosRequestConfig): Promise<operations.GetSubCategoriesResponse>;
    /**
     * getTrailersPreRolls - Get Trailers (pre-rolls)
     *
     * Get Trailers (pre-rolls)
    **/
    getTrailersPreRolls(req: operations.GetTrailersPreRollsRequest, config?: AxiosRequestConfig): Promise<operations.GetTrailersPreRollsResponse>;
    /**
     * getUserStorePurchases - Get user store purchases
     *
     * Get user store purchases
    **/
    getUserStorePurchases(req: operations.GetUserStorePurchasesRequest, config?: AxiosRequestConfig): Promise<operations.GetUserStorePurchasesResponse>;
    /**
     * getUserStoreRecommendations - Get user store recommendations
     *
     * Get user store recommendations
    **/
    getUserStoreRecommendations(req: operations.GetUserStoreRecommendationsRequest, config?: AxiosRequestConfig): Promise<operations.GetUserStoreRecommendationsResponse>;
    /**
     * getUserWatching - Get user watching
     *
     * Get user watching
    **/
    getUserWatching(req: operations.GetUserWatchingRequest, config?: AxiosRequestConfig): Promise<operations.GetUserWatchingResponse>;
    /**
     * searchSuggest - Search-suggest
     *
     * Search-suggest
    **/
    searchSuggest(req: operations.SearchSuggestRequest, config?: AxiosRequestConfig): Promise<operations.SearchSuggestResponse>;
    /**
     * search - Search
     *
     * Search
    **/
    search(req: operations.SearchRequest, config?: AxiosRequestConfig): Promise<operations.SearchResponse>;
    /**
     * getPostRolls - Get Follow-ups (post-rolls)
     *
     * Get Follow-ups (post-rolls)
    **/
    getPostRolls(req: operations.GetPostRollsRequest, config?: AxiosRequestConfig): Promise<operations.GetPostRollsResponse>;
}
export {};
