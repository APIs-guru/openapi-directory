package shared

// TrialComponentSourceDetail
// Detailed information about the source of a trial component. Either <code>ProcessingJob</code> or <code>TrainingJob</code> is returned.
type TrialComponentSourceDetail struct {
	ProcessingJob *ProcessingJob `json:"ProcessingJob,omitempty"`
	SourceArn     *string        `json:"SourceArn,omitempty"`
	TrainingJob   *TrainingJob   `json:"TrainingJob,omitempty"`
	TransformJob  *TransformJob  `json:"TransformJob,omitempty"`
}
