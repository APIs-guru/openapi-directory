import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetMaintenanceWindowResult extends SpeakeasyBase {
    allowUnassociatedTargets?: boolean;
    createdDate?: Date;
    cutoff?: number;
    description?: string;
    duration?: number;
    enabled?: boolean;
    endDate?: string;
    modifiedDate?: Date;
    name?: string;
    nextExecutionTime?: string;
    schedule?: string;
    scheduleOffset?: number;
    scheduleTimezone?: string;
    startDate?: string;
    windowId?: string;
}
