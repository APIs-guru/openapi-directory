import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ExecutionTimedOutEventDetails
/** 
 * Contains details about the execution timeout that occurred during the execution.
**/
export class ExecutionTimedOutEventDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cause" })
  cause?: string;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: string;
}
