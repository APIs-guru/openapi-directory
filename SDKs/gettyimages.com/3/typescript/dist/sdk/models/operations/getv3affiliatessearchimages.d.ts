import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetV3AffiliatesSearchImagesQueryParams extends SpeakeasyBase {
    phrase?: string;
    style?: shared.AffiliateSearchStyleEnum;
}
export declare class GetV3AffiliatesSearchImagesHeaders extends SpeakeasyBase {
    acceptLanguage?: string;
}
export declare class GetV3AffiliatesSearchImagesRequest extends SpeakeasyBase {
    queryParams: GetV3AffiliatesSearchImagesQueryParams;
    headers: GetV3AffiliatesSearchImagesHeaders;
}
export declare class GetV3AffiliatesSearchImagesResponse extends SpeakeasyBase {
    affiliateImageSearchResponse?: shared.AffiliateImageSearchResponse;
    contentType: string;
    statusCode: number;
}
