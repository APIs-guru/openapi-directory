import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ExecutionTimedOutEventDetails
/** 
 * Contains details about the execution timeout that occurred during the execution.
**/
export class ExecutionTimedOutEventDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=cause" })
  cause?: string;

  @Metadata({ data: "json, name=error" })
  error?: string;
}
