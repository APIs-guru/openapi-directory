package shared

import (
	"time"
)

type InstanceSummary struct {
	Instance      *Instance  `json:"instance"`
	LastUpdatedAt *time.Time `json:"lastUpdatedAt"`
}
