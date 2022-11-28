package shared

import (
	"time"
)

// RealtimeEndpointInfo
//
//	Describes the real-time endpoint information for an <code>MLModel</code>.
type RealtimeEndpointInfo struct {
	CreatedAt             *time.Time                  `json:"CreatedAt,omitempty"`
	EndpointStatus        *RealtimeEndpointStatusEnum `json:"EndpointStatus,omitempty"`
	EndpointURL           *string                     `json:"EndpointUrl,omitempty"`
	PeakRequestsPerSecond *int64                      `json:"PeakRequestsPerSecond,omitempty"`
}
