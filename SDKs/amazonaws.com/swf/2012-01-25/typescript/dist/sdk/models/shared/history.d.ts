import { SpeakeasyBase } from "../../../internal/utils";
import { HistoryEvent } from "./historyevent";
/**
 * Paginated representation of a workflow history for a workflow execution. This is the up to date, complete and authoritative record of the events related to all tasks and events in the life of the workflow execution.
**/
export declare class History extends SpeakeasyBase {
    events: HistoryEvent[];
    nextPageToken?: string;
}
