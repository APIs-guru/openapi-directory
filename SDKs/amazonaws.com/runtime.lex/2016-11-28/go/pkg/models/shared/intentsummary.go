package shared

// IntentSummary
// Provides information about the state of an intent. You can use this information to get the current state of an intent so that you can process the intent, or so that you can return the intent to its previous state.
type IntentSummary struct {
	CheckpointLabel    *string                 `json:"checkpointLabel,omitempty"`
	ConfirmationStatus *ConfirmationStatusEnum `json:"confirmationStatus,omitempty"`
	DialogActionType   DialogActionTypeEnum    `json:"dialogActionType"`
	FulfillmentState   *FulfillmentStateEnum   `json:"fulfillmentState,omitempty"`
	IntentName         *string                 `json:"intentName,omitempty"`
	SlotToElicit       *string                 `json:"slotToElicit,omitempty"`
	Slots              map[string]string       `json:"slots,omitempty"`
}
