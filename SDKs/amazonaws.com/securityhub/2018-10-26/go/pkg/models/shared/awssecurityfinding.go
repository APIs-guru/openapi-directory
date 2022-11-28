package shared

// AwsSecurityFinding
// <p>Provides consistent format for the contents of the Security Hub-aggregated findings. <code>AwsSecurityFinding</code> format enables you to share findings between Amazon Web Services security services and third-party solutions, and security standards checks.</p> <note> <p>A finding is a potential security issue generated either by Amazon Web Services services or by the integrated third-party solutions and standards checks.</p> </note>
type AwsSecurityFinding struct {
	Action                *Action                `json:"Action,omitempty"`
	AwsAccountID          string                 `json:"AwsAccountId"`
	CompanyName           *string                `json:"CompanyName,omitempty"`
	Compliance            *Compliance            `json:"Compliance,omitempty"`
	Confidence            *int64                 `json:"Confidence,omitempty"`
	CreatedAt             string                 `json:"CreatedAt"`
	Criticality           *int64                 `json:"Criticality,omitempty"`
	Description           string                 `json:"Description"`
	FindingProviderFields *FindingProviderFields `json:"FindingProviderFields,omitempty"`
	FirstObservedAt       *string                `json:"FirstObservedAt,omitempty"`
	GeneratorID           string                 `json:"GeneratorId"`
	ID                    string                 `json:"Id"`
	LastObservedAt        *string                `json:"LastObservedAt,omitempty"`
	Malware               []Malware              `json:"Malware,omitempty"`
	Network               *Network               `json:"Network,omitempty"`
	NetworkPath           []NetworkPathComponent `json:"NetworkPath,omitempty"`
	Note                  *Note                  `json:"Note,omitempty"`
	PatchSummary          *PatchSummary          `json:"PatchSummary,omitempty"`
	Process               *ProcessDetails        `json:"Process,omitempty"`
	ProductArn            string                 `json:"ProductArn"`
	ProductFields         map[string]string      `json:"ProductFields,omitempty"`
	ProductName           *string                `json:"ProductName,omitempty"`
	RecordState           *RecordStateEnum       `json:"RecordState,omitempty"`
	Region                *string                `json:"Region,omitempty"`
	RelatedFindings       []RelatedFinding       `json:"RelatedFindings,omitempty"`
	Remediation           *Remediation           `json:"Remediation,omitempty"`
	Resources             []Resource             `json:"Resources"`
	SchemaVersion         string                 `json:"SchemaVersion"`
	Severity              *Severity              `json:"Severity,omitempty"`
	SourceURL             *string                `json:"SourceUrl,omitempty"`
	ThreatIntelIndicators []ThreatIntelIndicator `json:"ThreatIntelIndicators,omitempty"`
	Title                 string                 `json:"Title"`
	Types                 []string               `json:"Types,omitempty"`
	UpdatedAt             string                 `json:"UpdatedAt"`
	UserDefinedFields     map[string]string      `json:"UserDefinedFields,omitempty"`
	VerificationState     *VerificationStateEnum `json:"VerificationState,omitempty"`
	Vulnerabilities       []Vulnerability        `json:"Vulnerabilities,omitempty"`
	Workflow              *Workflow              `json:"Workflow,omitempty"`
	WorkflowState         *WorkflowStateEnum     `json:"WorkflowState,omitempty"`
}
