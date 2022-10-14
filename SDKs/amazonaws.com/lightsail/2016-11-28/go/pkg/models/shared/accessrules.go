package shared

type AccessRules struct {
	AllowPublicOverrides *bool           `json:"allowPublicOverrides,omitempty"`
	GetObject            *AccessTypeEnum `json:"getObject,omitempty"`
}
