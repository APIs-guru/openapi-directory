package shared

type ColumnMetadata struct {
	ColumnDefault   *string `json:"columnDefault"`
	IsCaseSensitive *bool   `json:"isCaseSensitive"`
	IsCurrency      *bool   `json:"isCurrency"`
	IsSigned        *bool   `json:"isSigned"`
	Label           *string `json:"label"`
	Length          *int64  `json:"length"`
	Name            *string `json:"name"`
	Nullable        *int64  `json:"nullable"`
	Precision       *int64  `json:"precision"`
	Scale           *int64  `json:"scale"`
	SchemaName      *string `json:"schemaName"`
	TableName       *string `json:"tableName"`
	TypeName        *string `json:"typeName"`
}
