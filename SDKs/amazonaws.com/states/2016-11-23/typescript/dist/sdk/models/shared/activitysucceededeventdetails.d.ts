import { SpeakeasyBase } from "../../../internal/utils";
import { HistoryEventExecutionDataDetails } from "./historyeventexecutiondatadetails";
/**
 * Contains details about an activity that successfully terminated during an execution.
**/
export declare class ActivitySucceededEventDetails extends SpeakeasyBase {
    output?: string;
    outputDetails?: HistoryEventExecutionDataDetails;
}
