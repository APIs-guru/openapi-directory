import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { HistoryEventExecutionDataDetails } from "./historyeventexecutiondatadetails";


// LambdaFunctionScheduledEventDetails
/** 
 * Contains details about a lambda function scheduled during an execution.
**/
export class LambdaFunctionScheduledEventDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=input" })
  input?: string;

  @Metadata({ data: "json, name=inputDetails" })
  inputDetails?: HistoryEventExecutionDataDetails;

  @Metadata({ data: "json, name=resource" })
  resource: string;

  @Metadata({ data: "json, name=timeoutInSeconds" })
  timeoutInSeconds?: number;
}
