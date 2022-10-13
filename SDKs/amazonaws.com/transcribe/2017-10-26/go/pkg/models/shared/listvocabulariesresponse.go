package shared

type ListVocabulariesResponse struct {
	NextToken    *string              `json:"NextToken"`
	Status       *VocabularyStateEnum `json:"Status"`
	Vocabularies []VocabularyInfo     `json:"Vocabularies"`
}
