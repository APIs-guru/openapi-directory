import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    /**
     * Get broadcasts by channel
    **/
    GetBroadcastsByChannel(req: operations.GetBroadcastsByChannelRequest, config?: AxiosRequestConfig): Promise<operations.GetBroadcastsByChannelResponse>;
    /**
     * Get the list of all the categories in TV & iPlayer.
    **/
    GetCategories(req: operations.GetCategoriesRequest, config?: AxiosRequestConfig): Promise<operations.GetCategoriesResponse>;
    /**
     * Get the list of all the channels TV & iPlayer.
    **/
    GetChannels(req: operations.GetChannelsRequest, config?: AxiosRequestConfig): Promise<operations.GetChannelsResponse>;
    /**
     * Get Clips
    **/
    GetClips(req: operations.GetClipsRequest, config?: AxiosRequestConfig): Promise<operations.GetClipsResponse>;
    /**
     * Get the list of all the episodes for a given category in TV & iPlayer.
    **/
    GetEpisodesByCategory(req: operations.GetEpisodesByCategoryRequest, config?: AxiosRequestConfig): Promise<operations.GetEpisodesByCategoryResponse>;
    /**
     * Get episodes by group, brand or series
    **/
    GetEpisodesByGroup(req: operations.GetEpisodesByGroupRequest, config?: AxiosRequestConfig): Promise<operations.GetEpisodesByGroupResponse>;
    /**
     * Get the child episodes belonging to a given programme identifier.
    **/
    GetEpisodesByParentPid(req: operations.GetEpisodesByParentPidRequest, config?: AxiosRequestConfig): Promise<operations.GetEpisodesByParentPidResponse>;
    /**
     * Get the editorial highlights of a given category in TV & iPlayer.
    **/
    GetHighlightsByCategory(req: operations.GetHighlightsByCategoryRequest, config?: AxiosRequestConfig): Promise<operations.GetHighlightsByCategoryResponse>;
    /**
     * Get the editorial highlights of a given channel in TV & iPlayer.
    **/
    GetHighlightsByChannel(req: operations.GetHighlightsByChannelRequest, config?: AxiosRequestConfig): Promise<operations.GetHighlightsByChannelResponse>;
    /**
     * Get Onward Journey (next programme)
    **/
    GetOnwardJourney(req: operations.GetOnwardJourneyRequest, config?: AxiosRequestConfig): Promise<operations.GetOnwardJourneyResponse>;
    /**
     * Get the episode for a given episode identifier.
    **/
    GetProgrammeByPid(req: operations.GetProgrammeByPidRequest, config?: AxiosRequestConfig): Promise<operations.GetProgrammeByPidResponse>;
    /**
     * Get programme highlights
    **/
    GetProgrammeHighlights(req: operations.GetProgrammeHighlightsRequest, config?: AxiosRequestConfig): Promise<operations.GetProgrammeHighlightsResponse>;
    /**
     * Get programme recommendations
    **/
    GetProgrammeRecommendations(req: operations.GetProgrammeRecommendationsRequest, config?: AxiosRequestConfig): Promise<operations.GetProgrammeRecommendationsResponse>;
    /**
     * Get the Programmes whose title begins with the given initial character.
    **/
    GetProgrammesAtoZSearch(req: operations.GetProgrammesAtoZSearchRequest, config?: AxiosRequestConfig): Promise<operations.GetProgrammesAtoZSearchResponse>;
    /**
     * Get the list of all the Programmes (TLEOs) for a given category in TV & iPlayer.
    **/
    GetProgrammesByCategory(req: operations.GetProgrammesByCategoryRequest, config?: AxiosRequestConfig): Promise<operations.GetProgrammesByCategoryResponse>;
    /**
     * Get programmes by channel
    **/
    GetProgrammesByChannel(req: operations.GetProgrammesByChannelRequest, config?: AxiosRequestConfig): Promise<operations.GetProgrammesByChannelResponse>;
    /**
     * Get the programme for a given programme identifier.
    **/
    GetProgrammesByParentPid(req: operations.GetProgrammesByParentPidRequest, config?: AxiosRequestConfig): Promise<operations.GetProgrammesByParentPidResponse>;
    /**
     * Get programmes popular
    **/
    GetProgrammesPopular(req: operations.GetProgrammesPopularRequest, config?: AxiosRequestConfig): Promise<operations.GetProgrammesPopularResponse>;
    /**
     * Get the list of all the regions TV & iPlayer.
    **/
    GetRegions(req: operations.GetRegionsRequest, config?: AxiosRequestConfig): Promise<operations.GetRegionsResponse>;
    /**
     * Get schedule by channel
    **/
    GetScheduleByChannel(req: operations.GetScheduleByChannelRequest, config?: AxiosRequestConfig): Promise<operations.GetScheduleByChannelResponse>;
    /**
     * Get schema
    **/
    GetSchema(config?: AxiosRequestConfig): Promise<operations.GetSchemaResponse>;
    /**
     * Get the current iPlayer business layer status. This tells the caller the status of the iPlayer data, but not necessarily the overall status of the website. In the future it might include the status of the dependent data services within the BBC.
    **/
    GetStatus(config?: AxiosRequestConfig): Promise<operations.GetStatusResponse>;
    /**
     * Get sub-categories
    **/
    GetSubCategories(req: operations.GetSubCategoriesRequest, config?: AxiosRequestConfig): Promise<operations.GetSubCategoriesResponse>;
    /**
     * Get Trailers (pre-rolls)
    **/
    GetTrailersPreRolls(req: operations.GetTrailersPreRollsRequest, config?: AxiosRequestConfig): Promise<operations.GetTrailersPreRollsResponse>;
    /**
     * Get user store purchases
    **/
    GetUserStorePurchases(req: operations.GetUserStorePurchasesRequest, config?: AxiosRequestConfig): Promise<operations.GetUserStorePurchasesResponse>;
    /**
     * Get user store recommendations
    **/
    GetUserStoreRecommendations(req: operations.GetUserStoreRecommendationsRequest, config?: AxiosRequestConfig): Promise<operations.GetUserStoreRecommendationsResponse>;
    /**
     * Get user watching
    **/
    GetUserWatching(req: operations.GetUserWatchingRequest, config?: AxiosRequestConfig): Promise<operations.GetUserWatchingResponse>;
    /**
     * Search-suggest
    **/
    SearchSuggest(req: operations.SearchSuggestRequest, config?: AxiosRequestConfig): Promise<operations.SearchSuggestResponse>;
    /**
     * Search
    **/
    Search(req: operations.SearchRequest, config?: AxiosRequestConfig): Promise<operations.SearchResponse>;
    /**
     * Get Follow-ups (post-rolls)
    **/
    GetPostRolls(req: operations.GetPostRollsRequest, config?: AxiosRequestConfig): Promise<operations.GetPostRollsResponse>;
}
export {};
