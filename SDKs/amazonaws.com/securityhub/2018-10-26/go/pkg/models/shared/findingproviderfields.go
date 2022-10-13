package shared

type FindingProviderFields struct {
	Confidence      *int64                   `json:"Confidence"`
	Criticality     *int64                   `json:"Criticality"`
	RelatedFindings []RelatedFinding         `json:"RelatedFindings"`
	Severity        *FindingProviderSeverity `json:"Severity"`
	Types           []string                 `json:"Types"`
}
