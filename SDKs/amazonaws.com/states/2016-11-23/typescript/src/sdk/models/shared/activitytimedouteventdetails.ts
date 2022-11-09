import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ActivityTimedOutEventDetails
/** 
 * Contains details about an activity timeout that occurred during an execution.
**/
export class ActivityTimedOutEventDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=cause" })
  cause?: string;

  @Metadata({ data: "json, name=error" })
  error?: string;
}
