package shared

type ListTrainingJobsResponse struct {
	NextToken            *string              `json:"NextToken"`
	TrainingJobSummaries []TrainingJobSummary `json:"TrainingJobSummaries"`
}
