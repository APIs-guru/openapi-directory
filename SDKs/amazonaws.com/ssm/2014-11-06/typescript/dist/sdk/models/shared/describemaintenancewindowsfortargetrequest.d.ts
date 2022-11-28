import { SpeakeasyBase } from "../../../internal/utils";
import { MaintenanceWindowResourceTypeEnum } from "./maintenancewindowresourcetypeenum";
import { Target } from "./target";
export declare class DescribeMaintenanceWindowsForTargetRequest extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    resourceType: MaintenanceWindowResourceTypeEnum;
    targets: Target[];
}
