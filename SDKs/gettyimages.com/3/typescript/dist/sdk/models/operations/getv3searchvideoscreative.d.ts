import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetV3SearchVideosCreativeQueryParams extends SpeakeasyBase {
    ageOfPeople?: shared.AgeOfPeopleFilterTypeEnum[];
    artists?: string;
    aspectRatios?: shared.VideoAspectRatioFilterTypeEnum[];
    collectionCodes?: string[];
    collectionsFilterType?: shared.CollectionsFilterTypeEnum;
    compositions?: shared.CompositionsFilterTypeEnum[];
    downloadProduct?: string;
    excludeEditorialUseOnly?: boolean;
    excludeNudity?: boolean;
    facetFields?: shared.CreateVideoSearchFacetsFieldsEnum[];
    facetMaxCount?: number;
    fields?: shared.CreativeVideosFieldValuesEnum[];
    formatAvailable?: shared.VideoFormatsRequestEnum;
    frameRates?: shared.VideoFrameRatesEnum[];
    imageTechniques?: shared.ImageTechniquesFilterTypeEnum[];
    includeFacets?: boolean;
    includeRelatedSearches?: boolean;
    keywordIds?: number[];
    licenseModels?: shared.LicenseModelVideoRequestEnum[];
    maxClipLength?: number;
    minClipLength?: number;
    orientations?: shared.VideoOrientationRequestEnum[];
    page?: number;
    pageSize?: number;
    phrase?: string;
    releaseStatus?: shared.ReleaseStatusEnum;
    safeSearch?: boolean;
    sortOrder?: shared.CreativeVideoSortOrderEnum;
    viewpoints?: shared.ViewpointsFilterTypeEnum[];
}
export declare class GetV3SearchVideosCreativeHeaders extends SpeakeasyBase {
    acceptLanguage?: string;
    giCountryCode?: string;
}
export declare class GetV3SearchVideosCreativeRequest extends SpeakeasyBase {
    queryParams: GetV3SearchVideosCreativeQueryParams;
    headers: GetV3SearchVideosCreativeHeaders;
}
export declare class GetV3SearchVideosCreativeResponse extends SpeakeasyBase {
    contentType: string;
    creativeVideoSearchResults?: shared.CreativeVideoSearchResults;
    statusCode: number;
}
