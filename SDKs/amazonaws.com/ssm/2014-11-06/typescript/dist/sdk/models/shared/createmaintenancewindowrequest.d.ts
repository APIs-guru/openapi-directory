import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
export declare class CreateMaintenanceWindowRequest extends SpeakeasyBase {
    allowUnassociatedTargets: boolean;
    clientToken?: string;
    cutoff: number;
    description?: string;
    duration: number;
    endDate?: string;
    name: string;
    schedule: string;
    scheduleOffset?: number;
    scheduleTimezone?: string;
    startDate?: string;
    tags?: Tag[];
}
