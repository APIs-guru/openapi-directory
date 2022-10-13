package shared

type ExpenseDocument struct {
	ExpenseIndex   *int64          `json:"ExpenseIndex"`
	LineItemGroups []LineItemGroup `json:"LineItemGroups"`
	SummaryFields  []ExpenseField  `json:"SummaryFields"`
}
