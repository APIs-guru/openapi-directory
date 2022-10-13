package shared

type TranslateTextResponse struct {
	AppliedTerminologies []AppliedTerminology `json:"AppliedTerminologies"`
	SourceLanguageCode   string               `json:"SourceLanguageCode"`
	TargetLanguageCode   string               `json:"TargetLanguageCode"`
	TranslatedText       string               `json:"TranslatedText"`
}
