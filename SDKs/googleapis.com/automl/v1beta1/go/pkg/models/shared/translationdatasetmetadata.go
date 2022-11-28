package shared

// TranslationDatasetMetadata
// Dataset metadata that is specific to translation.
type TranslationDatasetMetadata struct {
	SourceLanguageCode *string `json:"sourceLanguageCode,omitempty"`
	TargetLanguageCode *string `json:"targetLanguageCode,omitempty"`
}
