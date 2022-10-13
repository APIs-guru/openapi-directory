package shared

type ListGroupMembersResponse struct {
	Members   []Member `json:"Members"`
	NextToken *string  `json:"NextToken"`
}
