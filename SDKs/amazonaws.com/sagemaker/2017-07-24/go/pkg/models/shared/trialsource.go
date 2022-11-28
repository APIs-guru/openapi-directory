package shared

// TrialSource
// The source of the trial.
type TrialSource struct {
	SourceArn  string  `json:"SourceArn"`
	SourceType *string `json:"SourceType,omitempty"`
}
