package shared

type DialogAction struct {
	FulfillmentState *FulfillmentStateEnum  `json:"fulfillmentState"`
	IntentName       *string                `json:"intentName"`
	Message          *string                `json:"message"`
	MessageFormat    *MessageFormatTypeEnum `json:"messageFormat"`
	SlotToElicit     *string                `json:"slotToElicit"`
	Slots            map[string]string      `json:"slots"`
	Type             DialogActionTypeEnum   `json:"type"`
}
