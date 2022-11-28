package shared

// StructType
// `StructType` defines the DataType-s of a STRUCT type.
type StructType struct {
	Fields map[string]DataType `json:"fields,omitempty"`
}
