package shared

type PredictedPoints struct {
	PredictedPoints *float64 `json:"predictedPoints,omitempty"`
	YardLine        *int64   `json:"yardLine,omitempty"`
}
