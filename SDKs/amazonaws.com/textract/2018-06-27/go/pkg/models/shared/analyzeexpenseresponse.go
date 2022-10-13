package shared

type AnalyzeExpenseResponse struct {
	DocumentMetadata *DocumentMetadata `json:"DocumentMetadata"`
	ExpenseDocuments []ExpenseDocument `json:"ExpenseDocuments"`
}
