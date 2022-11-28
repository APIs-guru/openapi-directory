import { SpeakeasyBase } from "../../../internal/utils";
import { MaintenanceWindowFilter } from "./maintenancewindowfilter";
export declare class DescribeMaintenanceWindowsRequest extends SpeakeasyBase {
    filters?: MaintenanceWindowFilter[];
    maxResults?: number;
    nextToken?: string;
}
