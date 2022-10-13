package shared

type OutputLogEvent struct {
	IngestionTime *int64  `json:"ingestionTime"`
	Message       *string `json:"message"`
	Timestamp     *int64  `json:"timestamp"`
}
