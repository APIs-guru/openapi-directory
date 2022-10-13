package shared

type ListDealsResponse struct {
	Deals         []Deal  `json:"deals"`
	NextPageToken *string `json:"nextPageToken"`
}
