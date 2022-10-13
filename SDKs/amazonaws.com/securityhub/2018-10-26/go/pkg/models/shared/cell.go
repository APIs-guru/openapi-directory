package shared

type Cell struct {
	CellReference *string `json:"CellReference"`
	Column        *int64  `json:"Column"`
	ColumnName    *string `json:"ColumnName"`
	Row           *int64  `json:"Row"`
}
