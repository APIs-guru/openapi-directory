package shared

// ListPackagesResponse
// The response from listing packages.
type ListPackagesResponse struct {
	NextPageToken *string   `json:"nextPageToken,omitempty"`
	Packages      []Package `json:"packages,omitempty"`
}
