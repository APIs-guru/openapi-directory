package shared



type ResourceTagMapping struct {
    ComplianceDetails *ComplianceDetails `json:"ComplianceDetails,omitempty"`
    ResourceArn *string `json:"ResourceARN,omitempty"`
    Tags []Tag `json:"Tags,omitempty"`
    
}

