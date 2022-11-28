import { SpeakeasyBase } from "../../../internal/utils";
import { PatchOrchestratorFilter } from "./patchorchestratorfilter";
import { MaintenanceWindowResourceTypeEnum } from "./maintenancewindowresourcetypeenum";
import { Target } from "./target";
export declare class DescribeMaintenanceWindowScheduleRequest extends SpeakeasyBase {
    filters?: PatchOrchestratorFilter[];
    maxResults?: number;
    nextToken?: string;
    resourceType?: MaintenanceWindowResourceTypeEnum;
    targets?: Target[];
    windowId?: string;
}
