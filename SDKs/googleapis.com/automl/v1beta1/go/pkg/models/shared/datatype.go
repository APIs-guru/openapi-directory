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

type DataType struct {
	ListElementType *DataType             `json:"listElementType"`
	Nullable        *bool                 `json:"nullable"`
	StructType      *StructType           `json:"structType"`
	TimeFormat      *string               `json:"timeFormat"`
	TypeCode        *DataTypeTypeCodeEnum `json:"typeCode"`
}
