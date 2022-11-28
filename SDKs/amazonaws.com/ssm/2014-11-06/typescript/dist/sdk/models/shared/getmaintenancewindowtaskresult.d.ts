import { SpeakeasyBase } from "../../../internal/utils";
import { LoggingInfo } from "./logginginfo";
import { Target } from "./target";
import { MaintenanceWindowTaskInvocationParameters } from "./maintenancewindowtaskinvocationparameters";
import { MaintenanceWindowTaskParameterValueExpression } from "./maintenancewindowtaskparametervalueexpression";
import { MaintenanceWindowTaskTypeEnum } from "./maintenancewindowtasktypeenum";
export declare class GetMaintenanceWindowTaskResult extends SpeakeasyBase {
    description?: string;
    loggingInfo?: LoggingInfo;
    maxConcurrency?: string;
    maxErrors?: string;
    name?: string;
    priority?: number;
    serviceRoleArn?: string;
    targets?: Target[];
    taskArn?: string;
    taskInvocationParameters?: MaintenanceWindowTaskInvocationParameters;
    taskParameters?: Map<string, MaintenanceWindowTaskParameterValueExpression>;
    taskType?: MaintenanceWindowTaskTypeEnum;
    windowId?: string;
    windowTaskId?: string;
}
