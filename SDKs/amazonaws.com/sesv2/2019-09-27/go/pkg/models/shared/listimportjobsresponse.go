package shared

type ListImportJobsResponse struct {
	ImportJobs []ImportJobSummary `json:"ImportJobs,omitempty"`
	NextToken  *string            `json:"NextToken,omitempty"`
}
