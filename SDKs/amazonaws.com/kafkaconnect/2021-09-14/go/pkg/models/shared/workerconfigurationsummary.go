package shared

import (
	"time"
)

// WorkerConfigurationSummary
// The summary of a worker configuration.
type WorkerConfigurationSummary struct {
	CreationTime           *time.Time                          `json:"creationTime,omitempty"`
	Description            *string                             `json:"description,omitempty"`
	LatestRevision         *WorkerConfigurationRevisionSummary `json:"latestRevision,omitempty"`
	Name                   *string                             `json:"name,omitempty"`
	WorkerConfigurationArn *string                             `json:"workerConfigurationArn,omitempty"`
}
