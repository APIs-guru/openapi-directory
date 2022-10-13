package shared

type Session struct {
	Duration       *int64  `json:"duration"`
	ID             *string `json:"id"`
	StartTimestamp *string `json:"startTimestamp"`
	StopTimestamp  *string `json:"stopTimestamp"`
}
