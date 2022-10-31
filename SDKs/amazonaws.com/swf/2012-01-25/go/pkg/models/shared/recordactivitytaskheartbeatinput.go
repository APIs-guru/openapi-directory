package shared



type RecordActivityTaskHeartbeatInput struct {
    Details *string `json:"details,omitempty"`
    TaskToken string `json:"taskToken"`
    
}

