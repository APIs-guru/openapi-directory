package shared

type ListDataIngestionJobsResponse struct {
	DataIngestionJobSummaries []DataIngestionJobSummary `json:"DataIngestionJobSummaries"`
	NextToken                 *string                   `json:"NextToken"`
}
