package shared

type HistogramEntry struct {
	Count *int64   `json:"Count"`
	Value *float64 `json:"Value"`
}
