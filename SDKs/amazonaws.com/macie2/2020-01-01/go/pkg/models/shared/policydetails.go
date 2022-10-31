package shared



type PolicyDetails struct {
    Action *FindingAction `json:"action,omitempty"`
    Actor *FindingActor `json:"actor,omitempty"`
    
}

