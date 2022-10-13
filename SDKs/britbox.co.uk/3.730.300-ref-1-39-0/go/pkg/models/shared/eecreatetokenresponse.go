package shared

type EeCreateTokenResponse struct {
	AccessToken *string  `json:"accessToken"`
	ExpiresIn   *float64 `json:"expiresIn"`
	TokenType   *string  `json:"tokenType"`
}
