package shared

type ListParentsResponse struct {
	NextToken *string  `json:"NextToken,omitempty"`
	Parents   []Parent `json:"Parents,omitempty"`
}
