import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PasswordPoliciesContextPasswordPolicyScopeEnum {
    ScopeUnspecified = "SCOPE_UNSPECIFIED",
    ScopeDevice = "SCOPE_DEVICE",
    ScopeProfile = "SCOPE_PROFILE"
}


// PasswordPoliciesContext
/** 
 * Additional context for non-compliance related to password policies.
**/
export class PasswordPoliciesContext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=passwordPolicyScope" })
  passwordPolicyScope?: PasswordPoliciesContextPasswordPolicyScopeEnum;
}
