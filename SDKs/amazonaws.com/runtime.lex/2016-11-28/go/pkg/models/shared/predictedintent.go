package shared



type PredictedIntent struct {
    IntentName *string `json:"intentName,omitempty"`
    NluIntentConfidence *IntentConfidence `json:"nluIntentConfidence,omitempty"`
    Slots map[string]string `json:"slots,omitempty"`
    
}

