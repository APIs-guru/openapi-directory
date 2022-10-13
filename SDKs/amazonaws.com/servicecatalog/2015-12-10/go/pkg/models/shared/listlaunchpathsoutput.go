package shared

type ListLaunchPathsOutput struct {
	LaunchPathSummaries []LaunchPathSummary `json:"LaunchPathSummaries"`
	NextPageToken       *string             `json:"NextPageToken"`
}
