import { SpeakeasyBase } from "../../../internal/utils";
import { MaintenanceWindowFilter } from "./maintenancewindowfilter";
export declare class DescribeMaintenanceWindowTargetsRequest extends SpeakeasyBase {
    filters?: MaintenanceWindowFilter[];
    maxResults?: number;
    nextToken?: string;
    windowId: string;
}
