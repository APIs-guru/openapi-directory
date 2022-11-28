package shared

// JobLog
// Job log.
type JobLog struct {
	Event       *JobLogEventEnum `json:"event,omitempty"`
	EventData   *JobLogEventData `json:"eventData,omitempty"`
	LogDateTime *string          `json:"logDateTime,omitempty"`
}
