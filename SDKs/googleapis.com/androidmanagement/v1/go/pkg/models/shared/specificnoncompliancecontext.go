package shared

// SpecificNonComplianceContext
// Additional context for SpecificNonComplianceReason.
type SpecificNonComplianceContext struct {
	OncWifiContext          *OncWifiContext          `json:"oncWifiContext,omitempty"`
	PasswordPoliciesContext *PasswordPoliciesContext `json:"passwordPoliciesContext,omitempty"`
}
