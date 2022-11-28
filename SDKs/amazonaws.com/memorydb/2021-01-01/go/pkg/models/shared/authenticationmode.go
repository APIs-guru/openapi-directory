package shared

// AuthenticationMode
// Denotes the user's authentication properties, such as whether it requires a password to authenticate. Used in output responses.
type AuthenticationMode struct {
	Passwords []string                     `json:"Passwords,omitempty"`
	Type      *InputAuthenticationTypeEnum `json:"Type,omitempty"`
}
