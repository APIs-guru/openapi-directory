package shared

// HistogramEntry
// An entry in a histogram for a statistic. A histogram maps the range of observed values on the X axis, and the prevalence of each value on the Y axis.
type HistogramEntry struct {
	Count *int64   `json:"Count,omitempty"`
	Value *float64 `json:"Value,omitempty"`
}
