package shared

type CreateTokenResponse struct {
	AccessToken  *string `json:"accessToken,omitempty"`
	ExpiresIn    *int64  `json:"expiresIn,omitempty"`
	IDToken      *string `json:"idToken,omitempty"`
	RefreshToken *string `json:"refreshToken,omitempty"`
	TokenType    *string `json:"tokenType,omitempty"`
}
