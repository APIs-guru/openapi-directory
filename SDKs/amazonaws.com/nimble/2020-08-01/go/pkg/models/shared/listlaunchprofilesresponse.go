package shared

type ListLaunchProfilesResponse struct {
	LaunchProfiles []LaunchProfile `json:"launchProfiles"`
	NextToken      *string         `json:"nextToken"`
}
