import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HistoryEventExecutionDataDetails } from "./historyeventexecutiondatadetails";



// LambdaFunctionScheduledEventDetails
/** 
 * Contains details about a lambda function scheduled during an execution.
**/
export class LambdaFunctionScheduledEventDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=input" })
  input?: string;

  @SpeakeasyMetadata({ data: "json, name=inputDetails" })
  inputDetails?: HistoryEventExecutionDataDetails;

  @SpeakeasyMetadata({ data: "json, name=resource" })
  resource: string;

  @SpeakeasyMetadata({ data: "json, name=timeoutInSeconds" })
  timeoutInSeconds?: number;
}
