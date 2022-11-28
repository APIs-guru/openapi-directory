package shared

// ListVersionsResponse
// Response message for Versions.ListVersions.
type ListVersionsResponse struct {
	NextPageToken *string   `json:"nextPageToken,omitempty"`
	Versions      []Version `json:"versions,omitempty"`
}
