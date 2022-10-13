package shared

type PlaybackKeyPairSummary struct {
	Arn  *string           `json:"arn"`
	Name *string           `json:"name"`
	Tags map[string]string `json:"tags"`
}
