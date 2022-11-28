import { SpeakeasyBase } from "../../../internal/utils";
import { ResourcePendingMaintenanceActions } from "./resourcependingmaintenanceactions";
export declare class PendingMaintenanceActionsMessage extends SpeakeasyBase {
    marker?: string;
    pendingMaintenanceActions?: ResourcePendingMaintenanceActions[];
}
