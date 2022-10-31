package shared

type ListBuiltInIntentsResponse struct {
	BuiltInIntentSummaries []BuiltInIntentSummary `json:"builtInIntentSummaries,omitempty"`
	LocaleID               *string                `json:"localeId,omitempty"`
	NextToken              *string                `json:"nextToken,omitempty"`
}
