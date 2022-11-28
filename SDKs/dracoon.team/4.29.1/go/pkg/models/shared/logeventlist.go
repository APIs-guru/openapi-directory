package shared

// LogEventList
// List of log events
type LogEventList struct {
	Items []LogEvent `json:"items"`
	Range Range      `json:"range"`
}
