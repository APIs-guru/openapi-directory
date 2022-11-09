import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RequestUtilization
/** 
 * Target scaling by request utilization. Only applicable in the App Engine flexible environment.
**/
export class RequestUtilization extends SpeakeasyBase {
  @Metadata({ data: "json, name=targetConcurrentRequests" })
  targetConcurrentRequests?: number;

  @Metadata({ data: "json, name=targetRequestCountPerSecond" })
  targetRequestCountPerSecond?: number;
}
