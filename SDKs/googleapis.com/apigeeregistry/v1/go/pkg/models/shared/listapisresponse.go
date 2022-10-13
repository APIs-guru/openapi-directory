package shared

type ListApisResponse struct {
	Apis          []API   `json:"apis"`
	NextPageToken *string `json:"nextPageToken"`
}
