package shared

type ListTerminologiesResponse struct {
	NextToken                 *string                 `json:"NextToken"`
	TerminologyPropertiesList []TerminologyProperties `json:"TerminologyPropertiesList"`
}
