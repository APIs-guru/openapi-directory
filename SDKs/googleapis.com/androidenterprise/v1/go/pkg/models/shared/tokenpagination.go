package shared

type TokenPagination struct {
	NextPageToken     *string `json:"nextPageToken"`
	PreviousPageToken *string `json:"previousPageToken"`
}
