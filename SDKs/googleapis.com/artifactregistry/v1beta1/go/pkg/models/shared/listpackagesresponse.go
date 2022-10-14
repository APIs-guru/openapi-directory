package shared

type ListPackagesResponse struct {
	NextPageToken *string   `json:"nextPageToken,omitempty"`
	Packages      []Package `json:"packages,omitempty"`
}
