package shared

import (
	"time"
)

// InstanceSummary
// The details about the instance.
type InstanceSummary struct {
	Instance      *Instance  `json:"instance,omitempty"`
	LastUpdatedAt *time.Time `json:"lastUpdatedAt,omitempty"`
}
