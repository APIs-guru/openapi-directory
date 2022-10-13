package shared

type ListBuiltInIntentsResponse struct {
	BuiltInIntentSummaries []BuiltInIntentSummary `json:"builtInIntentSummaries"`
	LocaleID               *string                `json:"localeId"`
	NextToken              *string                `json:"nextToken"`
}
