package shared

type StandardSQLField struct {
	Name *string              `json:"name"`
	Type *StandardSQLDataType `json:"type"`
}
