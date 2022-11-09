import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetV3SearchImagesCreativeByImageQueryParams extends SpeakeasyBase {
    assetId?: string;
    facetFields?: shared.CreateImageSearchFacetsFieldsEnum[];
    facetMaxCount?: number;
    fields?: shared.CreativeImagesFieldValuesEnum[];
    imageFingerprint?: string;
    imageUrl?: string;
    includeFacets?: boolean;
    page?: number;
    pageSize?: number;
    productTypes?: string[];
}
export declare class GetV3SearchImagesCreativeByImageHeaders extends SpeakeasyBase {
    acceptLanguage?: string;
    giCountryCode?: string;
}
export declare class GetV3SearchImagesCreativeByImageRequest extends SpeakeasyBase {
    queryParams: GetV3SearchImagesCreativeByImageQueryParams;
    headers: GetV3SearchImagesCreativeByImageHeaders;
}
export declare class GetV3SearchImagesCreativeByImageResponse extends SpeakeasyBase {
    contentType: string;
    searchByImageResourceResults?: shared.SearchByImageResourceResults;
    statusCode: number;
}
