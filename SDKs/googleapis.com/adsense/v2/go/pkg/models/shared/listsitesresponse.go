package shared

// ListSitesResponse
// Response definition for the sites list rpc.
type ListSitesResponse struct {
	NextPageToken *string `json:"nextPageToken,omitempty"`
	Sites         []Site  `json:"sites,omitempty"`
}
