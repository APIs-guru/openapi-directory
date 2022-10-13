package shared

type ModelQualityAppSpecification struct {
	ContainerArguments              []string                   `json:"ContainerArguments"`
	ContainerEntrypoint             []string                   `json:"ContainerEntrypoint"`
	Environment                     map[string]string          `json:"Environment"`
	ImageURI                        string                     `json:"ImageUri"`
	PostAnalyticsProcessorSourceURI *string                    `json:"PostAnalyticsProcessorSourceUri"`
	ProblemType                     *MonitoringProblemTypeEnum `json:"ProblemType"`
	RecordPreprocessorSourceURI     *string                    `json:"RecordPreprocessorSourceUri"`
}
