import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LambdaFunctionTimedOutEventDetails
/** 
 * Contains details about a lambda function timeout that occurred during an execution.
**/
export class LambdaFunctionTimedOutEventDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=cause" })
  cause?: string;

  @Metadata({ data: "json, name=error" })
  error?: string;
}
