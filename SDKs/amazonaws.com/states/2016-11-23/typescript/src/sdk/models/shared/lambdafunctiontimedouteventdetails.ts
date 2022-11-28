import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LambdaFunctionTimedOutEventDetails
/** 
 * Contains details about a lambda function timeout that occurred during an execution.
**/
export class LambdaFunctionTimedOutEventDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cause" })
  cause?: string;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: string;
}
