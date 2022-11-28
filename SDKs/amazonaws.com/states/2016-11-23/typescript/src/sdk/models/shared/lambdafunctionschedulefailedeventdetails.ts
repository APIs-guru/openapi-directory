import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LambdaFunctionScheduleFailedEventDetails
/** 
 * Contains details about a failed lambda function schedule event that occurred during an execution.
**/
export class LambdaFunctionScheduleFailedEventDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cause" })
  cause?: string;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: string;
}
