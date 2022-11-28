import { SpeakeasyBase } from "../../../internal/utils";
import { MaintenanceWindowExecutionStatusEnum } from "./maintenancewindowexecutionstatusenum";
import { MaintenanceWindowTaskTypeEnum } from "./maintenancewindowtasktypeenum";
export declare class GetMaintenanceWindowExecutionTaskInvocationResult extends SpeakeasyBase {
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
