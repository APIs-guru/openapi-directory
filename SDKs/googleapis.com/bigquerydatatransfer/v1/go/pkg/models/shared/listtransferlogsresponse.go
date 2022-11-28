package shared

// ListTransferLogsResponse
// The returned list transfer run messages.
type ListTransferLogsResponse struct {
	NextPageToken    *string           `json:"nextPageToken,omitempty"`
	TransferMessages []TransferMessage `json:"transferMessages,omitempty"`
}
