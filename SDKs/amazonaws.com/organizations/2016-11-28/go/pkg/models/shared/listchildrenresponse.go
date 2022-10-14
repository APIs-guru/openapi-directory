package shared

type ListChildrenResponse struct {
	Children  []Child `json:"Children,omitempty"`
	NextToken *string `json:"NextToken,omitempty"`
}
