package shared



type CreateTokenResponse struct {
    Token *string `json:"Token,omitempty"`
    TokenID *string `json:"TokenId,omitempty"`
    TokenType *TokenTypeEnum `json:"TokenType,omitempty"`
    
}

