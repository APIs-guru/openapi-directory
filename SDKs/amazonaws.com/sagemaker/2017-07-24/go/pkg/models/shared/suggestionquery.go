package shared

// SuggestionQuery
// Specified in the <a>GetSearchSuggestions</a> request. Limits the property names that are included in the response.
type SuggestionQuery struct {
	PropertyNameQuery *PropertyNameQuery `json:"PropertyNameQuery,omitempty"`
}
