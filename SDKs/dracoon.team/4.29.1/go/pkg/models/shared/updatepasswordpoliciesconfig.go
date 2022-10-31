package shared

type UpdatePasswordPoliciesConfig struct {
	EncryptionPasswordPolicies *UpdateEncryptionPasswordPolicies `json:"encryptionPasswordPolicies,omitempty"`
	LoginPasswordPolicies      *UpdateLoginPasswordPolicies      `json:"loginPasswordPolicies,omitempty"`
	SharesPasswordPolicies     *UpdateSharesPasswordPolicies     `json:"sharesPasswordPolicies,omitempty"`
}
