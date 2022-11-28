import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAdsPathParams extends SpeakeasyBase {
    campaignId: string;
}
export declare class GetAdsQueryParams extends SpeakeasyBase {
    limit?: string;
    listingIds?: string;
    offset?: string;
}
export declare class GetAdsSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class GetAdsRequest extends SpeakeasyBase {
    pathParams: GetAdsPathParams;
    queryParams: GetAdsQueryParams;
    security: GetAdsSecurity;
}
export declare class GetAdsResponse extends SpeakeasyBase {
    adPagedCollection?: shared.AdPagedCollection;
    contentType: string;
    statusCode: number;
}
