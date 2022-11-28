import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LoginPasswordPolicies } from "./loginpasswordpolicies";



// ResetPasswordTokenValidateResponse
/** 
 * Password reset information
**/
export class ResetPasswordTokenValidateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowSystemGlobalWeakPassword" })
  allowSystemGlobalWeakPassword?: boolean;

  @SpeakeasyMetadata({ data: "json, name=firstName" })
  firstName: string;

  @SpeakeasyMetadata({ data: "json, name=gender" })
  gender?: string;

  @SpeakeasyMetadata({ data: "json, name=lastName" })
  lastName: string;

  @SpeakeasyMetadata({ data: "json, name=loginPasswordPolicies" })
  loginPasswordPolicies?: LoginPasswordPolicies;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
