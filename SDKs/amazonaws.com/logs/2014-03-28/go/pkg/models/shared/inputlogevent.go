package shared

type InputLogEvent struct {
	Message   string `json:"message"`
	Timestamp int64  `json:"timestamp"`
}
