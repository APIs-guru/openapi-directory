import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetV3SearchVideosEditorialQueryParams extends SpeakeasyBase {
    ageOfPeople?: shared.AgeOfPeopleFilterTypeEnum[];
    artists?: string;
    aspectRatios?: shared.VideoAspectRatioFilterTypeEnum[];
    collectionCodes?: string[];
    collectionsFilterType?: shared.CollectionsFilterTypeEnum;
    compositions?: shared.CompositionsFilterTypeEnum[];
    downloadProduct?: string;
    editorialVideoTypes?: shared.EditorialVideoTypeEnum[];
    entityUris?: string[];
    facetFields?: shared.EditorialVideoSearchFacetsFieldsEnum[];
    facetMaxCount?: number;
    fields?: shared.EditorialVideosFieldValuesEnum[];
    formatAvailable?: shared.VideoFormatsRequestEnum;
    frameRates?: shared.VideoFrameRatesEnum[];
    imageTechniques?: shared.ImageTechniquesFilterTypeEnum[];
    includeFacets?: boolean;
    includeRelatedSearches?: boolean;
    keywordIds?: number[];
    maxClipLength?: number;
    minClipLength?: number;
    orientations?: shared.VideoOrientationRequestEnum[];
    page?: number;
    pageSize?: number;
    phrase?: string;
    releaseStatus?: shared.ReleaseStatusEnum;
    sortOrder?: shared.SortOrderEnum;
    specificPeople?: string[];
    viewpoints?: shared.ViewpointsFilterTypeEnum[];
}
export declare class GetV3SearchVideosEditorialHeaders extends SpeakeasyBase {
    acceptLanguage?: string;
    giCountryCode?: string;
}
export declare class GetV3SearchVideosEditorialRequest extends SpeakeasyBase {
    queryParams: GetV3SearchVideosEditorialQueryParams;
    headers: GetV3SearchVideosEditorialHeaders;
}
export declare class GetV3SearchVideosEditorialResponse extends SpeakeasyBase {
    contentType: string;
    editorialVideoSearchResults?: shared.EditorialVideoSearchResults;
    statusCode: number;
}
