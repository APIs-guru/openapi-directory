package shared



type PutComplianceItemsRequest struct {
    ComplianceType string `json:"ComplianceType"`
    ExecutionSummary ComplianceExecutionSummary `json:"ExecutionSummary"`
    ItemContentHash *string `json:"ItemContentHash,omitempty"`
    Items []ComplianceItemEntry `json:"Items"`
    ResourceID string `json:"ResourceId"`
    ResourceType string `json:"ResourceType"`
    UploadType *ComplianceUploadTypeEnum `json:"UploadType,omitempty"`
    
}

