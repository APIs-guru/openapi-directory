package shared

// KendraConfiguration
// Provides configuration information for the AMAZON.KendraSearchIntent intent. When you use this intent, Amazon Lex searches the specified Amazon Kendra index and returns documents from the index that match the user's utterance.
type KendraConfiguration struct {
	KendraIndex              string  `json:"kendraIndex"`
	QueryFilterString        *string `json:"queryFilterString,omitempty"`
	QueryFilterStringEnabled *bool   `json:"queryFilterStringEnabled,omitempty"`
}
