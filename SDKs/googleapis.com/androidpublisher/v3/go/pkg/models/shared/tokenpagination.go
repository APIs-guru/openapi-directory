package shared

type TokenPagination struct {
	NextPageToken     *string `json:"nextPageToken,omitempty"`
	PreviousPageToken *string `json:"previousPageToken,omitempty"`
}
