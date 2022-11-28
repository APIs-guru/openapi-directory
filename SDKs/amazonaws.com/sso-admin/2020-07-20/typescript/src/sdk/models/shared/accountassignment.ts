import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PrincipalTypeEnum } from "./principaltypeenum";



// AccountAssignment
/** 
 * <p>The assignment that indicates a principal's limited access to a specified Amazon Web Services account with a specified permission set.</p> <note> <p>The term <i>principal</i> here refers to a user or group that is defined in Amazon Web Services SSO.</p> </note>
**/
export class AccountAssignment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=PermissionSetArn" })
  permissionSetArn?: string;

  @SpeakeasyMetadata({ data: "json, name=PrincipalId" })
  principalId?: string;

  @SpeakeasyMetadata({ data: "json, name=PrincipalType" })
  principalType?: PrincipalTypeEnum;
}
