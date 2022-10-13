package shared

type ListBuiltInSlotTypesResponse struct {
	BuiltInSlotTypeSummaries []BuiltInSlotTypeSummary `json:"builtInSlotTypeSummaries"`
	LocaleID                 *string                  `json:"localeId"`
	NextToken                *string                  `json:"nextToken"`
}
