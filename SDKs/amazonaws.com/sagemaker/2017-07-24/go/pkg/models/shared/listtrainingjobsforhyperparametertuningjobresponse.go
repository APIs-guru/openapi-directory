package shared

type ListTrainingJobsForHyperParameterTuningJobResponse struct {
	NextToken            *string                            `json:"NextToken,omitempty"`
	TrainingJobSummaries []HyperParameterTrainingJobSummary `json:"TrainingJobSummaries"`
}
