package shared

type GoogleCloudApigeeV1Credential struct {
	APIProducts    []GoogleCloudApigeeV1APIProductRef `json:"apiProducts"`
	Attributes     []GoogleCloudApigeeV1Attribute     `json:"attributes"`
	ConsumerKey    *string                            `json:"consumerKey"`
	ConsumerSecret *string                            `json:"consumerSecret"`
	ExpiresAt      *string                            `json:"expiresAt"`
	IssuedAt       *string                            `json:"issuedAt"`
	Scopes         []string                           `json:"scopes"`
	Status         *string                            `json:"status"`
}
