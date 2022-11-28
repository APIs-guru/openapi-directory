package shared

// TimeSeriesFeedback
// Details about feedback submitted for an anomalous metric.
type TimeSeriesFeedback struct {
	IsAnomaly    *bool   `json:"IsAnomaly,omitempty"`
	TimeSeriesID *string `json:"TimeSeriesId,omitempty"`
}
