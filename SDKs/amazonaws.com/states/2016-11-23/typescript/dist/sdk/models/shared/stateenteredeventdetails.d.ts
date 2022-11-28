import { SpeakeasyBase } from "../../../internal/utils";
import { HistoryEventExecutionDataDetails } from "./historyeventexecutiondatadetails";
/**
 * Contains details about a state entered during an execution.
**/
export declare class StateEnteredEventDetails extends SpeakeasyBase {
    input?: string;
    inputDetails?: HistoryEventExecutionDataDetails;
    name: string;
}
