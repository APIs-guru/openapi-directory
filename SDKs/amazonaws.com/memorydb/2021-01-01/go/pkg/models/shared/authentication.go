package shared

// Authentication
// Denotes the user's authentication properties, such as whether it requires a password to authenticate. Used in output responses.
type Authentication struct {
	PasswordCount *int64                  `json:"PasswordCount,omitempty"`
	Type          *AuthenticationTypeEnum `json:"Type,omitempty"`
}
