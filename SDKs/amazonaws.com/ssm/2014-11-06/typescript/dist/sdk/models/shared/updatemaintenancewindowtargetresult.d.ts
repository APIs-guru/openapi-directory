import { SpeakeasyBase } from "../../../internal/utils";
import { Target } from "./target";
export declare class UpdateMaintenanceWindowTargetResult extends SpeakeasyBase {
    description?: string;
    name?: string;
    ownerInformation?: string;
    targets?: Target[];
    windowId?: string;
    windowTargetId?: string;
}
