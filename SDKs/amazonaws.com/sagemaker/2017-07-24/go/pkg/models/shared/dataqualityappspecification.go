package shared



type DataQualityAppSpecification struct {
    ContainerArguments []string `json:"ContainerArguments,omitempty"`
    ContainerEntrypoint []string `json:"ContainerEntrypoint,omitempty"`
    Environment map[string]string `json:"Environment,omitempty"`
    ImageURI string `json:"ImageUri"`
    PostAnalyticsProcessorSourceURI *string `json:"PostAnalyticsProcessorSourceUri,omitempty"`
    RecordPreprocessorSourceURI *string `json:"RecordPreprocessorSourceUri,omitempty"`
    
}

