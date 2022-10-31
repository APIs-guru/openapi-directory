package shared




type DataTypeTypeCodeEnum string

const (
    DataTypeTypeCodeEnumTypeCodeUnspecified DataTypeTypeCodeEnum = "TYPE_CODE_UNSPECIFIED"
DataTypeTypeCodeEnumFloat64 DataTypeTypeCodeEnum = "FLOAT64"
DataTypeTypeCodeEnumTimestamp DataTypeTypeCodeEnum = "TIMESTAMP"
DataTypeTypeCodeEnumString DataTypeTypeCodeEnum = "STRING"
DataTypeTypeCodeEnumArray DataTypeTypeCodeEnum = "ARRAY"
DataTypeTypeCodeEnumStruct DataTypeTypeCodeEnum = "STRUCT"
DataTypeTypeCodeEnumCategory DataTypeTypeCodeEnum = "CATEGORY"
)


type DataType struct {
    ListElementType *DataType `json:"listElementType,omitempty"`
    Nullable *bool `json:"nullable,omitempty"`
    StructType *StructType `json:"structType,omitempty"`
    TimeFormat *string `json:"timeFormat,omitempty"`
    TypeCode *DataTypeTypeCodeEnum `json:"typeCode,omitempty"`
    
}

