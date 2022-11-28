package shared

// ListApisResponse
// Response message for ListApis.
type ListApisResponse struct {
	Apis          []API   `json:"apis,omitempty"`
	NextPageToken *string `json:"nextPageToken,omitempty"`
}
