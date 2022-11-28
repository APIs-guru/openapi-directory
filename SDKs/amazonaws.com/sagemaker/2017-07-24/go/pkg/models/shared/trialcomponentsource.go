package shared

// TrialComponentSource
// The Amazon Resource Name (ARN) and job type of the source of a trial component.
type TrialComponentSource struct {
	SourceArn  string  `json:"SourceArn"`
	SourceType *string `json:"SourceType,omitempty"`
}
