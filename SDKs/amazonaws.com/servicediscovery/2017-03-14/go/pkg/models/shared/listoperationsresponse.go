package shared

type ListOperationsResponse struct {
	NextToken  *string            `json:"NextToken"`
	Operations []OperationSummary `json:"Operations"`
}
