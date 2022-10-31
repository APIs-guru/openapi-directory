package shared



type ListResourcesInProtectionGroupRequest struct {
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    ProtectionGroupID string `json:"ProtectionGroupId"`
    
}

