package shared

type ListItemsResponse struct {
	Items     []Item  `json:"Items,omitempty"`
	NextToken *string `json:"NextToken,omitempty"`
}
