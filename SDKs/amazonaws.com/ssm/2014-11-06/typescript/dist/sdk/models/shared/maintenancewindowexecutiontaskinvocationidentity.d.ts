import { SpeakeasyBase } from "../../../internal/utils";
import { MaintenanceWindowExecutionStatusEnum } from "./maintenancewindowexecutionstatusenum";
import { MaintenanceWindowTaskTypeEnum } from "./maintenancewindowtasktypeenum";
/**
 * Describes the information about a task invocation for a particular target as part of a task execution performed as part of a maintenance window execution.
**/
export declare class MaintenanceWindowExecutionTaskInvocationIdentity extends SpeakeasyBase {
    endTime?: Date;
    executionId?: string;
    invocationId?: string;
    ownerInformation?: string;
    parameters?: string;
    startTime?: Date;
    status?: MaintenanceWindowExecutionStatusEnum;
    statusDetails?: string;
    taskExecutionId?: string;
    taskType?: MaintenanceWindowTaskTypeEnum;
    windowExecutionId?: string;
    windowTargetId?: string;
}
