package shared

type UpdateVocabularyRequest struct {
	LanguageCode      LanguageCodeEnum `json:"LanguageCode"`
	Phrases           []string         `json:"Phrases"`
	VocabularyFileURI *string          `json:"VocabularyFileUri"`
	VocabularyName    string           `json:"VocabularyName"`
}
