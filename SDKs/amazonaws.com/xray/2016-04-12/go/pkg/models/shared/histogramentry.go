package shared

type HistogramEntry struct {
	Count *int64   `json:"Count,omitempty"`
	Value *float64 `json:"Value,omitempty"`
}
