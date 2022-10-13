package shared

type Intent struct {
	ConfirmationState *ConfirmationStateEnum `json:"confirmationState"`
	Name              string                 `json:"name"`
	Slots             map[string]Slot        `json:"slots"`
	State             *IntentStateEnum       `json:"state"`
}
