package shared

type RangePartitioningRange struct {
	End      *string `json:"end"`
	Interval *string `json:"interval"`
	Start    *string `json:"start"`
}

type RangePartitioning struct {
	Field *string                 `json:"field"`
	Range *RangePartitioningRange `json:"range"`
}
