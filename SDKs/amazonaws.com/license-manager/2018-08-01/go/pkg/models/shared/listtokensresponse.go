package shared



type ListTokensResponse struct {
    NextToken *string `json:"NextToken,omitempty"`
    Tokens []TokenData `json:"Tokens,omitempty"`
    
}

