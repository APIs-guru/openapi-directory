package shared



type AnalyzeExpenseResponse struct {
    DocumentMetadata *DocumentMetadata `json:"DocumentMetadata,omitempty"`
    ExpenseDocuments []ExpenseDocument `json:"ExpenseDocuments,omitempty"`
    
}

