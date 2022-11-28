package shared

// LocalizedText
// Localized text in given language.
type LocalizedText struct {
	Language *string `json:"language,omitempty"`
	Text     *string `json:"text,omitempty"`
}
