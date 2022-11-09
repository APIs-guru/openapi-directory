import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PasswordPoliciesContextPasswordPolicyScopeEnum {
    ScopeUnspecified = "SCOPE_UNSPECIFIED"
,    ScopeDevice = "SCOPE_DEVICE"
,    ScopeProfile = "SCOPE_PROFILE"
}


// PasswordPoliciesContext
/** 
 * Additional context for non-compliance related to password policies.
**/
export class PasswordPoliciesContext extends SpeakeasyBase {
  @Metadata({ data: "json, name=passwordPolicyScope" })
  passwordPolicyScope?: PasswordPoliciesContextPasswordPolicyScopeEnum;
}
