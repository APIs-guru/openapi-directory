package shared



type Compliance struct {
    RelatedRequirements []string `json:"RelatedRequirements,omitempty"`
    Status *ComplianceStatusEnum `json:"Status,omitempty"`
    StatusReasons []StatusReason `json:"StatusReasons,omitempty"`
    
}

