package shared

// SchemaFieldSpecNumericIndexingSpec
// Indexing spec for a numeric field. By default, only exact match queries will be supported for numeric fields. Setting the `numericIndexingSpec` allows range queries to be supported.
type SchemaFieldSpecNumericIndexingSpec struct {
	MaxValue *float64 `json:"maxValue,omitempty"`
	MinValue *float64 `json:"minValue,omitempty"`
}

// SchemaFieldSpec
// You can use schemas to add custom fields to user profiles. You can use these fields to store information such as the projects your users work on, their physical locations, their hire dates, or whatever else fits your business needs. For more information, see [Custom User Fields](/admin-sdk/directory/v1/guides/manage-schemas).
type SchemaFieldSpec struct {
	DisplayName         *string                             `json:"displayName,omitempty"`
	Etag                *string                             `json:"etag,omitempty"`
	FieldID             *string                             `json:"fieldId,omitempty"`
	FieldName           *string                             `json:"fieldName,omitempty"`
	FieldType           *string                             `json:"fieldType,omitempty"`
	Indexed             *bool                               `json:"indexed,omitempty"`
	Kind                *string                             `json:"kind,omitempty"`
	MultiValued         *bool                               `json:"multiValued,omitempty"`
	NumericIndexingSpec *SchemaFieldSpecNumericIndexingSpec `json:"numericIndexingSpec,omitempty"`
	ReadAccessType      *string                             `json:"readAccessType,omitempty"`
}
