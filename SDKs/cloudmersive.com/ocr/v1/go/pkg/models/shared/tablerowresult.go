package shared

// TableRowResult
// One row of data in the resulting table
type TableRowResult struct {
	TableRowCellsResult []TableCellResult `json:"TableRowCellsResult,omitempty"`
}
