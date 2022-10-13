package shared

import (
	"time"
)

type AutomatedDiscoveryInformation struct {
	LastRunTime *time.Time `json:"LastRunTime"`
}
