package shared

type Cell struct {
	CellReference *string `json:"CellReference,omitempty"`
	Column        *int64  `json:"Column,omitempty"`
	ColumnName    *string `json:"ColumnName,omitempty"`
	Row           *int64  `json:"Row,omitempty"`
}
