import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateMaintenanceWindowRequest extends SpeakeasyBase {
    allowUnassociatedTargets?: boolean;
    cutoff?: number;
    description?: string;
    duration?: number;
    enabled?: boolean;
    endDate?: string;
    name?: string;
    replace?: boolean;
    schedule?: string;
    scheduleOffset?: number;
    scheduleTimezone?: string;
    startDate?: string;
    windowId: string;
}
