import { SpeakeasyBase } from "../../../internal/utils";
import { RateLimit } from "./ratelimit";
/**
 * This complex type defines a list of rate-limit data as it pertains to a method within the specified version of an API.
**/
export declare class RateLimitsResponse extends SpeakeasyBase {
    rateLimits?: RateLimit[];
}
