package shared

// CorsRule
// A rule for a CORS policy. You can add up to 100 rules to a CORS policy. If more than one rule applies, the service uses the first applicable rule listed.
type CorsRule struct {
	AllowedHeaders []string         `json:"AllowedHeaders"`
	AllowedMethods []MethodNameEnum `json:"AllowedMethods,omitempty"`
	AllowedOrigins []string         `json:"AllowedOrigins"`
	ExposeHeaders  []string         `json:"ExposeHeaders,omitempty"`
	MaxAgeSeconds  *int64           `json:"MaxAgeSeconds,omitempty"`
}
