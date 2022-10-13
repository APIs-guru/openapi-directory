package shared

type JobLog struct {
	Event       *JobLogEventEnum `json:"event"`
	EventData   *JobLogEventData `json:"eventData"`
	LogDateTime *string          `json:"logDateTime"`
}
