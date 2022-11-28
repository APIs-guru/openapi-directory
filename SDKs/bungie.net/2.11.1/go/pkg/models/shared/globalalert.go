package shared

import (
	"time"
)

type GlobalAlert struct {
	AlertHTML      *string
	AlertKey       *string
	AlertLevel     *int32
	AlertLink      *string
	AlertTimestamp *time.Time
	AlertType      *int32
	StreamInfo     *StreamInfo
}
