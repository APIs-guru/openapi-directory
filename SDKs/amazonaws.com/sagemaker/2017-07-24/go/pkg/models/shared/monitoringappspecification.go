package shared

type MonitoringAppSpecification struct {
	ContainerArguments              []string `json:"ContainerArguments"`
	ContainerEntrypoint             []string `json:"ContainerEntrypoint"`
	ImageURI                        string   `json:"ImageUri"`
	PostAnalyticsProcessorSourceURI *string  `json:"PostAnalyticsProcessorSourceUri"`
	RecordPreprocessorSourceURI     *string  `json:"RecordPreprocessorSourceUri"`
}
