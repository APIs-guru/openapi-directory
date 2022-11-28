package shared

// ListOperationsResponse
// The ListOperations response includes the following elements.
type ListOperationsResponse struct {
	NextPageMarker *string            `json:"NextPageMarker,omitempty"`
	Operations     []OperationSummary `json:"Operations"`
}
