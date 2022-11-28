import { SpeakeasyBase } from "../../../internal/utils";
import { ExportTaskStatusCodeEnum } from "./exporttaskstatuscodeenum";
export declare class DescribeExportTasksRequest extends SpeakeasyBase {
    limit?: number;
    nextToken?: string;
    statusCode?: ExportTaskStatusCodeEnum;
    taskId?: string;
}
