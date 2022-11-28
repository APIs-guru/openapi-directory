package shared

// ListImportJobsResponse
// An HTTP 200 response if the request succeeds, or an error message if the request fails.
type ListImportJobsResponse struct {
	ImportJobs []ImportJobSummary `json:"ImportJobs,omitempty"`
	NextToken  *string            `json:"NextToken,omitempty"`
}
