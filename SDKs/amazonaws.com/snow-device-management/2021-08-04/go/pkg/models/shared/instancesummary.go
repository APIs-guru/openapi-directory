package shared

import (
	"time"
)

type InstanceSummary struct {
	Instance      *Instance  `json:"instance,omitempty"`
	LastUpdatedAt *time.Time `json:"lastUpdatedAt,omitempty"`
}
