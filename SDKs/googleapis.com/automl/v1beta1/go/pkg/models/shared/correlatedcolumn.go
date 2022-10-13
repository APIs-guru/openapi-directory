package shared

type CorrelatedColumn struct {
	ColumnSpecID     *string           `json:"columnSpecId"`
	CorrelationStats *CorrelationStats `json:"correlationStats"`
}
