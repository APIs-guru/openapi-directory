package shared



type ListFilteredBidsResponse struct {
    CreativeStatusRows []CreativeStatusRow `json:"creativeStatusRows,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

