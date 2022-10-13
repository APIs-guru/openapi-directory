package shared

type Row struct {
	ColumnSpecIds []string      `json:"columnSpecIds"`
	Values        []interface{} `json:"values"`
}
