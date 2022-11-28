import { SpeakeasyBase } from "../../../internal/utils";
import { ExportTaskStatusCodeEnum } from "./exporttaskstatuscodeenum";
/**
 * Represents the status of an export task.
**/
export declare class ExportTaskStatus extends SpeakeasyBase {
    code?: ExportTaskStatusCodeEnum;
    message?: string;
}
