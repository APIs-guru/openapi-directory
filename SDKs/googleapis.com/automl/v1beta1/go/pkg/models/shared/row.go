package shared

// Row
// A representation of a row in a relational table.
type Row struct {
	ColumnSpecIds []string      `json:"columnSpecIds,omitempty"`
	Values        []interface{} `json:"values,omitempty"`
}
