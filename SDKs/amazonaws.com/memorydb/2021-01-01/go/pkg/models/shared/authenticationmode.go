package shared

type AuthenticationMode struct {
	Passwords []string                     `json:"Passwords"`
	Type      *InputAuthenticationTypeEnum `json:"Type"`
}
