package shared

// Metric
// The quantitative measurements of a report. For example, the metric `eventCount` is the total number of events. Requests are allowed up to 10 metrics.
type Metric struct {
	Expression *string `json:"expression,omitempty"`
	Invisible  *bool   `json:"invisible,omitempty"`
	Name       *string `json:"name,omitempty"`
}
