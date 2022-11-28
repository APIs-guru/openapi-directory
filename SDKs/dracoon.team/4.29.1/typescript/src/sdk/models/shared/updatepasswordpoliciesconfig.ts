import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UpdateEncryptionPasswordPolicies } from "./updateencryptionpasswordpolicies";
import { UpdateLoginPasswordPolicies } from "./updateloginpasswordpolicies";
import { UpdateSharesPasswordPolicies } from "./updatesharespasswordpolicies";



// UpdatePasswordPoliciesConfig
/** 
 * Request model for updating a set of password policies
**/
export class UpdatePasswordPoliciesConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=encryptionPasswordPolicies" })
  encryptionPasswordPolicies?: UpdateEncryptionPasswordPolicies;

  @SpeakeasyMetadata({ data: "json, name=loginPasswordPolicies" })
  loginPasswordPolicies?: UpdateLoginPasswordPolicies;

  @SpeakeasyMetadata({ data: "json, name=sharesPasswordPolicies" })
  sharesPasswordPolicies?: UpdateSharesPasswordPolicies;
}
