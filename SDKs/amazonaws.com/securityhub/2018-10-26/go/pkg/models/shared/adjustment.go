package shared

// Adjustment
// An adjustment to the CVSS metric.
type Adjustment struct {
	Metric *string `json:"Metric,omitempty"`
	Reason *string `json:"Reason,omitempty"`
}
