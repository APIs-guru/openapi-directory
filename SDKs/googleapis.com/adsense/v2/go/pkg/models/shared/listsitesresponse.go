package shared

type ListSitesResponse struct {
	NextPageToken *string `json:"nextPageToken"`
	Sites         []Site  `json:"sites"`
}
