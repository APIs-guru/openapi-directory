package shared

type ListLanguageModelsRequest struct {
	MaxResults   *int64           `json:"MaxResults"`
	NameContains *string          `json:"NameContains"`
	NextToken    *string          `json:"NextToken"`
	StatusEquals *ModelStatusEnum `json:"StatusEquals"`
}
