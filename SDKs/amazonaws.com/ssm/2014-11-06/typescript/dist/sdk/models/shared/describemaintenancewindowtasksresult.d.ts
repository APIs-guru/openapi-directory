import { SpeakeasyBase } from "../../../internal/utils";
import { MaintenanceWindowTask } from "./maintenancewindowtask";
export declare class DescribeMaintenanceWindowTasksResult extends SpeakeasyBase {
    nextToken?: string;
    tasks?: MaintenanceWindowTask[];
}
