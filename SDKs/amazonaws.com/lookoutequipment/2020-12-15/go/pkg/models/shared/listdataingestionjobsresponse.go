package shared

type ListDataIngestionJobsResponse struct {
	DataIngestionJobSummaries []DataIngestionJobSummary `json:"DataIngestionJobSummaries,omitempty"`
	NextToken                 *string                   `json:"NextToken,omitempty"`
}
