package shared

// SlotFilter
// Filters the response from the <code>ListSlots</code> operation.
type SlotFilter struct {
	Name     SlotFilterNameEnum     `json:"name"`
	Operator SlotFilterOperatorEnum `json:"operator"`
	Values   []string               `json:"values"`
}
