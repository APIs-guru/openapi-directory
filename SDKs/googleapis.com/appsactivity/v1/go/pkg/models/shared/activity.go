package shared



type Activity struct {
    CombinedEvent *Event `json:"combinedEvent,omitempty"`
    SingleEvents []Event `json:"singleEvents,omitempty"`
    
}

