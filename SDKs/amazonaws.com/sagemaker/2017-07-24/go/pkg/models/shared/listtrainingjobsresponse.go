package shared

type ListTrainingJobsResponse struct {
	NextToken            *string              `json:"NextToken,omitempty"`
	TrainingJobSummaries []TrainingJobSummary `json:"TrainingJobSummaries"`
}
