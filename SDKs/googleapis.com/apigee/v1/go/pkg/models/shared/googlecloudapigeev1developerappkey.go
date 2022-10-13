package shared

type GoogleCloudApigeeV1DeveloperAppKey struct {
	APIProducts      []interface{}                  `json:"apiProducts"`
	Attributes       []GoogleCloudApigeeV1Attribute `json:"attributes"`
	ConsumerKey      *string                        `json:"consumerKey"`
	ConsumerSecret   *string                        `json:"consumerSecret"`
	ExpiresAt        *string                        `json:"expiresAt"`
	ExpiresInSeconds *string                        `json:"expiresInSeconds"`
	IssuedAt         *string                        `json:"issuedAt"`
	Scopes           []string                       `json:"scopes"`
	Status           *string                        `json:"status"`
}
