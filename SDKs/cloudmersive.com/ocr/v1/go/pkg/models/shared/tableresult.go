package shared

// TableResult
// The result of reading a table via OCR from a form
type TableResult struct {
	TableDefinition *FormTableDefinition `json:"TableDefinition,omitempty"`
	TableRowsResult []TableRowResult     `json:"TableRowsResult,omitempty"`
}
