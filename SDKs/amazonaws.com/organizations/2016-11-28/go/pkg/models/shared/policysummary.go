package shared



type PolicySummary struct {
    Arn *string `json:"Arn,omitempty"`
    AwsManaged *bool `json:"AwsManaged,omitempty"`
    Description *string `json:"Description,omitempty"`
    ID *string `json:"Id,omitempty"`
    Name *string `json:"Name,omitempty"`
    Type *PolicyTypeEnum `json:"Type,omitempty"`
    
}

