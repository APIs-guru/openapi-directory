import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RateLimit } from "./ratelimit";



// RateLimitsResponse
/** 
 * This complex type defines a list of rate-limit data as it pertains to a method within the specified version of an API.
**/
export class RateLimitsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rateLimits", elemType: RateLimit })
  rateLimits?: RateLimit[];
}
