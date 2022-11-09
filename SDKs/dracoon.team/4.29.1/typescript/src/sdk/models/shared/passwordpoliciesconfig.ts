import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EncryptionPasswordPolicies } from "./encryptionpasswordpolicies";
import { LoginPasswordPolicies } from "./loginpasswordpolicies";
import { SharesPasswordPolicies } from "./sharespasswordpolicies";


// PasswordPoliciesConfig
/** 
 * Set of password policies
**/
export class PasswordPoliciesConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=encryptionPasswordPolicies" })
  encryptionPasswordPolicies?: EncryptionPasswordPolicies;

  @Metadata({ data: "json, name=loginPasswordPolicies" })
  loginPasswordPolicies?: LoginPasswordPolicies;

  @Metadata({ data: "json, name=sharesPasswordPolicies" })
  sharesPasswordPolicies?: SharesPasswordPolicies;
}
