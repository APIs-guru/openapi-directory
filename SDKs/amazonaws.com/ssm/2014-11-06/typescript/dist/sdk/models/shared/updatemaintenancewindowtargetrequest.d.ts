import { SpeakeasyBase } from "../../../internal/utils";
import { Target } from "./target";
export declare class UpdateMaintenanceWindowTargetRequest extends SpeakeasyBase {
    description?: string;
    name?: string;
    ownerInformation?: string;
    replace?: boolean;
    targets?: Target[];
    windowId: string;
    windowTargetId: string;
}
