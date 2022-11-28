package shared

// ListCreativesResponse
// A response for listing creatives.
type ListCreativesResponse struct {
	Creatives     []Creative `json:"creatives,omitempty"`
	NextPageToken *string    `json:"nextPageToken,omitempty"`
}
