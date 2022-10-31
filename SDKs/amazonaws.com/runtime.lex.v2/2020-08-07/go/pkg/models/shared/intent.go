package shared



type Intent struct {
    ConfirmationState *ConfirmationStateEnum `json:"confirmationState,omitempty"`
    Name string `json:"name"`
    Slots map[string]Slot `json:"slots,omitempty"`
    State *IntentStateEnum `json:"state,omitempty"`
    
}

