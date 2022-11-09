import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetRecordsFormatPathParams extends SpeakeasyBase {
    format: shared.FormatEnum;
}
export declare enum GetRecordsFormatAndCategoryEnum {
    Newspapers = "Newspapers",
    Images = "Images",
    Books = "Books",
    Articles = "Articles",
    Journals = "Journals",
    Archives = "Archives",
    Audio = "Audio",
    Other = "Other",
    Manuscripts = "Manuscripts",
    ReferenceSources = "Reference sources",
    ResearchPapers = "Research papers",
    Videos = "Videos",
    MusicScore = "Music Score",
    Groups = "Groups",
    Data = "Data",
    Websites = "Websites",
    Sets = "Sets"
}
export declare enum GetRecordsFormatAndHasLargeThumbnailUrlEnum {
    Y = "Y"
}
export declare enum GetRecordsFormatAndUsageEnum {
    Share = "Share",
    Modify = "Modify",
    UseCommercially = "Use commercially",
    AllRightsReserved = "All rights reserved",
    Unknown = "Unknown"
}
export declare enum GetRecordsFormatDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare enum GetRecordsFormatFacetsEnum {
    Category = "category",
    ContentPartner = "content_partner",
    DisplayCollection = "display_collection",
    Collection = "collection",
    Creator = "creator",
    Placename = "placename",
    Date = "date",
    Year = "year",
    Decade = "decade",
    Century = "century",
    Language = "language",
    Rights = "rights",
    Usage = "usage",
    Copyright = "copyright",
    Subject = "subject",
    Format = "format",
    DcType = "dc_type"
}
export declare enum GetRecordsFormatSortEnum {
    SyndicationDate = "syndication_date",
    Date = "date"
}
export declare class GetRecordsFormatQueryParams extends SpeakeasyBase {
    andCategory?: GetRecordsFormatAndCategoryEnum;
    andCentury?: string;
    andCollection?: string;
    andContentPartner?: string;
    andCreator?: string;
    andDate?: string;
    andDcType?: string;
    andDecade?: string;
    andFormat?: string;
    andHasLargeThumbnailUrl?: GetRecordsFormatAndHasLargeThumbnailUrlEnum;
    andHasLatLng?: boolean;
    andIsCommercialUse?: boolean;
    andOrFilterField?: string;
    andPlacename?: string;
    andPrimaryCollection?: string;
    andSubject?: string;
    andTitle?: string;
    andUsage?: GetRecordsFormatAndUsageEnum;
    andYear?: string;
    apiKey: string;
    direction?: GetRecordsFormatDirectionEnum;
    excludeFiltersFromFacets?: boolean;
    facets?: GetRecordsFormatFacetsEnum[];
    facetsPage?: number;
    facetsPerPage?: number;
    fields?: string;
    geoBbox?: string;
    page?: number;
    perPage?: number;
    sort?: GetRecordsFormatSortEnum;
    text?: string;
    withoutFilterField?: string;
}
export declare class GetRecordsFormatRequest extends SpeakeasyBase {
    pathParams: GetRecordsFormatPathParams;
    queryParams: GetRecordsFormatQueryParams;
}
export declare class GetRecordsFormat200ApplicationJson extends SpeakeasyBase {
    facets?: Map<string, Map<string, number>>;
    page?: number;
    perPage?: number;
    records?: shared.Record[];
    requestUrl?: string;
    resultCount?: number;
}
export declare class GetRecordsFormatResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    getRecordsFormat200ApplicationJsonObject?: GetRecordsFormat200ApplicationJson;
    getRecordsFormat400ApplicationJsonObject?: Map<string, any>;
    getRecordsFormat403ApplicationJsonObject?: Map<string, any>;
    statusCode: number;
}
