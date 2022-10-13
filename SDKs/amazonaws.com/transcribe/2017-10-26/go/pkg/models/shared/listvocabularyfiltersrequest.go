package shared

type ListVocabularyFiltersRequest struct {
	MaxResults   *int64  `json:"MaxResults"`
	NameContains *string `json:"NameContains"`
	NextToken    *string `json:"NextToken"`
}
