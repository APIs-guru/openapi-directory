import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MemberTypeEnum } from "./membertypeenum";
import { PermissionTypeEnum } from "./permissiontypeenum";


// Permission
/** 
 * Permission granted to a user, group, or resource to access a certain aspect of another user, group, or resource mailbox.
**/
export class Permission extends SpeakeasyBase {
  @Metadata({ data: "json, name=GranteeId" })
  granteeId: string;

  @Metadata({ data: "json, name=GranteeType" })
  granteeType: MemberTypeEnum;

  @Metadata({ data: "json, name=PermissionValues" })
  permissionValues: PermissionTypeEnum[];
}
