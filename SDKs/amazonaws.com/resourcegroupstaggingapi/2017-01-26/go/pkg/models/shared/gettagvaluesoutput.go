package shared

type GetTagValuesOutput struct {
	PaginationToken *string  `json:"PaginationToken"`
	TagValues       []string `json:"TagValues"`
}
