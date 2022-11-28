import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the maintenance window.
**/
export declare class MaintenanceWindowIdentity extends SpeakeasyBase {
    cutoff?: number;
    description?: string;
    duration?: number;
    enabled?: boolean;
    endDate?: string;
    name?: string;
    nextExecutionTime?: string;
    schedule?: string;
    scheduleOffset?: number;
    scheduleTimezone?: string;
    startDate?: string;
    windowId?: string;
}
