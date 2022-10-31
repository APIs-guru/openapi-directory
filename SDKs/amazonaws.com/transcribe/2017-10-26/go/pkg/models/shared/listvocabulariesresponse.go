package shared

type ListVocabulariesResponse struct {
	NextToken    *string              `json:"NextToken,omitempty"`
	Status       *VocabularyStateEnum `json:"Status,omitempty"`
	Vocabularies []VocabularyInfo     `json:"Vocabularies,omitempty"`
}
