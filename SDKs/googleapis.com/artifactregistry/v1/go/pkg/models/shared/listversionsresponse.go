package shared

type ListVersionsResponse struct {
	NextPageToken *string   `json:"nextPageToken"`
	Versions      []Version `json:"versions"`
}
