import { SpeakeasyBase } from "../../../internal/utils";
import { PermissionTypeEnum } from "./permissiontypeenum";
/**
 * A share invitation summary return object.
**/
export declare class ShareInvitationSummary extends SpeakeasyBase {
    permissionType?: PermissionTypeEnum;
    shareInvitationId?: string;
    sharedBy?: string;
    sharedWith?: string;
    workloadId?: string;
    workloadName?: string;
}
