package shared

type JobLog struct {
	Event       *JobLogEventEnum `json:"event,omitempty"`
	EventData   *JobLogEventData `json:"eventData,omitempty"`
	LogDateTime *string          `json:"logDateTime,omitempty"`
}
