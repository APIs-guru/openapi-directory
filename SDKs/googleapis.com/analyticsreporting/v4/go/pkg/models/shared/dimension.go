package shared

type Dimension struct {
	HistogramBuckets []string `json:"histogramBuckets,omitempty"`
	Name             *string  `json:"name,omitempty"`
}
