import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LoginPasswordPolicies } from "./loginpasswordpolicies";


// ResetPasswordTokenValidateResponse
/** 
 * Password reset information
**/
export class ResetPasswordTokenValidateResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowSystemGlobalWeakPassword" })
  allowSystemGlobalWeakPassword?: boolean;

  @Metadata({ data: "json, name=firstName" })
  firstName: string;

  @Metadata({ data: "json, name=gender" })
  gender?: string;

  @Metadata({ data: "json, name=lastName" })
  lastName: string;

  @Metadata({ data: "json, name=loginPasswordPolicies" })
  loginPasswordPolicies?: LoginPasswordPolicies;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
