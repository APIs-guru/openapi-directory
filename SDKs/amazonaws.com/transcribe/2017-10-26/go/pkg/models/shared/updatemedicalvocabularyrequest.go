package shared



type UpdateMedicalVocabularyRequest struct {
    LanguageCode LanguageCodeEnum `json:"LanguageCode"`
    VocabularyFileURI *string `json:"VocabularyFileUri,omitempty"`
    VocabularyName string `json:"VocabularyName"`
    
}

