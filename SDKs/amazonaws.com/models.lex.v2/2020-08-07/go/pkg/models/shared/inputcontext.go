package shared

// InputContext
// The name of a context that must be active for an intent to be selected by Amazon Lex.
type InputContext struct {
	Name string `json:"name"`
}
