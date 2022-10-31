package shared



type ListControlPanelsResponse struct {
    ControlPanels []ControlPanel `json:"ControlPanels,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

