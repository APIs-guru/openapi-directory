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
     * Get raw ancestors
    **/
    GetRawAncestors(req: operations.GetRawAncestorsRequest, config?: AxiosRequestConfig): Promise<operations.GetRawAncestorsResponse>;
    /**
     * Get raw brand
    **/
    GetRawBrand(req: operations.GetRawBrandRequest, config?: AxiosRequestConfig): Promise<operations.GetRawBrandResponse>;
    /**
     * Get raw brand franchises
    **/
    GetRawBrandFranchises(req: operations.GetRawBrandFranchisesRequest, config?: AxiosRequestConfig): Promise<operations.GetRawBrandFranchisesResponse>;
    /**
     * Get raw episode
    **/
    GetRawEpisode(req: operations.GetRawEpisodeRequest, config?: AxiosRequestConfig): Promise<operations.GetRawEpisodeResponse>;
    /**
     * Get raw formats
    **/
    GetRawFormats(req: operations.GetRawFormatsRequest, config?: AxiosRequestConfig): Promise<operations.GetRawFormatsResponse>;
    /**
     * Get raw genre groups
    **/
    GetRawGenreGroups(req: operations.GetRawGenreGroupsRequest, config?: AxiosRequestConfig): Promise<operations.GetRawGenreGroupsResponse>;
    /**
     * Get raw image
    **/
    GetRawImage(req: operations.GetRawImageRequest, config?: AxiosRequestConfig): Promise<operations.GetRawImageResponse>;
    /**
     * Get raw masterbrand
    **/
    GetRawMasterbrand(req: operations.GetRawMasterbrandRequest, config?: AxiosRequestConfig): Promise<operations.GetRawMasterbrandResponse>;
    /**
     * Get raw promotion
    **/
    GetRawPromotion(req: operations.GetRawPromotionRequest, config?: AxiosRequestConfig): Promise<operations.GetRawPromotionResponse>;
    /**
     * Get API definition
    **/
    GetApi(config?: AxiosRequestConfig): Promise<operations.GetApiResponse>;
    /**
     * Get Schema definition
    **/
    GetXsd(config?: AxiosRequestConfig): Promise<operations.GetXsdResponse>;
    /**
     * Discover details of on-demand availability for programmes and their versions
    **/
    ListAvailability(req: operations.ListAvailabilityRequest, config?: AxiosRequestConfig): Promise<operations.ListAvailabilityResponse>;
    /**
     * Fetch metadata about linear Broadcasts and Services, allowing the generation of Television and Radio schedules and other datasets for broadcast items. Use /schedules instead of this feed as it is more efficient. Broadcasts will be deprecated in the future.
    **/
    ListBroadcasts(req: operations.ListBroadcastsRequest, config?: AxiosRequestConfig): Promise<operations.ListBroadcastsResponse>;
    /**
     * Long-lived curated collections of programmes and more, including Collections, Seasons, Franchises and Galleries
    **/
    ListGroups(req: operations.ListGroupsRequest, config?: AxiosRequestConfig): Promise<operations.ListGroupsResponse>;
    /**
     * Find metadata for images, particularly those in galleries
    **/
    ListImages(req: operations.ListImagesRequest, config?: AxiosRequestConfig): Promise<operations.ListImagesResponse>;
    /**
     * Look inside programmes to find segments: chapters, tracks and more
    **/
    ListItems(req: operations.ListItemsRequest, config?: AxiosRequestConfig): Promise<operations.ListItemsResponse>;
    /**
     * List all Master Brands
    **/
    ListMasterbrands(req: operations.ListMasterbrandsRequest, config?: AxiosRequestConfig): Promise<operations.ListMasterbrandsResponse>;
    /**
     * The People feed allows you to search for the people and groups that contribute to programmes. This is the starting point for cast and crew credits, as well as finding contributors using external IDs (such as Wikipedia URLs)
    **/
    ListPeople(req: operations.ListPeopleRequest, config?: AxiosRequestConfig): Promise<operations.ListPeopleResponse>;
    /**
     * Look inside pips entities
    **/
    ListPips(req: operations.ListPipsRequest, config?: AxiosRequestConfig): Promise<operations.ListPipsResponse>;
    /**
     * Exposes programme information for a single pid
    **/
    ListProgrammeDetails(req: operations.ListProgrammeDetailsRequest, config?: AxiosRequestConfig): Promise<operations.ListProgrammeDetailsResponse>;
    /**
     * Fetch metadata about Programmes (brands, series, episodes, clips). By applying different filter restrictions this feed can be used in many ways, for example to retrieve all series belonging to a brand, all the episodes and/or clips for a specific series, or any TLEO objects for a masterbrand. Other filters permit restricting to specific formats and/or genres, and you can request specific versions (for example Signed or Audio-Described). Parameters may be combined in any way suitable for your application.
    **/
    ListProgrammes(req: operations.ListProgrammesRequest, config?: AxiosRequestConfig): Promise<operations.ListProgrammesResponse>;
    /**
     * Details of short-term editorially curated "promotions", for instance those programmes featured on iPlayer today
    **/
    ListPromotions(req: operations.ListPromotionsRequest, config?: AxiosRequestConfig): Promise<operations.ListPromotionsResponse>;
    /**
     * Dates, Times, Schedules: when and where are programmes being shown?
    **/
    ListSchedules(req: operations.ListSchedulesRequest, config?: AxiosRequestConfig): Promise<operations.ListSchedulesResponse>;
    /**
     * The services feed exposes the linear broadcast "services" from PIPs. These are the actual services which broadcast programmes (eg bbc_one_oxford is the service for BBC One in Oxford).
    **/
    ListServices(req: operations.ListServicesRequest, config?: AxiosRequestConfig): Promise<operations.ListServicesResponse>;
    /**
     * The versions feed exposes editorial "Versions" of programmes. These are concepts used to capture different presentations of an overall programme: for example, versions of a programme may include one with sign language, one with audio description, one edited for content and more. Versions are also important to understand for broadcasts: a linear broadcast or an ondemand is always of a specific version, not merely of a programme.
    **/
    ListVersions(req: operations.ListVersionsRequest, config?: AxiosRequestConfig): Promise<operations.ListVersionsResponse>;
}
export {};
