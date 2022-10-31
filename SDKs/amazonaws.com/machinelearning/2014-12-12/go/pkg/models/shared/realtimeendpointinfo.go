package shared

import (
"time")

type RealtimeEndpointInfo struct {
    CreatedAt *time.Time `json:"CreatedAt,omitempty"`
    EndpointStatus *RealtimeEndpointStatusEnum `json:"EndpointStatus,omitempty"`
    EndpointURL *string `json:"EndpointUrl,omitempty"`
    PeakRequestsPerSecond *int64 `json:"PeakRequestsPerSecond,omitempty"`
    
}

