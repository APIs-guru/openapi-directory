package shared

type ListLaunchProfileMembersResponse struct {
	Members   []LaunchProfileMembership `json:"members"`
	NextToken *string                   `json:"nextToken"`
}
