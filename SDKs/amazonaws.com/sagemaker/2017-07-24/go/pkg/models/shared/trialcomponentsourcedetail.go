package shared

type TrialComponentSourceDetail struct {
	ProcessingJob *ProcessingJob `json:"ProcessingJob"`
	SourceArn     *string        `json:"SourceArn"`
	TrainingJob   *TrainingJob   `json:"TrainingJob"`
	TransformJob  *TransformJob  `json:"TransformJob"`
}
