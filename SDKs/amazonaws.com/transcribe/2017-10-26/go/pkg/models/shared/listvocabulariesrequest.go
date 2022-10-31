package shared

type ListVocabulariesRequest struct {
	MaxResults   *int64               `json:"MaxResults,omitempty"`
	NameContains *string              `json:"NameContains,omitempty"`
	NextToken    *string              `json:"NextToken,omitempty"`
	StateEquals  *VocabularyStateEnum `json:"StateEquals,omitempty"`
}
