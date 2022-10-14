package shared

type CreateMedicalVocabularyRequest struct {
	LanguageCode      LanguageCodeEnum `json:"LanguageCode"`
	Tags              []Tag            `json:"Tags,omitempty"`
	VocabularyFileURI string           `json:"VocabularyFileUri"`
	VocabularyName    string           `json:"VocabularyName"`
}
