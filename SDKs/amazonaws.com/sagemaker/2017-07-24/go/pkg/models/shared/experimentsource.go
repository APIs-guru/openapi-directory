package shared

// ExperimentSource
// The source of the experiment.
type ExperimentSource struct {
	SourceArn  string  `json:"SourceArn"`
	SourceType *string `json:"SourceType,omitempty"`
}
