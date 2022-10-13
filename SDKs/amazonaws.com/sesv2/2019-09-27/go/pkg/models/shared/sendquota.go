package shared

type SendQuota struct {
	Max24HourSend   *float64 `json:"Max24HourSend"`
	MaxSendRate     *float64 `json:"MaxSendRate"`
	SentLast24Hours *float64 `json:"SentLast24Hours"`
}
