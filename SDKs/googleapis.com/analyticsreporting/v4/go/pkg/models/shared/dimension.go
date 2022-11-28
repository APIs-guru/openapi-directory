package shared

// Dimension
// [Dimensions](https://support.google.com/analytics/answer/1033861) are attributes of your data. For example, the dimension `ga:city` indicates the city, for example, "Paris" or "New York", from which a session originates.
type Dimension struct {
	HistogramBuckets []string `json:"histogramBuckets,omitempty"`
	Name             *string  `json:"name,omitempty"`
}
