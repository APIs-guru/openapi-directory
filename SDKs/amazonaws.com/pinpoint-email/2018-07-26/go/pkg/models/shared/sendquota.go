package shared

type SendQuota struct {
	Max24HourSend   *float64 `json:"Max24HourSend,omitempty"`
	MaxSendRate     *float64 `json:"MaxSendRate,omitempty"`
	SentLast24Hours *float64 `json:"SentLast24Hours,omitempty"`
}
