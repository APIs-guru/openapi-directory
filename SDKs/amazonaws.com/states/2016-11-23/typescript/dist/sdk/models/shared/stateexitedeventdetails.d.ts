import { SpeakeasyBase } from "../../../internal/utils";
import { HistoryEventExecutionDataDetails } from "./historyeventexecutiondatadetails";
/**
 * Contains details about an exit from a state during an execution.
**/
export declare class StateExitedEventDetails extends SpeakeasyBase {
    name: string;
    output?: string;
    outputDetails?: HistoryEventExecutionDataDetails;
}
