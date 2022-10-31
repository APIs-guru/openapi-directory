package shared

type Authentication struct {
	PasswordCount *int64                  `json:"PasswordCount,omitempty"`
	Type          *AuthenticationTypeEnum `json:"Type,omitempty"`
}
