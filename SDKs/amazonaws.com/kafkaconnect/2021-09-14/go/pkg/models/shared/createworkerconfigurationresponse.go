package shared

import (
	"time"
)

type CreateWorkerConfigurationResponse struct {
	CreationTime           *time.Time                          `json:"creationTime,omitempty"`
	LatestRevision         *WorkerConfigurationRevisionSummary `json:"latestRevision,omitempty"`
	Name                   *string                             `json:"name,omitempty"`
	WorkerConfigurationArn *string                             `json:"workerConfigurationArn,omitempty"`
}
