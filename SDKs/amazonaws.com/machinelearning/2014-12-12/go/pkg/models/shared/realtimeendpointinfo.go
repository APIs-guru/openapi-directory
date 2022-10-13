package shared

import (
	"time"
)

type RealtimeEndpointInfo struct {
	CreatedAt             *time.Time                  `json:"CreatedAt"`
	EndpointStatus        *RealtimeEndpointStatusEnum `json:"EndpointStatus"`
	EndpointURL           *string                     `json:"EndpointUrl"`
	PeakRequestsPerSecond *int64                      `json:"PeakRequestsPerSecond"`
}
