package shared



type ComplianceItem struct {
    ComplianceType *string `json:"ComplianceType,omitempty"`
    Details map[string]string `json:"Details,omitempty"`
    ExecutionSummary *ComplianceExecutionSummary `json:"ExecutionSummary,omitempty"`
    ID *string `json:"Id,omitempty"`
    ResourceID *string `json:"ResourceId,omitempty"`
    ResourceType *string `json:"ResourceType,omitempty"`
    Severity *ComplianceSeverityEnum `json:"Severity,omitempty"`
    Status *ComplianceStatusEnum `json:"Status,omitempty"`
    Title *string `json:"Title,omitempty"`
    
}

