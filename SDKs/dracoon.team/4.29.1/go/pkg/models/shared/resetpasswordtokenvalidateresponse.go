package shared



type ResetPasswordTokenValidateResponse struct {
    AllowSystemGlobalWeakPassword *bool `json:"allowSystemGlobalWeakPassword,omitempty"`
    FirstName string `json:"firstName"`
    Gender *string `json:"gender,omitempty"`
    LastName string `json:"lastName"`
    LoginPasswordPolicies *LoginPasswordPolicies `json:"loginPasswordPolicies,omitempty"`
    Title *string `json:"title,omitempty"`
    
}

