package shared

type UpdateVocabularyFilterRequest struct {
	VocabularyFilterFileURI *string  `json:"VocabularyFilterFileUri"`
	VocabularyFilterName    string   `json:"VocabularyFilterName"`
	Words                   []string `json:"Words"`
}
