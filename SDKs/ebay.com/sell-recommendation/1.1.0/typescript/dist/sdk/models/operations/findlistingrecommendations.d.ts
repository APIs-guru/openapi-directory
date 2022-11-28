import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FindListingRecommendationsQueryParams extends SpeakeasyBase {
    filter?: string;
    limit?: string;
    offset?: string;
}
export declare class FindListingRecommendationsHeaders extends SpeakeasyBase {
    xEbayCMarketplaceId: string;
}
export declare class FindListingRecommendationsSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class FindListingRecommendationsRequest extends SpeakeasyBase {
    queryParams: FindListingRecommendationsQueryParams;
    headers: FindListingRecommendationsHeaders;
    request?: shared.FindListingRecommendationRequest;
    security: FindListingRecommendationsSecurity;
}
export declare class FindListingRecommendationsResponse extends SpeakeasyBase {
    contentType: string;
    pagedListingRecommendationCollection?: shared.PagedListingRecommendationCollection;
    statusCode: number;
}
