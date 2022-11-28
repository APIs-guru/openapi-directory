package shared

// ListListingsResponse
// Message for response to the list of Listings.
type ListListingsResponse struct {
	Listings      []Listing `json:"listings,omitempty"`
	NextPageToken *string   `json:"nextPageToken,omitempty"`
}
