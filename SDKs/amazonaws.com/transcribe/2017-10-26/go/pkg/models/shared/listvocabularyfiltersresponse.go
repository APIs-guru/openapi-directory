package shared



type ListVocabularyFiltersResponse struct {
    NextToken *string `json:"NextToken,omitempty"`
    VocabularyFilters []VocabularyFilterInfo `json:"VocabularyFilters,omitempty"`
    
}

