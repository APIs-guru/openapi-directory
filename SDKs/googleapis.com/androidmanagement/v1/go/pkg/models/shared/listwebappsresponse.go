package shared

type ListWebAppsResponse struct {
	NextPageToken *string  `json:"nextPageToken"`
	WebApps       []WebApp `json:"webApps"`
}
