import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ExecutionFailedEventDetails
/** 
 * Contains details about an execution failure event.
**/
export class ExecutionFailedEventDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=cause" })
  cause?: string;

  @Metadata({ data: "json, name=error" })
  error?: string;
}
