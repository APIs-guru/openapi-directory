package shared

// ListAPIVersionsResponse
// Response message for ListApiVersions.
type ListAPIVersionsResponse struct {
	APIVersions   []APIVersion `json:"apiVersions,omitempty"`
	NextPageToken *string      `json:"nextPageToken,omitempty"`
}
