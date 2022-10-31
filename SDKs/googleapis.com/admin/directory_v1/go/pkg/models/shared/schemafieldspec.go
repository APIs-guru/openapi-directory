package shared



type SchemaFieldSpecNumericIndexingSpec struct {
    MaxValue *float64 `json:"maxValue,omitempty"`
    MinValue *float64 `json:"minValue,omitempty"`
    
}

type SchemaFieldSpec struct {
    DisplayName *string `json:"displayName,omitempty"`
    Etag *string `json:"etag,omitempty"`
    FieldID *string `json:"fieldId,omitempty"`
    FieldName *string `json:"fieldName,omitempty"`
    FieldType *string `json:"fieldType,omitempty"`
    Indexed *bool `json:"indexed,omitempty"`
    Kind *string `json:"kind,omitempty"`
    MultiValued *bool `json:"multiValued,omitempty"`
    NumericIndexingSpec *SchemaFieldSpecNumericIndexingSpec `json:"numericIndexingSpec,omitempty"`
    ReadAccessType *string `json:"readAccessType,omitempty"`
    
}

