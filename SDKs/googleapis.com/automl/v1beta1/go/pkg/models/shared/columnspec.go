package shared



type ColumnSpec struct {
    DataStats *DataStats `json:"dataStats,omitempty"`
    DataType *DataType `json:"dataType,omitempty"`
    DisplayName *string `json:"displayName,omitempty"`
    Etag *string `json:"etag,omitempty"`
    Name *string `json:"name,omitempty"`
    TopCorrelatedColumns []CorrelatedColumn `json:"topCorrelatedColumns,omitempty"`
    
}

