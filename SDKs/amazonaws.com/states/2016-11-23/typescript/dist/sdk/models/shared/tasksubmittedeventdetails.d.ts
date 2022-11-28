import { SpeakeasyBase } from "../../../internal/utils";
import { HistoryEventExecutionDataDetails } from "./historyeventexecutiondatadetails";
/**
 * Contains details about a task submitted to a resource .
**/
export declare class TaskSubmittedEventDetails extends SpeakeasyBase {
    output?: string;
    outputDetails?: HistoryEventExecutionDataDetails;
    resource: string;
    resourceType: string;
}
