package shared



type ListDataExchangesResponse struct {
    DataExchanges []DataExchange `json:"dataExchanges,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

