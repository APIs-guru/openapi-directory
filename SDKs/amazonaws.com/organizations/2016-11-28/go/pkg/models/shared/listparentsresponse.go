package shared

type ListParentsResponse struct {
	NextToken *string  `json:"NextToken"`
	Parents   []Parent `json:"Parents"`
}
