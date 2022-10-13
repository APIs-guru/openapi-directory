package shared

type ListTrainingJobsForHyperParameterTuningJobResponse struct {
	NextToken            *string                            `json:"NextToken"`
	TrainingJobSummaries []HyperParameterTrainingJobSummary `json:"TrainingJobSummaries"`
}
