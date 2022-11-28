package shared

type PasswordPoliciesContextPasswordPolicyScopeEnum string

const (
	PasswordPoliciesContextPasswordPolicyScopeEnumScopeUnspecified PasswordPoliciesContextPasswordPolicyScopeEnum = "SCOPE_UNSPECIFIED"
	PasswordPoliciesContextPasswordPolicyScopeEnumScopeDevice      PasswordPoliciesContextPasswordPolicyScopeEnum = "SCOPE_DEVICE"
	PasswordPoliciesContextPasswordPolicyScopeEnumScopeProfile     PasswordPoliciesContextPasswordPolicyScopeEnum = "SCOPE_PROFILE"
)

// PasswordPoliciesContext
// Additional context for non-compliance related to password policies.
type PasswordPoliciesContext struct {
	PasswordPolicyScope *PasswordPoliciesContextPasswordPolicyScopeEnum `json:"passwordPolicyScope,omitempty"`
}
