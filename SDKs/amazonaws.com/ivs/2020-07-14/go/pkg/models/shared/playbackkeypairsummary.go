package shared

type PlaybackKeyPairSummary struct {
	Arn  *string           `json:"arn,omitempty"`
	Name *string           `json:"name,omitempty"`
	Tags map[string]string `json:"tags,omitempty"`
}
