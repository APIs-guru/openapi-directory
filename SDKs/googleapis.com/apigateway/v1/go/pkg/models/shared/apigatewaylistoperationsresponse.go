package shared

// ApigatewayListOperationsResponse
// The response message for Operations.ListOperations.
type ApigatewayListOperationsResponse struct {
	NextPageToken *string               `json:"nextPageToken,omitempty"`
	Operations    []ApigatewayOperation `json:"operations,omitempty"`
}
