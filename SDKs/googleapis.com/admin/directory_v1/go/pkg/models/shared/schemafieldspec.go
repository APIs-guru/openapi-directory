package shared

type SchemaFieldSpecNumericIndexingSpec struct {
	MaxValue *float64 `json:"maxValue"`
	MinValue *float64 `json:"minValue"`
}

type SchemaFieldSpec struct {
	DisplayName         *string                             `json:"displayName"`
	Etag                *string                             `json:"etag"`
	FieldID             *string                             `json:"fieldId"`
	FieldName           *string                             `json:"fieldName"`
	FieldType           *string                             `json:"fieldType"`
	Indexed             *bool                               `json:"indexed"`
	Kind                *string                             `json:"kind"`
	MultiValued         *bool                               `json:"multiValued"`
	NumericIndexingSpec *SchemaFieldSpecNumericIndexingSpec `json:"numericIndexingSpec"`
	ReadAccessType      *string                             `json:"readAccessType"`
}
