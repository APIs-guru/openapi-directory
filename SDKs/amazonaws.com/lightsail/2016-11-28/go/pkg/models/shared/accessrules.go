package shared

type AccessRules struct {
	AllowPublicOverrides *bool           `json:"allowPublicOverrides"`
	GetObject            *AccessTypeEnum `json:"getObject"`
}
