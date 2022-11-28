import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetV3SearchImagesEditorialQueryParams extends SpeakeasyBase {
    ageOfPeople?: shared.AgeOfPeopleFilterTypeEnum[];
    artists?: string;
    collectionCodes?: string[];
    collectionsFilterType?: shared.CollectionsFilterTypeEnum;
    compositions?: shared.CompositionsFilterTypeEnum[];
    dateFrom?: Date;
    dateTo?: Date;
    downloadProduct?: string;
    editorialSegments?: shared.EditorialSegmentContractEnum[];
    embedContentOnly?: boolean;
    entityUris?: string[];
    ethnicity?: shared.EthnicityFilterTypeEnum[];
    eventIds?: number[];
    facetFields?: shared.EditorialImageSearchFacetsFieldsEnum[];
    facetMaxCount?: number;
    fields?: shared.EditorialImagesFieldValuesEnum[];
    fileTypes?: shared.SearchFileTypeEnum[];
    graphicalStyles?: shared.EditorialGraphicalStyleEnum[];
    graphicalStylesFilterType?: shared.GraphicalStylesFilterTypeEnum;
    includeFacets?: boolean;
    includeRelatedSearches?: boolean;
    keywordIds?: number[];
    minimumQualityRank?: number;
    minimumSize?: shared.TeeShirtSizeEnum;
    numberOfPeople?: shared.NumberOfPeopleFilterTypeEnum[];
    orientations?: shared.OrientationRequestEnum[];
    page?: number;
    pageSize?: number;
    phrase?: string;
    sortOrder?: shared.SortOrderEnum;
    specificPeople?: string[];
}
export declare class GetV3SearchImagesEditorialHeaders extends SpeakeasyBase {
    acceptLanguage?: string;
    giCountryCode?: string;
}
export declare class GetV3SearchImagesEditorialRequest extends SpeakeasyBase {
    queryParams: GetV3SearchImagesEditorialQueryParams;
    headers: GetV3SearchImagesEditorialHeaders;
}
export declare class GetV3SearchImagesEditorialResponse extends SpeakeasyBase {
    contentType: string;
    editorialImageSearchResults?: shared.EditorialImageSearchResults;
    statusCode: number;
}
