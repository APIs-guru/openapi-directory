import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LambdaFunctionFailedEventDetails
/** 
 * Contains details about a lambda function that failed during an execution.
**/
export class LambdaFunctionFailedEventDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cause" })
  cause?: string;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: string;
}
