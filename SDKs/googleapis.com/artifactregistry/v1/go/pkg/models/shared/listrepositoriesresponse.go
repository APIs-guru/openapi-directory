package shared

type ListRepositoriesResponse struct {
	NextPageToken *string      `json:"nextPageToken"`
	Repositories  []Repository `json:"repositories"`
}
