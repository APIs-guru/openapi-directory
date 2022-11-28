import { SpeakeasyBase } from "../../../internal/utils";
import { HistoryEventExecutionDataDetails } from "./historyeventexecutiondatadetails";
/**
 * Contains details about an activity scheduled during an execution.
**/
export declare class ActivityScheduledEventDetails extends SpeakeasyBase {
    heartbeatInSeconds?: number;
    input?: string;
    inputDetails?: HistoryEventExecutionDataDetails;
    resource: string;
    timeoutInSeconds?: number;
}
