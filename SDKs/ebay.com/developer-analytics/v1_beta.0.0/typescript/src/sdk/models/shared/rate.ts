import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Rate
/** 
 * This complex type defines a &quot;rate&quot; as the quota of calls that can be made to a resource per time window, the remaining number of calls before the threshold is met, the amount of time until the time window resets, and the length of the time window (in seconds).
**/
export class Rate extends SpeakeasyBase {
  @Metadata({ data: "json, name=limit" })
  limit?: number;

  @Metadata({ data: "json, name=remaining" })
  remaining?: number;

  @Metadata({ data: "json, name=reset" })
  reset?: string;

  @Metadata({ data: "json, name=timeWindow" })
  timeWindow?: number;
}
