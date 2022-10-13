package shared

type CreateVocabularyRequest struct {
	LanguageCode      LanguageCodeEnum `json:"LanguageCode"`
	Phrases           []string         `json:"Phrases"`
	Tags              []Tag            `json:"Tags"`
	VocabularyFileURI *string          `json:"VocabularyFileUri"`
	VocabularyName    string           `json:"VocabularyName"`
}
