package shared



type Cell struct {
    CellReference *string `json:"cellReference,omitempty"`
    Column *int64 `json:"column,omitempty"`
    ColumnName *string `json:"columnName,omitempty"`
    Row *int64 `json:"row,omitempty"`
    
}

