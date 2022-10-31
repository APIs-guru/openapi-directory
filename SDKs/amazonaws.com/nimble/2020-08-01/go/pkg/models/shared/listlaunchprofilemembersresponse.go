package shared



type ListLaunchProfileMembersResponse struct {
    Members []LaunchProfileMembership `json:"members,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

