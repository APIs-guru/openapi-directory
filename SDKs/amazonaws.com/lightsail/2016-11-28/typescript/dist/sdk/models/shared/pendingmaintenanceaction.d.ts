import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a pending database maintenance action.
**/
export declare class PendingMaintenanceAction extends SpeakeasyBase {
    action?: string;
    currentApplyDate?: Date;
    description?: string;
}
