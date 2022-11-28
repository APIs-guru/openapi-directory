import { SpeakeasyBase } from "../../../internal/utils";
import { MaintenanceWindowResourceTypeEnum } from "./maintenancewindowresourcetypeenum";
import { Target } from "./target";
/**
 * The target registered with the maintenance window.
**/
export declare class MaintenanceWindowTarget extends SpeakeasyBase {
    description?: string;
    name?: string;
    ownerInformation?: string;
    resourceType?: MaintenanceWindowResourceTypeEnum;
    targets?: Target[];
    windowId?: string;
    windowTargetId?: string;
}
