import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetV3SearchImagesQueryParams extends SpeakeasyBase {
    ageOfPeople?: shared.AgeOfPeopleFilterTypeEnum[];
    artists?: string;
    collectionCodes?: string[];
    collectionsFilterType?: shared.CollectionsFilterTypeEnum;
    color?: string;
    compositions?: shared.CompositionsFilterTypeEnum[];
    downloadProduct?: string;
    embedContentOnly?: boolean;
    ethnicity?: shared.EthnicityFilterTypeEnum[];
    eventIds?: number[];
    excludeNudity?: boolean;
    fields?: shared.ImagesFieldValuesEnum[];
    fileTypes?: shared.SearchFileTypeEnum[];
    graphicalStyles?: shared.GraphicalStyleEnum[];
    graphicalStylesFilterType?: shared.GraphicalStylesFilterTypeEnum;
    includeRelatedSearches?: boolean;
    keywordIds?: number[];
    minimumSize?: shared.TeeShirtSizeEnum;
    numberOfPeople?: shared.NumberOfPeopleFilterTypeEnum[];
    orientations?: shared.OrientationRequestEnum[];
    page?: number;
    pageSize?: number;
    phrase?: string;
    sortOrder?: shared.BlendedImageSortOrderEnum;
    specificPeople?: string[];
}
export declare class GetV3SearchImagesHeaders extends SpeakeasyBase {
    acceptLanguage?: string;
    giCountryCode?: string;
}
export declare class GetV3SearchImagesRequest extends SpeakeasyBase {
    queryParams: GetV3SearchImagesQueryParams;
    headers: GetV3SearchImagesHeaders;
}
export declare class GetV3SearchImagesResponse extends SpeakeasyBase {
    contentType: string;
    imageSearchItemSearchResults?: shared.ImageSearchItemSearchResults;
    statusCode: number;
}
