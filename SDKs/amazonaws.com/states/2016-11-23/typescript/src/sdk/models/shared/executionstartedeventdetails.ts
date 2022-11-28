import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HistoryEventExecutionDataDetails } from "./historyeventexecutiondatadetails";



// ExecutionStartedEventDetails
/** 
 * Contains details about the start of the execution.
**/
export class ExecutionStartedEventDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=input" })
  input?: string;

  @SpeakeasyMetadata({ data: "json, name=inputDetails" })
  inputDetails?: HistoryEventExecutionDataDetails;

  @SpeakeasyMetadata({ data: "json, name=roleArn" })
  roleArn?: string;
}
