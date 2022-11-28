import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ActivityFailedEventDetails
/** 
 * Contains details about an activity that failed during an execution.
**/
export class ActivityFailedEventDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cause" })
  cause?: string;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: string;
}
