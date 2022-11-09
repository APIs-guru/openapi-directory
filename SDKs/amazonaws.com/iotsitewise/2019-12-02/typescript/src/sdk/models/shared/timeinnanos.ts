import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TimeInNanos
/** 
 * Contains a timestamp with optional nanosecond granularity.
**/
export class TimeInNanos extends SpeakeasyBase {
  @Metadata({ data: "json, name=offsetInNanos" })
  offsetInNanos?: number;

  @Metadata({ data: "json, name=timeInSeconds" })
  timeInSeconds: number;
}
