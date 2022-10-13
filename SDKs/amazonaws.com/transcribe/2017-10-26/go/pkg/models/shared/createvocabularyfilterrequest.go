package shared

type CreateVocabularyFilterRequest struct {
	LanguageCode            LanguageCodeEnum `json:"LanguageCode"`
	Tags                    []Tag            `json:"Tags"`
	VocabularyFilterFileURI *string          `json:"VocabularyFilterFileUri"`
	VocabularyFilterName    string           `json:"VocabularyFilterName"`
	Words                   []string         `json:"Words"`
}
