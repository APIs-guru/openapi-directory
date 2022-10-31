package shared

type FindingProviderFields struct {
	Confidence      *int64                   `json:"Confidence,omitempty"`
	Criticality     *int64                   `json:"Criticality,omitempty"`
	RelatedFindings []RelatedFinding         `json:"RelatedFindings,omitempty"`
	Severity        *FindingProviderSeverity `json:"Severity,omitempty"`
	Types           []string                 `json:"Types,omitempty"`
}
