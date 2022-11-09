import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UpdateEncryptionPasswordPolicies } from "./updateencryptionpasswordpolicies";
import { UpdateLoginPasswordPolicies } from "./updateloginpasswordpolicies";
import { UpdateSharesPasswordPolicies } from "./updatesharespasswordpolicies";


// UpdatePasswordPoliciesConfig
/** 
 * Request model for updating a set of password policies
**/
export class UpdatePasswordPoliciesConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=encryptionPasswordPolicies" })
  encryptionPasswordPolicies?: UpdateEncryptionPasswordPolicies;

  @Metadata({ data: "json, name=loginPasswordPolicies" })
  loginPasswordPolicies?: UpdateLoginPasswordPolicies;

  @Metadata({ data: "json, name=sharesPasswordPolicies" })
  sharesPasswordPolicies?: UpdateSharesPasswordPolicies;
}
