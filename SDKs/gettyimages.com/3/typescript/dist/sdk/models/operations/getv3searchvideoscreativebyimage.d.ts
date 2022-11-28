import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetV3SearchVideosCreativeByImageQueryParams extends SpeakeasyBase {
    assetId?: string;
    facetFields?: shared.CreateVideoSearchFacetsFieldsEnum[];
    facetMaxCount?: number;
    fields?: shared.CreativeVideosFieldValuesEnum[];
    imageUrl?: string;
    includeFacets?: boolean;
    page?: number;
    pageSize?: number;
    productTypes?: string[];
}
export declare class GetV3SearchVideosCreativeByImageHeaders extends SpeakeasyBase {
    acceptLanguage?: string;
    giCountryCode?: string;
}
export declare class GetV3SearchVideosCreativeByImageRequest extends SpeakeasyBase {
    queryParams: GetV3SearchVideosCreativeByImageQueryParams;
    headers: GetV3SearchVideosCreativeByImageHeaders;
}
export declare class GetV3SearchVideosCreativeByImageResponse extends SpeakeasyBase {
    contentType: string;
    creativeVideoSearchResults?: shared.CreativeVideoSearchResults;
    statusCode: number;
}
