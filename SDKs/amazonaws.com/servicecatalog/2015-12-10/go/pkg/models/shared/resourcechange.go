package shared



type ResourceChange struct {
    Action *ChangeActionEnum `json:"Action,omitempty"`
    Details []ResourceChangeDetail `json:"Details,omitempty"`
    LogicalResourceID *string `json:"LogicalResourceId,omitempty"`
    PhysicalResourceID *string `json:"PhysicalResourceId,omitempty"`
    Replacement *ReplacementEnum `json:"Replacement,omitempty"`
    ResourceType *string `json:"ResourceType,omitempty"`
    Scope []ResourceAttributeEnum `json:"Scope,omitempty"`
    
}

