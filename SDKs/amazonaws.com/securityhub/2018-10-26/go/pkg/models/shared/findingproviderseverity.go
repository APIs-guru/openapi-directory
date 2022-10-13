package shared

type FindingProviderSeverity struct {
	Label    *SeverityLabelEnum `json:"Label"`
	Original *string            `json:"Original"`
}
