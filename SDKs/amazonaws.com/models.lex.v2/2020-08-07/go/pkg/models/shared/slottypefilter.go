package shared

// SlotTypeFilter
// Filters the response from the <code>ListSlotTypes</code> operation.
type SlotTypeFilter struct {
	Name     SlotTypeFilterNameEnum     `json:"name"`
	Operator SlotTypeFilterOperatorEnum `json:"operator"`
	Values   []string                   `json:"values"`
}
