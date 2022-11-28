package shared

// OutputLogEvent
// Represents a log event.
type OutputLogEvent struct {
	IngestionTime *int64  `json:"ingestionTime,omitempty"`
	Message       *string `json:"message,omitempty"`
	Timestamp     *int64  `json:"timestamp,omitempty"`
}
