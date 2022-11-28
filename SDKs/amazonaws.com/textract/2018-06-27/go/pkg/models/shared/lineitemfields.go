package shared

// LineItemFields
// A structure that holds information about the different lines found in a document's tables.
type LineItemFields struct {
	LineItemExpenseFields []ExpenseField `json:"LineItemExpenseFields,omitempty"`
}
