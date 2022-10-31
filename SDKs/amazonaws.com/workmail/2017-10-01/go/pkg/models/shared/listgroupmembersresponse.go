package shared

type ListGroupMembersResponse struct {
	Members   []Member `json:"Members,omitempty"`
	NextToken *string  `json:"NextToken,omitempty"`
}
