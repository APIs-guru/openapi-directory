package shared



type ListListingsResponse struct {
    Listings []Listing `json:"listings,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

