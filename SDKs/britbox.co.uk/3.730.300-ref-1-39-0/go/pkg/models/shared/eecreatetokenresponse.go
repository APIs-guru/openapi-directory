package shared

type EeCreateTokenResponse struct {
	AccessToken *string  `json:"accessToken,omitempty"`
	ExpiresIn   *float64 `json:"expiresIn,omitempty"`
	TokenType   *string  `json:"tokenType,omitempty"`
}
