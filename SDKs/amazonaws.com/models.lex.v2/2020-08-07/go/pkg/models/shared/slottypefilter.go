package shared

type SlotTypeFilter struct {
	Name     SlotTypeFilterNameEnum     `json:"name"`
	Operator SlotTypeFilterOperatorEnum `json:"operator"`
	Values   []string                   `json:"values"`
}
