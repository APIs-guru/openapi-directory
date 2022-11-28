package shared

// CreateTableRequestInput
// Request message for google.bigtable.admin.v2.BigtableTableAdmin.CreateTable
type CreateTableRequestInput struct {
	InitialSplits []Split     `json:"initialSplits,omitempty"`
	Table         *TableInput `json:"table,omitempty"`
	TableID       *string     `json:"tableId,omitempty"`
}
