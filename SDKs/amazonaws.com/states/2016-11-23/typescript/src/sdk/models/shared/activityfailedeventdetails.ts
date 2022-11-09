import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ActivityFailedEventDetails
/** 
 * Contains details about an activity that failed during an execution.
**/
export class ActivityFailedEventDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=cause" })
  cause?: string;

  @Metadata({ data: "json, name=error" })
  error?: string;
}
