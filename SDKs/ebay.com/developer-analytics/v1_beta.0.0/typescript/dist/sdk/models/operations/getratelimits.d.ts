import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetRateLimitsQueryParams extends SpeakeasyBase {
    apiContext?: string;
    apiName?: string;
}
export declare class GetRateLimitsSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class GetRateLimitsRequest extends SpeakeasyBase {
    queryParams: GetRateLimitsQueryParams;
    security: GetRateLimitsSecurity;
}
export declare class GetRateLimits500ApplicationJson extends SpeakeasyBase {
    errors?: shared.Error[];
}
export declare class GetRateLimitsResponse extends SpeakeasyBase {
    contentType: string;
    rateLimitsResponse?: shared.RateLimitsResponse;
    statusCode: number;
    getRateLimits500ApplicationJsonObject?: GetRateLimits500ApplicationJson;
}
