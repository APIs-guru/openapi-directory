import { SpeakeasyBase } from "../../../internal/utils";
import { ResourcePendingMaintenanceActions } from "./resourcependingmaintenanceactions";
/**
 * Data returned from the <b>DescribePendingMaintenanceActions</b> action.
**/
export declare class PendingMaintenanceActionsMessage extends SpeakeasyBase {
    marker?: string;
    pendingMaintenanceActions?: ResourcePendingMaintenanceActions[];
}
