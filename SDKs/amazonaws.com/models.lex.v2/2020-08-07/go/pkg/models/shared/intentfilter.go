package shared

// IntentFilter
// Filters the response from the <code>ListIntents</code> operation.
type IntentFilter struct {
	Name     IntentFilterNameEnum     `json:"name"`
	Operator IntentFilterOperatorEnum `json:"operator"`
	Values   []string                 `json:"values"`
}
