package shared

// IntentClosingSetting
// Provides a statement the Amazon Lex conveys to the user when the intent is successfully fulfilled.
type IntentClosingSetting struct {
	Active          *bool                 `json:"active,omitempty"`
	ClosingResponse ResponseSpecification `json:"closingResponse"`
}
