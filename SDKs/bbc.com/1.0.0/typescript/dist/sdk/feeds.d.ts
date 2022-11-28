import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Feeds {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * listAvailability - Discover details of on-demand availability for programmes and their versions
     *
     * Discover details of on-demand availability for programmes and their versions
    **/
    listAvailability(req: operations.ListAvailabilityRequest, config?: AxiosRequestConfig): Promise<operations.ListAvailabilityResponse>;
    /**
     * listBroadcasts - Build schedules and find metadata for TV and radio broadcasts
     *
     * Fetch metadata about linear Broadcasts and Services, allowing the generation of Television and Radio schedules and other datasets for broadcast items. Use /schedules instead of this feed as it is more efficient. Broadcasts will be deprecated in the future.
    **/
    listBroadcasts(req: operations.ListBroadcastsRequest, config?: AxiosRequestConfig): Promise<operations.ListBroadcastsResponse>;
    /**
     * listGroups - Find metadata for curated groups: seasons, collections, galleries or franchises
     *
     * Long-lived curated collections of programmes and more, including Collections, Seasons, Franchises and Galleries
    **/
    listGroups(req: operations.ListGroupsRequest, config?: AxiosRequestConfig): Promise<operations.ListGroupsResponse>;
    /**
     * listImages - Find metadata for images
     *
     * Find metadata for images, particularly those in galleries
    **/
    listImages(req: operations.ListImagesRequest, config?: AxiosRequestConfig): Promise<operations.ListImagesResponse>;
    /**
     * listItems - Look inside programmes to find segments: chapters, tracks and more
     *
     * Look inside programmes to find segments: chapters, tracks and more
    **/
    listItems(req: operations.ListItemsRequest, config?: AxiosRequestConfig): Promise<operations.ListItemsResponse>;
    /**
     * listMasterbrands - List all Master Brands
     *
     * List all Master Brands
    **/
    listMasterbrands(req: operations.ListMasterbrandsRequest, config?: AxiosRequestConfig): Promise<operations.ListMasterbrandsResponse>;
    /**
     * listPeople - Find the people behind and in programmes: cast, crew, guests and more
     *
     * The People feed allows you to search for the people and groups that contribute to programmes. This is the starting point for cast and crew credits, as well as finding contributors using external IDs (such as Wikipedia URLs)
    **/
    listPeople(req: operations.ListPeopleRequest, config?: AxiosRequestConfig): Promise<operations.ListPeopleResponse>;
    /**
     * listPips - Look inside pips entities
     *
     * Look inside pips entities
    **/
    listPips(req: operations.ListPipsRequest, config?: AxiosRequestConfig): Promise<operations.ListPipsResponse>;
    /**
     * listProgrammeDetails - Exposes programme information for a single pid
     *
     * Exposes programme information for a single pid
    **/
    listProgrammeDetails(req: operations.ListProgrammeDetailsRequest, config?: AxiosRequestConfig): Promise<operations.ListProgrammeDetailsResponse>;
    /**
     * listProgrammes - Start here for programmes metadata: Brands, Series, Episodes and Clips
     *
     * Fetch metadata about Programmes (brands, series, episodes, clips). By applying different filter restrictions this feed can be used in many ways, for example to retrieve all series belonging to a brand, all the episodes and/or clips for a specific series, or any TLEO objects for a masterbrand. Other filters permit restricting to specific formats and/or genres, and you can request specific versions (for example Signed or Audio-Described). Parameters may be combined in any way suitable for your application.
    **/
    listProgrammes(req: operations.ListProgrammesRequest, config?: AxiosRequestConfig): Promise<operations.ListProgrammesResponse>;
    /**
     * listPromotions - Discover metadata for content promotions
     *
     * Details of short-term editorially curated "promotions", for instance those programmes featured on iPlayer today
    **/
    listPromotions(req: operations.ListPromotionsRequest, config?: AxiosRequestConfig): Promise<operations.ListPromotionsResponse>;
    /**
     * listSchedules - Build schedules and find metadata for TV and radio broadcasts and webcasts
     *
     * Dates, Times, Schedules: when and where are programmes being shown?
    **/
    listSchedules(req: operations.ListSchedulesRequest, config?: AxiosRequestConfig): Promise<operations.ListSchedulesResponse>;
    /**
     * listServices - Information about the linear services used for broadcast transmissions
     *
     * The services feed exposes the linear broadcast "services" from PIPs. These are the actual services which broadcast programmes (eg bbc_one_oxford is the service for BBC One in Oxford).
    **/
    listServices(req: operations.ListServicesRequest, config?: AxiosRequestConfig): Promise<operations.ListServicesResponse>;
    /**
     * listVersions - Metadata on editorial programme versions: original, signed, audio-described, etc
     *
     * The versions feed exposes editorial "Versions" of programmes. These are concepts used to capture different presentations of an overall programme: for example, versions of a programme may include one with sign language, one with audio description, one edited for content and more. Versions are also important to understand for broadcasts: a linear broadcast or an ondemand is always of a specific version, not merely of a programme.
    **/
    listVersions(req: operations.ListVersionsRequest, config?: AxiosRequestConfig): Promise<operations.ListVersionsResponse>;
}
