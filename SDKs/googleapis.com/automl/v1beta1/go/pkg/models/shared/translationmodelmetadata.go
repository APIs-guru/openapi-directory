package shared

type TranslationModelMetadata struct {
	BaseModel          *string `json:"baseModel"`
	SourceLanguageCode *string `json:"sourceLanguageCode"`
	TargetLanguageCode *string `json:"targetLanguageCode"`
}
