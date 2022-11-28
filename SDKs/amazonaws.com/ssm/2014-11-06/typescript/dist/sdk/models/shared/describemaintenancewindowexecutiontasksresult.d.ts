import { SpeakeasyBase } from "../../../internal/utils";
import { MaintenanceWindowExecutionTaskIdentity } from "./maintenancewindowexecutiontaskidentity";
export declare class DescribeMaintenanceWindowExecutionTasksResult extends SpeakeasyBase {
    nextToken?: string;
    windowExecutionTaskIdentities?: MaintenanceWindowExecutionTaskIdentity[];
}
