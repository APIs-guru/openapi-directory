package shared

// CorrelatedColumn
// Identifies the table's column, and its correlation with the column this ColumnSpec describes.
type CorrelatedColumn struct {
	ColumnSpecID     *string           `json:"columnSpecId,omitempty"`
	CorrelationStats *CorrelationStats `json:"correlationStats,omitempty"`
}
