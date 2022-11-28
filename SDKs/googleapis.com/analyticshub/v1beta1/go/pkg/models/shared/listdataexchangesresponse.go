package shared

// ListDataExchangesResponse
// Message for response to the list of data exchanges.
type ListDataExchangesResponse struct {
	DataExchanges []DataExchange `json:"dataExchanges,omitempty"`
	NextPageToken *string        `json:"nextPageToken,omitempty"`
}
