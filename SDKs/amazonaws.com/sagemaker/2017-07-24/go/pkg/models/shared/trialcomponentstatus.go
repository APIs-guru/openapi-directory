package shared



type TrialComponentStatus struct {
    Message *string `json:"Message,omitempty"`
    PrimaryStatus *TrialComponentPrimaryStatusEnum `json:"PrimaryStatus,omitempty"`
    
}

