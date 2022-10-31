package shared



type CreateVocabularyRequest struct {
    LanguageCode LanguageCodeEnum `json:"LanguageCode"`
    Phrases []string `json:"Phrases,omitempty"`
    Tags []Tag `json:"Tags,omitempty"`
    VocabularyFileURI *string `json:"VocabularyFileUri,omitempty"`
    VocabularyName string `json:"VocabularyName"`
    
}

