package shared

// ListVersionsResponse
// The response from listing versions.
type ListVersionsResponse struct {
	NextPageToken *string   `json:"nextPageToken,omitempty"`
	Versions      []Version `json:"versions,omitempty"`
}
