package shared

// ColumnMetadata
// The properties (metadata) of a column.
type ColumnMetadata struct {
	ColumnDefault   *string `json:"columnDefault,omitempty"`
	IsCaseSensitive *bool   `json:"isCaseSensitive,omitempty"`
	IsCurrency      *bool   `json:"isCurrency,omitempty"`
	IsSigned        *bool   `json:"isSigned,omitempty"`
	Label           *string `json:"label,omitempty"`
	Length          *int64  `json:"length,omitempty"`
	Name            *string `json:"name,omitempty"`
	Nullable        *int64  `json:"nullable,omitempty"`
	Precision       *int64  `json:"precision,omitempty"`
	Scale           *int64  `json:"scale,omitempty"`
	SchemaName      *string `json:"schemaName,omitempty"`
	TableName       *string `json:"tableName,omitempty"`
	TypeName        *string `json:"typeName,omitempty"`
}
