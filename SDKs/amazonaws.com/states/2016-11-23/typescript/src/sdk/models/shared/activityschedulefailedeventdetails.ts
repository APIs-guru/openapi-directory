import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ActivityScheduleFailedEventDetails
/** 
 * Contains details about an activity schedule failure that occurred during an execution.
**/
export class ActivityScheduleFailedEventDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=cause" })
  cause?: string;

  @Metadata({ data: "json, name=error" })
  error?: string;
}
