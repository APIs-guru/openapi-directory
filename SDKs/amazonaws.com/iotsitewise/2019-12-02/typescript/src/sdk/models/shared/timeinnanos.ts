import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TimeInNanos
/** 
 * Contains a timestamp with optional nanosecond granularity.
**/
export class TimeInNanos extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=offsetInNanos" })
  offsetInNanos?: number;

  @SpeakeasyMetadata({ data: "json, name=timeInSeconds" })
  timeInSeconds: number;
}
