package shared

type ListMembersResponse struct {
	Members   []Member `json:"Members"`
	NextToken *string  `json:"NextToken"`
}
