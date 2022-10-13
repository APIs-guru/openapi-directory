package shared

type IntentSummary struct {
	CheckpointLabel    *string                 `json:"checkpointLabel"`
	ConfirmationStatus *ConfirmationStatusEnum `json:"confirmationStatus"`
	DialogActionType   DialogActionTypeEnum    `json:"dialogActionType"`
	FulfillmentState   *FulfillmentStateEnum   `json:"fulfillmentState"`
	IntentName         *string                 `json:"intentName"`
	SlotToElicit       *string                 `json:"slotToElicit"`
	Slots              map[string]string       `json:"slots"`
}
