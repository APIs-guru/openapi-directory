package shared

type Session struct {
	Duration       *int64  `json:"Duration,omitempty"`
	ID             string  `json:"Id"`
	StartTimestamp string  `json:"StartTimestamp"`
	StopTimestamp  *string `json:"StopTimestamp,omitempty"`
}
