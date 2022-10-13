package shared

type AwsSecurityFinding struct {
	Action                *Action                `json:"Action"`
	AwsAccountID          string                 `json:"AwsAccountId"`
	CompanyName           *string                `json:"CompanyName"`
	Compliance            *Compliance            `json:"Compliance"`
	Confidence            *int64                 `json:"Confidence"`
	CreatedAt             string                 `json:"CreatedAt"`
	Criticality           *int64                 `json:"Criticality"`
	Description           string                 `json:"Description"`
	FindingProviderFields *FindingProviderFields `json:"FindingProviderFields"`
	FirstObservedAt       *string                `json:"FirstObservedAt"`
	GeneratorID           string                 `json:"GeneratorId"`
	ID                    string                 `json:"Id"`
	LastObservedAt        *string                `json:"LastObservedAt"`
	Malware               []Malware              `json:"Malware"`
	Network               *Network               `json:"Network"`
	NetworkPath           []NetworkPathComponent `json:"NetworkPath"`
	Note                  *Note                  `json:"Note"`
	PatchSummary          *PatchSummary          `json:"PatchSummary"`
	Process               *ProcessDetails        `json:"Process"`
	ProductArn            string                 `json:"ProductArn"`
	ProductFields         map[string]string      `json:"ProductFields"`
	ProductName           *string                `json:"ProductName"`
	RecordState           *RecordStateEnum       `json:"RecordState"`
	Region                *string                `json:"Region"`
	RelatedFindings       []RelatedFinding       `json:"RelatedFindings"`
	Remediation           *Remediation           `json:"Remediation"`
	Resources             []Resource             `json:"Resources"`
	SchemaVersion         string                 `json:"SchemaVersion"`
	Severity              *Severity              `json:"Severity"`
	SourceURL             *string                `json:"SourceUrl"`
	ThreatIntelIndicators []ThreatIntelIndicator `json:"ThreatIntelIndicators"`
	Title                 string                 `json:"Title"`
	Types                 []string               `json:"Types"`
	UpdatedAt             string                 `json:"UpdatedAt"`
	UserDefinedFields     map[string]string      `json:"UserDefinedFields"`
	VerificationState     *VerificationStateEnum `json:"VerificationState"`
	Vulnerabilities       []Vulnerability        `json:"Vulnerabilities"`
	Workflow              *Workflow              `json:"Workflow"`
	WorkflowState         *WorkflowStateEnum     `json:"WorkflowState"`
}
