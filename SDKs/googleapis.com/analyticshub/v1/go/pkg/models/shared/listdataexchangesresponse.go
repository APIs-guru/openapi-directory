package shared

type ListDataExchangesResponse struct {
	DataExchanges []DataExchange `json:"dataExchanges"`
	NextPageToken *string        `json:"nextPageToken"`
}
