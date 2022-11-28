package shared

// TranslationModelMetadata
// Model metadata that is specific to translation.
type TranslationModelMetadata struct {
	BaseModel          *string `json:"baseModel,omitempty"`
	SourceLanguageCode *string `json:"sourceLanguageCode,omitempty"`
	TargetLanguageCode *string `json:"targetLanguageCode,omitempty"`
}
