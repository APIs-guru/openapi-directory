package shared

type ExpenseDocument struct {
	ExpenseIndex   *int64          `json:"ExpenseIndex,omitempty"`
	LineItemGroups []LineItemGroup `json:"LineItemGroups,omitempty"`
	SummaryFields  []ExpenseField  `json:"SummaryFields,omitempty"`
}
