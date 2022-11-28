import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ActivityTaskStatus
/** 
 * Status information about an activity task.
**/
export class ActivityTaskStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cancelRequested" })
  cancelRequested: boolean;
}
