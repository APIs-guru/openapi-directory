package shared

type ListMedicalVocabulariesRequest struct {
	MaxResults   *int64               `json:"MaxResults"`
	NameContains *string              `json:"NameContains"`
	NextToken    *string              `json:"NextToken"`
	StateEquals  *VocabularyStateEnum `json:"StateEquals"`
}
