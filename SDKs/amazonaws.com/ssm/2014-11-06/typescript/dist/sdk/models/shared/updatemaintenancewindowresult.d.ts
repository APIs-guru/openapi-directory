import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateMaintenanceWindowResult extends SpeakeasyBase {
    allowUnassociatedTargets?: boolean;
    cutoff?: number;
    description?: string;
    duration?: number;
    enabled?: boolean;
    endDate?: string;
    name?: string;
    schedule?: string;
    scheduleOffset?: number;
    scheduleTimezone?: string;
    startDate?: string;
    windowId?: string;
}
