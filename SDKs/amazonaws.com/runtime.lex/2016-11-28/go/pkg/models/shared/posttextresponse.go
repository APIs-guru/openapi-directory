package shared

type PostTextResponse struct {
	ActiveContexts      []ActiveContext        `json:"activeContexts"`
	AlternativeIntents  []PredictedIntent      `json:"alternativeIntents"`
	BotVersion          *string                `json:"botVersion"`
	DialogState         *DialogStateEnum       `json:"dialogState"`
	IntentName          *string                `json:"intentName"`
	Message             *string                `json:"message"`
	MessageFormat       *MessageFormatTypeEnum `json:"messageFormat"`
	NluIntentConfidence *IntentConfidence      `json:"nluIntentConfidence"`
	ResponseCard        *ResponseCard          `json:"responseCard"`
	SentimentResponse   *SentimentResponse     `json:"sentimentResponse"`
	SessionAttributes   map[string]string      `json:"sessionAttributes"`
	SessionID           *string                `json:"sessionId"`
	SlotToElicit        *string                `json:"slotToElicit"`
	Slots               map[string]string      `json:"slots"`
}
