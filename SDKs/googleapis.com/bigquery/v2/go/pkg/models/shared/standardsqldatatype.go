package shared

type StandardSQLDataTypeTypeKindEnum string

const (
	StandardSQLDataTypeTypeKindEnumTypeKindUnspecified StandardSQLDataTypeTypeKindEnum = "TYPE_KIND_UNSPECIFIED"
	StandardSQLDataTypeTypeKindEnumInt64               StandardSQLDataTypeTypeKindEnum = "INT64"
	StandardSQLDataTypeTypeKindEnumBool                StandardSQLDataTypeTypeKindEnum = "BOOL"
	StandardSQLDataTypeTypeKindEnumFloat64             StandardSQLDataTypeTypeKindEnum = "FLOAT64"
	StandardSQLDataTypeTypeKindEnumString              StandardSQLDataTypeTypeKindEnum = "STRING"
	StandardSQLDataTypeTypeKindEnumBytes               StandardSQLDataTypeTypeKindEnum = "BYTES"
	StandardSQLDataTypeTypeKindEnumTimestamp           StandardSQLDataTypeTypeKindEnum = "TIMESTAMP"
	StandardSQLDataTypeTypeKindEnumDate                StandardSQLDataTypeTypeKindEnum = "DATE"
	StandardSQLDataTypeTypeKindEnumTime                StandardSQLDataTypeTypeKindEnum = "TIME"
	StandardSQLDataTypeTypeKindEnumDatetime            StandardSQLDataTypeTypeKindEnum = "DATETIME"
	StandardSQLDataTypeTypeKindEnumInterval            StandardSQLDataTypeTypeKindEnum = "INTERVAL"
	StandardSQLDataTypeTypeKindEnumGeography           StandardSQLDataTypeTypeKindEnum = "GEOGRAPHY"
	StandardSQLDataTypeTypeKindEnumNumeric             StandardSQLDataTypeTypeKindEnum = "NUMERIC"
	StandardSQLDataTypeTypeKindEnumBignumeric          StandardSQLDataTypeTypeKindEnum = "BIGNUMERIC"
	StandardSQLDataTypeTypeKindEnumJSON                StandardSQLDataTypeTypeKindEnum = "JSON"
	StandardSQLDataTypeTypeKindEnumArray               StandardSQLDataTypeTypeKindEnum = "ARRAY"
	StandardSQLDataTypeTypeKindEnumStruct              StandardSQLDataTypeTypeKindEnum = "STRUCT"
)

// StandardSQLDataType
// The data type of a variable such as a function argument. Examples include: * INT64: `{"typeKind": "INT64"}` * ARRAY: { "typeKind": "ARRAY", "arrayElementType": {"typeKind": "STRING"} } * STRUCT>: { "typeKind": "STRUCT", "structType": { "fields": [ { "name": "x", "type": {"typeKind": "STRING"} }, { "name": "y", "type": { "typeKind": "ARRAY", "arrayElementType": {"typeKind": "DATE"} } } ] } }
type StandardSQLDataType struct {
	ArrayElementType *StandardSQLDataType             `json:"arrayElementType,omitempty"`
	StructType       *StandardSQLStructType           `json:"structType,omitempty"`
	TypeKind         *StandardSQLDataTypeTypeKindEnum `json:"typeKind,omitempty"`
}
