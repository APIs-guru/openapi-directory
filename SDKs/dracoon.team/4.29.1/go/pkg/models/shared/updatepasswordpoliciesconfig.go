package shared

// UpdatePasswordPoliciesConfig
// Request model for updating a set of password policies
type UpdatePasswordPoliciesConfig struct {
	EncryptionPasswordPolicies *UpdateEncryptionPasswordPolicies `json:"encryptionPasswordPolicies,omitempty"`
	LoginPasswordPolicies      *UpdateLoginPasswordPolicies      `json:"loginPasswordPolicies,omitempty"`
	SharesPasswordPolicies     *UpdateSharesPasswordPolicies     `json:"sharesPasswordPolicies,omitempty"`
}
