package shared

// DropRowRangeRequest
// Request message for google.bigtable.admin.v2.BigtableTableAdmin.DropRowRange
type DropRowRangeRequest struct {
	DeleteAllDataFromTable *bool   `json:"deleteAllDataFromTable,omitempty"`
	RowKeyPrefix           *string `json:"rowKeyPrefix,omitempty"`
}
