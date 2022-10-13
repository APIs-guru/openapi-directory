package shared

type ListOperationsResponse struct {
	NextPageMarker *string            `json:"NextPageMarker"`
	Operations     []OperationSummary `json:"Operations"`
}
