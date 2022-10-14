package shared

type ListApisResponse struct {
	Apis          []API   `json:"apis,omitempty"`
	NextPageToken *string `json:"nextPageToken,omitempty"`
}
