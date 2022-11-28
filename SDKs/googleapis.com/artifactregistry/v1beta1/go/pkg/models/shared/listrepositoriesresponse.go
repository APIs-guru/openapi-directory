package shared

// ListRepositoriesResponse
// The response from listing repositories.
type ListRepositoriesResponse struct {
	NextPageToken *string      `json:"nextPageToken,omitempty"`
	Repositories  []Repository `json:"repositories,omitempty"`
}
