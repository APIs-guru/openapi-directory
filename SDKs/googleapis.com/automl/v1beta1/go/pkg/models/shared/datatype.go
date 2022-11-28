package shared

type DataTypeTypeCodeEnum string

const (
	DataTypeTypeCodeEnumTypeCodeUnspecified DataTypeTypeCodeEnum = "TYPE_CODE_UNSPECIFIED"
	DataTypeTypeCodeEnumFloat64             DataTypeTypeCodeEnum = "FLOAT64"
	DataTypeTypeCodeEnumTimestamp           DataTypeTypeCodeEnum = "TIMESTAMP"
	DataTypeTypeCodeEnumString              DataTypeTypeCodeEnum = "STRING"
	DataTypeTypeCodeEnumArray               DataTypeTypeCodeEnum = "ARRAY"
	DataTypeTypeCodeEnumStruct              DataTypeTypeCodeEnum = "STRUCT"
	DataTypeTypeCodeEnumCategory            DataTypeTypeCodeEnum = "CATEGORY"
)

// DataType
// Indicated the type of data that can be stored in a structured data entity (e.g. a table).
type DataType struct {
	ListElementType *DataType             `json:"listElementType,omitempty"`
	Nullable        *bool                 `json:"nullable,omitempty"`
	StructType      *StructType           `json:"structType,omitempty"`
	TimeFormat      *string               `json:"timeFormat,omitempty"`
	TypeCode        *DataTypeTypeCodeEnum `json:"typeCode,omitempty"`
}
