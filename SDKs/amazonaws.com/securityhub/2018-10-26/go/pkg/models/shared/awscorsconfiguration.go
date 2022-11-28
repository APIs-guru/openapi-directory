package shared

// AwsCorsConfiguration
// Contains the cross-origin resource sharing (CORS) configuration for the API. CORS is only supported for HTTP APIs.
type AwsCorsConfiguration struct {
	AllowCredentials *bool    `json:"AllowCredentials,omitempty"`
	AllowHeaders     []string `json:"AllowHeaders,omitempty"`
	AllowMethods     []string `json:"AllowMethods,omitempty"`
	AllowOrigins     []string `json:"AllowOrigins,omitempty"`
	ExposeHeaders    []string `json:"ExposeHeaders,omitempty"`
	MaxAge           *int64   `json:"MaxAge,omitempty"`
}
