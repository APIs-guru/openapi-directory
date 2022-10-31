package shared



type ListResourcesInProtectionGroupResponse struct {
    NextToken *string `json:"NextToken,omitempty"`
    ResourceArns []string `json:"ResourceArns"`
    
}

