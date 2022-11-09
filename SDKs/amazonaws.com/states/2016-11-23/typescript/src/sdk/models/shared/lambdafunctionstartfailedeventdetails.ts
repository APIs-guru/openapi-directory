import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LambdaFunctionStartFailedEventDetails
/** 
 * Contains details about a lambda function that failed to start during an execution.
**/
export class LambdaFunctionStartFailedEventDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=cause" })
  cause?: string;

  @Metadata({ data: "json, name=error" })
  error?: string;
}
