package shared

// ListProductsResponse
// Response message for listing products visible to the buyer.
type ListProductsResponse struct {
	NextPageToken *string   `json:"nextPageToken,omitempty"`
	Products      []Product `json:"products,omitempty"`
}
