import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HistoryEventExecutionDataDetails } from "./historyeventexecutiondatadetails";



// ExecutionSucceededEventDetails
/** 
 * Contains details about the successful termination of the execution.
**/
export class ExecutionSucceededEventDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=output" })
  output?: string;

  @SpeakeasyMetadata({ data: "json, name=outputDetails" })
  outputDetails?: HistoryEventExecutionDataDetails;
}
