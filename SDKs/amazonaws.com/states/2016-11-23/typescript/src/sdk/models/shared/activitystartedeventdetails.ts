import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ActivityStartedEventDetails
/** 
 * Contains details about the start of an activity during an execution.
**/
export class ActivityStartedEventDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=workerName" })
  workerName?: string;
}
