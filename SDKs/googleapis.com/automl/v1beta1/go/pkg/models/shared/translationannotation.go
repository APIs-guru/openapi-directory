package shared

// TranslationAnnotation
// Annotation details specific to translation.
type TranslationAnnotation struct {
	TranslatedContent *TextSnippet `json:"translatedContent,omitempty"`
}
