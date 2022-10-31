package shared

type UpdateVocabularyRequest struct {
	LanguageCode      LanguageCodeEnum `json:"LanguageCode"`
	Phrases           []string         `json:"Phrases,omitempty"`
	VocabularyFileURI *string          `json:"VocabularyFileUri,omitempty"`
	VocabularyName    string           `json:"VocabularyName"`
}
