package shared

type Authentication struct {
	PasswordCount *int64                  `json:"PasswordCount"`
	Type          *AuthenticationTypeEnum `json:"Type"`
}
