package shared

import (
	"time"
)

// AutomatedDiscoveryInformation
// Describes automated discovery.
type AutomatedDiscoveryInformation struct {
	LastRunTime *time.Time `json:"LastRunTime,omitempty"`
}
