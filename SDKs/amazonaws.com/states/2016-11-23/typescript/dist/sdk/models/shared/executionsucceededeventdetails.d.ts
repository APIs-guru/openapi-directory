import { SpeakeasyBase } from "../../../internal/utils";
import { HistoryEventExecutionDataDetails } from "./historyeventexecutiondatadetails";
/**
 * Contains details about the successful termination of the execution.
**/
export declare class ExecutionSucceededEventDetails extends SpeakeasyBase {
    output?: string;
    outputDetails?: HistoryEventExecutionDataDetails;
}
