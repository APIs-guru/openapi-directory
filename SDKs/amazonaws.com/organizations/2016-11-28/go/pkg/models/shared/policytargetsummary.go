package shared



type PolicyTargetSummary struct {
    Arn *string `json:"Arn,omitempty"`
    Name *string `json:"Name,omitempty"`
    TargetID *string `json:"TargetId,omitempty"`
    Type *TargetTypeEnum `json:"Type,omitempty"`
    
}

