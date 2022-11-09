import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RateLimit } from "./ratelimit";


// RateLimitsResponse
/** 
 * This complex type defines a list of rate-limit data as it pertains to a method within the specified version of an API.
**/
export class RateLimitsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=rateLimits", elemType: shared.RateLimit })
  rateLimits?: RateLimit[];
}
