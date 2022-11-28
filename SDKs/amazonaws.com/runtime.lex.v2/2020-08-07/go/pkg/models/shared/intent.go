package shared

// Intent
// The current intent that Amazon Lex V2 is attempting to fulfill.
type Intent struct {
	ConfirmationState *ConfirmationStateEnum `json:"confirmationState,omitempty"`
	Name              string                 `json:"name"`
	Slots             map[string]Slot        `json:"slots,omitempty"`
	State             *IntentStateEnum       `json:"state,omitempty"`
}
