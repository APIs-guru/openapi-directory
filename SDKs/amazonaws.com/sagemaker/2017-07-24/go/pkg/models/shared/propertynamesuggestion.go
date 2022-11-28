package shared

// PropertyNameSuggestion
// A property name returned from a <code>GetSearchSuggestions</code> call that specifies a value in the <code>PropertyNameQuery</code> field.
type PropertyNameSuggestion struct {
	PropertyName *string `json:"PropertyName,omitempty"`
}
