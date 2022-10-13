package shared

type ListMembersResponse struct {
	Members   []Member `json:"members"`
	NextToken *string  `json:"nextToken"`
}
