package shared

type GetStatementResultRequest struct {
	ID        string  `json:"Id"`
	NextToken *string `json:"NextToken"`
}
