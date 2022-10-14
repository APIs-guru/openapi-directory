package shared

type CorrelatedColumn struct {
	ColumnSpecID     *string           `json:"columnSpecId,omitempty"`
	CorrelationStats *CorrelationStats `json:"correlationStats,omitempty"`
}
