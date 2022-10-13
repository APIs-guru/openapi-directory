package shared

type PredictedIntent struct {
	IntentName          *string           `json:"intentName"`
	NluIntentConfidence *IntentConfidence `json:"nluIntentConfidence"`
	Slots               map[string]string `json:"slots"`
}
