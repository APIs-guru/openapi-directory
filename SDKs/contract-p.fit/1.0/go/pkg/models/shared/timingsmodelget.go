package shared

import (
	"time"
)

type TimingsModelGet struct {
	DoneTime         *time.Time `json:"done_time"`
	FeedbackTime     *time.Time `json:"feedback_time"`
	ProcessingPeriod *float64   `json:"processing_period"`
	ReceiveTime      *time.Time `json:"receive_time"`
	StartTime        *time.Time `json:"start_time"`
}
