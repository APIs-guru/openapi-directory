import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EncryptionPasswordPolicies } from "./encryptionpasswordpolicies";
import { LoginPasswordPolicies } from "./loginpasswordpolicies";
import { SharesPasswordPolicies } from "./sharespasswordpolicies";



// PasswordPoliciesConfig
/** 
 * Set of password policies
**/
export class PasswordPoliciesConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=encryptionPasswordPolicies" })
  encryptionPasswordPolicies?: EncryptionPasswordPolicies;

  @SpeakeasyMetadata({ data: "json, name=loginPasswordPolicies" })
  loginPasswordPolicies?: LoginPasswordPolicies;

  @SpeakeasyMetadata({ data: "json, name=sharesPasswordPolicies" })
  sharesPasswordPolicies?: SharesPasswordPolicies;
}
