package shared

// HistogramBucket
// A bucket of a histogram.
type HistogramBucket struct {
	Count *string  `json:"count,omitempty"`
	Max   *float64 `json:"max,omitempty"`
	Min   *float64 `json:"min,omitempty"`
}
