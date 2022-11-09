import { SpeakeasyBase } from "../../../internal/utils/utils";
import { PrincipalTypeEnum } from "./principaltypeenum";
/**
 * <p>The assignment that indicates a principal's limited access to a specified Amazon Web Services account with a specified permission set.</p> <note> <p>The term <i>principal</i> here refers to a user or group that is defined in Amazon Web Services SSO.</p> </note>
**/
export declare class AccountAssignment extends SpeakeasyBase {
    accountId?: string;
    permissionSetArn?: string;
    principalId?: string;
    principalType?: PrincipalTypeEnum;
}
