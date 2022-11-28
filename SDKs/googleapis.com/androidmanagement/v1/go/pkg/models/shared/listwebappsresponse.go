package shared

// ListWebAppsResponse
// Response to a request to list web apps for a given enterprise.
type ListWebAppsResponse struct {
	NextPageToken *string  `json:"nextPageToken,omitempty"`
	WebApps       []WebApp `json:"webApps,omitempty"`
}
