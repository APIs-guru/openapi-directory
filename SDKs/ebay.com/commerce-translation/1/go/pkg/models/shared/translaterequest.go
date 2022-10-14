package shared

type TranslateRequest struct {
	From               *string  `json:"from,omitempty"`
	Text               []string `json:"text,omitempty"`
	To                 *string  `json:"to,omitempty"`
	TranslationContext *string  `json:"translationContext,omitempty"`
}
