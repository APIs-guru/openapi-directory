package shared

type ListChildrenResponse struct {
	Children  []Child `json:"Children"`
	NextToken *string `json:"NextToken"`
}
