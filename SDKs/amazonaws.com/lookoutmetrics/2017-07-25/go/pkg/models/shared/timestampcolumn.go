package shared

// TimestampColumn
// Contains information about the column used to track time in a source data file.
type TimestampColumn struct {
	ColumnFormat *string `json:"ColumnFormat,omitempty"`
	ColumnName   *string `json:"ColumnName,omitempty"`
}
