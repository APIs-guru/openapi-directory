import { SpeakeasyBase } from "../../../internal/utils";
import { MaintenanceWindowExecutionStatusEnum } from "./maintenancewindowexecutionstatusenum";
/**
 * Describes the information about an execution of a maintenance window.
**/
export declare class MaintenanceWindowExecution extends SpeakeasyBase {
    endTime?: Date;
    startTime?: Date;
    status?: MaintenanceWindowExecutionStatusEnum;
    statusDetails?: string;
    windowExecutionId?: string;
    windowId?: string;
}
