import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides information about a pending maintenance action for a resource.
**/
export declare class PendingMaintenanceAction extends SpeakeasyBase {
    action?: string;
    autoAppliedAfterDate?: Date;
    currentApplyDate?: Date;
    description?: string;
    forcedApplyDate?: Date;
    optInStatus?: string;
}
