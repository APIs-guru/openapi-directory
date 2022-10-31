package shared

type ExperimentSource struct {
	SourceArn  string  `json:"SourceArn"`
	SourceType *string `json:"SourceType,omitempty"`
}
