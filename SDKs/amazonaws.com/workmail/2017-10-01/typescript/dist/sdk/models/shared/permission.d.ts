import { SpeakeasyBase } from "../../../internal/utils";
import { MemberTypeEnum } from "./membertypeenum";
import { PermissionTypeEnum } from "./permissiontypeenum";
/**
 * Permission granted to a user, group, or resource to access a certain aspect of another user, group, or resource mailbox.
**/
export declare class Permission extends SpeakeasyBase {
    granteeId: string;
    granteeType: MemberTypeEnum;
    permissionValues: PermissionTypeEnum[];
}
