package shared

type FindingProviderSeverity struct {
	Label    *SeverityLabelEnum `json:"Label,omitempty"`
	Original *string            `json:"Original,omitempty"`
}
