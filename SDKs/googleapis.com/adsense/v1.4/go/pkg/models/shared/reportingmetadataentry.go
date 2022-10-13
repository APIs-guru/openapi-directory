package shared

type ReportingMetadataEntry struct {
	CompatibleDimensions []string `json:"compatibleDimensions"`
	CompatibleMetrics    []string `json:"compatibleMetrics"`
	ID                   *string  `json:"id"`
	Kind                 *string  `json:"kind"`
	RequiredDimensions   []string `json:"requiredDimensions"`
	RequiredMetrics      []string `json:"requiredMetrics"`
	SupportedProducts    []string `json:"supportedProducts"`
}
