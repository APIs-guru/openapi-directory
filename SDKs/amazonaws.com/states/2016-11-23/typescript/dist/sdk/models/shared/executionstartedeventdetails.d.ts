import { SpeakeasyBase } from "../../../internal/utils";
import { HistoryEventExecutionDataDetails } from "./historyeventexecutiondatadetails";
/**
 * Contains details about the start of the execution.
**/
export declare class ExecutionStartedEventDetails extends SpeakeasyBase {
    input?: string;
    inputDetails?: HistoryEventExecutionDataDetails;
    roleArn?: string;
}
