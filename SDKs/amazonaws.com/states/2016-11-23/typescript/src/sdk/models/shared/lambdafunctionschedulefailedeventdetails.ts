import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LambdaFunctionScheduleFailedEventDetails
/** 
 * Contains details about a failed lambda function schedule event that occurred during an execution.
**/
export class LambdaFunctionScheduleFailedEventDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=cause" })
  cause?: string;

  @Metadata({ data: "json, name=error" })
  error?: string;
}
