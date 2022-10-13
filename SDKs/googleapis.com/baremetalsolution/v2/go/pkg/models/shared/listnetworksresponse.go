package shared

type ListNetworksResponse struct {
	Networks      []Network `json:"networks"`
	NextPageToken *string   `json:"nextPageToken"`
	Unreachable   []string  `json:"unreachable"`
}
