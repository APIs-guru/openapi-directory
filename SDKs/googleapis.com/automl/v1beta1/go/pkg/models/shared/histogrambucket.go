package shared

type HistogramBucket struct {
	Count *string  `json:"count"`
	Max   *float64 `json:"max"`
	Min   *float64 `json:"min"`
}
