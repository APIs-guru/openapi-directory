package shared



type UpdateContextRequest struct {
    ContextName string `json:"ContextName"`
    Description *string `json:"Description,omitempty"`
    Properties map[string]string `json:"Properties,omitempty"`
    PropertiesToRemove []string `json:"PropertiesToRemove,omitempty"`
    
}

