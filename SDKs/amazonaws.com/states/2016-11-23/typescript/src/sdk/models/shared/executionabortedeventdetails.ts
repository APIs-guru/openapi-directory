import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ExecutionAbortedEventDetails
/** 
 * Contains details about an abort of an execution.
**/
export class ExecutionAbortedEventDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cause" })
  cause?: string;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: string;
}
