package shared

type IntentSummary struct {
	CheckpointLabel    *string                 `json:"checkpointLabel,omitempty"`
	ConfirmationStatus *ConfirmationStatusEnum `json:"confirmationStatus,omitempty"`
	DialogActionType   DialogActionTypeEnum    `json:"dialogActionType"`
	FulfillmentState   *FulfillmentStateEnum   `json:"fulfillmentState,omitempty"`
	IntentName         *string                 `json:"intentName,omitempty"`
	SlotToElicit       *string                 `json:"slotToElicit,omitempty"`
	Slots              map[string]string       `json:"slots,omitempty"`
}
