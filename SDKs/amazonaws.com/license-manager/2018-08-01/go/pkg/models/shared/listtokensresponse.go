package shared

type ListTokensResponse struct {
	NextToken *string     `json:"NextToken"`
	Tokens    []TokenData `json:"Tokens"`
}
