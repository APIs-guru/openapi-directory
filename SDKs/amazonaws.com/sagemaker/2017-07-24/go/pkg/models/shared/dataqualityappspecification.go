package shared

type DataQualityAppSpecification struct {
	ContainerArguments              []string          `json:"ContainerArguments"`
	ContainerEntrypoint             []string          `json:"ContainerEntrypoint"`
	Environment                     map[string]string `json:"Environment"`
	ImageURI                        string            `json:"ImageUri"`
	PostAnalyticsProcessorSourceURI *string           `json:"PostAnalyticsProcessorSourceUri"`
	RecordPreprocessorSourceURI     *string           `json:"RecordPreprocessorSourceUri"`
}
