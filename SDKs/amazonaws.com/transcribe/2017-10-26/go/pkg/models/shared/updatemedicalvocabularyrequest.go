package shared

type UpdateMedicalVocabularyRequest struct {
	LanguageCode      LanguageCodeEnum `json:"LanguageCode"`
	VocabularyFileURI *string          `json:"VocabularyFileUri"`
	VocabularyName    string           `json:"VocabularyName"`
}
