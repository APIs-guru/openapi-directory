import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MemberTypeEnum } from "./membertypeenum";
import { PermissionTypeEnum } from "./permissiontypeenum";



// Permission
/** 
 * Permission granted to a user, group, or resource to access a certain aspect of another user, group, or resource mailbox.
**/
export class Permission extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=GranteeId" })
  granteeId: string;

  @SpeakeasyMetadata({ data: "json, name=GranteeType" })
  granteeType: MemberTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=PermissionValues" })
  permissionValues: PermissionTypeEnum[];
}
