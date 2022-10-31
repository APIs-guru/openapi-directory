package shared



type ListFilteredBidRequestsResponse struct {
    CalloutStatusRows []CalloutStatusRow `json:"calloutStatusRows,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

