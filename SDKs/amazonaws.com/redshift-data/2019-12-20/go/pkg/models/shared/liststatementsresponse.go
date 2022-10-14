package shared

type ListStatementsResponse struct {
	NextToken  *string         `json:"NextToken,omitempty"`
	Statements []StatementData `json:"Statements"`
}
