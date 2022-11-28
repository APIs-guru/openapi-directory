import { SpeakeasyBase } from "../../../internal/utils";
import { MaintenanceWindowResourceTypeEnum } from "./maintenancewindowresourcetypeenum";
import { Target } from "./target";
export declare class RegisterTargetWithMaintenanceWindowRequest extends SpeakeasyBase {
    clientToken?: string;
    description?: string;
    name?: string;
    ownerInformation?: string;
    resourceType: MaintenanceWindowResourceTypeEnum;
    targets: Target[];
    windowId: string;
}
