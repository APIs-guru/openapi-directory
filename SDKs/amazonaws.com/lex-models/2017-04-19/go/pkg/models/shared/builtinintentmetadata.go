package shared

// BuiltinIntentMetadata
// Provides metadata for a built-in intent.
type BuiltinIntentMetadata struct {
	Signature        *string      `json:"signature,omitempty"`
	SupportedLocales []LocaleEnum `json:"supportedLocales,omitempty"`
}
