import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ExecutionAbortedEventDetails
/** 
 * Contains details about an abort of an execution.
**/
export class ExecutionAbortedEventDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=cause" })
  cause?: string;

  @Metadata({ data: "json, name=error" })
  error?: string;
}
