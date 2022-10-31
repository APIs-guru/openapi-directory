package shared

type TableSpec struct {
	ColumnCount      *string       `json:"columnCount,omitempty"`
	Etag             *string       `json:"etag,omitempty"`
	InputConfigs     []InputConfig `json:"inputConfigs,omitempty"`
	Name             *string       `json:"name,omitempty"`
	RowCount         *string       `json:"rowCount,omitempty"`
	TimeColumnSpecID *string       `json:"timeColumnSpecId,omitempty"`
	ValidRowCount    *string       `json:"validRowCount,omitempty"`
}
