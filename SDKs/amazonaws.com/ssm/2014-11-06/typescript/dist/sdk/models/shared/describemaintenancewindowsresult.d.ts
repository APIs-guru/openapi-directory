import { SpeakeasyBase } from "../../../internal/utils";
import { MaintenanceWindowIdentity } from "./maintenancewindowidentity";
export declare class DescribeMaintenanceWindowsResult extends SpeakeasyBase {
    nextToken?: string;
    windowIdentities?: MaintenanceWindowIdentity[];
}
