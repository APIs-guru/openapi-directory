package shared

// TableSpec
// A specification of a relational table. The table's schema is represented via its child column specs. It is pre-populated as part of ImportData by schema inference algorithm, the version of which is a required parameter of ImportData InputConfig. Note: While working with a table, at times the schema may be inconsistent with the data in the table (e.g. string in a FLOAT64 column). The consistency validation is done upon creation of a model. Used by: * Tables
type TableSpec struct {
	ColumnCount      *string       `json:"columnCount,omitempty"`
	Etag             *string       `json:"etag,omitempty"`
	InputConfigs     []InputConfig `json:"inputConfigs,omitempty"`
	Name             *string       `json:"name,omitempty"`
	RowCount         *string       `json:"rowCount,omitempty"`
	TimeColumnSpecID *string       `json:"timeColumnSpecId,omitempty"`
	ValidRowCount    *string       `json:"validRowCount,omitempty"`
}
