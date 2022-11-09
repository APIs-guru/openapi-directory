import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ExportTaskExecutionInfo } from "./exporttaskexecutioninfo";
import { ExportTaskStatus } from "./exporttaskstatus";
/**
 * Represents an export task.
**/
export declare class ExportTask extends SpeakeasyBase {
    destination?: string;
    destinationPrefix?: string;
    executionInfo?: ExportTaskExecutionInfo;
    from?: number;
    logGroupName?: string;
    status?: ExportTaskStatus;
    taskId?: string;
    taskName?: string;
    to?: number;
}
