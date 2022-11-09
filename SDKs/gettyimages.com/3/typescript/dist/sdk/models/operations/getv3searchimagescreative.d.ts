import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetV3SearchImagesCreativeQueryParams extends SpeakeasyBase {
    ageOfPeople?: shared.AgeOfPeopleFilterTypeEnum[];
    artists?: string;
    collectionCodes?: string[];
    collectionsFilterType?: shared.CollectionsFilterTypeEnum;
    color?: string;
    compositions?: shared.CompositionsFilterTypeEnum[];
    downloadProduct?: string;
    embedContentOnly?: boolean;
    ethnicity?: shared.EthnicityFilterTypeEnum[];
    excludeEditorialUseOnly?: boolean;
    excludeNudity?: boolean;
    facetFields?: shared.CreateImageSearchFacetsFieldsEnum[];
    facetMaxCount?: number;
    fields?: shared.CreativeImagesFieldValuesEnum[];
    fileTypes?: shared.SearchFileTypeEnum[];
    graphicalStyles?: shared.GraphicalStyleEnum[];
    graphicalStylesFilterType?: shared.GraphicalStylesFilterTypeEnum;
    includeFacets?: boolean;
    includeRelatedSearches?: boolean;
    keywordIds?: number[];
    minimumSize?: shared.TeeShirtSizeEnum;
    numberOfPeople?: shared.NumberOfPeopleFilterTypeEnum[];
    orientations?: shared.OrientationRequestEnum[];
    page?: number;
    pageSize?: number;
    phrase?: string;
    safeSearch?: boolean;
    sortOrder?: shared.CreativeImageSortOrderEnum;
}
export declare class GetV3SearchImagesCreativeHeaders extends SpeakeasyBase {
    acceptLanguage?: string;
    giCountryCode?: string;
}
export declare class GetV3SearchImagesCreativeRequest extends SpeakeasyBase {
    queryParams: GetV3SearchImagesCreativeQueryParams;
    headers: GetV3SearchImagesCreativeHeaders;
}
export declare class GetV3SearchImagesCreativeResponse extends SpeakeasyBase {
    contentType: string;
    creativeImageSearchResults?: shared.CreativeImageSearchResults;
    statusCode: number;
}
