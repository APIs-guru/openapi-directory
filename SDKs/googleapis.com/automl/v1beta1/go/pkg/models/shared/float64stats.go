package shared

type Float64Stats struct {
	HistogramBuckets  []HistogramBucket `json:"histogramBuckets"`
	Mean              *float64          `json:"mean"`
	Quantiles         []float64         `json:"quantiles"`
	StandardDeviation *float64          `json:"standardDeviation"`
}
