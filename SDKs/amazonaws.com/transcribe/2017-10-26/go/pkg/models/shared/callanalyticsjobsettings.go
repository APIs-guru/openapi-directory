package shared

// CallAnalyticsJobSettings
// Provides optional settings for the <code>CallAnalyticsJob</code> operation.
type CallAnalyticsJobSettings struct {
	ContentRedaction       *ContentRedaction           `json:"ContentRedaction,omitempty"`
	LanguageModelName      *string                     `json:"LanguageModelName,omitempty"`
	LanguageOptions        []LanguageCodeEnum          `json:"LanguageOptions,omitempty"`
	VocabularyFilterMethod *VocabularyFilterMethodEnum `json:"VocabularyFilterMethod,omitempty"`
	VocabularyFilterName   *string                     `json:"VocabularyFilterName,omitempty"`
	VocabularyName         *string                     `json:"VocabularyName,omitempty"`
}
