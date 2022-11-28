package shared

// TableFieldSchemaCategories
// [Optional] The categories attached to this field, used for field-level access control.
type TableFieldSchemaCategories struct {
	Names []string `json:"names,omitempty"`
}

type TableFieldSchemaPolicyTags struct {
	Names []string `json:"names,omitempty"`
}

type TableFieldSchema struct {
	Categories             *TableFieldSchemaCategories `json:"categories,omitempty"`
	Collation              *string                     `json:"collation,omitempty"`
	DefaultValueExpression *string                     `json:"defaultValueExpression,omitempty"`
	Description            *string                     `json:"description,omitempty"`
	Fields                 []TableFieldSchema          `json:"fields,omitempty"`
	MaxLength              *string                     `json:"maxLength,omitempty"`
	Mode                   *string                     `json:"mode,omitempty"`
	Name                   *string                     `json:"name,omitempty"`
	PolicyTags             *TableFieldSchemaPolicyTags `json:"policyTags,omitempty"`
	Precision              *string                     `json:"precision,omitempty"`
	Scale                  *string                     `json:"scale,omitempty"`
	Type                   *string                     `json:"type,omitempty"`
}
