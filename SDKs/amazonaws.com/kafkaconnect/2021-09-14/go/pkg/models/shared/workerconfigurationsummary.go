package shared

import (
	"time"
)

type WorkerConfigurationSummary struct {
	CreationTime           *time.Time                          `json:"creationTime"`
	Description            *string                             `json:"description"`
	LatestRevision         *WorkerConfigurationRevisionSummary `json:"latestRevision"`
	Name                   *string                             `json:"name"`
	WorkerConfigurationArn *string                             `json:"workerConfigurationArn"`
}
