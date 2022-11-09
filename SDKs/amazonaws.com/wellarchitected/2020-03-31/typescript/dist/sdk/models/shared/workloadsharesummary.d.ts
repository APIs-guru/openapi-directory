import { SpeakeasyBase } from "../../../internal/utils/utils";
import { PermissionTypeEnum } from "./permissiontypeenum";
import { ShareStatusEnum } from "./sharestatusenum";
/**
 * A workload share summary return object.
**/
export declare class WorkloadShareSummary extends SpeakeasyBase {
    permissionType?: PermissionTypeEnum;
    shareId?: string;
    sharedWith?: string;
    status?: ShareStatusEnum;
}
