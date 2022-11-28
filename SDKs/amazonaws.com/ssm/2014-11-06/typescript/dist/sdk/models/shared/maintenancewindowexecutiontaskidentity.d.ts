import { SpeakeasyBase } from "../../../internal/utils";
import { MaintenanceWindowExecutionStatusEnum } from "./maintenancewindowexecutionstatusenum";
import { MaintenanceWindowTaskTypeEnum } from "./maintenancewindowtasktypeenum";
/**
 * Information about a task execution performed as part of a maintenance window execution.
**/
export declare class MaintenanceWindowExecutionTaskIdentity extends SpeakeasyBase {
    endTime?: Date;
    startTime?: Date;
    status?: MaintenanceWindowExecutionStatusEnum;
    statusDetails?: string;
    taskArn?: string;
    taskExecutionId?: string;
    taskType?: MaintenanceWindowTaskTypeEnum;
    windowExecutionId?: string;
}
