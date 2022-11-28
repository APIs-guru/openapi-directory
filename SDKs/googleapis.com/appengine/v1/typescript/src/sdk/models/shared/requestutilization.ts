import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RequestUtilization
/** 
 * Target scaling by request utilization. Only applicable in the App Engine flexible environment.
**/
export class RequestUtilization extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=targetConcurrentRequests" })
  targetConcurrentRequests?: number;

  @SpeakeasyMetadata({ data: "json, name=targetRequestCountPerSecond" })
  targetRequestCountPerSecond?: number;
}
