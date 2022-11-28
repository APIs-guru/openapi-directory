import { SpeakeasyBase } from "../../../internal/utils";
import { MaintenanceWindowExecutionStatusEnum } from "./maintenancewindowexecutionstatusenum";
import { MaintenanceWindowTaskParameterValueExpression } from "./maintenancewindowtaskparametervalueexpression";
import { MaintenanceWindowTaskTypeEnum } from "./maintenancewindowtasktypeenum";
export declare class GetMaintenanceWindowExecutionTaskResult extends SpeakeasyBase {
    endTime?: Date;
    maxConcurrency?: string;
    maxErrors?: string;
    priority?: number;
    serviceRole?: string;
    startTime?: Date;
    status?: MaintenanceWindowExecutionStatusEnum;
    statusDetails?: string;
    taskArn?: string;
    taskExecutionId?: string;
    taskParameters?: Map<string, MaintenanceWindowTaskParameterValueExpression>[];
    type?: MaintenanceWindowTaskTypeEnum;
    windowExecutionId?: string;
}
