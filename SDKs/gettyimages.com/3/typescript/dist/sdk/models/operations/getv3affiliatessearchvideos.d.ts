import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetV3AffiliatesSearchVideosQueryParams extends SpeakeasyBase {
    phrase?: string;
}
export declare class GetV3AffiliatesSearchVideosHeaders extends SpeakeasyBase {
    acceptLanguage?: string;
}
export declare class GetV3AffiliatesSearchVideosRequest extends SpeakeasyBase {
    queryParams: GetV3AffiliatesSearchVideosQueryParams;
    headers: GetV3AffiliatesSearchVideosHeaders;
}
export declare class GetV3AffiliatesSearchVideosResponse extends SpeakeasyBase {
    affiliateVideoSearchResponse?: shared.AffiliateVideoSearchResponse;
    contentType: string;
    statusCode: number;
}
