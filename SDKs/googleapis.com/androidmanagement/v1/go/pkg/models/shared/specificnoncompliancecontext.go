package shared

type SpecificNonComplianceContext struct {
	OncWifiContext          *OncWifiContext          `json:"oncWifiContext"`
	PasswordPoliciesContext *PasswordPoliciesContext `json:"passwordPoliciesContext"`
}
