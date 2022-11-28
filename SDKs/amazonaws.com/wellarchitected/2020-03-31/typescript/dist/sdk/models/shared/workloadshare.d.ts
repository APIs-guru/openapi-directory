import { SpeakeasyBase } from "../../../internal/utils";
import { PermissionTypeEnum } from "./permissiontypeenum";
import { ShareStatusEnum } from "./sharestatusenum";
/**
 * A workload share return object.
**/
export declare class WorkloadShare extends SpeakeasyBase {
    permissionType?: PermissionTypeEnum;
    shareId?: string;
    sharedBy?: string;
    sharedWith?: string;
    status?: ShareStatusEnum;
    workloadId?: string;
    workloadName?: string;
}
