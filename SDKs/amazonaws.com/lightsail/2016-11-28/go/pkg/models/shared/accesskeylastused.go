package shared

import (
	"time"
)

type AccessKeyLastUsed struct {
	LastUsedDate *time.Time `json:"lastUsedDate,omitempty"`
	Region       *string    `json:"region,omitempty"`
	ServiceName  *string    `json:"serviceName,omitempty"`
}
