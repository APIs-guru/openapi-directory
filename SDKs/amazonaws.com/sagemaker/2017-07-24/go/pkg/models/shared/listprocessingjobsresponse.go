package shared

type ListProcessingJobsResponse struct {
	NextToken              *string                `json:"NextToken"`
	ProcessingJobSummaries []ProcessingJobSummary `json:"ProcessingJobSummaries"`
}
