package shared

type LocalizedText struct {
	Language *string `json:"language,omitempty"`
	Text     *string `json:"text,omitempty"`
}
