import { SpeakeasyBase } from "../../../internal/utils";
import { MaintenanceWindowFilter } from "./maintenancewindowfilter";
export declare class DescribeMaintenanceWindowExecutionTaskInvocationsRequest extends SpeakeasyBase {
    filters?: MaintenanceWindowFilter[];
    maxResults?: number;
    nextToken?: string;
    taskId: string;
    windowExecutionId: string;
}
