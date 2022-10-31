package shared

type ListNetworksResponse struct {
	Networks      []Network `json:"networks,omitempty"`
	NextPageToken *string   `json:"nextPageToken,omitempty"`
	Unreachable   []string  `json:"unreachable,omitempty"`
}
