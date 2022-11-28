package shared

// LogGroupField
// The fields contained in log events found by a <code>GetLogGroupFields</code> operation, along with the percentage of queried log events in which each field appears.
type LogGroupField struct {
	Name    *string `json:"name,omitempty"`
	Percent *int64  `json:"percent,omitempty"`
}
