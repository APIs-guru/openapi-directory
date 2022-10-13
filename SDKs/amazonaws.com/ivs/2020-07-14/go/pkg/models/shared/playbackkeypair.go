package shared

type PlaybackKeyPair struct {
	Arn         *string           `json:"arn"`
	Fingerprint *string           `json:"fingerprint"`
	Name        *string           `json:"name"`
	Tags        map[string]string `json:"tags"`
}
