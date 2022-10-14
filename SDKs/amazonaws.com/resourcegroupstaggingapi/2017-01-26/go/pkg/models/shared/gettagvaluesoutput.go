package shared

type GetTagValuesOutput struct {
	PaginationToken *string  `json:"PaginationToken,omitempty"`
	TagValues       []string `json:"TagValues,omitempty"`
}
