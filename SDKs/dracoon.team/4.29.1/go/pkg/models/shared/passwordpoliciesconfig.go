package shared

type PasswordPoliciesConfig struct {
	EncryptionPasswordPolicies *EncryptionPasswordPolicies `json:"encryptionPasswordPolicies"`
	LoginPasswordPolicies      *LoginPasswordPolicies      `json:"loginPasswordPolicies"`
	SharesPasswordPolicies     *SharesPasswordPolicies     `json:"sharesPasswordPolicies"`
}
