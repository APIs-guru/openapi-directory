package shared



type ListFinalizedDealsResponse struct {
    FinalizedDeals []FinalizedDeal `json:"finalizedDeals,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

