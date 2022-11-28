package shared

// SendQuota
// An object that contains information about the per-day and per-second sending limits for your Amazon SES account in the current AWS Region.
type SendQuota struct {
	Max24HourSend   *float64 `json:"Max24HourSend,omitempty"`
	MaxSendRate     *float64 `json:"MaxSendRate,omitempty"`
	SentLast24Hours *float64 `json:"SentLast24Hours,omitempty"`
}
