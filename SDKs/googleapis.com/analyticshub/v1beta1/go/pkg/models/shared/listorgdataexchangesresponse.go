package shared

// ListOrgDataExchangesResponse
// Message for response to listing data exchanges in an organization and location.
type ListOrgDataExchangesResponse struct {
	DataExchanges []DataExchange `json:"dataExchanges,omitempty"`
	NextPageToken *string        `json:"nextPageToken,omitempty"`
}
