package shared



type SessionState struct {
    ActiveContexts []ActiveContext `json:"activeContexts,omitempty"`
    DialogAction *DialogAction `json:"dialogAction,omitempty"`
    Intent *Intent `json:"intent,omitempty"`
    OriginatingRequestID *string `json:"originatingRequestId,omitempty"`
    SessionAttributes map[string]string `json:"sessionAttributes,omitempty"`
    
}

