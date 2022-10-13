package shared

type ListVocabularyFiltersResponse struct {
	NextToken         *string                `json:"NextToken"`
	VocabularyFilters []VocabularyFilterInfo `json:"VocabularyFilters"`
}
