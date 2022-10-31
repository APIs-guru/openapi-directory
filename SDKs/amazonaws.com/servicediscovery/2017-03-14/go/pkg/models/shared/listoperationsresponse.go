package shared

type ListOperationsResponse struct {
	NextToken  *string            `json:"NextToken,omitempty"`
	Operations []OperationSummary `json:"Operations,omitempty"`
}
