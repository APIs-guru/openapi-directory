package shared

// ListNetworksResponse
// Response message containing the list of networks.
type ListNetworksResponse struct {
	Networks      []Network `json:"networks,omitempty"`
	NextPageToken *string   `json:"nextPageToken,omitempty"`
	Unreachable   []string  `json:"unreachable,omitempty"`
}
