package shared

type ListPackagesResponse struct {
	NextPageToken *string   `json:"nextPageToken"`
	Packages      []Package `json:"packages"`
}
