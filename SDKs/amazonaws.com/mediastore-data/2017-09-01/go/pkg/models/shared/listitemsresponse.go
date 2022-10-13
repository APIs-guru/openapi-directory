package shared

type ListItemsResponse struct {
	Items     []Item  `json:"Items"`
	NextToken *string `json:"NextToken"`
}
