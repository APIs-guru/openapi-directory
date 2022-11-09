import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { HistoryEventExecutionDataDetails } from "./historyeventexecutiondatadetails";


// ExecutionStartedEventDetails
/** 
 * Contains details about the start of the execution.
**/
export class ExecutionStartedEventDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=input" })
  input?: string;

  @Metadata({ data: "json, name=inputDetails" })
  inputDetails?: HistoryEventExecutionDataDetails;

  @Metadata({ data: "json, name=roleArn" })
  roleArn?: string;
}
