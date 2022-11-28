import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ActivityTimedOutEventDetails
/** 
 * Contains details about an activity timeout that occurred during an execution.
**/
export class ActivityTimedOutEventDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cause" })
  cause?: string;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: string;
}
