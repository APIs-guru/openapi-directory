import { SpeakeasyBase } from "../../../internal/utils";
import { HistoryEventExecutionDataDetails } from "./historyeventexecutiondatadetails";
/**
 * Contains details about the successful completion of a task state.
**/
export declare class TaskSucceededEventDetails extends SpeakeasyBase {
    output?: string;
    outputDetails?: HistoryEventExecutionDataDetails;
    resource: string;
    resourceType: string;
}
