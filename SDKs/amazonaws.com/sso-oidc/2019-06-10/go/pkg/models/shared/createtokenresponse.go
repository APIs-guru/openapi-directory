package shared

type CreateTokenResponse struct {
	AccessToken  *string `json:"accessToken"`
	ExpiresIn    *int64  `json:"expiresIn"`
	IDToken      *string `json:"idToken"`
	RefreshToken *string `json:"refreshToken"`
	TokenType    *string `json:"tokenType"`
}
