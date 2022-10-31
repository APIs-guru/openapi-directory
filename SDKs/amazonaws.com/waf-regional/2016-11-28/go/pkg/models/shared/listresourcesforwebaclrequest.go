package shared



type ListResourcesForWebACLRequest struct {
    ResourceType *ResourceTypeEnum `json:"ResourceType,omitempty"`
    WebACLID string `json:"WebACLId"`
    
}

