package shared

type GetTagKeysOutput struct {
	PaginationToken *string  `json:"PaginationToken,omitempty"`
	TagKeys         []string `json:"TagKeys,omitempty"`
}
