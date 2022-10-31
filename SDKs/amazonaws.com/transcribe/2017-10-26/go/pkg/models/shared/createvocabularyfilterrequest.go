package shared

type CreateVocabularyFilterRequest struct {
	LanguageCode            LanguageCodeEnum `json:"LanguageCode"`
	Tags                    []Tag            `json:"Tags,omitempty"`
	VocabularyFilterFileURI *string          `json:"VocabularyFilterFileUri,omitempty"`
	VocabularyFilterName    string           `json:"VocabularyFilterName"`
	Words                   []string         `json:"Words,omitempty"`
}
