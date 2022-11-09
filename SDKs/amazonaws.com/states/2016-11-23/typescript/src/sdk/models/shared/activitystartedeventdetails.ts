import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ActivityStartedEventDetails
/** 
 * Contains details about the start of an activity during an execution.
**/
export class ActivityStartedEventDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=workerName" })
  workerName?: string;
}
