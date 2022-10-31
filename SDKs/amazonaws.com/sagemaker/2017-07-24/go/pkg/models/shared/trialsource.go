package shared

type TrialSource struct {
	SourceArn  string  `json:"SourceArn"`
	SourceType *string `json:"SourceType,omitempty"`
}
