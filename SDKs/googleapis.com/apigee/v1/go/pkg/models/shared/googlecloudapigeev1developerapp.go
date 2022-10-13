package shared

type GoogleCloudApigeeV1DeveloperApp struct {
	APIProducts    []string                        `json:"apiProducts"`
	AppFamily      *string                         `json:"appFamily"`
	AppID          *string                         `json:"appId"`
	Attributes     []GoogleCloudApigeeV1Attribute  `json:"attributes"`
	CallbackURL    *string                         `json:"callbackUrl"`
	CreatedAt      *string                         `json:"createdAt"`
	Credentials    []GoogleCloudApigeeV1Credential `json:"credentials"`
	DeveloperID    *string                         `json:"developerId"`
	KeyExpiresIn   *string                         `json:"keyExpiresIn"`
	LastModifiedAt *string                         `json:"lastModifiedAt"`
	Name           *string                         `json:"name"`
	Scopes         []string                        `json:"scopes"`
	Status         *string                         `json:"status"`
}
