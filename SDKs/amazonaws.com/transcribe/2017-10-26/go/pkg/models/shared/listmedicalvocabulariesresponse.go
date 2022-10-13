package shared

type ListMedicalVocabulariesResponse struct {
	NextToken    *string              `json:"NextToken"`
	Status       *VocabularyStateEnum `json:"Status"`
	Vocabularies []VocabularyInfo     `json:"Vocabularies"`
}
