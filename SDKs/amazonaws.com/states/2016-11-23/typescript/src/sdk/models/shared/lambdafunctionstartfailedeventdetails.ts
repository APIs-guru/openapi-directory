import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LambdaFunctionStartFailedEventDetails
/** 
 * Contains details about a lambda function that failed to start during an execution.
**/
export class LambdaFunctionStartFailedEventDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cause" })
  cause?: string;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: string;
}
