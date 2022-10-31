package shared



type TableResult struct {
    TableDefinition *FormTableDefinition `json:"TableDefinition,omitempty"`
    TableRowsResult []TableRowResult `json:"TableRowsResult,omitempty"`
    
}

