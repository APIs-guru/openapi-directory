package shared



type PostTextResponse struct {
    ActiveContexts []ActiveContext `json:"activeContexts,omitempty"`
    AlternativeIntents []PredictedIntent `json:"alternativeIntents,omitempty"`
    BotVersion *string `json:"botVersion,omitempty"`
    DialogState *DialogStateEnum `json:"dialogState,omitempty"`
    IntentName *string `json:"intentName,omitempty"`
    Message *string `json:"message,omitempty"`
    MessageFormat *MessageFormatTypeEnum `json:"messageFormat,omitempty"`
    NluIntentConfidence *IntentConfidence `json:"nluIntentConfidence,omitempty"`
    ResponseCard *ResponseCard `json:"responseCard,omitempty"`
    SentimentResponse *SentimentResponse `json:"sentimentResponse,omitempty"`
    SessionAttributes map[string]string `json:"sessionAttributes,omitempty"`
    SessionID *string `json:"sessionId,omitempty"`
    SlotToElicit *string `json:"slotToElicit,omitempty"`
    Slots map[string]string `json:"slots,omitempty"`
    
}

