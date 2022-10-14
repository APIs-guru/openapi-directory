package shared

type RateLimitOverviewResources struct {
	CodeScanningUpload  *RateLimit `json:"code_scanning_upload,omitempty"`
	Core                RateLimit  `json:"core"`
	Graphql             *RateLimit `json:"graphql,omitempty"`
	IntegrationManifest *RateLimit `json:"integration_manifest,omitempty"`
	Search              RateLimit  `json:"search"`
	SourceImport        *RateLimit `json:"source_import,omitempty"`
}

type RateLimitOverview struct {
	Rate      RateLimit                  `json:"rate"`
	Resources RateLimitOverviewResources `json:"resources"`
}
