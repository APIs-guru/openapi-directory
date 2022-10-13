package shared

type TableSpec struct {
	ColumnCount      *string       `json:"columnCount"`
	Etag             *string       `json:"etag"`
	InputConfigs     []InputConfig `json:"inputConfigs"`
	Name             *string       `json:"name"`
	RowCount         *string       `json:"rowCount"`
	TimeColumnSpecID *string       `json:"timeColumnSpecId"`
	ValidRowCount    *string       `json:"validRowCount"`
}
