package shared

import (
	"time"
)

type AccessKeyLastUsed struct {
	LastUsedDate *time.Time `json:"lastUsedDate"`
	Region       *string    `json:"region"`
	ServiceName  *string    `json:"serviceName"`
}
