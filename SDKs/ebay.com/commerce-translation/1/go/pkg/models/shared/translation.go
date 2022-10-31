package shared



type Translation struct {
    From *string `json:"from,omitempty"`
    OriginalText *string `json:"originalText,omitempty"`
    To *string `json:"to,omitempty"`
    TranslatedText *string `json:"translatedText,omitempty"`
    
}

