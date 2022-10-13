package shared

type UpdatePasswordPoliciesConfig struct {
	EncryptionPasswordPolicies *UpdateEncryptionPasswordPolicies `json:"encryptionPasswordPolicies"`
	LoginPasswordPolicies      *UpdateLoginPasswordPolicies      `json:"loginPasswordPolicies"`
	SharesPasswordPolicies     *UpdateSharesPasswordPolicies     `json:"sharesPasswordPolicies"`
}
