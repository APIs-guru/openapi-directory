package shared

type LocalizedText struct {
	Locale *string `json:"locale,omitempty"`
	Text   *string `json:"text,omitempty"`
}
