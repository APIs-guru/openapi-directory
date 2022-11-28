package shared

// MonitoringAppSpecification
// Container image configuration object for the monitoring job.
type MonitoringAppSpecification struct {
	ContainerArguments              []string `json:"ContainerArguments,omitempty"`
	ContainerEntrypoint             []string `json:"ContainerEntrypoint,omitempty"`
	ImageURI                        string   `json:"ImageUri"`
	PostAnalyticsProcessorSourceURI *string  `json:"PostAnalyticsProcessorSourceUri,omitempty"`
	RecordPreprocessorSourceURI     *string  `json:"RecordPreprocessorSourceUri,omitempty"`
}
