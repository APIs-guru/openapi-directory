package shared



type ReportingMetadataEntry struct {
    CompatibleDimensions []string `json:"compatibleDimensions,omitempty"`
    CompatibleMetrics []string `json:"compatibleMetrics,omitempty"`
    ID *string `json:"id,omitempty"`
    Kind *string `json:"kind,omitempty"`
    RequiredDimensions []string `json:"requiredDimensions,omitempty"`
    RequiredMetrics []string `json:"requiredMetrics,omitempty"`
    SupportedProducts []string `json:"supportedProducts,omitempty"`
    
}

