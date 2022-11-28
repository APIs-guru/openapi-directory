package shared

// RangePartitioningRange
// [TrustedTester] [Required] Defines the ranges for range partitioning.
type RangePartitioningRange struct {
	End      *string `json:"end,omitempty"`
	Interval *string `json:"interval,omitempty"`
	Start    *string `json:"start,omitempty"`
}

type RangePartitioning struct {
	Field *string                 `json:"field,omitempty"`
	Range *RangePartitioningRange `json:"range,omitempty"`
}
