package shared

type Dimension struct {
	HistogramBuckets []string `json:"histogramBuckets"`
	Name             *string  `json:"name"`
}
