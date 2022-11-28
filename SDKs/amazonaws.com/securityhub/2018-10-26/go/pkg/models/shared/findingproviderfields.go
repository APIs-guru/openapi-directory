package shared

// FindingProviderFields
// In a <code>BatchImportFindings</code> request, finding providers use <code>FindingProviderFields</code> to provide and update values for confidence, criticality, related findings, severity, and types.
type FindingProviderFields struct {
	Confidence      *int64                   `json:"Confidence,omitempty"`
	Criticality     *int64                   `json:"Criticality,omitempty"`
	RelatedFindings []RelatedFinding         `json:"RelatedFindings,omitempty"`
	Severity        *FindingProviderSeverity `json:"Severity,omitempty"`
	Types           []string                 `json:"Types,omitempty"`
}
