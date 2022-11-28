package shared

// BuiltInIntentSummary
// Provides summary information about a built-in intent for the <a>ListBuiltInIntents</a> operation.
type BuiltInIntentSummary struct {
	Description     *string `json:"description,omitempty"`
	IntentSignature *string `json:"intentSignature,omitempty"`
}
