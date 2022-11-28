package shared

// LocalizedText
// A localized string with its locale.
type LocalizedText struct {
	Locale *string `json:"locale,omitempty"`
	Text   *string `json:"text,omitempty"`
}
