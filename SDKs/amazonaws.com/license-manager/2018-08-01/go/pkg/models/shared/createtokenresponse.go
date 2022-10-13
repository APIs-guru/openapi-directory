package shared

type CreateTokenResponse struct {
	Token     *string        `json:"Token"`
	TokenID   *string        `json:"TokenId"`
	TokenType *TokenTypeEnum `json:"TokenType"`
}
