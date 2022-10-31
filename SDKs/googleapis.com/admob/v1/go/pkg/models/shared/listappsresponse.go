package shared

type ListAppsResponse struct {
	Apps          []App   `json:"apps,omitempty"`
	NextPageToken *string `json:"nextPageToken,omitempty"`
}
