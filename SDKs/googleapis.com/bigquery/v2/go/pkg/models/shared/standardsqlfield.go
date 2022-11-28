package shared

// StandardSQLField
// A field or a column.
type StandardSQLField struct {
	Name *string              `json:"name,omitempty"`
	Type *StandardSQLDataType `json:"type,omitempty"`
}
