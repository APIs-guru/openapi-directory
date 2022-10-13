package shared

type ListClusterJobsResult struct {
	JobListEntries []JobListEntry `json:"JobListEntries"`
	NextToken      *string        `json:"NextToken"`
}
