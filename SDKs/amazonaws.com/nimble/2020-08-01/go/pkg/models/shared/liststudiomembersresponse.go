package shared

type ListStudioMembersResponse struct {
	Members   []StudioMembership `json:"members"`
	NextToken *string            `json:"nextToken"`
}
