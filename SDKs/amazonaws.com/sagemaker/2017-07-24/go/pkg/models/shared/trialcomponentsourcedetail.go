package shared

type TrialComponentSourceDetail struct {
	ProcessingJob *ProcessingJob `json:"ProcessingJob,omitempty"`
	SourceArn     *string        `json:"SourceArn,omitempty"`
	TrainingJob   *TrainingJob   `json:"TrainingJob,omitempty"`
	TransformJob  *TransformJob  `json:"TransformJob,omitempty"`
}
