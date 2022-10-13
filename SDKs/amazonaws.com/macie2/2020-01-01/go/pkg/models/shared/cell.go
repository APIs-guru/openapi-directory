package shared

type Cell struct {
	CellReference *string `json:"cellReference"`
	Column        *int64  `json:"column"`
	ColumnName    *string `json:"columnName"`
	Row           *int64  `json:"row"`
}
