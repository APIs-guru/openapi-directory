package shared

type CorsRule struct {
	AllowedHeaders []string         `json:"AllowedHeaders"`
	AllowedMethods []MethodNameEnum `json:"AllowedMethods,omitempty"`
	AllowedOrigins []string         `json:"AllowedOrigins"`
	ExposeHeaders  []string         `json:"ExposeHeaders,omitempty"`
	MaxAgeSeconds  *int64           `json:"MaxAgeSeconds,omitempty"`
}
