package shared

// ListAppsResponse
// Response for the apps list request.
type ListAppsResponse struct {
	Apps          []App   `json:"apps,omitempty"`
	NextPageToken *string `json:"nextPageToken,omitempty"`
}
