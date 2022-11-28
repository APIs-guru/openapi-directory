package shared

// GoogleLongrunningListOperationsResponse
// The response message for Operations.ListOperations.
type GoogleLongrunningListOperationsResponse struct {
	NextPageToken *string                      `json:"nextPageToken,omitempty"`
	Operations    []GoogleLongrunningOperation `json:"operations,omitempty"`
}
