package shared

type ListStatementsResponse struct {
	NextToken  *string         `json:"NextToken"`
	Statements []StatementData `json:"Statements"`
}
