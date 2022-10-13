package shared

type CallAnalyticsJobSettings struct {
	ContentRedaction       *ContentRedaction           `json:"ContentRedaction"`
	LanguageModelName      *string                     `json:"LanguageModelName"`
	LanguageOptions        []LanguageCodeEnum          `json:"LanguageOptions"`
	VocabularyFilterMethod *VocabularyFilterMethodEnum `json:"VocabularyFilterMethod"`
	VocabularyFilterName   *string                     `json:"VocabularyFilterName"`
	VocabularyName         *string                     `json:"VocabularyName"`
}
