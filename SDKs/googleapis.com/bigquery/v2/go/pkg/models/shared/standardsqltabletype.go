package shared

// StandardSQLTableType
// A table type
type StandardSQLTableType struct {
	Columns []StandardSQLField `json:"columns,omitempty"`
}
