import { SpeakeasyBase } from "../../../internal/utils";
import { ReportTask } from "./reporttask";
/**
 * This type defines the fields that paginate the reports tasks returned by the request. The entire result set consists of 0 or more sequenced response pages, where each page consists of 0 or more items from the complete result set.
**/
export declare class ReportTaskPagedCollection extends SpeakeasyBase {
    href?: string;
    limit?: number;
    next?: string;
    offset?: number;
    prev?: string;
    reportTasks?: ReportTask[];
    total?: number;
}
