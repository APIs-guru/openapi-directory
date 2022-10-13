package shared

type ListOrgDataExchangesResponse struct {
	DataExchanges []DataExchange `json:"dataExchanges"`
	NextPageToken *string        `json:"nextPageToken"`
}
