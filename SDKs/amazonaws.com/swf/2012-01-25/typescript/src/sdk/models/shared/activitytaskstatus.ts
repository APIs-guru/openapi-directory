import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ActivityTaskStatus
/** 
 * Status information about an activity task.
**/
export class ActivityTaskStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=cancelRequested" })
  cancelRequested: boolean;
}
