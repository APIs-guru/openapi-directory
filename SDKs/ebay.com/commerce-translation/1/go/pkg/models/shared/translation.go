package shared

type Translation struct {
	From           *string `json:"from"`
	OriginalText   *string `json:"originalText"`
	To             *string `json:"to"`
	TranslatedText *string `json:"translatedText"`
}
