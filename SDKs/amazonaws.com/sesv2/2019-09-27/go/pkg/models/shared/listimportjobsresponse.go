package shared

type ListImportJobsResponse struct {
	ImportJobs []ImportJobSummary `json:"ImportJobs"`
	NextToken  *string            `json:"NextToken"`
}
