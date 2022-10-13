package shared

type TableFieldSchemaCategories struct {
	Names []string `json:"names"`
}

type TableFieldSchemaPolicyTags struct {
	Names []string `json:"names"`
}

type TableFieldSchema struct {
	Categories             *TableFieldSchemaCategories `json:"categories"`
	Collation              *string                     `json:"collation"`
	DefaultValueExpression *string                     `json:"defaultValueExpression"`
	Description            *string                     `json:"description"`
	Fields                 []TableFieldSchema          `json:"fields"`
	MaxLength              *string                     `json:"maxLength"`
	Mode                   *string                     `json:"mode"`
	Name                   *string                     `json:"name"`
	PolicyTags             *TableFieldSchemaPolicyTags `json:"policyTags"`
	Precision              *string                     `json:"precision"`
	Scale                  *string                     `json:"scale"`
	Type                   *string                     `json:"type"`
}
