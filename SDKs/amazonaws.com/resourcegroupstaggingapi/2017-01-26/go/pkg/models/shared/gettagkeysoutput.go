package shared

type GetTagKeysOutput struct {
	PaginationToken *string  `json:"PaginationToken"`
	TagKeys         []string `json:"TagKeys"`
}
