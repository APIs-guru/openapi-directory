package shared

// ListOperationsResponse
// The response message for Operations.ListOperations.
type ListOperationsResponse struct {
	NextPageToken *string     `json:"nextPageToken,omitempty"`
	Operations    []Operation `json:"operations,omitempty"`
}
