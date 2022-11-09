import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PrincipalTypeEnum } from "./principaltypeenum";


// AccountAssignment
/** 
 * <p>The assignment that indicates a principal's limited access to a specified Amazon Web Services account with a specified permission set.</p> <note> <p>The term <i>principal</i> here refers to a user or group that is defined in Amazon Web Services SSO.</p> </note>
**/
export class AccountAssignment extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountId" })
  accountId?: string;

  @Metadata({ data: "json, name=PermissionSetArn" })
  permissionSetArn?: string;

  @Metadata({ data: "json, name=PrincipalId" })
  principalId?: string;

  @Metadata({ data: "json, name=PrincipalType" })
  principalType?: PrincipalTypeEnum;
}
