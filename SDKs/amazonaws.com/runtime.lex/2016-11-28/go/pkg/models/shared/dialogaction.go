package shared



type DialogAction struct {
    FulfillmentState *FulfillmentStateEnum `json:"fulfillmentState,omitempty"`
    IntentName *string `json:"intentName,omitempty"`
    Message *string `json:"message,omitempty"`
    MessageFormat *MessageFormatTypeEnum `json:"messageFormat,omitempty"`
    SlotToElicit *string `json:"slotToElicit,omitempty"`
    Slots map[string]string `json:"slots,omitempty"`
    Type DialogActionTypeEnum `json:"type"`
    
}

