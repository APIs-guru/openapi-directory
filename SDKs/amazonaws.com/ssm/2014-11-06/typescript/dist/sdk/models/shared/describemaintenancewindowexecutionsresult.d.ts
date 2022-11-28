import { SpeakeasyBase } from "../../../internal/utils";
import { MaintenanceWindowExecution } from "./maintenancewindowexecution";
export declare class DescribeMaintenanceWindowExecutionsResult extends SpeakeasyBase {
    nextToken?: string;
    windowExecutions?: MaintenanceWindowExecution[];
}
