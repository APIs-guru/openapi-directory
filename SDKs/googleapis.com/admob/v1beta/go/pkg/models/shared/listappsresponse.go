package shared

type ListAppsResponse struct {
	Apps          []App   `json:"apps"`
	NextPageToken *string `json:"nextPageToken"`
}
