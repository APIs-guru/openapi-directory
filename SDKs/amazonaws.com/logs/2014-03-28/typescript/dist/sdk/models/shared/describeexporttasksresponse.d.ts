import { SpeakeasyBase } from "../../../internal/utils";
import { ExportTask } from "./exporttask";
export declare class DescribeExportTasksResponse extends SpeakeasyBase {
    exportTasks?: ExportTask[];
    nextToken?: string;
}
