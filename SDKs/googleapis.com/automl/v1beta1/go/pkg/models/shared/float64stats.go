package shared

// Float64Stats
// The data statistics of a series of FLOAT64 values.
type Float64Stats struct {
	HistogramBuckets  []HistogramBucket `json:"histogramBuckets,omitempty"`
	Mean              *float64          `json:"mean,omitempty"`
	Quantiles         []float64         `json:"quantiles,omitempty"`
	StandardDeviation *float64          `json:"standardDeviation,omitempty"`
}
