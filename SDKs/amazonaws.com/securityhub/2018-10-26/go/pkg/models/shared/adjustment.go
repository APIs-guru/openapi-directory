package shared

type Adjustment struct {
	Metric *string `json:"Metric,omitempty"`
	Reason *string `json:"Reason,omitempty"`
}
