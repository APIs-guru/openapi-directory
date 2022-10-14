package shared

type ListAPIVersionsResponse struct {
	APIVersions   []APIVersion `json:"apiVersions,omitempty"`
	NextPageToken *string      `json:"nextPageToken,omitempty"`
}
