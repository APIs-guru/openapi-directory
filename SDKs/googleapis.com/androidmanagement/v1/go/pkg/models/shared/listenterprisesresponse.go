package shared

// ListEnterprisesResponse
// Response to a request to list enterprises.
type ListEnterprisesResponse struct {
	Enterprises   []Enterprise `json:"enterprises,omitempty"`
	NextPageToken *string      `json:"nextPageToken,omitempty"`
}
