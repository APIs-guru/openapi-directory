package shared

// MetricValue
// A metric value, with an expected value and a variance; represents a count that may be either exact or estimated (for example, when sampled).
type MetricValue struct {
	Value    *string `json:"value,omitempty"`
	Variance *string `json:"variance,omitempty"`
}
