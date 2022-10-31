package shared



type UpdateVocabularyFilterRequest struct {
    VocabularyFilterFileURI *string `json:"VocabularyFilterFileUri,omitempty"`
    VocabularyFilterName string `json:"VocabularyFilterName"`
    Words []string `json:"Words,omitempty"`
    
}

