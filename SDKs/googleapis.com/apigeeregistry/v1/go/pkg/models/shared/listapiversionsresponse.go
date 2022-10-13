package shared

type ListAPIVersionsResponse struct {
	APIVersions   []APIVersion `json:"apiVersions"`
	NextPageToken *string      `json:"nextPageToken"`
}
