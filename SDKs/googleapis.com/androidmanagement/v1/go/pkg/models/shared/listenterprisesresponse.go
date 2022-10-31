package shared



type ListEnterprisesResponse struct {
    Enterprises []Enterprise `json:"enterprises,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

