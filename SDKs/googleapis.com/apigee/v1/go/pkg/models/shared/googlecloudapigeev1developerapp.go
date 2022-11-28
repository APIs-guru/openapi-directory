package shared

type GoogleCloudApigeeV1DeveloperAppInput struct {
	APIProducts  []string                       `json:"apiProducts,omitempty"`
	AppFamily    *string                        `json:"appFamily,omitempty"`
	AppID        *string                        `json:"appId,omitempty"`
	Attributes   []GoogleCloudApigeeV1Attribute `json:"attributes,omitempty"`
	CallbackURL  *string                        `json:"callbackUrl,omitempty"`
	DeveloperID  *string                        `json:"developerId,omitempty"`
	KeyExpiresIn *string                        `json:"keyExpiresIn,omitempty"`
	Name         *string                        `json:"name,omitempty"`
	Scopes       []string                       `json:"scopes,omitempty"`
	Status       *string                        `json:"status,omitempty"`
}

type GoogleCloudApigeeV1DeveloperApp struct {
	APIProducts    []string                        `json:"apiProducts,omitempty"`
	AppFamily      *string                         `json:"appFamily,omitempty"`
	AppID          *string                         `json:"appId,omitempty"`
	Attributes     []GoogleCloudApigeeV1Attribute  `json:"attributes,omitempty"`
	CallbackURL    *string                         `json:"callbackUrl,omitempty"`
	CreatedAt      *string                         `json:"createdAt,omitempty"`
	Credentials    []GoogleCloudApigeeV1Credential `json:"credentials,omitempty"`
	DeveloperID    *string                         `json:"developerId,omitempty"`
	KeyExpiresIn   *string                         `json:"keyExpiresIn,omitempty"`
	LastModifiedAt *string                         `json:"lastModifiedAt,omitempty"`
	Name           *string                         `json:"name,omitempty"`
	Scopes         []string                        `json:"scopes,omitempty"`
	Status         *string                         `json:"status,omitempty"`
}
