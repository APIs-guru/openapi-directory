package shared

// InputLogEvent
// Represents a log event, which is a record of activity that was recorded by the application or resource being monitored.
type InputLogEvent struct {
	Message   string `json:"message"`
	Timestamp int64  `json:"timestamp"`
}
