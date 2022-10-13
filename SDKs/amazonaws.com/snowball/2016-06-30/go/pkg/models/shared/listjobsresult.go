package shared

type ListJobsResult struct {
	JobListEntries []JobListEntry `json:"JobListEntries"`
	NextToken      *string        `json:"NextToken"`
}
