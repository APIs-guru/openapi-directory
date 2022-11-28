import { SpeakeasyBase } from "../../../internal/utils";
import { LoggingInfo } from "./logginginfo";
import { Target } from "./target";
import { MaintenanceWindowTaskParameterValueExpression } from "./maintenancewindowtaskparametervalueexpression";
import { MaintenanceWindowTaskTypeEnum } from "./maintenancewindowtasktypeenum";
/**
 * Information about a task defined for a maintenance window.
**/
export declare class MaintenanceWindowTask extends SpeakeasyBase {
    description?: string;
    loggingInfo?: LoggingInfo;
    maxConcurrency?: string;
    maxErrors?: string;
    name?: string;
    priority?: number;
    serviceRoleArn?: string;
    targets?: Target[];
    taskArn?: string;
    taskParameters?: Map<string, MaintenanceWindowTaskParameterValueExpression>;
    type?: MaintenanceWindowTaskTypeEnum;
    windowId?: string;
    windowTaskId?: string;
}
