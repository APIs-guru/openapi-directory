package shared

type FilteredLogEvent struct {
	EventID       *string `json:"eventId"`
	IngestionTime *int64  `json:"ingestionTime"`
	LogStreamName *string `json:"logStreamName"`
	Message       *string `json:"message"`
	Timestamp     *int64  `json:"timestamp"`
}
