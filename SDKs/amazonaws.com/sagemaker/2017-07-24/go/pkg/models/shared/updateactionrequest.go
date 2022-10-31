package shared



type UpdateActionRequest struct {
    ActionName string `json:"ActionName"`
    Description *string `json:"Description,omitempty"`
    Properties map[string]string `json:"Properties,omitempty"`
    PropertiesToRemove []string `json:"PropertiesToRemove,omitempty"`
    Status *ActionStatusEnum `json:"Status,omitempty"`
    
}

