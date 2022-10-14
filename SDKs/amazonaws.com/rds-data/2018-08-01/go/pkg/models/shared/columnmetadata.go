package shared

type ColumnMetadata struct {
	ArrayBaseColumnType *int64  `json:"arrayBaseColumnType,omitempty"`
	IsAutoIncrement     *bool   `json:"isAutoIncrement,omitempty"`
	IsCaseSensitive     *bool   `json:"isCaseSensitive,omitempty"`
	IsCurrency          *bool   `json:"isCurrency,omitempty"`
	IsSigned            *bool   `json:"isSigned,omitempty"`
	Label               *string `json:"label,omitempty"`
	Name                *string `json:"name,omitempty"`
	Nullable            *int64  `json:"nullable,omitempty"`
	Precision           *int64  `json:"precision,omitempty"`
	Scale               *int64  `json:"scale,omitempty"`
	SchemaName          *string `json:"schemaName,omitempty"`
	TableName           *string `json:"tableName,omitempty"`
	Type                *int64  `json:"type,omitempty"`
	TypeName            *string `json:"typeName,omitempty"`
}
