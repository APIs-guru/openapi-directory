package shared

type ColumnSpec struct {
	DataStats            *DataStats         `json:"dataStats"`
	DataType             *DataType          `json:"dataType"`
	DisplayName          *string            `json:"displayName"`
	Etag                 *string            `json:"etag"`
	Name                 *string            `json:"name"`
	TopCorrelatedColumns []CorrelatedColumn `json:"topCorrelatedColumns"`
}
