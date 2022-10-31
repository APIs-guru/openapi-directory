package shared

type ListOrgDataExchangesResponse struct {
	DataExchanges []DataExchange `json:"dataExchanges,omitempty"`
	NextPageToken *string        `json:"nextPageToken,omitempty"`
}
