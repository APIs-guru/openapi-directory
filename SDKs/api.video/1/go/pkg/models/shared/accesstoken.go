package shared

type AccessToken struct {
	AccessToken  *string `json:"access_token,omitempty"`
	ExpiresIn    *int64  `json:"expires_in,omitempty"`
	RefreshToken *string `json:"refresh_token,omitempty"`
	TokenType    *string `json:"token_type,omitempty"`
}
