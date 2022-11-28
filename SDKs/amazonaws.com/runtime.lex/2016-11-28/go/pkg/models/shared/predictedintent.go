package shared

// PredictedIntent
// An intent that Amazon Lex suggests satisfies the user's intent. Includes the name of the intent, the confidence that Amazon Lex has that the user's intent is satisfied, and the slots defined for the intent.
type PredictedIntent struct {
	IntentName          *string           `json:"intentName,omitempty"`
	NluIntentConfidence *IntentConfidence `json:"nluIntentConfidence,omitempty"`
	Slots               map[string]string `json:"slots,omitempty"`
}
