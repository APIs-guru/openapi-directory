package shared

type TranslateRequest struct {
	From               *string  `json:"from"`
	Text               []string `json:"text"`
	To                 *string  `json:"to"`
	TranslationContext *string  `json:"translationContext"`
}
