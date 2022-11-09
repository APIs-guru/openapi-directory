import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LambdaFunctionFailedEventDetails
/** 
 * Contains details about a lambda function that failed during an execution.
**/
export class LambdaFunctionFailedEventDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=cause" })
  cause?: string;

  @Metadata({ data: "json, name=error" })
  error?: string;
}
