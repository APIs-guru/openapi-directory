package shared



type RangePartitioningRange struct {
    End *string `json:"end,omitempty"`
    Interval *string `json:"interval,omitempty"`
    Start *string `json:"start,omitempty"`
    
}

type RangePartitioning struct {
    Field *string `json:"field,omitempty"`
    Range *RangePartitioningRange `json:"range,omitempty"`
    
}

