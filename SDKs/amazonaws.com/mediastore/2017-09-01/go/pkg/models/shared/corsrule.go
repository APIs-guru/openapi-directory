package shared

type CorsRule struct {
	AllowedHeaders []string         `json:"AllowedHeaders"`
	AllowedMethods []MethodNameEnum `json:"AllowedMethods"`
	AllowedOrigins []string         `json:"AllowedOrigins"`
	ExposeHeaders  []string         `json:"ExposeHeaders"`
	MaxAgeSeconds  *int64           `json:"MaxAgeSeconds"`
}
