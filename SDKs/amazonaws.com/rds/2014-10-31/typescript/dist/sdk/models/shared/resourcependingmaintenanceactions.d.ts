import { SpeakeasyBase } from "../../../internal/utils";
import { PendingMaintenanceAction } from "./pendingmaintenanceaction";
/**
 * Describes the pending maintenance actions for a resource.
**/
export declare class ResourcePendingMaintenanceActions extends SpeakeasyBase {
    pendingMaintenanceActionDetails?: PendingMaintenanceAction[];
    resourceIdentifier?: string;
}
