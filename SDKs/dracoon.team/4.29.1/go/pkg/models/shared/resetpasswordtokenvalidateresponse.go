package shared

type ResetPasswordTokenValidateResponse struct {
	AllowSystemGlobalWeakPassword *bool                  `json:"allowSystemGlobalWeakPassword"`
	FirstName                     string                 `json:"firstName"`
	Gender                        *string                `json:"gender"`
	LastName                      string                 `json:"lastName"`
	LoginPasswordPolicies         *LoginPasswordPolicies `json:"loginPasswordPolicies"`
	Title                         *string                `json:"title"`
}
