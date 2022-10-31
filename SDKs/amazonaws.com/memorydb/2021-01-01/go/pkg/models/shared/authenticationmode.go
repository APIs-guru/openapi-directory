package shared



type AuthenticationMode struct {
    Passwords []string `json:"Passwords,omitempty"`
    Type *InputAuthenticationTypeEnum `json:"Type,omitempty"`
    
}

