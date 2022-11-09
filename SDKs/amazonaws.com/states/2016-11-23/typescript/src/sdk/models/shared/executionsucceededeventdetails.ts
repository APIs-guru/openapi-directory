import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { HistoryEventExecutionDataDetails } from "./historyeventexecutiondatadetails";


// ExecutionSucceededEventDetails
/** 
 * Contains details about the successful termination of the execution.
**/
export class ExecutionSucceededEventDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=output" })
  output?: string;

  @Metadata({ data: "json, name=outputDetails" })
  outputDetails?: HistoryEventExecutionDataDetails;
}
