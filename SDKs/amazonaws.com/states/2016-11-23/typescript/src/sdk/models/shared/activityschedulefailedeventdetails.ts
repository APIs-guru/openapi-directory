import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ActivityScheduleFailedEventDetails
/** 
 * Contains details about an activity schedule failure that occurred during an execution.
**/
export class ActivityScheduleFailedEventDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cause" })
  cause?: string;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: string;
}
