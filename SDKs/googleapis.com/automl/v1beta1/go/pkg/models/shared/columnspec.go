package shared

// ColumnSpec
// A representation of a column in a relational table. When listing them, column specs are returned in the same order in which they were given on import . Used by: * Tables
type ColumnSpec struct {
	DataStats            *DataStats         `json:"dataStats,omitempty"`
	DataType             *DataType          `json:"dataType,omitempty"`
	DisplayName          *string            `json:"displayName,omitempty"`
	Etag                 *string            `json:"etag,omitempty"`
	Name                 *string            `json:"name,omitempty"`
	TopCorrelatedColumns []CorrelatedColumn `json:"topCorrelatedColumns,omitempty"`
}
