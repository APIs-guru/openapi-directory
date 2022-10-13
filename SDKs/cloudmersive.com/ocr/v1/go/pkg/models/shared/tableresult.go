package shared

type TableResult struct {
	TableDefinition *FormTableDefinition `json:"TableDefinition"`
	TableRowsResult []TableRowResult     `json:"TableRowsResult"`
}
