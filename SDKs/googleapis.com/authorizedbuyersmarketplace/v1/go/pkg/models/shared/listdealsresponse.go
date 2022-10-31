package shared

type ListDealsResponse struct {
	Deals         []Deal  `json:"deals,omitempty"`
	NextPageToken *string `json:"nextPageToken,omitempty"`
}
