package shared

type ColumnMetadata struct {
	ArrayBaseColumnType *int64  `json:"arrayBaseColumnType"`
	IsAutoIncrement     *bool   `json:"isAutoIncrement"`
	IsCaseSensitive     *bool   `json:"isCaseSensitive"`
	IsCurrency          *bool   `json:"isCurrency"`
	IsSigned            *bool   `json:"isSigned"`
	Label               *string `json:"label"`
	Name                *string `json:"name"`
	Nullable            *int64  `json:"nullable"`
	Precision           *int64  `json:"precision"`
	Scale               *int64  `json:"scale"`
	SchemaName          *string `json:"schemaName"`
	TableName           *string `json:"tableName"`
	Type                *int64  `json:"type"`
	TypeName            *string `json:"typeName"`
}
