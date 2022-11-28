package shared

// DialogAction
// Describes the next action that the bot should take in its interaction with the user and provides information about the context in which the action takes place. Use the <code>DialogAction</code> data type to set the interaction to a specific state, or to return the interaction to a previous state.
type DialogAction struct {
	FulfillmentState *FulfillmentStateEnum  `json:"fulfillmentState,omitempty"`
	IntentName       *string                `json:"intentName,omitempty"`
	Message          *string                `json:"message,omitempty"`
	MessageFormat    *MessageFormatTypeEnum `json:"messageFormat,omitempty"`
	SlotToElicit     *string                `json:"slotToElicit,omitempty"`
	Slots            map[string]string      `json:"slots,omitempty"`
	Type             DialogActionTypeEnum   `json:"type"`
}
