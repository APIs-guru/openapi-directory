import { SpeakeasyBase } from "../../../internal/utils";
import { UpdateEncryptionPasswordPolicies } from "./updateencryptionpasswordpolicies";
import { UpdateLoginPasswordPolicies } from "./updateloginpasswordpolicies";
import { UpdateSharesPasswordPolicies } from "./updatesharespasswordpolicies";
/**
 * Request model for updating a set of password policies
**/
export declare class UpdatePasswordPoliciesConfig extends SpeakeasyBase {
    encryptionPasswordPolicies?: UpdateEncryptionPasswordPolicies;
    loginPasswordPolicies?: UpdateLoginPasswordPolicies;
    sharesPasswordPolicies?: UpdateSharesPasswordPolicies;
}
