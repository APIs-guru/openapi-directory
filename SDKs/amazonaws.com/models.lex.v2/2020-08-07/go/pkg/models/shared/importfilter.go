package shared

// ImportFilter
// Filters the response from the operation.
type ImportFilter struct {
	Name     ImportFilterNameEnum     `json:"name"`
	Operator ImportFilterOperatorEnum `json:"operator"`
	Values   []string                 `json:"values"`
}
