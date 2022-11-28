package shared

// FindingProviderSeverity
// The severity assigned to the finding by the finding provider.
type FindingProviderSeverity struct {
	Label    *SeverityLabelEnum `json:"Label,omitempty"`
	Original *string            `json:"Original,omitempty"`
}
