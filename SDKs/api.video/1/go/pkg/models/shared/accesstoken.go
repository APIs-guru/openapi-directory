package shared

type AccessToken struct {
	AccessToken  *string `json:"access_token"`
	ExpiresIn    *int64  `json:"expires_in"`
	RefreshToken *string `json:"refresh_token"`
	TokenType    *string `json:"token_type"`
}
