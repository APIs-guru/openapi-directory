package shared

import (
	"time"
)

type CreateWorkerConfigurationResponse struct {
	CreationTime           *time.Time                          `json:"creationTime"`
	LatestRevision         *WorkerConfigurationRevisionSummary `json:"latestRevision"`
	Name                   *string                             `json:"name"`
	WorkerConfigurationArn *string                             `json:"workerConfigurationArn"`
}
