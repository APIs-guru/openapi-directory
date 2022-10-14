package shared

type PasswordPoliciesConfig struct {
	EncryptionPasswordPolicies *EncryptionPasswordPolicies `json:"encryptionPasswordPolicies,omitempty"`
	LoginPasswordPolicies      *LoginPasswordPolicies      `json:"loginPasswordPolicies,omitempty"`
	SharesPasswordPolicies     *SharesPasswordPolicies     `json:"sharesPasswordPolicies,omitempty"`
}
